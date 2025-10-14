import { getCurrentUser } from '@/lib/dal'
import { UserIcon } from 'lucide-react'
import SignOutButton from './SignOutButton'
import { initFunction } from '@/i18n/initFunction'

const UserEmail = async () => {
  const user = await getCurrentUser()
  const lang = await initFunction()

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-start px-2 py-2">
        <UserIcon size={20} className="text-gray-500 mr-2" />
        <span className="hidden md:inline text-sm text-gray-700 dark:text-gray-300 truncate">
          {user?.email}
        </span>
      </div>
      <SignOutButton lang={lang} />
    </div>
  )
}

export default UserEmail
