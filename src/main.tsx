import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 className="mb-8 font-bold font-mono">Path of Exile 2</h1>
    <App />
  </StrictMode>,
)
