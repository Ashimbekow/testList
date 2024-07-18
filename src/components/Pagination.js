import React from 'react';

const Pagination = ({ total, limit, page, onPageChange }) => {
const totalPages = Math.ceil(total / limit);

const handlePageChange = (newPage) => {
    onPageChange({ page: newPage });
};

return (
    <div className="pagination">
     {Array.from({ length: totalPages }, (_, index) => (
        <button key={index} onClick={() => handlePageChange(index + 1)} disabled={page === index + 1}>
         {index + 1}
        </button>
     ))}
    </div>
);
};

export default Pagination;