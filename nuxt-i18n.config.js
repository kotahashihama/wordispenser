import ja from './locales/en'
import en from './locales/ja'
import vi from './locales/vi'

export default {
  locales: [
    {
      code: 'ja',
      iso: 'ja-JP',
      name: '日本語',
      file: 'ja.js'
    },
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en.js'
    },
    {
      code: 'vi',
      iso: 'vi-VN',
      name: 'Tiếng Việt',
      file: 'vi.js'
    }
  ],
  defaultLocale: 'en',
  strategy: 'prefix_and_default',
  detectBrowserLanguage: {
    useCookie: true
  },
  vueI18n: {
    fallbackLocale: 'en',
    messages: {
      'ja': ja,
      'en': en,
      'vi': vi
    }
  }
}