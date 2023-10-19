import { useState } from 'react'
import './styles/slyle.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { StockContextProvider } from './contexts/StockContexts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <StockContextProvider>
    <RouterProvider router={router} />
    </StockContextProvider>
  )
}

export default App
