import { useEffect, useState } from 'react'
import './App.css'
import Main from './components/Main'
import OrderVariants from './components/OrderVariants'
import Order from './components/Order'
import Warehouse from './components/Warehouse'
import data from './json/warehouses.json'

function App() {
  const [page, setPage] = useState('main')
  const [isAuto, setAuto] = useState(true)
  const [orderType, setOrderType] = useState('')
  const [semiType, setSemiType] = useState('')
  let [notifications, setNotifications] = useState([])
  const [warehouse, setWarehouse] = useState(0)
  let [count, setCount] = useState(0)

  const loadNotifications = () => {
    notifications = []
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 8; j++) {
        const pickedWarehouse = data.warehouses[i]
        const pickedStock = pickedWarehouse.stock[j]
        if (pickedStock.current <= pickedStock.max / 2) {
          notifications.push({
            warehouse: pickedWarehouse.codename,
            type: pickedStock.type,
          })
        }
      }
    }
    setNotifications(notifications)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count += 1))
      const pickedWarehouse =
        data.warehouses[Math.floor(Math.random() * data.warehouses.length)]
      const pickedStock =
        pickedWarehouse.stock[
          Math.floor(Math.random() * pickedWarehouse.stock.length)
        ]
      if (!pickedStock.current && pickedStock.current !== 0)
        pickedStock.current = pickedStock.max
      pickedStock.current -= Math.floor(Math.random() * 5) + 1
      if (pickedStock.current < 0) pickedStock.current = 0

      loadNotifications()
    }, 500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const autoOrder = setInterval(() => {
      if (!isAuto) return
      for (const warehouse in data.warehouses) {
        for (const item in data.warehouses[warehouse].stock) {
          data.warehouses[warehouse].stock[item].current =
            data.warehouses[warehouse].stock[item].max
        }
      }
    }, 30000)
    return () => clearInterval(autoOrder)
  }, [isAuto])

  const headerStyle = {
    width: page !== 'main' ? '90%' : '100%',
    left: page !== 'main' ? '10%' : 0,
  }

  return (
    <div
      className="App"
      style={
        page === 'main'
          ? { backgroundColor: 'var(--dark-1000)' }
          : { backgroundColor: 'var(--dark-500)' }
      }
    >
      <header style={headerStyle}>
        <span onClick={() => setPage('main')}>wms</span>
        <span>warehouse management system</span>
      </header>
      {page === 'main' && (
        <Main
          warehouses={data.warehouses}
          setPage={setPage}
          setWarehouse={setWarehouse}
          notifications={notifications}
        />
      )}
      {page === 'warehouse' && (
        <Warehouse
          warehouse={data.warehouses[warehouse]}
          setPage={setPage}
          notifications={notifications}
        />
      )}
      {page === 'order-variants' && (
        <OrderVariants
          setPage={setPage}
          setOrderType={setOrderType}
          setSemiType={setSemiType}
          isAuto={isAuto}
          setAuto={setAuto}
        />
      )}
      {page === 'order' && (
        <Order
          setPage={setPage}
          orderType={orderType}
          semiType={semiType}
          warehouses={data.warehouses}
          page={page}
          notifications={notifications}
          setAuto={setAuto}
        />
      )}
    </div>
  )
}

export default App
