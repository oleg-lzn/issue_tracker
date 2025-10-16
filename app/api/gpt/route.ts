import { generateText } from 'ai'
import { NextResponse } from 'next/server'
import { createOpenAI } from '@ai-sdk/openai'

export const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export async function POST(req: Request) {
  console.log(
    'OPENAI_API_KEY:',
    process.env.OPENAI_API_KEY ? '✅ Loaded' : '❌ Missing'
  )
  try {
    const descr = await req.json()
    console.log('Argument passed from the client function', descr)
    const { text } = await generateText({
      model: openai('gpt-4o-mini'),
      system: 'You are a writing assistant improving issue descriptions.',
      prompt: `Make this clearer and more concise:\n${descr}`,
    })

    console.log('text from the AI response function', text)
    return NextResponse.json({ text })
  } catch (e) {
    console.error(e)
    return NextResponse.json(
      { error: 'Failed to call GPT API' },
      { status: 500 }
    )
  }
}
