import React from 'react'

function OrderStockInfo({ type, maximum, current, minimum }) {
  if (!current && current !== 0) current = maximum
  return (
    <div className="order-stock-card">
      <div className="stock-info">
        <span className="stock-name">{type}</span>
        <span className="stock-max">Maximum: {maximum} crates</span>
        <span className="stock-current">Current: {current} crates</span>
        <span className="stock-min">Missing: {maximum - current} crates</span>
      </div>
    </div>
  )
}

export default OrderStockInfo
