import NavBar from "../components/Navbar";
import { Alert } from "react-bootstrap";
import AuthForm from "../components/AuthForm";
import useAuth from "../hooks/useAuth";
import Footer from "../components/Footer";

function Register() {
  const { errors, setEmail, setPassword, registerFunction } = useAuth();
  const submit = (e) => {
    e.preventDefault();
    registerFunction();
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
        title={"Register"}
        setEmail={setEmail}
        setPassword={setPassword}
        submit={submit}
      />
      <Footer />
    </>
  );
}

export default Register;
