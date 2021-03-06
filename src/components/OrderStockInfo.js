import React, { useEffect, useState } from 'react'

function OrderStockInfo({
  type,
  maximum,
  current,
  minimum,
  orderType,
  semiType,
  stock,
}) {
  const [amount, setAmount] = useState(0)
  if (!current && current !== 0) current = maximum

  const missing = maximum - current
  const missingSemi =
    (semiType === 'maximum' && missing) ||
    (semiType === 'medium' && current < maximum / 2 && maximum / 2 - current) ||
    (semiType === 'minimum' && minimum - current) ||
    0

  const changeAmount = e => {
    let inputValue = Number(e.target.value)
    setAmount(inputValue)
    if (inputValue > missing) {
      setAmount(missing)
    }
    if (inputValue < 0) setAmount(0)
  }
  const increaseAmount = () => {
    if (amount >= missing) return
    setAmount(amount => amount + 1)
  }
  const decreaseAmount = () => {
    if (amount === 0) return
    setAmount(amount => amount - 1)
  }

  const activeButton = {
    backgroundColor: 'var(--dark-1000)',
  }
  const nonActiveButton = {
    backgroundColor: 'var(--dark-300)',
  }

  useEffect(() => {
    if (orderType === 'semi-automatic' && missingSemi >= 0)
      setAmount(missingSemi)
    stock.order = amount
  }, [amount, missingSemi])

  return (
    <div className="order-stock-card">
      <div className="stock-info">
        <span className="stock-name">{type}</span>
        <span className="stock-max">Maximum: {maximum} crates</span>
        <span className="stock-current">Current: {current} crates</span>
        <span className="stock-min">Missing: {missing} crates</span>
      </div>
      {orderType === 'semi-automatic' && (
        <div className="manual-stock-card-right-col">
          <span>order</span>
          <div className="semi-missing-stock">
            {missingSemi >= 0 ? missingSemi : 0}
          </div>
        </div>
      )}
      {orderType === 'Manual' && (
        <div className="manual-stock-card-right-col">
          <span>order</span>
          <div className="manual-adjust">
            <button
              className="decrease-amount"
              onClick={decreaseAmount}
              style={!amount ? nonActiveButton : activeButton}
            >
              <i className="fa-solid fa-minus"></i>
            </button>
            <input
              type="number"
              className="manual-input"
              placeholder="0"
              value={`${amount}`}
              onChange={changeAmount}
            ></input>
            <button
              className="increase-amount"
              onClick={increaseAmount}
              style={amount >= missing ? nonActiveButton : activeButton}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default OrderStockInfo
