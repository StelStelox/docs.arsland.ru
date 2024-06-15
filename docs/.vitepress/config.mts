import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ru-RU',
  title: "Arsland",
  description: "",
  themeConfig: {
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
          { text: 'Правила', link: '/rule' }
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
