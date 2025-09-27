import './ItemListContainer.css'
import excursiones from '../../data/excursiones';
import Excursion from './Excursion';

export default function ItemListContainer(props) {
  
  return (
    //texto de bienvenida primer renglón
    //abajo una card por cada excursion
    <div>
      <div className="bienvenida"> {props.mensaje}</div>      
      <div className="excursiones">
        {excursiones.map(excursion => (
          <Excursion key={excursion.codigoTour} {...excursion} />
        ))}
      </div>
    </div>
  )
}

