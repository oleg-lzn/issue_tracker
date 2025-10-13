export const languages = ['en', 'ru', 'he'] as const
export const fallbackLng = 'en'
export const defaultNS = 'common'

export const getOptions = (lng = fallbackLng, ns = defaultNS) => ({
  supportedLngs: languages,
  fallbackLng,
  lng,
  ns,
  defaultNS,
})

export function getDirection(lng: string) {
  const rtlLangs = ['he']
  return rtlLangs.includes(lng) ? 'rtl' : 'ltr'
}
