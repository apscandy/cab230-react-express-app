import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function VolcanoTables({ data }) {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const paginationButtons = () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    let buttons = [];
    for (let index = 0; index < totalPages; index++) {
      const pageNumber = index + 1;

      // Create a list item for the pagination button.
      // The key attribute helps React efficiently update list items.
      // The className is determined by a conditional expression to highlight the active page.
      // When the button is clicked, it updates the current page using setCurrentPage.
      const buttonElement = (
        <li
          key={pageNumber}
          className={`page-item ${pageNumber === currentPage ? "active" : ""}`}
        >
          <button
            className="page-link"
            onClick={() => setCurrentPage(pageNumber)}
          >
            {pageNumber}
          </button>
        </li>
      );
      buttons.push(buttonElement);
    }
    return buttons;
  };

  // if the data passed to the component changes reset to default value 
  // to avoid a bug in the front end where the page number is still set but there is no page number corresponding to it 
  useEffect(()=>{
    setCurrentPage(1)
  },[data])

  // Calculate the total number of pages needed to display all items in the data array.
  // We divide the total number of items in the data array by the number of items per page.
  // The result of this division gives us the total number of pages required to display all items.
  // Since the number of pages could be a fractional value (e.g., 4.5 pages), we use Math.ceil()
  // to round up to the nearest whole number. This ensures that we have enough pages to display
  // all items, even if there are only a few left on the last page.
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate the index of the last item to display on the current page.
  // To do this, we multiply the currentPage number by the number of items per page.
  // For example, if currentPage is 2 and itemsPerPage is 10, indexOfLastItem will be 20.
  const indexOfLastItem = currentPage * itemsPerPage;

  // Calculate the index of the first item to display on the current page.
  // To do this, we subtract the number of items per page from the indexOfLastItem.
  // This gives us the starting index of the range of items for the current page.
  // For example, if indexOfLastItem is 20 and itemsPerPage is 10, indexOfFirstItem will be 10.
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Extract the subset of items from the data array that corresponds to the current page.
  // We use the slice() method to get a portion of the data array starting from indexOfFirstItem
  // and ending at indexOfLastItem (not including the last item).
  // This gives us the items to display on the current page.
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
    
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Region</th>
            <th>Subregion</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((element) => (
              <tr key={element.id}>
                <td>
                  <Link to={`/volcano/${element.id}`}>{element.name}</Link>
                </td>
                <td>{element.country}</td>
                <td>{element.region}</td>
                <td>{element.subregion}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data</td>
            </tr>
          )}
        </tbody>
      </Table>
      {totalPages > 1 && (
        <nav>
          <ul className="pagination">{paginationButtons()}</ul>
        </nav>
      )}
      
    </>
  );
}

VolcanoTables.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
};

export default VolcanoTables;
