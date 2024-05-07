import NavBar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import useFetchVolcanoData from "../hooks/useFetchVolcanoData";
import { Authorization } from "../App";
import { useContext } from "react";
import VolcanoMap from "../components/Map";
import PopulationChart from "../components/PopulationChart";
import Footer from "../components/Footer";

function Volcano() {
  const [isLoggedIn] = useContext(Authorization);
  let { id } = useParams();
  const { data, errors } = useFetchVolcanoData(id);

  return (
    <>
      <NavBar />
      {errors && <Alert variant="danger" className="text-center">{errors}</Alert>}
      <div className="px-5 py-5 container-fluid">
        <div className="row">
          <div className="col-lg-4">
            {data && (
              <>
                <h2>Name: {data.name}</h2> <h4>Country: {data.country}</h4>
                <h4>Region: {data.region}</h4>
                <h4>Sub region: {data.subregion}</h4>
                <h4>Last eruption: {data.last_eruption}</h4>
                <h4>Summit: {data.summit}</h4>
                <h4>Elevation: {data.elevation}</h4>    
              </>
            )}
          </div>
          <div className="col-lg-8">
            <VolcanoMap data={data} />
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-lg-8">
            {isLoggedIn && <PopulationChart data={data} />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Volcano;
