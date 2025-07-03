import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Headingbar from './components/Headingbar';
import Navbar from './components/Navbar';
import NewsFeed from './components/NewsFeed';
import useFetch from './hooks/useFetch'
import Layout from './pages/Layout';
import bouncingCircles from "./assets/bouncing-circles.svg"

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
  const [page, setPage] = useState(1);

  useEffect(()=> {
    setPage(1);
  },[category])

  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  console.log(apiKey);
  const { data, loading, error } = useFetch(`https://newsapi.org/v2/everything?q=${category}&page=${page}&apiKey=${apiKey}`);

  if (loading) return <div className='h-screen flex justify-center items-center'><img src={bouncingCircles} alt='bouncing circles' className='w-3xs'></img></div>;
  if (error) return <div className='h-screen flex justify-center items-center'>Error: {error.message}</div>;

  const articles = Array.isArray(data)?data:[];

  return (
    <>
      <div className='container mx-auto'>
        <Navbar categories={categories} onCategorySelect={setCategory}/>
        <Layout articles={articles.slice(0,4)} />
        <Headingbar />
        <NewsFeed articles={articles.slice(4,14)}/>
        <div className="flex justify-center gap-4 my-10">
          <button
            className='px-4 py-2 bg-gray-600 text-white rounded-xl disabled:opacity-35'
            onClick={()=>{
              setPage(page - 1)
              window.scrollTo({top:0, behavior:"smooth"})
            }}
            disabled={page === 1}
          >Previous Page</button>
          <span className='self-center'>Page {page}</span>
          <button
            className='px-4 py-2 bg-gray-600 text-white rounded-xl'
            onClick={()=>{
              setPage(page + 1)
              window.scrollTo({top:0, behavior:"smooth"})
            }}
            disabled={articles.length < 14}
          >Next Page</button>
        </div>
        <Footer categories={categories} onCategorySelect={setCategory}/>
      </div>
    </>
  );
}

export default App;
