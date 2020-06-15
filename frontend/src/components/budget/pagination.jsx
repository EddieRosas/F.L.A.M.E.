import React from 'react'

export const Pagination = ({ entriesPerPage, totalEntries, paginate }) => {
  const pageNums = [];

  for (let i = 0; i <= Math.ceil(totalEntries / entriesPerPage); i++) {
    pageNums.push(i);
  }
  
  return (
    <nav id="pagination-nav">
      <ul className="pagination">
        {
          pageNums.map(num => (
            <li key={ num } id="page-item">
              <a onClick={() => paginate(num)} id="page-link">
                { num }
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}