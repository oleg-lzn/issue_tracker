'use client'

import { formatRelativeTime } from '@/lib/utils'
import { useState, useEffect } from 'react'

export default function TimeCreatedAt({
  dateTime,
}: {
  dateTime: string | Date
}) {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    if (!dateTime) return
    setTime(formatRelativeTime(new Date(dateTime)))
  }, [dateTime])

  return <span>{time}</span>
}
