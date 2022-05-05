import { useEffect, useState } from 'react'
import './App.css'
import Main from './components/Main'
import OrderVariants from './components/OrderVariants'
import Order from './components/Order'
import Warehouse from './components/Warehouse'
import data from './json/warehouses.json'

function App() {
  const [page, setPage] = useState('order-variants')
  const [prevPage, setPrevPage] = useState('')
  const [orderType, setOrderType] = useState('Manual')
  const [semiType, setSemiType] = useState('')
  const [warehouse, setWarehouse] = useState(0)

  useEffect(() => {
    setInterval(() => {
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
    }, 1000)
  }, [])

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
        />
      )}
      {page === 'warehouse' && (
        <Warehouse warehouse={data.warehouses[warehouse]} setPage={setPage} />
      )}
      {page === 'order-variants' && (
        <OrderVariants
          setPage={setPage}
          setOrderType={setOrderType}
          setSemiType={setSemiType}
          setPrevPage={setPrevPage}
        />
      )}
      {page === 'order' && (
        <Order
          setPage={setPage}
          orderType={orderType}
          semiType={semiType}
          data={data}
          page={page}
        />
      )}
    </div>
  )
}

export default App
