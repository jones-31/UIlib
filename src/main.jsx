import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import reportWebVitals from './reportWebVitals.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>WEBAPP</h1>
    <App />
  </StrictMode>,
)
reportWebVitals();