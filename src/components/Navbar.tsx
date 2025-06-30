type NavbarProps = {
    categories: string[];
    onCategorySelect: (category:string) => void;
}

const Navbar: React.FC<NavbarProps> = ({categories, onCategorySelect}) => {
    return(
        <div className="flex justify-between items-center rounded-xl shadow-xl h-24 px-10 bg-black text-white font-bold">
            <div>
                <h1 className="text-xl cursor-pointer" onClick={()=>onCategorySelect(categories[0])}>NEWS</h1>
            </div>

            <div>
                <ul className="flex gap-10">
                    {categories.map(cat=>(
                        <li
                            key={cat}
                            className="cursor-pointer hover:underline"
                            onClick={()=>onCategorySelect(cat)}
                        >{cat.charAt(0).toUpperCase() + cat.slice(1)}</li>
                    ))}
                </ul>
            </div>

            <div>
                <input
                    className=""
                    type="text"
                    placeholder="Search"
                ></input>
            </div>
        </div>
    )
}

export default Navbar;