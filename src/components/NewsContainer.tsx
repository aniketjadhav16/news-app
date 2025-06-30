import imageLandscape from "../assets/image_landscape.png"

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

export default function NewsContainer(props:Props) {
    return (
        <div className="flex justify-between itmes-center bg-gray-200 max-w-[1200px] mx-auto rounded-xl shadow-xl">
            <div className="w-[600px] h-[300px] mx-auto overflow-hidden rounded-xl">
                <img
                    src={props.article.urlToImage ? props.article.urlToImage : imageLandscape}
                    className="w-full h-full object-cover"
                ></img>
            </div>

            <div className="flex flex-col justify-between gap-3 m-5">
                <h1 className="font-medium text-xl">{props.article.title}</h1>
                <p className="text-lg">{props.article.publishedAt}</p>
                <p className="text-lg">{props.article.content}</p>
                <a className="text-lg underline" href={props.article.url}>View full article at <span>{props.article.source.name}</span></a>
            </div>
        </div>
    )
}