import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ru-RU',
  title: "Arsland Docs",
  lastUpdated: true,
  description: "Документация проекта Arsland",
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/faviction/logo.ico' }]],
  themeConfig: {
    lightModeSwitchTitle: "Переключить на светлую тему",
    darkModeSwitchTitle: "Переключить на тёмную тему",
    darkModeSwitchLabel: "Тема",
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
      provider: "local",
      options: {
        detailedView: true,
        translations: {
          button: {
            buttonText: "Поиск",
          },
          modal: {
            displayDetails: "Детальный просмотр",
            resetButtonTitle: "Сбросить поиск",
            noResultsText: "Не найдено",
            footer: {
              selectText: "Выбор",
              navigateText: "Навигация",
              closeText: "Закрыть",
            },
          },
        },
      },
    },
    logo: '/faviction/logo.ico',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Личный кабинет', link: 'https://arsland-minecraft.ru'}
    ],
    sidebar: [
      {
        items: [
          { text: 'Конфиденциальность', link: '/basic/confidentiality' }
        ]
      },
      {
        text: 'Minecraft',
        items: [
          { text: 'Правила Minecraft', link: '/basic/rule_minecraft' },
          { text: 'Приваты', link: '/basic/private_minecraft'}
        ]
      },
      {
        text: 'Discord',
        items: [
          { text: 'Правила Discord', link: '/basic/rule_discord'}
        ]
      },
      {
        text: 'Telegram',
        items: [
          { text: 'Правила Telegram', link: '/basic/rule_telegram'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.arsland-minecraft.ru/'},
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UC0zwpV-3WpG0vLpMGZaXuzA'},
      { icon: 'telegram', link: 'https://t.me/arsland_minecraft'},
  
    ]
  }
})