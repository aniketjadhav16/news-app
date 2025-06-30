import NewsCard from "../components/NewsCard";

type Article = {
    title:string
    url:string
}

type Props = {
    articles: Article[] | null;
}

export default function HomePage(props: Props){
    if (!props.articles) return null;
    return (
        <div className="flex flex-wrap justify-between gap-6 my-10">
            {props.articles.map(article => (
                <NewsCard key={article.url} article={article} />
            ))}
        </div>
    )
}