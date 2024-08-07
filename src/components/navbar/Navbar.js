import { React, useState } from 'react';
import './Navbar.css';
import Carrito from '../../templates/Carrito';

function Navbar() {

    const [verCarrito, setVerCarrito] = useState(false)
    const [carritoVacio, setCarritoVacio] = useState(true)

    const mostrarCarrito = () => {
        setVerCarrito(!verCarrito)
    }

    return (
        <div className='navbar'>
            <div className='linea-promocion'>
                <p>20% DE DESCUENTO AL CONTADO O 3 CUOTAS SIN INTERÉS</p>
                <p>20% DE DESCUENTO AL CONTADO O 3 CUOTAS SIN INTERÉS</p>
                <p>20% DE DESCUENTO AL CONTADO O 3 CUOTAS SIN INTERÉS</p>               
            </div>
            <div className='contenedor-navbar'>
                <div className='contenedor-logo-marca'>
                    <img className='logo-marca' src='/images/logo.png' alt='logo' />
                </div>
                <div className='nav-secciones'>
                    <a className='nav-seccion' href='/'>INICIO</a>
                    <a className='nav-seccion' href='/productos'>PRODUCTOS</a>
                    <a className='nav-seccion' href='/contacto'>CONTACTO</a>
                </div>
                <div className='busqueda'>
                    <input className='input-busqueda' placeholder='Buscar'></input>
                    <span className='contenedor-lupa-icon'><img className='lupa-icon' src='/images/icons/icon-lupa.png' alt='lupa-icon'></img></span>
                </div>
                <div className='contenedor-icon-carrito'>
                    <img className='icon-carrito' src='/images/icons/icon-bolso.png' alt='icon-bolso' onClick={mostrarCarrito} ></img>
                    {carritoVacio ? <div className='notificacion-carrito'></div> : null}
                </div>
            </div>
            { verCarrito ?
                    <Carrito/>
                :
                    null }
        </div>
    )
}

export default Navbar;