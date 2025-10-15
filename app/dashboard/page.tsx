import { getIssues } from '@/lib/dal'
import Link from 'next/link'
import Button from '../components/ui/Button'
import { PlusIcon } from 'lucide-react'
import Badge from '../components/ui/Badge'
import { Priority, Status } from '@/lib/types'
import { ISSUE_STATUS, ISSUE_PRIORITY } from '@/db/schema'
import TimeCreatedAt from '../components/TimeCreatedAt'
import { initI18n } from '@/i18n/server'
import { initFunction } from '@/i18n/initFunction'

export default async function DashboardPage() {
  const issues = await getIssues()
  const lang = await initFunction()
  const { t } = await initI18n(lang)

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold">{t('Issues')}</h1>
        <Link href="/issues/new" className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto">
            <span className="flex items-center justify-center sm:justify-start">
              <PlusIcon size={18} className="mr-2" />
              {t('New Issue')}
            </span>
          </Button>
        </Link>
      </div>

      {issues.length > 0 ? (
        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-dark-border-default bg-white dark:bg-dark-high shadow-sm">
          {/* Header row - hidden on mobile, visible on larger screens */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-dark-elevated border-b border-gray-200 dark:border-dark-border-default">
            <div className="col-span-5">{t('Title')}</div>
            <div className="col-span-2">{t('Status')}</div>
            <div className="col-span-2">{t('Priority')}</div>
            <div className="col-span-3">{t('Created')}</div>
          </div>

          {/* Issue rows */}
          <div className="divide-y divide-gray-200 dark:divide-dark-border-default">
            {issues.map((issue) => (
              <Link
                key={issue.id}
                href={`/issues/${issue.id}`}
                className="block hover:bg-gray-50 dark:hover:bg-dark-elevated transition-colors"
              >
                {/* Desktop layout */}
                <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 items-center">
                  <div className="col-span-5 font-medium truncate">
                    {issue.title}
                  </div>
                  <div className="col-span-2">
                    <Badge status={issue.status as Status}>
                      {ISSUE_STATUS[issue.status as Status].label}
                    </Badge>
                  </div>
                  <div className="col-span-2">
                    <Badge priority={issue.priority as Priority}>
                      {ISSUE_PRIORITY[issue.priority as Priority].label}
                    </Badge>
                  </div>
                  <div className="col-span-3 text-sm text-gray-500 dark:text-gray-400">
                    <TimeCreatedAt dateTime={issue?.createdAt} />
                  </div>
                </div>

                {/* Mobile layout */}
                <div className="md:hidden p-4 space-y-3">
                  <div className="font-medium text-gray-900 dark:text-white">
                    {issue.title}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge status={issue.status as Status}>
                      {ISSUE_STATUS[issue.status as Status].label}
                    </Badge>
                    <Badge priority={issue.priority as Priority}>
                      {ISSUE_PRIORITY[issue.priority as Priority].label}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <TimeCreatedAt dateTime={issue?.createdAt} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center border border-gray-200 dark:border-dark-border-default rounded-lg bg-white dark:bg-dark-high p-8">
          <h3 className="text-lg font-medium mb-2">{t('No issues found')}</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            {t('Get started by creating your first issue.')}
          </p>
          <Link href="/issues/new">
            <Button>
              <span className="flex items-center">
                <PlusIcon size={18} className="mr-2" />
                {t('Create Issue')}
              </span>
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
