import { initI18n } from '@/i18n/server'
import { initFunction } from '@/i18n/initFunction'

export default async function FeaturesPage() {
  const lang = await initFunction()
  const { t } = await initI18n(lang)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-white">{t('Features')}</h1>
        <p className="text-xl text-gray-400">
          {t(
            'Discover how Issue Tracker can help you manage your projects more efficiently.'
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title={t('Issue Tracking')}
          description={t(
            'Create, assign, and track issues with ease. Set priorities, due dates, and statuses to keep your team on track.'
          )}
        />
        <FeatureCard
          title={t('Intuitive UI')}
          description={t(
            'A clean, modern interface that makes project management a breeze. No clutter, just what you need to get work done.'
          )}
        />
        <FeatureCard
          title={t('Collaboration')}
          description={t(
            'Work together seamlessly. Comment on issues, mention team members, and keep everyone in the loop.'
          )}
        />
        <FeatureCard
          title={t('Custom Workflows')}
          description={t(
            "Create workflows that match your team's process. Customize statuses, labels, and more."
          )}
        />
        <FeatureCard
          title={t('Real-time Updates')}
          description={t(
            'See changes as they happen. No need to refresh or wait for updates.'
          )}
        />
        <FeatureCard
          title={t('Powerful Search')}
          description={t(
            'Find anything instantly with our powerful search. Filter by assignee, status, priority, and more.'
          )}
        />
      </div>
    </div>
  )
}

function FeatureCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
