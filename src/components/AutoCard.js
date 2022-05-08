function AutoCard({ left, isAuto, setAuto }) {
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
      <button className="variant-action" onClick={() => setAuto(!isAuto)}>
        <span>{isAuto ? 'active' : 'turn on'}</span>
        <i
          className="fa-solid fa-check"
          style={isAuto ? { display: 'block' } : { display: 'none' }}
        ></i>
      </button>
    </div>
  )
}

export default AutoCard
