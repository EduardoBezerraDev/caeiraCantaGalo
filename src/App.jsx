import '/public/assets/css/core.css'
import Home from './pages/Home/index.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveMenu from './components/Navbar';
import About from './pages/About';
import Products from './pages/products/index.jsx';
import Contact from './pages/Contact/index.jsx';
const App = () => {

  return (
    <BrowserRouter>
      <ResponsiveMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
