import React from 'react'

function BackBtn({ setPage, page }) {
  const handleClick = () => {
    if (page === 'order') setPage('order-variants')
    else setPage('main')
  }
  return (
    <button className="back-btn" onClick={handleClick}>
      <i className="fa-solid fa-angle-left"></i>
      <span>back</span>
    </button>
  )
}

export default BackBtn
