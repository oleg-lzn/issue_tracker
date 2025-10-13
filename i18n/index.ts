import i18next from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { getOptions } from './settings'

export async function initI18n(lng: string, ns?: string) {
  const i18n = i18next.createInstance()
  await i18n
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language, namespace) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns))
  return i18n
}
