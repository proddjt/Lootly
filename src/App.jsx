import { BrowserRouter, Route, Routes } from 'react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import Homepage from './Pages/Homepage'
import './App.css'
import Catalog from './Pages/Catalog'
import Layout from './Layout'

const queryClient = new QueryClient()

function App() {
  return (
    <div>
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
    </div>
  )
}

export default App
