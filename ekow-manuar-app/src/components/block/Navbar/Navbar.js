import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {

    const [isHovered, setIsHovered] = useState(false);
    return(
        <nav id={"navbar"} className={`absolute top-0 z-[5]`}>
            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`${isHovered ? 'bg-white bg-opacity-30 text-[#273E47]' : 'bg-white text-[#273E47]'} w-full h-full flex justify-between items-center relative z-[1] transition-colors duration-300 text-2xl font-thin tracking-widest`}>
                <Link to={"/"} className={"nav-link ml-8"}>Ekow Manuar</Link>
                <Link to={"/about"} className={"nav-link mr-8"}>About</Link>
            </div>
            <div className={'absolute top-0 z-[0] bg-[#7CCFCC] w-full h-full'}></div>
        </nav>
    )
}

export default Navbar;