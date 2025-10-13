import Link from 'next/link'
import { HomeIcon, PlusIcon } from 'lucide-react'
import UserEmail from './UserEmail'
import { Suspense } from 'react'
import NavLink from './NavLink'
import { initI18n } from '@/i18n/server'
import { initFunction } from '@/i18n/initFunction'

export default async function Navigation() {
  const lang = await initFunction()
  const { t } = await initI18n(lang)
  return (
    <aside className="fixed inset-y-0 left-0 w-16 md:w-64 bg-gray-50 dark:bg-[#1A1A1A] border-r border-gray-200 dark:border-dark-border-subtle flex flex-col py-4 px-2 md:px-4">
      <div className="flex items-center justify-center md:justify-start mb-8 px-2">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          <span className="hidden md:inline">Issue Tracker</span>
          <span className="md:hidden">M</span>
        </Link>
      </div>

      <nav className="flex-1 flex flex-col space-y-1">
        <NavLink
          href="/dashboard"
          icon={<HomeIcon size={20} />}
          label={t('Dashboard')}
        />
        <NavLink
          href="/issues/new"
          icon={<PlusIcon size={20} />}
          label={t('New Issue')}
        />
      </nav>

      <div className="pt-4 border-t border-gray-200 dark:border-dark-border-subtle">
        <Suspense fallback={<div>{t('Loading...')}</div>}>
          <UserEmail />
        </Suspense>
      </div>
    </aside>
  )
}
