import React from 'react'
import { useState } from 'react'

function SemiCard({ left, openOrderScreen, setSemiType }) {
  const [optionsShowed, setOptionsShowed] = useState(false)
  const cardPosition = {
    left: `${80 + left}%`,
  }
  const openOptions = () => {
    setOptionsShowed(true)
  }
  const gotoOrder = type => {
    setSemiType(type)
    openOrderScreen('order', 'semi-automatic')
  }
  return (
    <div className="variant-card" style={cardPosition}>
      {!optionsShowed && (
        <>
          <span className="variant-title">
            Semi-automatic stock resupplying
          </span>
          <div className="variant-card-desc">
            <i className="fa-solid fa-circle-info"></i>
            <span className="variant-desc">
              System monitors level of stock in warehouses and automatically
              generates an order based on your desired resupplying amount.
            </span>
          </div>
          <button className="variant-action" onClick={openOptions}>
            <span>NEXT</span>
          </button>
        </>
      )}
      {optionsShowed && (
        <div className="semi-options-card">
          <span>Choose the option</span>
          <div className="semi-option">
            <span>
              <b>Maximum</b> - Orders missing stock to have a maximum amount of
              the specific supplies
            </span>
            <button onClick={() => gotoOrder('maximum')}>next</button>
          </div>
          <div className="semi-option">
            <span>
              <b>Medium</b> - Orders missing stock to have at least 50% of the
              specific supplies
            </span>
            <button onClick={() => gotoOrder('medium')}>next</button>
          </div>
          <div className="semi-option">
            <span>
              <b>Minimum</b> - orders missing stock to have at least minimum
              amount of the specific supplies
            </span>
            <button onClick={() => gotoOrder('minimum')}>next</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SemiCard
