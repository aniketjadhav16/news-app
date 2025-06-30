import profileIcon from "../assets/profile_icon.png"
import imageLandscape from "../assets/image_landscape.png"

const NewsCard:React.FC = (props) => {
    return(
        <>
            <div className="flex flex-col max-w-[350px] bg-gray-200 shadow-xl rounded-lg gap-6">
                <div className="w-[350px] h-[200px] mx-auto overflow-hidden rounded-t-lg">
                    <img
                        src={props.article.urlToImage ? props.article.urlToImage : imageLandscape}
                        className="w-full h-full object-cover"
                    ></img>
                </div>

                <div className="flex flex-col gap-3 mb-6 mx-5">
                    <h1>{props.article.category}</h1>
                    <h1 className="font-medium line-clamp-2">{props.article.title}</h1>
                    <p className="line-clamp-2">{props.article.description ? props.article.description : "The original source did not provide a summary or description for this article."}</p>
                    <div className="flex gap-2">
                        <img src={profileIcon}></img>
                        <span className="line-clamp-1">{props.article.author ?"By "+props.article.author : "No author listed."}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsCard;