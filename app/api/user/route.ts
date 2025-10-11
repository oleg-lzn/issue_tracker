import { NextRequest, NextResponse } from 'next/server'
import { headers, cookies } from 'next/headers'

export const GET = (req: NextRequest) => {
  return NextResponse.json({ data: { message: 'Hello, World!' } })
}

export const POST = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const data = await req.json()
  const authKey = req.headers.get('authorization')
  return NextResponse.json(data)
}
