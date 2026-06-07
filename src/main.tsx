import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CounterProvider } from '@/context/CounterProvider'
import App from '@/App'
import '@/styles/globals.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>,
)
