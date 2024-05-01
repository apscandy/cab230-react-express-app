import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from "prop-types";

function DropDown({ elements, title, variant = "outline-success", setter }) {
  return (
    <>
    <Dropdown className="d-inline mx-2" autoClose="inside">
        <Dropdown.Toggle id="dropdown-autoclose-inside" variant={variant}>
          {title}
        </Dropdown.Toggle>

        <Dropdown.Menu>
        {elements.map((element) => (
          <Dropdown.Item
            as="button"
            key={element}
            onClick={() => setter(element)}
          >
            {element}
          </Dropdown.Item>
        ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

DropDown.propTypes = {
  elements: PropTypes.arrayOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
  setter: PropTypes.func.isRequired,
};

export default DropDown;
