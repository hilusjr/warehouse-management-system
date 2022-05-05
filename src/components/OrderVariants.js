import { useState } from 'react'
import '../css/OrderVariants.css'
import BackBtn from './BackBtn'

function OrderVariants({ setPage, setOrderType, setSemiType }) {
  const [left, setLeft] = useState(0)
  const prevCard = () => {
    if (left === 0) return
    setLeft(left => left + 50)
  }
  const nextCard = () => {
    if (left === -100) return
    setLeft(left => left - 50)
  }
  const openOrderScreen = (page, type) => {
    setPage(page)
    setOrderType(type)
  }

  return (
    <>
      <div className="order-variants page">
        <button className="prev-card slider-btn" onClick={prevCard}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <AutoCard left={left} />
        <SemiCard
          left={left}
          openOrderScreen={openOrderScreen}
          setSemiType={setSemiType}
        />
        <ManualCard left={left} openOrderScreen={openOrderScreen} />
        <button className="next-card slider-btn" onClick={nextCard}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
      <BackBtn setPage={setPage} />
    </>
  )
}

export default OrderVariants

export function AutoCard({ left }) {
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
export function SemiCard({ left, openOrderScreen, setSemiType }) {
  const [optionsShowed, setOptionsShowed] = useState(false)
  const cardPosition = {
    left: `${80 + left}%`,
  }
  const openOptions = () => {
    setOptionsShowed(true)

    // openOrderScreen('order', 'semi-automatic')
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
