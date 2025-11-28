import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"; 
import RingCursor from './components/RingCursor';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter> {/* ✅ wrap your whole app */}
      <App />
     <RingCursor/>
    </BrowserRouter>
  </StrictMode>
)
