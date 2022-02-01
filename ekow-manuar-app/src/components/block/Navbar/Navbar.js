import { Link } from "react-router-dom";

const Navbar = () => {

    return(
        <nav id={"navbar"}>
            <Link to={"/"} className={"nav-link"}>Ekow Manuar</Link>
            <Link to={"/about"} className={"nav-link"}>About</Link>
        </nav>
    )
}

export default Navbar;