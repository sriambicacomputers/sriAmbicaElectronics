import React from "react"
import { Routes, Route } from "react-router-dom";
import Header  from "./components/Header"
import { ThemeProvider } from "./components/themeProvider";
import RequestService from "./components/RequestService"
import ContactUS from "./components/ContactUS";
import Footer from "./components/Footer";
function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme"> 
    
    <Header />
     <div className="pt-15"> {/* To push content below fixed header */}
    
        <Routes>
          <Route path="/requestService" element={<RequestService />} />
          <Route path="/contact" element={<ContactUS />} />
        </Routes>
        </div>
        <Footer/>
    </ThemeProvider>
  )
}

export default App