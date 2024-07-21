import React, { useEffect, useState } from "react";
import CardProduct from "../components/cardProduct/CardProduct";
import CaracteristicsSales from "../components/caracteristicsSales/CaracteristicsSales";
import "./Home.css";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './stylesSwiper.css';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";


function Home() {

    const [isMobile, setIsMobile] =  useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768); // Cambia 768 por el ancho que consideres para dispositivos móviles
        };
    
        handleResize(); // Llama a la función para establecer el estado inicial
    
        window.addEventListener('resize', handleResize); // Agrega un event listener para detectar cambios en el tamaño de la pantalla
    
        return () => {
          window.removeEventListener('resize', handleResize); // Limpia el event listener cuando el componente se desmonta
        };
      }, []);
    

    return (
        <div className="body">
            <Navbar />
            <div className="presentacion">                
                <div className="texto-presentacion">
                    <p>¡Hola! ¡Bienvenido/a a <b>Solsticio</b>!</p><p>¿Buscas <b>zapatos</b>? ¡Estas en el lugar correcto!</p>
                 </div>
                 <div  className="contenedor-bajar">
                    <img className="bajar" src="/images/icons/icon_down.png" alt="bajar"></img>
                 </div>
                 
                 <div className="contenedor-imagen-presentacion">
                    <img src="/images/homedeco.jpg" alt="zapatos" className="imagen-presentacion"/>
                 </div>



            </div>
            <h1 className="titulo">Hecha un vistazo a nuestra variedad de calzados</h1>
            <div>
                {isMobile ?
                    <div>
                        <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{ clickable: true, }} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
                            <SwiperSlide> <CardProduct urlImage={'/images/zapatogoticuno.jpg'} nameProduct={'GOTIC'} priceNowProduct={'$50.000,00'} inDiscount={false}/></SwiperSlide>
                            <SwiperSlide><CardProduct urlImage={'/images/zapatosimplewuno.jpg'} nameProduct={'SIMPLE W'} priceNowProduct={'$40.000,00'} inDiscount={true} priceLastProduct={'$45.000,00'} porcentageDiscount={'11'}/></SwiperSlide>
                            <SwiperSlide><CardProduct urlImage={'/images/zapatoextrauno.jpg'} nameProduct={'EXTRA'} priceNowProduct={'$50.000,00'} inDiscount={false}/></SwiperSlide>
                        </Swiper>
                    </div>
                :
                    <div>
                        <div className="home-products">
                            <CardProduct urlImage={'/images/zapatogoticuno.jpg'} nameProduct={'GOTIC'} priceNowProduct={'$50.000,00'} inDiscount={false}/>
                            <CardProduct urlImage={'/images/zapatosimplewuno.jpg'} nameProduct={'SIMPLE W'} priceNowProduct={'$40.000,00'} inDiscount={true} priceLastProduct={'$45.000,00'} porcentageDiscount={'11'}/>
                            <CardProduct urlImage={'/images/zapatoextrauno.jpg'} nameProduct={'EXTRA'} priceNowProduct={'$50.000,00'} inDiscount={false}/>
                        </div>
                    </div>
                    } 
            </div>
            <div className="contenedor-boton-ver-productos">
                <button className="btn-ver-productos">VER TODOS LOS PRODUCTOS</button>
            </div>
            <div className="home-caracteristicas">
                <CaracteristicsSales urlIcono={'/images/icons/icon_truck.png'} titulo={'ENVIAMOS TU COMPRA'} subtitulo={'Entregas a todo el país'} />  
                <CaracteristicsSales urlIcono={'/images/icons/icon_lock.png'} titulo={'PAGÁ COMO QUIERAS'} subtitulo={'Trajetas de crédito o efectivo'} />  
                <CaracteristicsSales urlIcono={'/images/icons/icon_card.png'} titulo={'COMPRÁ CON SEGURIDAD'} subtitulo={'Tus datos siempre protegidos'} />  
            </div>

            <Footer/>
        </div>
    );
}

export default Home; 