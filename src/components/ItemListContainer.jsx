import './ItemListContainer.css'
import excursiones from '../../data/excursiones';
import Excursion from './Excursion';
import obtenerExcursiones from '../../data/MockAPIExcursiones';
import { useState, useEffect } from 'react';

let excursionesObtenidas = []; // array para traer excursiones

export default function ItemListContainer(props) {
  const [excursionesObtenidas, setExcursionesObtenidas] = useState([]); //por defecto array excursiones vacío

  useEffect ( () => {
    //codigo para obtener las excursiones mediante promesa
    obtenerExcursiones()
    .then( (value) => {
      setExcursionesObtenidas(value);  //caso exitoso, uso setter para asignar el valor obtenido
    })
    .catch( (error) => {
      console.error ("Hubo un error al recuperar excursiones: " + error);  //caso error, muestro por consola
    })
  }, [excursionesObtenidas]) 
   

  return (
    //texto de bienvenida primer renglón
    //abajo una card por cada excursion
    <div>
      <div className="bienvenida"> {props.mensaje}</div>      
      <div className="excursiones">
        {excursionesObtenidas.map(excursion => (
          <Excursion key={excursion.codigoTour} {...excursion} />
        ))}
      </div>
    </div>
  )
}

