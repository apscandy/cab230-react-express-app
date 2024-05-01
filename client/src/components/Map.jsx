import { Map, Marker } from "pigeon-maps";
import PropTypes from "prop-types";

function VolcanoMap({ data }) {
  return (
    <>
      <Map
        height={600}
        center={[parseFloat(data.latitude), parseFloat(data.longitude)]}
        defaultCenter={[-27.47698946605008, 153.0270251202834]}
        defaultZoom={9}
      >
        <Marker
          width={50}
          anchor={[parseFloat(data.latitude), parseFloat(data.longitude)]}
          key={data.id}
          color={`hsl(23, 100%, 50%)`}
        />
      </Map>
    </>
  );
}

VolcanoMap.propTypes = {
  data: PropTypes.object.isRequired,
};
export default VolcanoMap;
