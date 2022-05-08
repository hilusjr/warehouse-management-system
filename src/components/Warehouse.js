import '../css/Warehouse.css'
import WarehouseStock from './WarehouseStock'
import Notification from './Notification'
import { useEffect, useState } from 'react'
import BackBtn from './BackBtn'

function Warehouse({ warehouse, setPage, notifications }) {
  const [level, setLevel] = useState(100)
  const warehouseNotifications = notifications.filter(
    item => item.warehouse === warehouse.codename
  )

  const stockColor =
    (level > 30 && 'var(--accent-green)') ||
    (level > 15 && 'var(--accent-orange)') ||
    'var(--accent-red)'
  const barStyle = {
    height: `${level}%`,
    backgroundColor: stockColor,
  }

  useEffect(() => {
    setInterval(() => {
      let maxStock = 0,
        currentStock = 0
      for (const item in warehouse.stock) {
        let currentItem = warehouse.stock[item].current
        maxStock += warehouse.stock[item].max
        if (!currentItem && currentItem !== 0)
          currentItem = warehouse.stock[item].max
        currentStock += currentItem
      }
      const stockLevel = Math.ceil((currentStock / maxStock) * 100)
      setLevel(stockLevel)
    })
  }, [])

  return (
    <div className="warehouse page">
      <aside>
        <span className="codename">{warehouse.codename}</span>
        <div className="wh-address">
          <span className="city">{warehouse.address.city}</span>
          <span className="street">
            ul. {warehouse.address.street} {warehouse.address.number}
          </span>
          <span className="postcode">{warehouse.address.postcode}</span>
        </div>
        <div className="overall-status">
          <div className="overall-status-bar">
            <div className="overall-status-bar-filler" style={barStyle}></div>
          </div>
          <div className="overall-status-info">
            <span>Warehouse is filled in</span>
            <span
              className="overall-status-percentage"
              style={{ color: stockColor }}
            >
              {level}%
            </span>
          </div>
        </div>
        <div className="notification-panel">
          {warehouseNotifications.map((notification, i) => (
            <Notification
              key={i}
              type={notification.type}
              level={notification.level}
              inWarehouse={true}
            />
          ))}
        </div>
      </aside>
      <section>
        <span className="warehouse-title">Current stock</span>
        {warehouse.stock.map(stock => (
          <WarehouseStock
            key={stock.type}
            type={stock.type}
            maximum={stock.max}
            current={stock.current}
            minimum={stock.min}
          />
        ))}
      </section>
      <BackBtn setPage={setPage} />
    </div>
  )
}

export default Warehouse
