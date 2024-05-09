import React from "react";
import "./Contact.css"

function Contact() {
    return(
        <div>
            <h1>Contacto</h1>
            <div className="contact">
                <div className="informacion-contact">
                    <div className="horarios-de-atencion-contact">
                        <p>horarios</p>
                    </div>
                    <div className="redes-sociales-contact">
                        <p>redes</p>
                    </div>
                </div>
                <div className="form-deco">
                <form className="form-contact">
                    <p className="title-contact">Contactanos</p>
                    <label className="label-form-contact">Nombre</label>
                    <input className="input-form-contact" type="text" placeholder=""></input>
                    <label className="label-form-contact">Email</label>
                    <input className="input-form-contact" type="email" placeholder=""></input>
                    <label className="label-form-contact">Mensaje</label>
                    <textarea className="input-form-contact" placeholder=""></textarea>
                    <button className="btn-send-contact">Enviar</button>
                </form>
                </div>
                
            </div>
        </div>
    )
}

export default Contact;