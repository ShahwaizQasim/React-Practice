import { useContext } from "react"
import { UserContext } from "../context/userContext";

function About(){
    const [user] = useContext(UserContext);
    console.log('user', user);
    
    return(
        <>
        <h2>Welcome to my About Page</h2>
        <h2 className="text-4xl">{user.name}</h2>
        </>
    )
}

export default About