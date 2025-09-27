import './ItemListContainer.css'
import excursiones from '../../data/excursiones';
import Excursion from './Excursion';
import { useParams } from "react-router";
import ButtonAddToCart from "./ButtonAddToCart";

export default function ItemDetailContainer() {
  const {idTour} = useParams(); 
  const tourElegido = excursiones.find ( (item) => item.codigoTour == Number(idTour));

  let strDias = '';
  let strDtoefvo = '';
  let strFamilias = '';

  //armo string para días, familias, y dto efvo
  strDias = (tourElegido.diasDuracion > 1) ? "días" : "día";
  strFamilias = tourElegido.esFamiliar ? " (apto familias)" : " (no apto familias)";
  if (Number(tourElegido.dtoEfvo) > 0) strDtoefvo = ' (' + tourElegido.dtoEfvo + '% dto efvo)';

  return (
      <div className="excursionDetalle">
          <div className="excursionInfo">
              <h2 className="excursionTitulo">{tourElegido.nombreTour}</h2>
              <p className="excursionItems"><b>Descripción:</b>{tourElegido.descTour}</p>
              <p className="excursionItems"><b>Duración:</b>{tourElegido.diasDuracion} ${' ' + strDias + '' + strFamilias}</p>
              <p className="excursionItems"><b>Qué Incluye:</b>{tourElegido.incluyeTour}</p>
              <p className="excursionItems"><b>Qué no incluye:</b>{tourElegido.noIncluyeTour} </p>
              <p className="excursionItems"><b>Precio por persona:</b> $ {tourElegido.precioPersona + strDtoefvo}</p>
              <div>
                  <button>Agregar al carrito</button>
              </div>
          </div>
          <div className="excursionImagen">
              <img src={`../assets/${tourElegido.imgTour}`} ></img>
          </div>
      </div>
  )
}


