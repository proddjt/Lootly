import { BrowserRouter, Route, Routes } from 'react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { create } from 'zustand'

import Homepage from './Pages/Homepage'
import './App.css'
import Catalog from './Pages/Catalog'
import Layout from './Layout'
import UserContext from './Context/UserContext'
import FavContext from './Context/FavContext'
import DataURLContext from './Context/DataURLContext'
import DataGridTitleContext from './Context/DataGridTitleContext'
import OrderingContext from './Context/OrderingContext'
import NotFound from './Pages/NotFound'
import GameDetail from './Pages/GameDetail'
const queryClient = new QueryClient()

export const useMessageStore = create((set) => ({
  message: "",
  setMessage: (text) => set((state) => ({ message: text })),
  resetMessage: () => set((state) => ({ message: "" }))
}))

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
                <Route path="/games/:id" element={<GameDetail />} />
              </Route>
              <Route path="*" element={<NotFound />} />
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
