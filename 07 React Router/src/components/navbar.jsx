import { Link } from "react-router-dom";

function Navbar(){
    return(

        <header>
            <ul>
                <Link to={'/Home'}><li>Home</li></Link>
                <Link to={'/About'}><li>About</li></Link>
                <Link to={'/Contact'}><li>Contact</li></Link>
            </ul>
        </header>
    )
}

export default Navbar;
