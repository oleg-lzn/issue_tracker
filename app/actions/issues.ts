'use server'

import { db } from '@/db'
import { issues } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { getCurrentUser } from '@/lib/dal'
import { z } from 'zod'
import { mockDelay } from '@/lib/utils'
import { revalidateTag } from 'next/cache'

// Define Zod schema for issue validation
const IssueSchema = z.object({
  title: z
    .string()
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must be less than 100 characters'),

  description: z.string().optional().nullable(),

  status: z.enum(['backlog', 'todo', 'in_progress', 'done'], {
    errorMap: () => ({ message: 'Please select a valid status' }),
  }),

  priority: z.enum(['low', 'medium', 'high'], {
    errorMap: () => ({ message: 'Please select a valid priority' }),
  }),
  userId: z.string().min(1, 'User ID is required'),
})

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

    revalidateTag('issues')

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
    await mockDelay(500)
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

    // if (validatedData.title !== undefined)
    //   updateData.title = validatedData.title
    // if (validatedData.description !== undefined)
    //   updateData.description = validatedData.description
    // if (validatedData.status !== undefined)
    //   updateData.status = validatedData.status
    // if (validatedData.priority !== undefined)
    //   updateData.priority = validatedData.priority

    // update an issue
    await db.udpate(issues).set(updateData).where(eq(issues.id, id))

    return {
      success: true,
      message: 'Issue updated successfully',
    }
  } catch (e) {
    console.error(e)
  }
}

export const deleteIssue = async (id: number) => {
  try {
    await mockDelay(500)
    const user = await getCurrentUser()
    if (!user) {
      throw new Error('Unauthorized')
    }

    await db.delete(issues).where(eq(issues.id, id))

    return {
      success: true,
      message: 'Issue deleted successfully',
    }
  } catch (e) {
    console.error(e)
  }
}
