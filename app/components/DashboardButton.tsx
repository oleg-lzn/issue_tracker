import { getCurrentUser } from '@/lib/dal'
import Button from './ui/Button'
import Link from 'next/link'
import { initI18n } from '@/i18n/server'
import { initFunction } from '@/i18n/initFunction'

const DashboardButton = async () => {
  const user = await getCurrentUser()
  const lang = await initFunction()
  const { t } = await initI18n(lang)
  return (
    <>
      {user ? (
        <Link href="/dashboard">
          <Button>{t('Go to Dashboard')}</Button>
        </Link>
      ) : (
        <div className="flex items-center space-x-4">
          <Link href="/signin">
            <Button variant="outline">{t('Sign in')}</Button>
          </Link>
          <Link href="/signup">
            <Button>{t('Sign up')}</Button>
          </Link>
        </div>
      )}
    </>
  )
}

export default DashboardButton
