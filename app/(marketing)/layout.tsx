import Link from 'next/link'
import { Timestamp } from '../components/Timestamp'
import Button from '../components/ui/Button'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { initI18n } from '@/i18n/server'
import { initFunction } from '@/i18n/initFunction'

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const lang = await initFunction()
  const { t } = await initI18n(lang)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-gray-200 dark:border-dark-border-subtle bg-white dark:bg-dark-base">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold">
              {t('Issue Tracker')}
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/features"
                className="text-sm font-medium hover:text-purple-600"
              >
                {t('Features')}
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium hover:text-purple-600"
              >
                {t('Pricing')}
              </Link>
              <Link
                href="/faq"
                className="text-sm font-medium hover:text-purple-600"
              >
                {t('FAQ')}
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-4">
              <Link href="/signin">
                <Button variant="outline">{t('Sign In')}</Button>
              </Link>
              <Link href="/signup">
                <Button>{t('Sign up')}</Button>
              </Link>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-gray-200 dark:border-dark-border-subtle bg-white dark:bg-dark-base">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                {t('Issue Tracker')}
              </h3>
              <p className="text-sm text-gray-600">
                {t('A modern project management tool built with Next.js.')}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">{t('Product')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/features"
                    className="text-sm text-gray-600 hover:text-purple-600"
                  >
                    {t('Features')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-sm text-gray-600 hover:text-purple-600"
                  >
                    {t('Pricing')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-sm text-gray-600 hover:text-purple-600"
                  >
                    {t('FAQ')}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">{t('Resources')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/docs"
                    className="text-sm text-gray-600 hover:text-purple-600"
                  >
                    {t('Documentation')}
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/oleg-lzn/issue_tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-purple-600"
                  >
                    {t('GitHub')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">{t('Legal')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-gray-600 hover:text-purple-600"
                  >
                    {t('Terms of Service')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm text-gray-600">
              &copy; <Timestamp /> Issue Tracker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
