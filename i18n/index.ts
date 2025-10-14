import i18next, { i18n as I18nInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next'
import { getOptions } from './settings'

// Кэш, чтобы не создавать заново при каждом рендере
const instances = new Map<string, I18nInstance>()

export async function initI18n(lng: string, ns?: string) {
  const key = `${lng}-${ns ?? 'common'}`

  // Если уже инициализирован — вернуть готовый экземпляр
  if (instances.has(key)) return instances.get(key)!

  const instance = i18next.createInstance()

  await instance
    .use(initReactI18next)
    .use(
      resourcesToBackend((language, namespace) =>
        import(`./locales/${language}/${namespace}.json`, {
          assert: { type: 'json' },
        }).then((m) => m.default)
      )
    )
    .init(getOptions(lng, ns))

  instances.set(key, instance)
  return instance
}
