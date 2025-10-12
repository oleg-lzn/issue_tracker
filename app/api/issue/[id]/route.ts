// app/api/issue/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/db'
import { issues } from '@/db/schema'
import { eq } from 'drizzle-orm'

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = await params
    const deleted = await db.delete(issues).where(eq(issues.id, id)).returning()

    if (!deleted.length) {
      return NextResponse.json(
        { success: false, message: 'Issue not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Issue deleted successfully',
        data: deleted[0],
      },
      { status: 200 }
    )
  } catch (e) {
    console.error(e)
    return NextResponse.json(
      { success: false, message: 'Error deleting issue' },
      { status: 500 }
    )
  }
}
