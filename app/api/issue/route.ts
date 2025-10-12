import { NextResponse, NextRequest } from 'next/server'
import { db } from '@/db'
import { issues, IssueSchema } from '@/db/schema'
import { getCurrentUser } from '@/lib/dal'
import { eq } from 'drizzle-orm'

export const GET = async (req: NextRequest) => {
  try {
    const issues = await db.query.issues.findMany({})
    return NextResponse.json({ data: { issues }, status: 200 })
  } catch (e) {
    console.error(e)
    return NextResponse.json({
      success: false,
      message: 'Error fetching issues',
      status: 500,
      error: 'Nah',
    })
  }
}

export const POST = async (req: NextRequest) => {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return {
        success: false,
        message: 'Error finding a user',
        errors: ['Error finding a user'],
      }
    }
    const data = await req.json()

    const validationResult = IssueSchema.safeParse(data)
    if (!validationResult.success) {
      return {
        success: false,
        message: 'Validation Failed',
        errors: validationResult.error.flatten().fieldErrors,
      }
    }

    const validatedData = validationResult.data
    const [newIssue] = await db
      .insert(issues)
      .values({
        title: validatedData.title,
        description: validatedData.description,
        status: validatedData.status,
        priority: validatedData.priority,
        userId: user?.id,
      })
      .returning()
    return NextResponse.json({
      data: newIssue,
      status: 201,
      message: 'New issue created successfully',
    })
  } catch (e) {
    console.error(e)
    return NextResponse.json({
      success: false,
      message: 'Error posting an issue',
      status: 500,
      error: 'Nah',
    })
  }
}
