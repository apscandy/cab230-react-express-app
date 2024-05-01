import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <>
      <NavBar />
      <section className="px-5 py-5">
        <h1>Error page not found</h1>
      </section>
      <Footer />
    </>
  );
}

export default NotFound;
