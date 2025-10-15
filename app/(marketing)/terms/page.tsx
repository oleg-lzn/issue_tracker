import { initI18n } from '@/i18n/server'
import { initFunction } from '@/i18n/initFunction'
import { ExternalLink, AlertCircle } from 'lucide-react'

export default async function TermsPage() {
  const lang = await initFunction()
  const { t } = await initI18n(lang)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-white">
            {t('Terms of Service')}
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            {t('Legal terms and conditions for using Issue Tracker service.')}
          </p>
          <a
            href="https://github.com/oleg-lzn/issue_tracker/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <ExternalLink size={20} />
            {t('View Full Terms on GitHub')}
          </a>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-16">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-yellow-500 mt-1" size={20} />
            <div>
              <h3 className="text-lg font-semibold mb-2 text-yellow-400">
                {t('Important Notice')}
              </h3>
              <p className="text-gray-300">
                {t(
                  'This is a summary of our terms. The complete legal document with all details, limitations, and conditions is available on our GitHub repository. By using Issue Tracker, you agree to be bound by the full terms and conditions.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
