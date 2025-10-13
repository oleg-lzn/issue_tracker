export const languages = ['en', 'ru'] as const
export const fallbackLng = 'en'
export const defaultNS = 'common'

export const getOptions = (lng = fallbackLng, ns = defaultNS) => ({
  supportedLngs: languages,
  fallbackLng,
  lng,
  ns,
  defaultNS,
})
