import React from 'react'

export const Pagination = ({ entriesPerPage, totalEntries }) => {
  const pageNums = [];

  for (let i = 0; i <= Math.ceil(totalEntries / entriesPerPage); i++) {
    pageNums.push(i);
  }
  
  return (
    <nav>
      <ul className="pagenation">
        {
          pageNums.map(num => (
            <li key={ num } className="page-item">
              <a href="!#" className="page-link">
                { num }
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}