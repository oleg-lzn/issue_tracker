import { initI18n } from '@/i18n/server'
import { initFunction } from '@/i18n/initFunction'

export default async function FAQPage() {
  const lang = await initFunction()
  const { t } = await initI18n(lang)

  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h2 className="text-2xl font-bold mb-8 text-center text-white">
        {t('Frequently Asked Questions')}
      </h2>
      <div className="space-y-6">
        <FAQItem
          question={t('What is Issue Tracker?')}
          answer={t(
            'Issue Tracker is a project management tool. It helps teams organize, track, and manage their projects and issues in a simple and efficient way.'
          )}
        />

        <FAQItem
          question={t('How do I create an account?')}
          answer={t(
            "You can create an account by clicking the 'Sign Up' button in the top navigation bar. You'll need to provide an email address and create a password."
          )}
        />

        <FAQItem
          question={t('Is it free to use?')}
          answer={t(
            "Yes, Issue Tracker is completely free to use as it's an open-source project. You can even download the source code and host it yourself."
          )}
        />

        <FAQItem
          question={t('Can I contribute to the project?')}
          answer={t(
            'Absolutely! Issue Tracker is open-source and contributions are welcome. Check out our GitHub repository to get started.'
          )}
        />

        <FAQItem
          question={t('How do I report bugs or request features?')}
          answer={t(
            'You can report bugs or request features by opening an issue on our GitHub repository. We appreciate your feedback and contributions!'
          )}
        />

        <FAQItem
          question={t('What technologies does Issue Tracker use?')}
          answer={t(
            'Issue Tracker is built with Next.js, TypeScript, Tailwind CSS, and uses a PostgreSQL database. It leverages the latest features of Next.js App Router for optimal performance.'
          )}
        />
      </div>
    </div>
  )
}

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-2 text-white">{question}</h4>
      <p className="text-gray-400 dark:text-gray-300">{answer}</p>
    </div>
  )
}
