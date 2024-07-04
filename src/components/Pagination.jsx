import React from "react";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center my-4">
      <button
        className={`px-4 py-2 mr-2 rounded ${
          currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
        } font-medium`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="px-4 py-2 ">{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        className={`px-4 py-2 ml-2 rounded ${
          currentPage === totalPages ? "bg-gray-300" : "bg-blue-500 text-white"
        } font-medium`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
