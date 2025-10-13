import Link from 'next/link'
import { CheckCircle2, XCircle } from 'lucide-react'
import { initI18n } from '@/i18n/server'
import { initFunction } from '@/i18n/initFunction'

export default async function PricingPage() {
  const lang = await initFunction()
  const { t } = await initI18n(lang)

  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-white">
          {t('Simple, Transparent Pricing')}
        </h1>
        <p className="text-xl text-gray-400 dark:text-gray-300">
          {t('Choose the plan that is right for you and your team')}
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Free Plan */}
        <PricingCard
          title="Free"
          price="$0"
          description={t(
            'Perfect for individuals and small teams getting started.'
          )}
          features={[
            { name: t('Up to 3 team members'), included: true },
            { name: t('Unlimited issues'), included: true },
            { name: t('Basic issue tracking'), included: true },
            { name: t('Email support'), included: true },
            { name: t('API access'), included: false },
            { name: t('Custom fields'), included: false },
            { name: t('Advanced integrations'), included: false },
          ]}
          buttonText={t('Sign Up Free')}
          buttonLink="/auth/signup"
        />

        {/* Pro Plan */}
        <PricingCard
          title="Pro"
          price="$10"
          period={t('per user / month')}
          description={t(
            'For growing teams that need more features and flexibility.'
          )}
          features={[
            { name: t('Unlimited team members'), included: true },
            { name: t('Unlimited issues'), included: true },
            { name: t('Advanced issue tracking'), included: true },
            { name: t('Priority support'), included: true },
            { name: t('API access'), included: true },
            { name: t('Custom fields'), included: true },
            { name: t('Advanced integrations'), included: false },
          ]}
          buttonText={t('Coming Soon')}
          buttonLink="#"
          highlighted
          badge="Popular"
        />

        {/* Enterprise Plan */}
        <PricingCard
          title="Enterprise"
          price="Custom"
          description={t(
            'For organizations that need advanced security and support.'
          )}
          features={[
            { name: t('Unlimited team members'), included: true },
            { name: t('Unlimited issues'), included: true },
            { name: t('Advanced issue tracking'), included: true },
            { name: t('Dedicated support'), included: true },
            { name: t('API access'), included: true },
            { name: t('Custom fields'), included: true },
            { name: t('Advanced integrations'), included: true },
          ]}
          buttonText={t('Contact Sales')}
          buttonLink="mailto:sales@linearclone.com"
        />
      </div>

      <div className="max-w-3xl mx-auto mt-16 text-center bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-white">
          {t('Need a custom solution?')}
        </h2>
        <p className="text-lg text-gray-400 dark:text-gray-300 mb-8">
          {t('Contact our sales team to discuss your specific requirements.')}
        </p>
        <a
          href="mailto:sales@linearclone.com"
          className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
        >
          {t('Contact Sales')}
        </a>
      </div>
    </div>
  )
}

interface PricingFeature {
  name: string
  included: boolean
}

interface PricingCardProps {
  title: string
  price: string
  period?: string
  description: string
  features: PricingFeature[]
  buttonText: string
  buttonLink: string
  highlighted?: boolean
  badge?: string
}

function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonLink,
  highlighted = false,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-lg p-6 ${
        highlighted
          ? 'bg-blue-900 border-2 border-blue-700 shadow-md relative'
          : 'bg-gray-800 border border-gray-700 shadow-sm'
      }`}
    >
      {badge && (
        <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          {badge}
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-white">{price}</span>
        {price !== 'Custom' && (
          <span className="text-gray-400 dark:text-gray-300"> {period}</span>
        )}
      </div>
      <p className="text-gray-400 dark:text-gray-300 mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.included ? (
              <CheckCircle2 className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" />
            ) : (
              <XCircle className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
            )}
            <span
              className={
                feature.included
                  ? 'text-white'
                  : 'text-gray-500 dark:text-gray-600'
              }
            >
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
      <Link
        href={buttonLink}
        className={`w-full inline-flex h-10 items-center justify-center rounded-md px-8 py-2 text-sm font-medium shadow transition-colors ${
          highlighted
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-800 border border-gray-700 hover:bg-gray-700 text-white'
        }`}
      >
        {buttonText}
      </Link>
    </div>
  )
}
