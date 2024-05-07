import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function VolcanoTables({ data }) {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginationButtons = () => {
    const buttons = Array.from({ length: totalPages }, (_, index) => {
      const pageNumber = index + 1;
      return (
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
    });
    return buttons;
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

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
