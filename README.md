# 🛸 Rick and Morty — Episodes

Приложение для просмотра эпизодов сериала Rick and Morty, построенное на React + RTK Query с infinite scroll.

---

## ⚙️ Инструменты

*React v19.2.5
*React-redux v9.2.0
*React-router v7.14.2

Создал проект с нуля командой **npm init** 
Установил зависимости и сонфигурации **eslint**, **tsconfig**, **vite**.
В **linter** добавлены рекомендуемые проверки из библиотек **typescript-eslint**, **eslint-plugin-react**, **eslint-plugin-react-hooks**, а также проверка на неиспользуемые переменные и импорты.

---

## Live версия сайта

![This is a main page.](/assets/mainPage.png)

![This is an episode page.](/assets/episodePage.png)


[Rick And Morty](https://rick-morty-episodes.netlify.app)

---

## 📁 Структура проекта

Название папок и файлов имеют формат lowerCamelCase, компоненты имеют UpperCamelCase (кроме index.tsx)

```
src/
├── app/                      # Глобальная конфигурация всего приложения
│   ├── store/                # Конфигурация Redux сторов
│   │   └── index.ts
│   ├── global.css            # Глобальные стили и CSS-переменные
│   └── main.tsx              # Точка входа
│
├── entity/                   # Здесь хранятся сущности
│   └── episode/              # Сущность episode
│       ├── models/           # Интерфейс
│       │   └── dto.ts
│       └── api/              # Сервис взаимодействия с внешним api, в данном случае redux slice
│           └── index.ts
│
├── pages/                    # Директория со страницами (если страниц было бы больше создалбы директорию под сущность/роут)
│   ├── Episodes.tsx
│   ├── EpisodeById.tsx
│   └── styles.module.css
│
└── shared/                   # Директория с компонентами и глобальными функциями
    ├── models/               # Глобальные типы
    └── ui/                   # Часто используемые UI
        ├── episodesCard/
        │   ├── index.tsx
        │   └── styles.module.css
        ├── error/
        └── loader/
```

---

## ⚙️ Установка и запуск

```bash
# Склонировать репозиторий
git clone https://github.com/drtya/rick-and-morty.git

# Войти в директорию проекта
cd  rick-and-morty

# Установить зависимости
npm install

# Запустить в режиме разработки
npm run dev
```

---
