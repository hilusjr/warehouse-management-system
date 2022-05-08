import React from 'react'

function Notification({ warehouse, type, level, inWarehouse }) {
  return (
    <div className="notification">
      <i className="fa-solid fa-triangle-exclamation"></i>
      <span
        className="notification-warehouse"
        style={inWarehouse ? { display: 'none' } : { display: 'block' }}
      >
        {warehouse}:{' '}
      </span>
      <span className="notification-stock">{type} are running out!</span>
    </div>
  )
}

export default Notification
