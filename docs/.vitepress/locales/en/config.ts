import sidebar from "./sidebar"

export const en = {
  label: "English",
  lang: "en",
  link: "/en/",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'WebSite', link: 'https://arsland-minecraft.ru' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-StelStelox'
    },
    sidebar: sidebar
  }
}