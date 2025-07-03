import imageLandscape from "../assets/image_landscape.png"

type Article = {
    url: string;
    urlToImage?: string;
    title: string;
    publishedAt: string;
    content: string;
    source: { name: string };
};

type NewsContainerProps = {
    article: Article;
};

export default function NewsContainer({article}:NewsContainerProps) {
    return (
        <div className="flex justify-between itmes-center bg-gray-200 max-w-[1200px] mx-auto rounded-xl shadow-xl">
            <div className="w-[600px] h-[300px] mx-auto overflow-hidden rounded-xl">
                <img
                    src={article.urlToImage ? article.urlToImage : imageLandscape}
                    className="w-full h-full object-cover"
                ></img>
            </div>

            <div className="flex flex-col justify-between gap-3 m-5">
                <h1 className="font-medium text-xl">{article.title}</h1>
                <p className="text-lg">{article.publishedAt}</p>
                <p className="text-lg">{article.content}</p>
                <a className="text-lg underline" href={article.url}>View full article at <span>{article.source.name}</span></a>
            </div>
        </div>
    )
}