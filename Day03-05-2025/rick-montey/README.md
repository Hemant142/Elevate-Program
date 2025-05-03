# Rick and Morty Wiki

A dynamic and responsive React app that fetches and displays character data from the Rick and Morty API.

## Features:

- 🔍 Character gallery with image, name, species, and status
- ⏱️ Live-updating footer clock (HH:MM:SS Day Date)
- 🔄 Pagination with exactly 6 characters per page (3×2 grid)
- 🎭 Clickable character cards with detailed view in new tab
- 🎲 Random character button

## 📁 Folder Structure

```
/src
 ├─ components/
 │   ├─ CharacterCard.jsx
 │   ├─ CharacterCard.css
 │   └─  Clock.jsx 
 ├─ pages/
 │   ├─ HomePage.jsx
 │   ├─ HomePage.css
 │   ├─CharacterDetailPage.css
 │   └─ CharacterDetailPage.jsx
 ├─ App.jsx
 ├─ index.css
 ├─ App.css
 └─ main.jsx
```

## 🔗 Deployed Link

Live App: [App Deployed Link](https://rick-montey.vercel.app/)


## 🚀 Getting Started

### Clone the project:
```bash
git clone https://github.com/Hemant142/Elevate-Program/tree/main/Day03-05-2025/rick-montey
cd Day03-05-2025/rick-montey
```
### Install dependencies:
```bash
npm install
```
### Run locally
```bash
npm run dev
```

## 📦 Tech Stack
- React

- Vite

- JavaScript

- CSS

- Rick and Morty REST API

## 🖼️ Home Page Image Mobile
<img width="254" alt="mobile" src="https://github.com/user-attachments/assets/7d1baf07-4bb5-421d-85a3-efc92a861cd5" />


<img width="236" alt="mobileFooter" src="https://github.com/user-attachments/assets/b9782143-7c30-4885-85f4-22acb259a571" />

## 🖼️ Home Page Image Laptop

<img width="791" alt="laptop" src="https://github.com/user-attachments/assets/1f43b48f-04c2-4fff-8fcd-fa616e5b11dd" />

<img width="800" alt="laptopFooter" src="https://github.com/user-attachments/assets/d68c8308-5171-4904-bd7f-40a5f20b7c07" />

## 🧠 Design Notes

* **Pagination**: All characters are fetched once and sliced into pages of 6. This allows full control over UI layout and simplifies pagination logic.

* **Responsive Design**: CSS Grid and media queries maintain a 3×2 layout on desktop, adjusting gracefully on smaller screens.

* **Routing**: Character detail pages open in new tabs using dynamic routes with `react-router-dom`.

* **Clock Component**: Reusable footer clock that updates every second and displays formatted local time and date.


