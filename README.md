# News App

A modern news web application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.
It fetches news articles from [newsapi.org](https://newsapi.org/) and displays them by category, with search functionality.

---

## Features

- Browse news by categories (Top Headlines, Technology, Business, etc.)
- Search for news articles by keyword
- Responsive and modern UI with Tailwind CSS
- Article cards with images, summaries, and author info
- Trending and featured sections
- Built with React functional components and hooks

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd news_app/news_app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add your NewsAPI key securely:**

   - Create a file named `.env` in the project root (`news_app/`).
   - Add your API key to this file:
     ```
     VITE_NEWS_API_KEY=your_actual_api_key_here
     ```
   - **Do not share or commit your `.env` file.**  
     The `.env` file is already listed in `.gitignore` and will not be uploaded to GitHub.

   - The app reads your API key using:
     ```js
     const apiKey = import.meta.env.VITE_NEWS_API_KEY;
     ```

4. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## Project Structure

```
src/
  components/    # Reusable UI components (Navbar, Footer, NewsCard, etc.)
  hooks/         # Custom React hooks (useFetch)
  pages/         # Page layouts (HomePage, etc.)
  assets/        # Images and static assets
  App.tsx        # Main app component
  index.tsx      # Entry point
```

---

## Customization

- **Categories:**  
  Edit the `categories` array in `src/App.tsx` to add or remove news categories.

- **Styling:**  
  Modify Tailwind classes in component files for custom styles.

---

## Credits

- News data from [newsapi.org](https://newsapi.org/)
- Built by Aniket

---