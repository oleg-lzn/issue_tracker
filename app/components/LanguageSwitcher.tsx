'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Globe, ChevronDown } from 'lucide-react'
import Button from '../components/ui/Button'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'he', label: 'עברית', flag: '🇮🇱' },
  ]

  const currentLang = pathname.startsWith('/ru')
    ? 'ru'
    : pathname.startsWith('/he')
    ? 'he'
    : 'en'

  const basePath = pathname.replace(/^\/(en|ru|he)/, '') || '/'
  const [isOpen, setIsOpen] = useState(false)
  const current = languages.find((l) => l.code === currentLang)

  // Закрытие dropdown при клике вне
  useEffect(() => {
    const close = () => setIsOpen(false)
    window.addEventListener('click', close)
    return () => window.removeEventListener('click', close)
  }, [])

  const handleSelect = (lang: string) => {
    setIsOpen(false)
    router.push(`/${lang}${basePath}`)
  }

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="md"
        onClick={toggleMenu}
        className="flex items-center gap-2"
      >
        <Globe size={16} />
        <span className="font-medium">{current?.code.toUpperCase()}</span>
        <ChevronDown
          size={14}
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </Button>

      {isOpen && (
        <ul className="absolute left-0 mt-2 w-26 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => handleSelect(lang.code)}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  currentLang === lang.code
                    ? 'font-semibold text-purple-600'
                    : 'text-gray-700 dark:text-gray-200'
                }`}
              >
                <span>{lang.flag}</span>
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
