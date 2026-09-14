# 🎬 Media Search Application

A responsive media search application built with React.js that allows users to search for and explore different types of media, including photos, videos, and GIFs.

The application provides a simple interface for searching media and allows users to save their favorite results to a personal collection.

# Live Link : https://media-search-application-alpha.vercel.app/

## 🚀 Features

- 🔍 Search for media using keywords
- 🖼️ Search and display photos
- 🎥 Search and display videos
- 🎞️ Search and display GIFs
- ❤️ Save media items to a personal collection
- 🗑️ Remove individual items from the collection
- 🧹 Clear the entire collection
- 💾 Persist collection data using Local Storage
- 🔔 Display toast notifications for user actions
- 🧭 Client-side navigation using React Router
- 📱 Responsive user interface
- 🎨 Dark-themed UI built with Tailwind CSS

## 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript (ES6+)
- React Router DOM
- Redux Toolkit
- React Redux
- Tailwind CSS
- React Toastify

### APIs

The application uses external media APIs to retrieve:

- Photos
- Videos
- GIFs

## 📂 Project Structure

```text
media_search_application/
│
├── public/
│
├── src/
│   ├── api/
│   │   └── API service files
│   │
│   ├── components/
│   │   ├── CollectionsCard.jsx
│   │   ├── NavBar.jsx
│   │   ├── ResultCard.jsx
│   │   ├── ResultGrid.jsx
│   │   ├── SearchBar.jsx
│   │   └── Tabs.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── CollectionPage.jsx
│   │
│   ├── redux/
│   │   ├── features/
│   │   │   └── collectionSlice.js
│   │   └── store.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
