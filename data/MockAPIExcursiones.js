import excursiones from './excursiones';

// funcion que usa una promesa para simular que se tarda en devolver array de excursiones
export default function obtenerExcursiones(){
    const promiseExcursiones = new Promise ( (resolve,reject) =>{
        //uso timeout para devolver el array a los 4000 milisegundos
        setTimeout( () => {
            //comentar o descomentar para simular éxito/error recuperando datos
            resolve(excursiones); 
            //reject("Base de datos no operativa"); 
        }, 4000)  
    })
    
    return promiseExcursiones;
}

export function getExcursionId(idTour){
    const excursionPedida = excursiones.find ( (item) => item.codigoTour == Number(idTour));

    const promiseExcursion = new Promise ( (resolve,reject) =>{
        //uso timeout para devolver la excursión a los 2000 milisegundos
        setTimeout( () => {
            //comentar o descomentar para simular éxito/error recuperando datos
            resolve(excursionPedida); 
            //reject("Base de datos no operativa"); 
        }, 2000)  
    })
    
    return promiseExcursion;
}