import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' // Traeme el componente App desde el archivo App.jsx

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />   {/* React, mostrame el componente App */}
  </StrictMode>,
)
