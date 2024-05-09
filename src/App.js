import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './templates/Home';
import Products from './templates/Products';
import Contact from './templates/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productos" element={<Products/>}/>
        <Route path="/contacto" element={<Contact/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
 