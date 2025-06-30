export default function Footer() {
    return (
        <div className="flex justify-between bg-black text-white rounded-xl shadow-xl py-10 px-40">
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-xl">NEWS by Aniket</h1>
                <p>Built using newsapi.org API</p>
            </div>

            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-xl">Categories</h1>
                <ul className="flex flex-col gap-y-2">
                    <li>Breaking News</li>
                    <li>Technology</li>
                    <li>Business</li>
                    <li>Entertainment</li>
                    <li>Sports</li>
                    <li>Health</li>
                </ul>
            </div>

            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-xl">Connect with me</h1>
            </div>
        </div>
    )
}