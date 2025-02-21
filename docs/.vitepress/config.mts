import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ru-RU',
  title: "Arsland Docs",
  lastUpdated: true,
  description: "Документация проекта Arsland",
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/faviction/logo.ico' }],
    ["meta", { name: "theme-color", content: "#92e03f" }],
  ],
  locales: {
    root: {
      label: "Русский",
      lang: "ru",
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
        nav: [
          { text: 'Главная', link: '/' },
          { text: 'Личный кабинет', link: 'https://arsland-minecraft.ru'}
        ],
        footer: {
          message: 'Опубликовано под лицензией MIT.',
          copyright: '© 2025 – настоящее время, StelStelox'
        },
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
      }
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'WebSite', link: 'https://arsland-minecraft.ru'}
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2025-StelStelox'
        },
        sidebar: [
          {
            items: [
              { text: 'Confidentiality', link: '/en/basic/confidentiality' }
            ]
          },
          {
            text: 'Minecraft',
            items: [
              { text: 'Minecraft rules', link: '/en/basic/rule_minecraft' },
              { text: 'Privates', link: '/en/basic/private_minecraft'}
            ]
          },
          {
            text: 'Discord',
            items: [
              { text: 'Discord rules', link: '/en/basic/rule_discord'}
            ]
          },
          {
            text: 'Telegram',
            items: [
              { text: 'Telegram rule', link: '/en/basic/rule_telegram'}
            ]
          }
        ],
      }
    }
  },
  themeConfig: {
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
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
        }
      }
    },
    logo: '/faviction/logo.ico',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Личный кабинет', link: 'https://arsland-minecraft.ru'}
    ],
    socialLinks: [
      { icon: 'discord', link: 'https://discord.arsland.ru'},
      { icon: 'telegram', link: 'https://telegram.arsland.ru'},
    ],
  }
})