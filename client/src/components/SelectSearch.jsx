import PropTypes from "prop-types";
import Select from "react-select";

function SelectSearch({ onChangeEvent, elements, placeHolderText = "Place holder..." }) {
  return (
    <>
      <Select
        className="select-box-list"
        placeholder={placeHolderText}
        onChange={onChangeEvent}
        isClearable={true}
        options={Array.from(elements).map((item) => ({
          label: item,
          value: item,
        }))}
      />
    </>
  );
}

SelectSearch.propTypes = {
  onChangeEvent: PropTypes.func.isRequired,
  elements: PropTypes.arrayOf(Object).isRequired,
  placeHolderText: PropTypes.string,
};
export default SelectSearch;
