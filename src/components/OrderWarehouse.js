import { useEffect, useState } from 'react'
import OrderStockInfo from '../components/OrderStockInfo'

function OrderWarehouse({ warehouse, orderType, semiType }) {
  const [isCollapsed, setCollapsed] = useState(false)

  const handleCollapse = () => {
    setCollapsed(!isCollapsed)
  }
  const contentStyle = {
    maxHeight: isCollapsed ? 0 : '1800px',
  }
  const orderGap = {
    gap: isCollapsed ? 0 : '5vmin',
  }

  return (
    <div className="order-warehouse" style={orderGap}>
      <div className="order-label" onClick={handleCollapse}>
        <div>{warehouse.codename}</div>
        <i className={`fa-solid fa-angle-${isCollapsed ? 'down' : 'up'}`}></i>
      </div>
      <div className="order-content" style={contentStyle}>
        {warehouse.stock.map(stock => (
          <OrderStockInfo
            key={stock.type}
            type={stock.type}
            maximum={stock.max}
            current={stock.current}
            minimum={stock.min}
            orderType={orderType}
            semiType={semiType}
            stock={stock}
          />
        ))}
      </div>
    </div>
  )
}

export default OrderWarehouse
