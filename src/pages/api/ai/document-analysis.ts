import type { APIRoute } from 'astro';
import OpenAI from 'openai';
import Anthropic from '@anthropic-ai/sdk';

// Disable prerendering for this API route
export const prerender = false;

// Initialize AI clients
const openai = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY,
});

const anthropic = new Anthropic({
  apiKey: import.meta.env.ANTHROPIC_API_KEY,
});

// Rate limiting storage (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(clientId: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 20; // 20 requests per 15 minutes (more permissive for demo)

  if (!rateLimitStore.has(clientId)) {
    rateLimitStore.set(clientId, { count: 1, resetTime: now + windowMs });
    return true;
  }

  const clientData = rateLimitStore.get(clientId)!;
  
  if (now > clientData.resetTime) {
    rateLimitStore.set(clientId, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (clientData.count >= maxRequests) {
    return false;
  }

  clientData.count++;
  return true;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Simple rate limiting using a global counter (for demo purposes)
    // In production, use proper rate limiting with Redis/database
    const globalKey = 'global';
    if (!checkRateLimit(globalKey)) {
      return new Response(JSON.stringify({
        error: 'Rate limit exceeded',
        message: 'Demo rate limit reached. Please try again later.'
      }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Parse request body with error handling
    let requestData;
    try {
      // For Astro API routes, we need to handle the request differently
      const contentType = request.headers.get('content-type') || '';
      
      if (!contentType.includes('application/json')) {
        return new Response(JSON.stringify({
          error: 'Invalid content type',
          message: 'Content-Type must be application/json',
          received: contentType
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      requestData = await request.json();
    } catch (parseError) {
      console.error('Failed to parse request JSON:', parseError);
      return new Response(JSON.stringify({
        error: 'Invalid request format',
        message: 'Request body must be valid JSON',
        debug: parseError.message
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { text, documentType, model = 'openai' } = requestData;

    // Validation
    if (!text || typeof text !== 'string') {
      return new Response(JSON.stringify({
        error: 'Invalid input',
        message: 'Text content is required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (text.length > 50000) {
      return new Response(JSON.stringify({
        error: 'Content too large',
        message: 'Document must be under 50,000 characters'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    let result;

    if (model === 'claude') {
      // Use Claude for detailed analysis
      const prompt = `Analyze this ${documentType || 'document'} and provide a comprehensive analysis in JSON format with the following structure:

{
  "documentType": "detected type",
  "summary": "brief summary",
  "keyFindings": ["finding1", "finding2", "finding3"],
  "riskLevel": "low|medium|high",
  "compliance": {
    "score": 85,
    "issues": ["issue1", "issue2"]
  },
  "recommendations": ["rec1", "rec2", "rec3"],
  "metadata": {
    "wordCount": 1234,
    "readingTime": "5 minutes",
    "complexity": "medium"
  }
}

Document content:
${text}`;

      const response = await anthropic.messages.create({
        model: 'claude-3-haiku-20240307',
        max_tokens: 2000,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      });

      const analysisText = response.content[0].type === 'text' ? response.content[0].text : '';
      
      // Try to parse AI response as JSON, fallback to plain text
      let parsedAnalysis;
      try {
        parsedAnalysis = JSON.parse(analysisText);
      } catch {
        parsedAnalysis = {
          documentType: 'Unknown',
          summary: analysisText,
          keyFindings: ['Analysis completed with text response'],
          riskLevel: 'medium',
          compliance: { score: 75, issues: [] },
          recommendations: ['Review the full analysis text'],
          metadata: { wordCount: analysisText.length, readingTime: '2 minutes', complexity: 'medium' }
        };
      }
      
      result = {
        model: 'Claude 3 Haiku',
        analysis: parsedAnalysis,
        provider: 'Anthropic',
        tokensUsed: response.usage.input_tokens + response.usage.output_tokens,
        processingTime: new Date().toISOString()
      };

    } else {
      // Use OpenAI for analysis
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are an expert document analyzer. Analyze the provided ${documentType || 'document'} and return a structured JSON response with: documentType, summary, keyFindings (array), riskLevel, compliance (object with score and issues), recommendations (array), and metadata (object with wordCount, readingTime, complexity).`
          },
          {
            role: 'user',
            content: text
          }
        ],
        max_tokens: 1500,
        temperature: 0.2,
      });

      const responseContent = response.choices[0].message.content || '';

      // Try to parse AI response as JSON, fallback to structured text
      let parsedAnalysis;
      try {
        parsedAnalysis = JSON.parse(responseContent);
      } catch {
        parsedAnalysis = {
          documentType: documentType || 'Document',
          summary: responseContent.substring(0, 300) + (responseContent.length > 300 ? '...' : ''),
          keyFindings: responseContent.split('\n').filter(line => line.includes('-')).slice(0, 3),
          riskLevel: 'medium',
          compliance: { score: 80, issues: ['Manual review recommended'] },
          recommendations: ['Review full analysis', 'Consider professional consultation'],
          metadata: { 
            wordCount: text.split(' ').length, 
            readingTime: Math.ceil(text.split(' ').length / 200) + ' minutes',
            complexity: 'medium' 
          }
        };
      }

      result = {
        model: 'GPT-3.5 Turbo',
        analysis: parsedAnalysis,
        provider: 'OpenAI',
        tokensUsed: response.usage?.total_tokens || 0,
        processingTime: new Date().toISOString()
      };
    }

    return new Response(JSON.stringify({
      success: true,
      data: result,
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error: any) {
    console.error('Document analysis error:', error);
    
    // Ensure we always return valid JSON
    const errorResponse = {
      error: 'Analysis failed',
      message: error.message || 'Unknown error occurred',
      fallback: 'Please try again with a different model or smaller document',
      debug: {
        type: error.constructor.name,
        stack: error.stack?.split('\n')[0] || 'No stack trace'
      }
    };
    
    return new Response(JSON.stringify(errorResponse), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

// Handle OPTIONS for CORS
export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
  });
};
