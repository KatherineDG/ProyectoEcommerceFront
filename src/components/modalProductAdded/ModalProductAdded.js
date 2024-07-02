import { React } from 'react';
import './ModalProductAdded.css';
import { useNavigate } from 'react-router-dom';

function ModalProductAdded({tituloProducto, color, talle, cantidad, direccion1, direccion2}) {

    const navigate = useNavigate();

    const irProductos = () => {
        navigate('/productos')
    }

    return (
        <div className='modal-product-added'>
            <div className='deco-agregado'>
            <div className='modal-content'>
                <img className='icon-check' src='/images/icons/icon-check.png' alt=''></img>
                <p className='titulo-producto-agregado'>¡Producto añadido al carrito!</p>
                <p className='titulo-producto-agregado'>GOTIC</p>
                <div className='informacion-producto-agregado'>
                    <div className="info-container">
                        <div className="info-item">
                            <p className='product-added-title'>Color</p><span className='separador'></span>
                        </div>
                        <div className="info-item">
                            <p className='product-added-title'>Talle</p><span className='separador'></span>
                        </div>
                        <div className="info-item">
                            <p className='product-added-title'>Cantidad</p><span className='separador'></span>
                        </div>
                    </div>
                    
                    <div className='valores-producto-agregado'>
                        <p>Negro</p>
                        <p>35</p>
                        <p>1</p>
                    </div>
                </div>
                <p className='precio-producto-agregado'>Subtotal: $45.000,00</p>
                <div className='btns-agregado'>
                    <button className='button-ver-carrito'>ver carrito</button>
                    <button className='button-seguir-comprando' onClick={() => irProductos()}>seguir comprando</button>
                </div>
            </div>
            </div>
           
        </div>
    );
}

export default ModalProductAdded;