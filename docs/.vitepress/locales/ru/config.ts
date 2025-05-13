import { sidebar } from "./sidebar";

export const ru = {
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
      { text: 'Личный кабинет', link: 'https://arsland-minecraft.ru' }
    ],
    footer: {
      message: 'Опубликовано под лицензией MIT.',
      copyright: '© 2025 – настоящее время, StelStelox'
    },
    sidebar: sidebar
  }
};

export const search = {
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
}