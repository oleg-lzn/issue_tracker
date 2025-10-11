import { db } from '@/db'
import { getSession } from './auth'
import { eq } from 'drizzle-orm'
import { issues, users } from '@/db/schema'
import { mockDelay } from './utils'
import { unstable_cacheTag as cacheTag } from 'next/cache'
import { cache } from 'react'

export const getCurrentUser = cache(async () => {
  console.log('GCU got called')
  await mockDelay(1000)
  const session = await getSession()

  if (!session) {
    return null
  }

  try {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.id, session.userId))
    return result[0] || null
  } catch (e) {
    console.error(e)
    return null
  }
})

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.query.users.findFirst({
      where: eq(users.email, email),
    })
    return user
  } catch (e) {
    console.log(e)
    return null
  }
}

export const getIssues = async () => {
  'use cache'
  cacheTag('issues')
  try {
    await mockDelay(1000)
    const result = await db.query.issues.findMany({
      with: {
        user: true,
      },
      orderBy: (issues, { desc }) => [desc(issues.createdAt)],
    })
    return result
  } catch (e) {
    console.error(e, 'Error fetching issues')
    throw new Error('Failed to fetch issues')
  }
}

export const getIssue = async (id: number) => {
  try {
    await mockDelay(500)
    const currentUser = await getCurrentUser()
    if (!currentUser) {
      return []
    }
    const result = await db.query.issues.findFirst({
      with: {
        user: true,
      },
      where: eq(issues.id, id),
    })
    return result
  } catch (e) {
    console.error(e, 'Error fetching issues')
    throw new Error('Failed to fetch issues')
  }
}
