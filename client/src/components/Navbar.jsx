import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import useAuth from "../hooks/useAuth";


function NavBar() {
    const {isLoggedIn, logoutFunction} = useAuth()
  return (
    <>
      <Navbar expand="lg" className="px-5 custom-color navbar-dark">
        <Navbar.Brand href={"/"}>Volcanos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link href={"/"} className="active">
              Home
            </Nav.Link>
            <Nav.Link href={"/volcanos"} className="active">
              Volcano list
            </Nav.Link>
            {isLoggedIn ? (
              <Nav.Link onClick={logoutFunction} className="active">
                logout
              </Nav.Link>
            ) : (
              <>
                <Nav.Link href={"/register"} className="active">
                  Register
                </Nav.Link>
                <Nav.Link href={"/login"} className="active">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
