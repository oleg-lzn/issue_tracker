import { cookies } from 'next/headers'

export async function initFunction() {
  const cookieStore = await cookies()
  const lang = cookieStore.get('lang')?.value || 'en'
  return lang
}
