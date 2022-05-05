import React from 'react'

export function ManualCard({ left, openOrderScreen }) {
  const cardPosition = {
    left: `${130 + left}%`,
  }
  return (
    <div className="variant-card" style={cardPosition}>
      <span className="variant-title">Manual stock resupplying</span>
      <div className="variant-card-desc">
        <i className="fa-solid fa-circle-info"></i>
        <span className="variant-desc">
          You decide what to order, what not. System provides all the
          information for you to make it easier to control your warehouse.
        </span>
      </div>
      <button
        className="variant-action"
        onClick={() => openOrderScreen('order', 'Manual')}
      >
        <span>create order</span>
      </button>
    </div>
  )
}
export default ManualCard
