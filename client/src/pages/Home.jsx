import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <div className="container col-xxl-12 cols-lg-6 cols-sm-3 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-12 col-sm-12 col-lg-6">
            <img
              src="/hero-volcano.jpg"
              className="d-block mx-lg-auto img-fluid rounded"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Volcano Insights: Explore the Earth&apos;s Fiery Heart
            </h1>
            <p className="lead">
              Delve into the heart of volcanic activity with our webapp,
              providing real-time data and comprehensive analysis tools for
              researchers and enthusiasts alike. Uncover the secrets of volcanic
              behavior and gain valuable insights into one of nature&apos;s most
              captivating phenomena.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
