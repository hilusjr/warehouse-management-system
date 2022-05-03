import { useEffect, useState } from 'react'
import './App.css'
import Main from './components/Main'
import Warehouse from './components/Warehouse'
import data from './json/warehouses.json'

function App() {
  const [page, setPage] = useState('main')
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

  return (
    <div
      className="App"
      style={
        page === 'main'
          ? { backgroundColor: 'var(--dark-1000)' }
          : { backgroundColor: 'var(--dark-500)' }
      }
    >
      <header>
        <span>wms</span>
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
    </div>
  )
}

export default App
