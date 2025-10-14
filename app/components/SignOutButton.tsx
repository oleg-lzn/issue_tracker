'use client'

import { LogOutIcon } from 'lucide-react'
import { useTransition } from 'react'
import { signOut } from '@/app/actions/auth'
import { useClientTranslation } from '@/i18n/client'

export default function SignOutButton({ lang }: { lang: string }) {
  const [isPending, startTransition] = useTransition()
  const { t } = useClientTranslation(lang)

  const handleSignOut = () => {
    startTransition(async () => {
      await signOut()
    })
  }

  return (
    <button
      onClick={handleSignOut}
      disabled={isPending}
      className="flex items-center w-full px-2 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
    >
      <LogOutIcon size={20} className="mr-2" />
      <span>{isPending ? t('Signing out...') : t('Sign Out')}</span>
    </button>
  )
}
