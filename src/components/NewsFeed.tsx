import NewsContainer from "./NewsContainer";

type Article = {
    title: string,
    content: string,
    publishedAt:string,
    urlToImage:string,
    url:string
}

type Props = {
    articles: Article[] | null;
}

export default function NewsFeed(props:Props) {
    if (!props.articles) return null;
    return(
        <div className="flex flex-col flex-wrap gap-10 my-10">
            {
                props.articles.map(article => (
                    <NewsContainer key={article.url} article={article}/>
                ))
            }
        </div>
    )
}