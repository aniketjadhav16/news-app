import { useState } from 'react';
import Footer from './components/Footer';
import Headingbar from './components/Headingbar';
import Navbar from './components/Navbar';
import NewsFeed from './components/NewsFeed';
import useFetch from './hooks/useFetch'
import HomePage from './pages/Layout';

const categories = [
  "top-headlines",
  "technology",
  "business",
  "entertainment",
  "sports",
  "health"
]

function App() {
  const [category, setCategory] = useState("top-headlines")
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const { data, loading, error } = useFetch(`https://newsapi.org/v2/everything?q=${category}&pageSize=14&apiKey=${apiKey}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const articles = Array.isArray(data)?data:[];

  return (
    <>
      <div className='container mx-auto'>
        <Navbar categories={categories} onCategorySelect={setCategory}/>
        <HomePage articles={articles.slice(0,4)} />
        <Headingbar />
        <NewsFeed articles={articles.slice(4,14)}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
