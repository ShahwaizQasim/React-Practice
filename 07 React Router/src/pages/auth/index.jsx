import { Link } from "react-router-dom"


function Auth(){
    return(
        <>
        <h2>Authentication Page</h2>
        <div>
            <ul>
                <Link to={'signUp'}><li>SignUp</li></Link>
                <Link to={'signIn'}><li>SignIn</li></Link>
            </ul>
        </div>
        </>
    )
}

export default Auth