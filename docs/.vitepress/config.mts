import { defineConfig } from 'vitepress'
import { en } from './locales/en/config'
import { ru } from './locales/ru/config'
import { search } from './locales/search'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ru-RU',
  title: "Arsland Docs",
  lastUpdated: true,
  description: "Документация проекта Arsland",
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ["meta", { name: "theme-color", content: "#545454" }],
  ],
  sitemap: {
    hostname: 'https://docs.arsland.ru'
  },
  rewrites: {
    'ru/:rest*': ':rest*'
  },
  locales: {
    root: ru,
    en: en,
  },
  themeConfig: {
    logo: '/logo.svg',
    search: search,
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'discord', link: 'https://discord.arsland.ru' },
      { icon: 'telegram', link: 'https://telegram.arsland.ru' },
    ],
  }
})