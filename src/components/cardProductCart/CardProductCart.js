import { React } from 'react'
import './CardProductCart.css'

function CardProductCart() {
    return (
            <div className='card-product-cart'>
                <img className='imagen-producto' src='/images/zapatogoticuno.jpg' alt='producto' />
                <div className='contenedor-info-producto'>
                    <p className='nombre-producto'>Gotic</p>
                    <p className='info-producto'>Cantidad: 1</p>
                    <p className='info-producto'>Color: Negro</p>
                    <p className='info-producto'>Talle: 35</p>
                    <p className='precio-producto'>Subtotal: $45.000,00</p>
                </div>
                <div className='contenedor-icon-eliminar'>
                    <img className='icon-eliminar' src='/images/icons/icon_close.png' alt='icon-eliminar'></img>
                </div>
            </div>
    )
}

export default CardProductCart