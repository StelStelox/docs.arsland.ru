import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ru-RU',
  title: "Arsland",
  lastUpdated: true,
  description: "",
  themeConfig: {
    lightModeSwitchTitle: "Переключить на светлую тему",
    darkModeSwitchTitle: "Переключить на тёмную тему",
    sidebarMenuLabel: "Меню",
    returnToTopLabel: "Наверх",
    docFooter: {
      prev: "Предыдущая страница",
      next: "Следующая страница",
    },
    lastUpdated: {
      text: "Последнее обновление",
    },
    outlineTitle: "На этой странице",
    search: {
      provider: 'local'
    },
    logo: 'faviction/logo.ico',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Главня', link: '/' },
      { text: 'Личный кабинет', link: 'https://arsland-minecraft.ru'}
    ],
    sidebar: [
      {
        text: 'Майнкрафт сервер',
        items: [
          { text: 'Правила Minecraft', link: '/rule_minecraft' }
        ]
      },
      {
        text: 'Discord',
        items: [
          { text: 'Правила Discord сервера', link: '/rule_discord'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/StelStelox/Arsland/tree/dev' },
      { icon: 'discord', link: 'https://discord.gg/e3X5AbSfsj' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UC0zwpV-3WpG0vLpMGZaXuzA'}
    ]
  }
})
