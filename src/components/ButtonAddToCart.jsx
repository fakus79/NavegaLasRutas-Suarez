import { useState } from "react";

export default function ButtonAddToCart() {

    let [status, setStatus] = useState("no agregado");

    function AgregarExcursion(){
        
        setStatus =("agregado");
        alert("added");
        console.log(status);
    }
    return (
        <div>
            <button className="buttonCart" onClick={AgregarExcursion}>Agregar</button>
        </div>
    )

}
