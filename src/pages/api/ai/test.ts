import type { APIRoute } from 'astro';

// Disable prerendering for this API route
export const prerender = false;

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({
    success: true,
    message: 'AI API endpoints are working',
    timestamp: new Date().toISOString(),
    environment: {
      hasOpenAI: !!import.meta.env.OPENAI_API_KEY,
      hasAnthropic: !!import.meta.env.ANTHROPIC_API_KEY
    }
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
