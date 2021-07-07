import React from "react";

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  pageNumbers =
    currentPage > 6
      ? pageNumbers.slice(currentPage - 3, currentPage + 3)
      : pageNumbers.slice(0, 7);
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            {currentPage == number ? (
              <button
                onClick={() => paginate(number)}
                className="page-link active"
              >
                {number}
              </button>
            ) : (
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
