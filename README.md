# Flashcard Quiz App

A simple and responsive flashcard quiz application built with **React, TypeScript, and Tailwind CSS**.

The app allows users to create, edit, delete, and navigate through flashcards while studying. Flashcards are automatically saved in the browser using **localStorage**, so your data remains available when you return to the app.

## Features

* 📚 Display flashcards with questions and answers
* 👀 Show and hide answers
* ⬅️ Navigate to the previous flashcard
* ➡️ Navigate to the next flashcard
* ➕ Add new flashcards
* ✏️ Edit existing flashcards
* 🗑️ Delete flashcards
* 💾 Save flashcards using localStorage
* 📱 Fully responsive design
* 🎨 Clean and simple user interface

## Technologies

* **React**
* **TypeScript**
* **Tailwind CSS**
* **Vite**
* **localStorage**

## Project Structure

```text
flashcard-quiz/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Flashcard.tsx
│   │   ├── CardNavigation.tsx
│   │   ├── CardActions.tsx
│   │   └── FlashcardForm.tsx
│   ├── data/
│   │   └── initialFlashcards.ts
│   ├── types/
│   │   └── flashcard.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project directory

```bash
cd flashcard-quiz
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## How It Works

Each flashcard contains:

* **Question** — displayed on the front of the card.
* **Answer** — displayed when the user clicks **Show Answer**.

Users can move between flashcards using the **Previous** and **Next** buttons.

The **Add Card**, **Edit Card**, and **Delete Card** actions allow users to customize their study cards.

### Data Persistence

Flashcards are stored in the browser's `localStorage`.

This means that added, edited, or deleted flashcards remain available after refreshing or reopening the application in the same browser.

## Responsive Design

The application is designed to work across different screen sizes, including:

* 📱 Mobile devices
* 📱 Tablets
* 💻 Laptops
* 🖥️ Desktop screens

## Future Improvements

Possible future improvements include:

* Search and filter flashcards
* Flashcard categories
* Study progress tracking
* Quiz mode with scoring
* Dark mode
* Import and export flashcards
* Random flashcard mode

## Author

**Mohamed Naser**

Frontend Developer

### Technologies & Skills

React · TypeScript · Tailwind CSS · JavaScript · Next.js

## License

This project was created for learning and training purposes.
