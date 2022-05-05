import React from 'react'
import BackBtn from './BackBtn'
import OrderWarehouse from './OrderWarehouse'

function Order({ setPage, orderType, semiType, data }) {
  const description = () => {
    if (orderType === 'Manual')
      return 'You decide what to order, what not. System provides all the information for you to make it easier to control your warehouse.'
    else if (orderType === 'semi-automatic') {
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

  return (
    <div className="order page">
      <aside>
        <span>Order</span>
        <span>{orderType}</span>
        {orderType === 'semi-automatic' && <span className='semi-type'>{semiType} resupply</span>}
        <span className="order-description">{description()}</span>
        <div className="order-warnings"></div>
      </aside>
      <section>
        <OrderWarehouse warehouse={data.warehouses[0]} />
        <OrderWarehouse warehouse={data.warehouses[1]} />
        <OrderWarehouse warehouse={data.warehouses[2]} />
      </section>
      <BackBtn setPage={setPage} />
    </div>
  )
}

export default Order
