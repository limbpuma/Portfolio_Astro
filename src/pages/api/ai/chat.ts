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

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse request body with error handling
    let requestData;
    try {
      const contentType = request.headers.get('content-type') || '';
      
      if (!contentType.includes('application/json')) {
        return new Response(JSON.stringify({
          error: 'Invalid content type',
          message: 'Content-Type must be application/json'
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      requestData = await request.json();
    } catch (parseError) {
      return new Response(JSON.stringify({
        error: 'Invalid request format',
        message: 'Request body must be valid JSON'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { message, analysisContext, model = 'openai' } = requestData;

    // Validation
    if (!message || typeof message !== 'string') {
      return new Response(JSON.stringify({
        error: 'Invalid input',
        message: 'Message is required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    let response;
    let result;

    if (model === 'claude') {
      const prompt = `You are an AI assistant helping to answer questions about a document analysis. 

${analysisContext ? `Here is the analysis context: ${JSON.stringify(analysisContext, null, 2)}` : ''}

User question: ${message}

Please provide a helpful, detailed answer based on the analysis context. If you don't have specific information, provide general guidance about document analysis.`;

      response = await anthropic.messages.create({
        model: 'claude-3-haiku-20240307',
        max_tokens: 1000,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ]
      });

      result = {
        model: 'Claude 3 Haiku',
        response: response.content[0].type === 'text' ? response.content[0].text : 'Unable to generate response',
        provider: 'Anthropic',
        tokensUsed: response.usage.input_tokens + response.usage.output_tokens
      };

    } else {
      const systemMessage = `You are an AI assistant specialized in document analysis. You help users understand document analysis results and answer questions about documents.

${analysisContext ? `Current analysis context: ${JSON.stringify(analysisContext, null, 2)}` : ''}

Provide clear, helpful answers based on the analysis context when available. If specific information isn't available, provide general guidance about document analysis.`;

      response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: systemMessage
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 800,
        temperature: 0.7,
      });

      result = {
        model: 'GPT-3.5 Turbo',
        response: response.choices[0].message.content || 'Unable to generate response',
        provider: 'OpenAI',
        tokensUsed: response.usage?.total_tokens || 0
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
    console.error('Chat error:', error);
    
    const errorResponse = {
      error: 'Chat failed',
      message: error.message || 'Unable to process your question',
      fallback: 'Please try rephrasing your question or try again later'
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
