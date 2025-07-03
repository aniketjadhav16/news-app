import NewsContainer from "./NewsContainer";

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

export default function NewsFeed({articles}:NewsFeedProps) {
    if (!articles) return null;
    return(
        <div className="flex flex-col flex-wrap gap-10 my-10">
            {
                articles.map(article => (
                    <NewsContainer key={article.url} article={article}/>
                ))
            }
        </div>
    )
}