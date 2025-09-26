import './ItemListContainer.css'
import excursiones from '../../data/excursiones';
import Excursion from './Excursion';

export default function ItemListContainer(props) {
  //console.log(excursiones);
  
  return (
    <>
      <h2>{props.mensaje}</h2>
      <div className="excursiones">
        {excursiones.map(excursion => (
          <Excursion key={excursion.codigoTour} {...excursion} />
        ))}
      </div>
    </>
  )
}

