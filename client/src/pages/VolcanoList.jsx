import NavBar from "../components/Navbar";
import { Alert } from "react-bootstrap";
import useCountry from "../hooks/useCountires";
import useFetchVolcanos from "../hooks/useFetchVolcanos";
import Footer from "../components/Footer";
import InputGroup from "react-bootstrap/InputGroup";
import VolcanoTables from "../components/Tables";
import DropDown from "../components/DropDown";
import { useEffect, useState } from "react";
import SelectSearch from "../components/SelectSearch";

function VolcanoList() {
  const [selectedSubRegion, setSelectedSubRegion] = useState(null);
  const distance = ["none", "5km", "10km", "30km", "100km"];
  const [filteredVolcanoes, setFilteredVolcanoes] = useState([]);
  const { countries } = useCountry();
  const {
    subRegions,
    selectCountry,
    selectDistance,
    setSelectCountry,
    setSelectDistance,
    fetchVolcanos,
    volcanoes,
    errors,
  } = useFetchVolcanos();

  useEffect(() => {
    if (selectedSubRegion) {
      const filteredData = volcanoes.filter(
        (volcano) => volcano.subregion === selectedSubRegion
      );
      setFilteredVolcanoes(filteredData);
    } else {
      setFilteredVolcanoes(volcanoes);
    }
  }, [selectedSubRegion, selectDistance, selectCountry, volcanoes]);

  useEffect(() => {
    if (selectCountry) {
      fetchVolcanos();
    }
  }, [selectCountry, fetchVolcanos]);

  const handleChangeCountry = (selectedOption) => {
    setSelectCountry(selectedOption ? selectedOption.value : 'none');
    setSelectedSubRegion(null);
    setSelectDistance("none");
  };

  const handleChangeSubRegion = (selectedOption) => {
    setSelectedSubRegion(selectedOption ? selectedOption.value : null);
  };

  return (
    <>
      <NavBar />
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="px-5">
          {errors && (
            <Alert variant="danger" className="text-center">
              {errors}
            </Alert>
          )}
          <InputGroup className="mb-3 gap-1">
            <SelectSearch
              onChangeEvent={handleChangeCountry}
              elements={countries}
              placeHolderText="Search country..."
            />
            {subRegions.size > 1 && (
              <SelectSearch
                onChangeEvent={handleChangeSubRegion}
                elements={subRegions}
                placeHolderText="Select sub region"
              />
            )}
            <DropDown
              elements={distance}
              title="Select distance"
              setter={setSelectDistance}
            />
          </InputGroup>
          <VolcanoTables data={filteredVolcanoes} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VolcanoList;
