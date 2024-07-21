import { React, useState } from 'react'
import './Carrito.css'
import CardProductCart from '../components/cardProductCart/CardProductCart'

function Carrito() {
    
    const [hayProductosEnCarrito, setHayProductosEnCarrito] = useState(true)

    return (
        <div className='carrito'>
            <div className='contenedor-titulo-carrito'>
                <p>TU CARRITO</p>
            </div>
            {hayProductosEnCarrito ? 
            <div>
                <CardProductCart/>
                <CardProductCart/>
                <div className='contenedor-total-carrito'>
                    <p>Total: $45.000,45</p>
                </div>
            </div>
            :
            <div className='contenedor-texto-carrito-vacio'>
                <p>No hay productos agregados</p>
            </div>
            }

        </div>
    )
}

export default Carrito

                                