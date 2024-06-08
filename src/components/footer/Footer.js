import { React } from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='columnas-footer'>
      <img className='logo-footer' src='/images/logo.png' alt=''></img>
        <div className='lista-secciones'>
          <h2 className='titulo-footer'>SOLSTICIO</h2>
          <a href='/home'>Inicio</a>
          <a href='/productos'>Productos</a>
          <a href='/contacto'>Contacto</a>
        </div>
        <div>
          <ul className='lista-contacto'>
            <li><p className='titulo-footer'>CONTACTANOS</p></li>
            <li><img className='icon-footer' src='/images/icons/icon-mail.png' alt=''></img><p>hola@gmail.com</p></li>
            <li><img className='icon-footer' src='/images/icons/icon-location.png' alt=''></img><p>Tigre</p></li>
            <li><img className='icon-footer' src='/images/icons/icon-clock.png' alt=''></img><p className='titulo-horario-footer'>Horarios de atencios</p></li>
            <li>
              <div className='horarios-footer'>
                <p>Lunes a viernes de 9 a 15 hs.</p>
                <p>Sabados de 10 a 13 hs</p>
              </div>
            </li>
          </ul>
          
        </div>
        <div>
          <p className='titulo-footer redes-footer'>REDES SOCIALES</p>
          <div className='redes-sociales-footer'>
            <img src='/images/icons/icon_instagram.png' alt=''></img>
          </div>
          <div className='horizontal-news'>
            <p className='titulo-footer'>NEWS</p><p className='duda-news'> ? </p>
          </div>
          <div className='horizontal-news'>
            <input className='input-news' placeholder='Email'></input><img src='/images/icons/icon_sent.png' alt=''></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;