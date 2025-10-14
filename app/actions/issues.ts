'use server'

import { db } from '@/db'
import { issues, IssueSchema } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { getCurrentUser } from '@/lib/dal'
import { z } from 'zod'

export type IssueData = z.infer<typeof IssueSchema>

export type ActionResponse = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
  error?: string
}

export const createIssue = async (data: IssueData) => {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return {
        success: false,
        message: 'Error finding a user',
        errors: ['Error finding a user'],
      }
    }

    const validationResult = IssueSchema.safeParse(data)
    if (!validationResult.success) {
      return {
        success: false,
        message: 'Validation Failed',
        errors: validationResult.error.flatten().fieldErrors,
      }
    }

    const validatedData = validationResult.data
    await db.insert(issues).values({
      title: validatedData.title,
      description: validatedData.description,
      status: validatedData.status,
      priority: validatedData.priority,
      userId: validatedData.userId,
    })

    return {
      success: true,
      message: 'Issue created',
    }
  } catch (e) {
    console.log(e)
    return {
      success: false,
      message: 'An error occured while creating the issue',
      errors: ['Failed to creat an issue'],
    }
  }
}

export const updateIssue = async (
  id: number,
  data: Partial<IssueData>
): Promise<ActionResponse> => {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return {
        success: false,
        message: 'Error finding a user',
        errors: ['Error finding a user'],
      }
    }

    const UpdateIssueSchema = IssueSchema.partial()
    const validationResult = UpdateIssueSchema.safeParse(data)

    if (!validationResult.success) {
      return {
        success: false,
        message: 'Validation Failed',
        errors: validationResult.error.flatten().fieldErrors,
      }
    }

    const validatedData = validationResult.data
    const updateData = Object.fromEntries(
      Object.entries(validatedData).filter(([_, value]) => value !== undefined)
    )

    // update an issue
    await db.update(issues).set(updateData).where(eq(issues.id, id))

    return {
      success: true,
      message: 'Issue updated successfully',
    }
  } catch (e) {
    console.error(e)
    return {
      success: false,
      message: 'An error occured while updating the issue',
      errors: ['Failed to update an issue'],
    }
  }
}

export const deleteIssue = async (id: number) => {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return {
        success: false,
        message: 'Error finding a user',
        errors: ['Error finding a user'],
      }
    }

    // delete issue
    await db.delete(issues).where(eq(issues.id, id))

    return {
      success: true,
      message: 'Issue deleted successfully',
    }
  } catch (e) {
    console.error(e)
    return {
      success: false,
      message: 'An error occured while deleting the issue',
      errors: ['Failed to delete an issue'],
    }
  }
}
