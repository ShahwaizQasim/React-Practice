import { Link } from "react-router-dom"


function Auth(){
    return(
        <>
        <h2>Authentication Page</h2>
        <div>
            <ul>
                <Link to={'/auth/signUp'}><li>SignUp</li></Link>
                <Link to={'/auth/signIn'}><li>SignIn</li></Link>
            </ul>
        </div>
        </>
    )
}

export default Auth