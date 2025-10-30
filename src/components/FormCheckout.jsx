import './FormCheckout.css';
import { useState } from "react";

export default function FormCheckout(props){
    const [formulario, setFormulario] = useState({nombre:"", telefono:"", email: ""});

    function manejarSubmit(event){
        event.preventDefault();
        props.handler(formulario);
    }

    function limpiarForm(){
        setFormulario({nombre:"", telefono:"", email: ""});
    }

    function manejarCambiosInputs(event){
        const valor = event.target.value;
        const input = event.target.name;
        const nuevoForm = {...formulario};
        nuevoForm[input] = valor;
        setFormulario(nuevoForm);
    }

    return (
        <div className="cart-form">
            <h3>Ingrese sus datos</h3>
            <form onSubmit={manejarSubmit}>
                <div className="form-group">
                    <label>Nombre completo
                        <input
                            name="nombre"
                            type="text"
                            value={formulario.nombre} 
                            onChange={manejarCambiosInputs}
                            placeholder="Ingrese su nombre"
                            pattern="^[A-Za-z]+([ '\-]?[A-Za-z]+){0,2}$"
                            required
                        />
                    </label>
                    <label>Teléfono
                        <input
                            name="telefono"
                            type="tel"
                            value={formulario.telefono}
                            onChange={manejarCambiosInputs}
                            placeholder="Ingrese su teléfono"
                            required
                        />
                    </label>
                    <label>Email
                        <input
                            name="email"
                            type="email"
                            value={formulario.email}
                            onChange={manejarCambiosInputs}
                            placeholder="Ingrese su e-mail"
                            required
                        />
                    </label>
                </div>
                <button className="checkout-btn" type="submit" >Finalizar compra</button>
                <button className="clear-btn" type="button" onClick={limpiarForm}>Limpiar datos</button>
            </form>
        </div>
    )
}