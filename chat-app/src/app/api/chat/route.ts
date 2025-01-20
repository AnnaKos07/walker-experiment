import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config(); // Загружаем переменные из .env

// Создаем экземпляр OpenAI и передаем API ключ
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || messages.length === 0) {
      return new Response('No messages provided', { status: 400 });
    }

    // Отправляем запрос к OpenAI с использованием chat API
    const result = await openai.chat.completions.create({
      model: 'gpt-4', // Выбираем модель
      messages,
    });

    const responseMessage = result.choices[0]?.message?.content || 'No response';

    return new Response(responseMessage, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error during processing:', error);
    return new Response('An error occurred: ' + error, { status: 500 });
  }
}
