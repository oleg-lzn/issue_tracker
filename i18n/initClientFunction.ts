'use client'

export function getLangFromCookie(): string {
  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith('lang='))
  return match ? match.split('=')[1] : 'en'
}
