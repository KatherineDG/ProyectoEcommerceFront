import React from "react";
import "./Contact.css"

function Contact() {
    return(
        <div className="body-contact">
            <div className="contact">
                <div className="informacion-contact">
                    <div className="horarios-de-atencion-contact">
                        <p className="title-informacion-contact">Nuestro horario de atención</p>
                        <p className="horario-contact">lunes a viernes de 9 a 15 hs</p>
                        <p className="horario-contact">sabados de de 10 a 13 hs</p>
                    </div>
                    <div className="redes-sociales-contact">
                        <p className="title-informacion-contact">Tambien puedes seguirnos y contactarnos por nuestras redes sociales!</p>
                        <div className="contenedor-redes-sociales-contact">
                            <div className="red-social-contact">
                                <p className="user-red-social-contact-uno">@solsticioarg</p>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="user-red-social-contact"><img className="icon-red-social-contact" src="./images/icons/icon_facebook.png" alt="facebook"></img></a>
                            </div>
                            <div className="red-social-contact">
                                <p className="user-red-social-contact-uno">@solsticio</p>
                                <a href="https://web.facebook.com/" target="_blank" rel="noreferrer" className="user-red-social-contact"><img className="icon-red-social-contact" src="./images/icons/icon_instagram.png" alt="instagram"></img></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-deco">
                    <form className="form-contact">
                        <p className="title-contact-form">Contactanos</p>
                        <label className="label-form-contact">Nombre</label>
                        <input className="input-form-contact" type="text" placeholder=""></input>
                        <label className="label-form-contact">Email</label>
                        <input className="input-form-contact" type="email" placeholder=""></input>
                        <label className="label-form-contact">Mensaje</label>
                        <textarea className="input-form-contact-textarea" placeholder=""></textarea>
                        <button className="btn-send-contact">Enviar</button>

                        <div className="contenedor-deco-brillos-contact">
                            <img className="deco-brillo-black-izq" src="./images/icons/icon-brillo-black.png" alt="contact"></img>
                            <div className="deco-medio-brillos-contact"></div>
                            <img className="deco-brillo-black-der" src="./images/icons/icon-brillo-black.png" alt="contact"></img>
                        </div>
                    </form>


                </div>
                
            </div>
        </div>
    )
}

export default Contact;