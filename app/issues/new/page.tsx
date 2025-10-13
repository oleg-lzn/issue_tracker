import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
import NewIssue from '@/app/components/NewIssue'
import { initI18n } from '@/i18n/server'
import { initFunction } from '@/i18n/initFunction'

export default async function NewIssuePage() {
  const lang = await initFunction()
  const { t } = await initI18n(lang)

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8">
      <Link
        href="/dashboard"
        className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 mb-6"
      >
        <ArrowLeftIcon size={16} className="mr-1" />
        {t('Back to Dashboard')}
      </Link>

      <h1 className="text-2xl font-bold mb-6">{t('Create New Issue')}</h1>

      <div className="bg-white dark:bg-dark-elevated border border-gray-200 dark:border-dark-border-default rounded-lg shadow-sm p-6">
        <Suspense fallback={<div>{t('Loading...')}</div>}>
          <NewIssue />
        </Suspense>
      </div>
    </div>
  )
}
