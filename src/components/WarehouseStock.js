function WarehouseStock({ type, maximum, current, minimum }) {
  if (!current && current !== 0) current = maximum
  const level = Math.ceil((current / maximum) * 100)
  const stockColor =
    (level > 30 && 'var(--accent-green)') ||
    (level > 15 && 'var(--accent-orange)') ||
    'var(--accent-red)'
  const barStyle = {
    height: `${level}%`,
    backgroundColor: stockColor,
  }
  return (
    <div className="stock-card">
      <img src={require(`../images/${type}.jpg`)} />
      <div className="stock-info">
        <span className="stock-name">{type}</span>
        <span className="stock-max">Maximum: {maximum} crates</span>
        <span className="stock-current">Current: {current} crates</span>
        <span className="stock-min">Minimum: {minimum} crates</span>
      </div>
      <div className="stock-status-bar">
        <div className="stock-status-bar-filler" style={barStyle}></div>
      </div>
    </div>
  )
}

export default WarehouseStock
