import React from "react"
import { Routes, Route } from "react-router-dom";
import Header  from "./components/Header"
import { ThemeProvider } from "./components/themeProvider";
import RequestService from "./components/RequestService"
import ContactUS from "./components/ContactUS";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ScrollToTop from "./components/scrollToTop";
function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme"> 
    
    <Header />
     <div className="pt-15"> {/* To push content below fixed header */}
    <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/requestService" element={<RequestService />} />
          <Route path="/contact" element={<ContactUS />} />
        </Routes>
        </div>
        <Footer/>
    </ThemeProvider>
  )
}

export default App