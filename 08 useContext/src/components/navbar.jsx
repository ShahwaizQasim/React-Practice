import { useContext } from "react";
import { Link } from "react-router-dom";

function Navbar(){
    
    return(

        <header>
            <ul>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/About'}><li>About</li></Link>
                <Link to={'/Contact'}><li>Contact</li></Link>
                <Link to={'/showProducts'}><li>Products</li></Link>
                <Link to={'/auth'}><li  >Authentication</li></Link>
            </ul>
        </header>
    )
}

export default Navbar;
