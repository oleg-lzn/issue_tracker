import { NextRequest, NextResponse } from 'next/server'
import { headers, cookies } from 'next/headers'

export const GET = (req: NextRequest) => {
  /**
   * @swagger
   * /api/hello:
   *   get:
   *     description: Returns a hello world message
   *     responses:
   *       200:
   *         description: Hello World response
   */
  return NextResponse.json({ data: { message: 'Hello, World!' } })
}

export async function POST(request: Request) {
  const data = await request.json()
  // go and create the thing in the db
  console.log('Received data:', data)
  return NextResponse.json(
    {
      message: 'Thing created successfully',
      thing: data,
    },
    { status: 201 }
  )
}
