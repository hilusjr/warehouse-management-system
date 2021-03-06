import '../css/Main.css'
import Notification from './Notification'

function Main({ warehouses, setPage, setWarehouse, notifications }) {
  return (
    <section className="main page">
      <button onClick={() => setPage('order-variants')}>
        <span>order supplies</span>
        <i className="fa-solid fa-angle-right"></i>
      </button>
      <div className="wh-cards">
        {warehouses.map(warehouse => (
          <WarehouseCard
            key={warehouse.id}
            id={warehouse.id}
            codename={warehouse.codename}
            city={warehouse.address.city}
            setPage={setPage}
            setWarehouse={setWarehouse}
          />
        ))}
      </div>
      <div className="main-notification-panel">
        {notifications.map((notification, i) => (
          <Notification
            key={i}
            warehouse={notification.warehouse}
            type={notification.type}
            level={notification.level}
          />
        ))}
      </div>
    </section>
  )
}

export default Main

export function WarehouseCard({ id, codename, city, setPage, setWarehouse }) {
  const showWarehouse = () => {
    setPage('warehouse')
    setWarehouse(id)
  }
  return (
    <div className="wh-card" onClick={() => showWarehouse()}>
      <img src={require(`../images/warehouse_${id}.png`)} />
      <span>{codename}</span>
      <span>{city}</span>
    </div>
  )
}
