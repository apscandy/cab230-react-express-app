import { Link } from "react-router-dom";
import { Authorization } from "../App";
import { useContext } from "react";

function Footer() {
  const [isLoggedIn] = useContext(Authorization);
  return (
    <footer className="px-5 py-3 my-4">
      <ul className="nav justify-content-center pb-3 mb-3">
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-body-secondary">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/volcanos" className="nav-link px-2 text-body-secondary">
            Check out the volcanos
          </Link>
        </li>
        {isLoggedIn ? (
          ""
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-link px-2 text-body-secondary">
                Login here
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/register"
                className="nav-link px-2 text-body-secondary"
              >
                Register your account here
              </Link>
            </li>
          </>
        )}
      </ul>
      <p className="text-center text-body-secondary">
        © {new Date().getFullYear()} Andrew Clarke
      </p>
    </footer>
  );
}

export default Footer;
