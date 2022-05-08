import React, { useState } from 'react'
import BackBtn from './BackBtn'
import Notification from './Notification'
import OrderWarehouse from './OrderWarehouse'

function Order({
  setPage,
  orderType,
  semiType,
  warehouses,
  page,
  notifications,
}) {
  const [orderCompleted, setOrderCompleted] = useState(false)
  const description = () => {
    if (orderType === 'Manual') {
      return 'You decide what to order, what not. System provides all the information for you to make it easier to control your warehouse.'
    } else if (orderType === 'semi-automatic') {
      switch (semiType) {
        case 'minimum':
          return 'Orders missing stock to have at least minimum amount of the specific supplies'
        case 'medium':
          return 'Orders missing stock to have at least 50% of the specific supplies'
        case 'maximum':
          return 'Orders missing stock to have a maximum amount of the specific supplies'
        default:
          return 'In case you see this message, please contact the developer'
      }
    }
  }

  const completeOrder = () => {
    setOrderCompleted(true)
    setTimeout(() => {
      for (const warehouse in warehouses) {
        for (const item in warehouses[warehouse].stock) {
          warehouses[warehouse].stock[item].current +=
            warehouses[warehouse].stock[item].order
          warehouses[warehouse].stock[item].order = 0
        }
      }
    }, 10000)
  }

  return (
    <div className="order page">
      <aside>
        <span>Order</span>
        <span>{orderType}</span>
        {orderType === 'semi-automatic' && (
          <span className="semi-type">{semiType} resupply</span>
        )}
        <span className="order-description">{description()}</span>
        {orderType === 'Manual' && (
          <div className="notification-panel">
            {notifications.map((notification, i) => (
              <Notification
                key={i}
                warehouse={notification.warehouse}
                type={notification.type}
                level={notification.level}
              />
            ))}
          </div>
        )}
      </aside>
      <section>
        <OrderWarehouse
          warehouse={warehouses[0]}
          orderType={orderType}
          semiType={semiType}
        />
        <OrderWarehouse
          warehouse={warehouses[1]}
          orderType={orderType}
          semiType={semiType}
        />
        <OrderWarehouse
          warehouse={warehouses[2]}
          orderType={orderType}
          semiType={semiType}
        />
        <div className="order-bar">
          <span className="order-bar-span">Once finished press the button</span>
          <button className="order-btn" onClick={completeOrder}>
            order
          </button>
        </div>
      </section>
      <div
        className="order-completed-dialog"
        style={orderCompleted ? { display: 'flex' } : { display: 'none' }}
      >
        <div className="dialog-window">
          <span>
            Your order has been placed succesfully. The request for supplies has
            been received. Processing the order may take some time.
          </span>
          <button className="back-to-main-btn" onClick={() => setPage('main')}>
            main page
          </button>
        </div>
      </div>

      <BackBtn setPage={setPage} page={page} />
    </div>
  )
}

export default Order
