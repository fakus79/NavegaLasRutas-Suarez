import ButtonAddToCart from "./ButtonAddToCart";
import { Link } from "react-router";

export default function Excursion({codigoTour, nombreTour, imgTour, resumenTour, descTour, incluyeTour, noIncluyeTour, diasDuracion, esFamiliar, precioPersona, dtoEfvo}) {

   

    return (
        <div className="excursiones card">
            <Link to={`/detalleTour/${codigoTour}`}>
                <img src={`../assets/${imgTour}`} className="card-img-top" style={{ padding: "20px" }} ></img>
                <div className="card-body">
                    <h5 className="card-title">{nombreTour}</h5>
                    <p className="card-text card-text-STY">{resumenTour}</p>
                </div>
                <div className="card-footer bg-transparent border-top border-success text-center w-100">
                    ${precioPersona}
                    <ButtonAddToCart></ButtonAddToCart>
                </div>
            </Link>
        </div>
    )

    
}

