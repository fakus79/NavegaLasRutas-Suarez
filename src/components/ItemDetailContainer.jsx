import './ItemListContainer.css'
import { useParams, useNavigate } from "react-router";
import { obtenerExcursionId } from '../../data/firebase';
import { useState, useEffect, useContext } from 'react';
import cartContext from '../context/cartContext';

let strDias = '';
let strDtoefvo = '';
let strFamilias = '';

export default function ItemDetailContainer() {

  const { agregarAlCarrito } = useContext(cartContext);
  const navigate = useNavigate();

  // la excursión me llega por parámetros y la busco en el array
  const {idTour} = useParams(); 
  const [tourElegido,setTour] = useState(null); 

  //agregar al carrito y mostrar el modal
  function agregarTour(tourElegido) {
    agregarAlCarrito(tourElegido);
    const modal = new bootstrap.Modal(document.getElementById('modalTourAgregado'));
    modal.show();
  }

  //cerrar modal y redirigir al carrito
  function manejarIrCarrito() {
    const modalElement = document.getElementById('modalTourAgregado');
    const modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) modal.hide();
    navigate('/Cart');
  }

  useEffect ( () => {
      //codigo para obtener la excursión mediante promesa
      obtenerExcursionId(idTour)
      .then( (value) => {
        setTour(value);  //caso exitoso, uso setter para asignar el valor obtenido y armo strings 
        strDias = (value.diasDuracion > 1) ? "días" : "día";
        strFamilias = value.esFamiliar ? " (apto familias)" : " (no apto familias)";
        if (Number(value.dtoEfvo) > 0) strDtoefvo = ' (' + value.dtoEfvo + '% dto efvo)';
      })
      .catch( (error) => {
        console.error ("Hubo un error al recuperar la excursión: " + error);  //caso error, muestro por consola
      })
    }, [idTour]) 
  
  return (
      //renderizado condicional para el spinner de carga o sino
      //recuadro que muestra los detalles de una excursión
      <div className="excursionDetalle">
        {        
          !tourElegido && (
          <div className="loading">
            <span>Cargando excursión de la base de datos</span>
            <img width="50px" src="/assets/loading.gif"/>
          </div>
          )
        }
        { tourElegido && (
          <>
          <div className="excursionInfo">
              <h2 className="excursionTitulo">{tourElegido.nombreTour}</h2>
              <p className="excursionItems"><b>Descripción: </b>{tourElegido.descTour}</p>
              <p className="excursionItems"><b>Categoría: </b>{tourElegido.categoriaTour}</p>
              <p className="excursionItems"><b>Duración: </b>{tourElegido.diasDuracion} {' ' + strDias + '' + strFamilias}</p>
              <p className="excursionItems"><b>Qué Incluye: </b>{tourElegido.incluyeTour}</p>
              <p className="excursionItems"><b>Qué no incluye: </b>{tourElegido.noIncluyeTour} </p>
              <p className="excursionItems"><b>Precio por persona:</b> $ {tourElegido.precioPersona + strDtoefvo}</p>
              <div>
                  <button className="buttonCart" onClick={ () => agregarTour(tourElegido)}>Agregar visitante</button>
              </div>
          </div>
          <div className="excursionImagen">
              <img src={`/assets/${tourElegido.imgTour}`} ></img>
          </div>
          { //modal para cuando se agrega un tour
            <div className="modal fade" id="modalTourAgregado" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body"> El tour fue agregado al carrito de compras </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> Volver </button>
                  <button type="button" id="btnConfirmar" className="btn btn-primary" onClick={manejarIrCarrito}>
                    Ir al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
          }
          </>
        )}
      </div>
  )
}


