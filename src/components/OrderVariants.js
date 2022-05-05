import { useState } from 'react'
import '../css/OrderVariants.css'
import BackBtn from './BackBtn'
import AutoCard from './AutoCard'
import SemiCard from './SemiCard'
import ManualCard from './ManualCard'

function OrderVariants({ setPage, setOrderType, setSemiType, setPrevPage }) {
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

  const availableButton = {
    color: 'var(--text)',
    cursor: 'pointer',
  }
  const nonAvailableButton = {
    color: 'var(--accent-main-washed)',
    cursor: 'default',
  }

  const activeBar = {
    flexGrow: 3,
    backgroundColor: 'var(--text)',
    height: '10px',
  }
  const nonActiveBar = {
    flexGrow: 1,
    backgroundColor: 'var(--accent-main-washed)',
    height: '5px',
  }
  return (
    <>
      <div className="order-variants page">
        <button
          className="prev-card slider-btn"
          onClick={prevCard}
          style={left === 0 ? nonAvailableButton : availableButton}
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <AutoCard left={left} />
        <SemiCard
          left={left}
          openOrderScreen={openOrderScreen}
          setSemiType={setSemiType}
          setPrevPage={setPrevPage}
        />
        <ManualCard left={left} openOrderScreen={openOrderScreen} />
        <button
          className="next-card slider-btn"
          onClick={nextCard}
          style={left === -100 ? nonAvailableButton : availableButton}
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
      <div className="slide-bar">
        <div style={!left ? activeBar : nonActiveBar}></div>
        <div style={left === -50 ? activeBar : nonActiveBar}></div>
        <div style={left === -100 ? activeBar : nonActiveBar}></div>
      </div>
      <BackBtn setPage={setPage} />
    </>
  )
}

export default OrderVariants
