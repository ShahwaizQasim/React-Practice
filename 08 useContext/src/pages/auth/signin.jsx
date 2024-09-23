import { useNavigate } from "react-router";

function SignIn() {
  const navigate = useNavigate();

  const HandleGoBack = () => navigate("/auth");

  return (
    <>
      <h2>Welcome to Sign In Page</h2>
      <button onClick={HandleGoBack}>Go Back</button>
    </>
  );
}

export default SignIn;
