import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { input } = await request.json()
  
  // Here you would typically call your AI model or external API
  // For now, we'll just echo the input
  const result = `AI response to: ${input}`

  return NextResponse.json({ result })
}
