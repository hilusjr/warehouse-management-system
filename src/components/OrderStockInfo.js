import React from 'react'

function OrderStockInfo({ type, maximum, current, orderType }) {
  if (!current && current !== 0) current = maximum
  return (
    <div className="order-stock-card">
      <div className="stock-info">
        <span className="stock-name">{type}</span>
        <span className="stock-max">Maximum: {maximum} crates</span>
        <span className="stock-current">Current: {current} crates</span>
        <span className="stock-min">Missing: {maximum - current} crates</span>
      </div>
      {orderType === 'Manual' && (
        <div className="manual-stock-card-right-col">
          <span>order</span>
          <div className="manual-adjust">
            <button className="decrease-amount">
              <i className="fa-solid fa-minus"></i>
            </button>
            <input type="number" className="manual-input"></input>
            <button className="increase-amount">
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default OrderStockInfo
