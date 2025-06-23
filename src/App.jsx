import { BrowserRouter, Route, Routes } from 'react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useState } from 'react'

import Homepage from './Pages/Homepage'
import './App.css'
import Catalog from './Pages/Catalog'
import Layout from './Layout'
import UserContext from './Context/UserContext'
import FavContext from './Context/FavContext'
import DataURLContext from './Context/DataURLContext'
import DataGridTitleContext from './Context/DataGridTitleContext'
import OrderingContext from './Context/OrderingContext'

const queryClient = new QueryClient()

function App() {
  const [user, setUser] = useState(null)
  const [favs, setFavs] = useState([])
  const [url, setUrl] = useState('https://api.rawg.io/api/games?key=944825bd001f426384c5e9139fa3f0ef')
  const [title, setTitle] = useState('Tutti i giochi')
  const [order, setOrder] = useState('')
  return (
    <div>
      <UserContext.Provider value={{user, setUser}}>
      <FavContext.Provider value={{favs, setFavs}}>
      <DataURLContext.Provider value={{url, setUrl}}>
      <DataGridTitleContext.Provider value={{title, setTitle}}>
      <OrderingContext.Provider value={{order, setOrder}}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route element={<Layout />}>
                <Route path="/catalog" element={<Catalog />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </OrderingContext.Provider>
      </DataGridTitleContext.Provider>
      </DataURLContext.Provider>
      </FavContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
