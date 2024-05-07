import NavBar from "../components/Navbar";
import { Alert } from "react-bootstrap";
import AuthForm from "../components/AuthForm";
import useAuth from "../hooks/useAuth";
import Footer from "../components/Footer";

function Login() {
  const { errors, setEmail, setPassword, loginFunction } = useAuth();
  const submit = (e) => {
    e.preventDefault();
    loginFunction();
  };

  return (
    <>
      <NavBar />
      {errors && (
        <Alert variant="danger" className="text-center">
          {errors}
        </Alert>
      )}
      <AuthForm
        title={"Login"}
        setEmail={setEmail}
        setPassword={setPassword}
        submit={submit}
      />
      <Footer />
    </>
  );
}

export default Login;
