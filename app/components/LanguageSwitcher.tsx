'use client'

import { useState, useEffect } from 'react'
import { Globe, ChevronDown } from 'lucide-react'
import Button from './ui/Button'
import { useRouter } from 'next/navigation'

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('en')
  const router = useRouter()

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'he', label: 'עברית', flag: '🇮🇱' },
  ]

  useEffect(() => {
    const cookieLang = document.cookie
      .split('; ')
      .find((r) => r.startsWith('lang='))
      ?.split('=')[1]
    if (cookieLang) setCurrentLang(cookieLang)
  }, [])

  const current = languages.find((l) => l.code === currentLang)

  // Close dropdown when clicking outside
  useEffect(() => {
    const close = () => setIsOpen(false)
    window.addEventListener('click', close)
    return () => window.removeEventListener('click', close)
  }, [])

  // Handle language selection
  const handleSelect = (lang: string) => {
    setCurrentLang(lang)
    document.cookie = `lang=${lang}; path=/; max-age=31536`
    setIsOpen(false)
    router.refresh()
  }

  // Toggle menu
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
