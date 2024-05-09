import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './templates/Home';
import Products from './templates/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productos" element={<Products/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
 