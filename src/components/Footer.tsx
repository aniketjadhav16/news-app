import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type FooterProps = {
    categories:string[];
    onCategorySelect: (category:string) => void;
}

export default function Footer({categories, onCategorySelect}: FooterProps) {
    return (
        <div className="flex justify-between bg-black text-white rounded-xl shadow-xl py-10 px-40">
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-xl">NEWS by Aniket</h1>
                <p>Built using newsapi.org API</p>
            </div>

            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-xl">Categories</h1>
                <ul className="flex flex-col gap-y-2">
                    {categories.map(cat => (
                        <li
                            key = {cat}
                            className = "cursor-pointer"
                            onClick={()=>{
                                window.scrollTo({top:0, behavior:"smooth"})
                                onCategorySelect(cat)
                            }}
                        >{cat.charAt(0).toUpperCase() + cat.slice(1)}</li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-xl">Connect with me</h1>
                <div className="flex gap-4">
                    <a href="https://github.com/aniketjadhav16" target="_blank" rel="noopner noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x"/>
                    </a>
                    <a href="https://www.linkedin.com/in/aniket-arun-jadhav" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                    </a>
                </div>
            </div>
        </div>
    )
}