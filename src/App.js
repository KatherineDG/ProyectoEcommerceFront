import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './templates/Home';
import Products from './templates/Products';
import Contact from './templates/Contact';
import Product from './templates/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productos" element={<Products/>}/>
        <Route path="/contacto" element={<Contact/>}/>
        <Route path="/producto/:nombreProducto" element={<Product/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
 