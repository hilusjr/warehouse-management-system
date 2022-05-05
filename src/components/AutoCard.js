import React from 'react'

function AutoCard({ left }) {
  const cardPosition = {
    left: `${30 + left}%`,
  }
  return (
    <div className="variant-card" style={cardPosition}>
      <span className="variant-title">Fully-automatic stock resupplying</span>
      <div className="variant-card-desc">
        <i className="fa-solid fa-circle-info"></i>
        <span className="variant-desc">
          System monitors level of stock in warehouses and automatically orders
          missing supplies.
        </span>
      </div>
      <button className="variant-action">
        <span>active</span>
        <i className="fa-solid fa-check"></i>
      </button>
    </div>
  )
}

export default AutoCard
