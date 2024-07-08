import { React } from 'react'
import './Carrito.css'
import CardProductCart from '../components/cardProductCart/CardProductCart'

function Carrito() {
    return (
        <div className='carrito'>
            <div className='contenedor-titulo-carrito'>
                <img className='icon-close' src='/images/icons/icon_close.png' alt='close'></img>
                <p>TU CARRITO</p>
            </div>
            <CardProductCart/>
        </div>
    )
}

export default Carrito

                                