import i18next from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { getOptions } from './settings'

type Language = 'en' | 'ru' | 'he'

export async function initI18n(lng: string, ns?: string) {
  const i18n = i18next.createInstance()
  await i18n
    .use(
      resourcesToBackend((language: Language, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`, {
          assert: { type: 'json' },
        }).then((m) => m.default)
      )
    )
    .init(getOptions(lng, ns))
  return i18n
}
