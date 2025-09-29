import './ItemListContainer.css'
import Excursion from './Excursion';

import obtenerExcursiones from '../../data/MockAPIExcursiones';
import { obtenerExcursionesPorCategoria } from '../../data/MockAPIExcursiones';

import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { Link } from "react-router";

let excursionesObtenidas = []; // array para traer excursiones

function CapitalizarString(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
   
export default function ItemListContainer(props) {
  let {nombreCategoria} = useParams(); 
  const [excursionesObtenidas, setExcursionesObtenidas] = useState([]); //por defecto array excursiones vacío

  //corrijo la primer letra del string de categorizas para que haga match
  nombreCategoria = nombreCategoria ? CapitalizarString(nombreCategoria) : nombreCategoria;

  useEffect ( () => {
    
    if (nombreCategoria){
      //codigo para obtener SOLO EXCURSIONES FILTRADAS mediante promesa
      obtenerExcursionesPorCategoria(nombreCategoria)
      .then( (value) => {
        setExcursionesObtenidas(value);  //caso exitoso, uso setter para asignar el valor obtenido
      })
      .catch( (error) => {
        console.error ("Hubo un error al recuperar excursiones: " + error);  //caso error, muestro por consola
      })
    }
    else{
      //codigo para obtener TODAS las excursiones mediante promesa
      obtenerExcursiones()
      .then( (value) => {
        setExcursionesObtenidas(value);  //caso exitoso, uso setter para asignar el valor obtenido
      })
      .catch( (error) => {
        console.error ("Hubo un error al recuperar excursiones: " + error);  //caso error, muestro por consola
      })
    }
    
  }, [nombreCategoria]) 


  return (
    //texto de bienvenida primer renglón
    <div>
      <div className="bienvenida">{props.mensaje}</div>
      {
        // no tengo excursiones: renderizado condicional para el spinner
        excursionesObtenidas.length === 0 ? (
          <div className="loading">
            <span>Cargando excursiones de la base de datos</span>
            <img width="50px" src="../assets/loading.gif" />
          </div>
        )
          :
          (
            // sí tengo excursiones: mostrar categoria y cards
            <div className="excursiones">
              { //titulo de categoría (cuando aplica) 
                nombreCategoria && (
                  <div className="categoriaTitulo">
                    <span>Filtro por categoría: {nombreCategoria} ({excursionesObtenidas.length})</span>
                    <Link to="/" className="btnLimpiar"> Limpiar </Link>
                  </div>
                )
              }
              <div className="excursionesLista">
                { //muestro una card por cada excursión
                  excursionesObtenidas.map((excursion) => (
                    <Excursion key={excursion.codigoTour} {...excursion} />
                  ))
                }
              </div>
            </div>
          )
      }
    </div>
  )
}

