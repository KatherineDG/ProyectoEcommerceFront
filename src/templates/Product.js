import {React, useState} from 'react';
import './Product.css'

function Product(){
    const [imagenElegida, setImagenElegida] = useState('images/zapatogoticuno.jpg')
    const [cantidad, setCantidad] = useState(1)

    const handleImagenElegida = (imagenElegida) => {
        setImagenElegida(imagenElegida)
    }

    const handleCantidad = (signo) => {
        setCantidad((prevCantidad) => {
            if (signo === '-' && prevCantidad > 1) {
                return prevCantidad - 1;
            } else if (signo === '+' && prevCantidad < 10) { //10 es la cantidad de producto disponible
                return prevCantidad + 1;
            } else {
                return prevCantidad;
            }
        });
    }

    return(
        <div className='contenedor-producto'>
            <div className='galeria-producto'>
                <div className='imagenes-producto'>
                    <img src='/images/zapatogoticuno.jpg' onClick={() => handleImagenElegida('/images/zapatogoticuno.jpg')} alt='img1' className={imagenElegida === '/images/zapatogoticuno.jpg' ? 'selected': ''}></img>
                    <img src='/images/zapatogoticdos.jpg' onClick={() => handleImagenElegida('/images/zapatogoticdos.jpg')} alt='img2' className={imagenElegida === '/images/zapatogoticdos.jpg' ? 'selected': ''}></img>
                </div>
                {imagenElegida ?
                    <div className='imagen-vista'>
                        <img src={imagenElegida} alt='img'></img>
                    </div>
                :
                    null
                }
            </div>
            <div className='informacion-producto'>
                <h4>GOTIC</h4>
                <p>10 u. disponibles</p>
                <p>$40.000</p>
                <p>Descripcion</p>
                <p>Zapatos goticos ficticios de cuero sintetico negro, con hebillas plateadas, punta puntiaguda y tacon grueso. Ideales para un estilo oscuro y distintivo.</p>
                <p>Eleccion</p>
                <p className='seleccion'>Color:</p>
                <label className='seleccion-color' style={{backgroundColor: 'white'}}>....</label>
                <label className='seleccion-color' style={{backgroundColor: 'black'}}>....</label>
                <p className='seleccion'>Talle:</p>
                <label className='seleccion-talle'>35</label>
                <label className='seleccion-talle'>36</label>
                <label className='seleccion-talle'>37</label>
                <div className='selector-cantidad'>
                    <button onClick={() => handleCantidad('-')}>-</button>
                    <p>{cantidad}</p>
                    <button onClick={() => handleCantidad('+')}>+</button>
                </div>
            </div>

        </div>
    )
}

export default Product;