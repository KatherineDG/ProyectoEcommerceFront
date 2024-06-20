import {React, useState} from 'react';
import './Product.css'
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";


function Product(){
    const [imagenElegida, setImagenElegida] = useState('images/zapatogoticuno.jpg')
    const [cantidad, setCantidad] = useState(1)
    const [talle, setTalle] = useState(null)
    const [color, setColor] = useState('')

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

    const handleTalle = (talleSeleccionado) => {
        if (talle === talleSeleccionado) {
            setTalle(null)
        }
        else {
            setTalle(talleSeleccionado)
        }
    }

    const handleColor = (colorSeleccionado) => {
        if (color === colorSeleccionado) {
            setColor('')
        }
        else {
            setColor(colorSeleccionado)
        }
    }

    return(
        <div className='body'>
            <Navbar/>
            <button className='btn-volver'><img src='./images/icons/icon_flecha_reversa.png' alt='volver'></img></button>
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
                    <h4 className='titulo-producto'>GOTIC</h4>
                    <p className='descricpion-producto'>10 u. disponibles</p>
                    <p className='precio'>$40.000</p>
                    <div className='linea-separadora'></div>
                    <p className='subtitulo-producto'>DESCRIPCION</p>
                    <p className='descricpion-producto'>Zapatos goticos ficticios de cuero sintetico negro, con hebillas plateadas, punta puntiaguda y tacon grueso. Ideales para un estilo oscuro y distintivo.</p>
                    <p className='subtitulo-producto'>ELECCION</p>
                    <p className='seleccion'>color</p>
                    <label className={`seleccion-color ${color === 'blanco' ? 'selected' : ''}`} style={{backgroundColor: 'white'}} onClick={() => handleColor('blanco')} ><span style={{ visibility: 'hidden' }}>....</span></label>
                    <label className={`seleccion-color ${color === 'negro' ? 'selected' : ''}`} style={{backgroundColor: 'black'}} onClick={() => handleColor('negro')}><span style={{ visibility: 'hidden' }}>....</span></label>
                    <p className='seleccion'>talle</p>
                    <label className={`seleccion-talle ${talle === 35 ? 'selected' : ''}`} onClick={() => handleTalle(35)}>35</label>
                    <label className={`seleccion-talle ${talle === 36 ? 'selected' : ''}`} onClick={() => handleTalle(36)}>36</label>
                    <label className={`seleccion-talle ${talle === 37 ? 'selected' : ''}`} onClick={() => handleTalle(37)}>37</label>
                    <div className='selector-cantidad'>
                        <button onClick={() => handleCantidad('-')}>-</button>
                        <p>{cantidad}</p>
                        <button onClick={() => handleCantidad('+')}>+</button>
                    </div>
                    <button className='btn-anadir'>Añadir al carrito</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Product;