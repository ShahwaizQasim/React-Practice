import { useNavigate } from "react-router";

function SignUp() {
  const navigate = useNavigate();

  const HandleGoBack = () => navigate("/auth");

  return (
    <>
      <h2>Welcome to Sign Up Page</h2>
      <button onClick={HandleGoBack}>Go Back</button>
    </>
  );
}

export default SignUp;
