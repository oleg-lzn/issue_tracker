'use client'

import i18next from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { getOptions } from './settings'

let initialized = false

export function useClientTranslation(lng: string, ns = 'common') {
  if (!initialized) {
    i18next
      .use(initReactI18next)
      .use(
        resourcesToBackend((language, namespace) =>
          import(`./locales/${language}/${namespace}.json`, {
            assert: { type: 'json' },
          }).then((m) => m.default)
        )
      )
      .init(getOptions(lng, ns))
    initialized = true
  }

  return useTranslation(ns)
}
