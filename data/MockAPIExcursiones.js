import excursiones from './excursiones';

// funcion que usa una promesa para simular que se tarda en devolver array de excursiones
export default function obtenerExcursiones(){
    
    const promiseExcursiones = new Promise ( (resolve,reject) =>{
        //uso timeout para devolver el array a los 5 segundos
        setTimeout( () => {
            resolve(excursiones); //descomentar para simular éxito recuperando datos
            //reject("error"); //descomentar para simular error recuperando datos
        },5000)
    })
    
    return promiseExcursiones;
}