import { NextResponse } from 'next/server';
import { siteConfig, skills, projects, contact } from '@/data/portfolio';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Prepare a concise context about Vinh
    const context = `
You are an AI assistant for ${siteConfig.name}'s portfolio website.
Your job is to answer questions about his skills, experience, and projects.
Be extremely concise, friendly, and professional. 
Keep your answers brief (1-3 sentences).

Key Info:
- Role: ${siteConfig.role}
- Location: ${siteConfig.location}
- Email: ${siteConfig.email}
- Phone: ${siteConfig.phone}
- Description: ${siteConfig.description}

Skills: ${skills.map((s) => s.name).join(', ')}
Top Projects: ${projects.slice(0, 3).map((p) => p.name).join(', ')}
    `;

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': req.headers.get('referer') || 'https://vinhnguyen-portfolio.vercel.app',
        'X-Title': 'Vinh Portfolio AI',
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-chat', // Use the standard routing for DeepSeek-V3
        messages: [
          { role: 'system', content: context.trim() },
          ...messages
        ],
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('OpenRouter error:', err);
      return NextResponse.json({ error: 'Failed to fetch AI response' }, { status: response.status });
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content?.replace(/OpenRouter|OpenAI|DeepSeek|GPT/gi, "VinhNguyen");
    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
