import React from 'react'

function BackBtn({ setPage }) {
  return (
    <button className="back-btn" onClick={() => setPage('main')}>
      <i className="fa-solid fa-angle-left"></i>
      <span>back</span>
    </button>
  )
}

export default BackBtn
