import { useTheme } from '@heroui/use-theme'
import { BrowserRouter, Route, Routes } from 'react-router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import Homepage from './Pages/Homepage'
import './App.css'
import ThemeSwitch from './Components/ThemeSwitch'

const queryClient = new QueryClient()

function App() {
  const { theme } = useTheme()
  return (
    <div className={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  )
}

export default App
