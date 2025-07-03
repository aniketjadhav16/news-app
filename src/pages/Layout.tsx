import NewsCard from "../components/NewsCard";

type Article = {
    url: string;
    urlToImage?: string;
    title: string;
    publishedAt: string;
    content: string;
    source: { name: string };
};

type NewsFeedProps = {
    articles: Article[];
};

export default function HomePage({articles}:NewsFeedProps){
    if (!articles) return null;
    return (
        <div className="flex flex-wrap justify-between gap-6 my-10">
            {articles.map(article => (
                <NewsCard key={article.url} article={article} />
            ))}
        </div>
    )
}