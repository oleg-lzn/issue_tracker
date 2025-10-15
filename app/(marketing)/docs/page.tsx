import { initI18n } from '@/i18n/server'
import { initFunction } from '@/i18n/initFunction'
import { ExternalLink, Shield, Zap, Globe, Code, Database } from 'lucide-react'

export default async function DocsPage() {
  const lang = await initFunction()
  const { t } = await initI18n(lang)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-white">
            {t('Documentation')}
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            {t(
              'Complete guide to Issue Tracker - Modern project management made simple.'
            )}
          </p>
          <a
            href="https://github.com/oleg-lzn/issue_tracker/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <ExternalLink size={20} />
            {t('View Full Documentation on GitHub')}
          </a>
        </div>

        {/* Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <FeatureCard
            icon={<Shield className="text-blue-500" size={24} />}
            title={t('Dual Authentication')}
            description={t(
              'Email/password + Google SSO integration for secure access'
            )}
          />
          <FeatureCard
            icon={<Zap className="text-yellow-500" size={24} />}
            title={t('Issue Management')}
            description={t('Complete CRUD operations with real-time updates')}
          />
          <FeatureCard
            icon={<Globe className="text-green-500" size={24} />}
            title={t('Responsive Design')}
            description={t(
              'Works seamlessly on desktop, tablet, and mobile devices'
            )}
          />
          <FeatureCard
            icon={<Code className="text-purple-500" size={24} />}
            title={t('Type Safety')}
            description={t(
              'Full TypeScript implementation with Zod validation'
            )}
          />
          <FeatureCard
            icon={<Database className="text-red-500" size={24} />}
            title={t('Modern Database')}
            description={t('Drizzle ORM with PostgreSQL and Neon serverless')}
          />
          <FeatureCard
            icon={<Globe className="text-indigo-500" size={24} />}
            title={t('Multi-language')}
            description={t('English, Hebrew, and Russian with RTL support')}
          />
        </div>

        {/* Tech Stack */}
        <div className="bg-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">
            {t('Tech Stack')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-400">
                {t('Frontend')}
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Next.js 15 with App Router</li>
                <li>• React 19 with TypeScript</li>
                <li>• Tailwind CSS for styling</li>
                <li>• Lucide React icons</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-400">
                {t('Backend')}
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Drizzle ORM + PostgreSQL</li>
                <li>• JWT authentication</li>
                <li>• Google OAuth 2.0</li>
                <li>• Server actions & API routes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">
            {t('Key Features')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-white">
                {t('Authentication')}
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Traditional email/password login</li>
                <li>• Google Single Sign-On</li>
                <li>• Secure JWT tokens</li>
                <li>• HTTP-only cookies</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-white">
                {t('Issue Tracking')}
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Create, edit, delete issues</li>
                <li>• Status: Backlog → Todo → In Progress → Done</li>
                <li>• Priority levels: Low, Medium, High</li>
                <li>• Real-time updates</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-white">
                {t('User Experience')}
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Responsive mobile-first design</li>
                <li>• Multi-language interface</li>
                <li>• Toast notifications</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3 text-white">
                {t('Developer Features')}
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Built-in API documentation</li>
                <li>• Type-safe database queries</li>
                <li>• Form validation with Zod</li>
                <li>• Comprehensive error handling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-white">
            {t('Ready to Get Started?')}
          </h2>
          <p className="text-purple-100 mb-6">
            {t(
              'Explore the full documentation, contribute to the project, or deploy your own instance.'
            )}
          </p>
          <a
            href="https://github.com/oleg-lzn/issue_tracker/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <ExternalLink size={20} />
            {t('View on GitHub')}
          </a>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
