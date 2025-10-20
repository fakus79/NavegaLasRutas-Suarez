import excursiones from './excursiones';

// funcion que usa una promesa para simular que se tarda en devolver array de excursiones
export default function obtenerExcursionesVIEJO(){
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

export function obtenerExcursionIdVIEJO(idTour){
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

export function obtenerExcursionesPorCategoria(nombreCategoria){

    let excursionesFiltradas = [];

    //switch porque tengo algunas categorías con nombre normal, pero otras depeden de atributos de la excursión

    //filtro por CATEGORIAS FIJAS (caso especial DIA, FAMILIA y DESCUENTO)
    switch(nombreCategoria){
        case 'Poreldia':
            //filtro solo las que duran un día
            excursionesFiltradas = excursiones.filter ( (item) => item.diasDuracion === 1);
            break;
        case 'Variosdias':
            //filtro solo las que duran más un día
            excursionesFiltradas = excursiones.filter ( (item) => Number(item.diasDuracion) > 1);
            break;
        case 'Familiares':
            //filtro solo excursiones que son familiares
            excursionesFiltradas = excursiones.filter ( (item) => item.esFamiliar == true);
            break;
        case 'Dtoefvo':
            //filtro solo excursiones que tienen más de 0 descuento efvo
            excursionesFiltradas = excursiones.filter ( (item) => item.dtoEfvo > 0);
            break;
        default: {          
            //filtro por CATEGORIAS SEGÚN NOMBRE POR PARAMÁMETRO
            excursionesFiltradas = excursiones.filter ( (item) => item.categoriaTour === nombreCategoria);     
            }
    }
        
    const promiseExcursionesFiltradas = new Promise ( (resolve,reject) =>{
        //uso timeout para devolver las excursiones de la categoría a los 2000 milisegundos
        setTimeout( () => {
            //sí se encontraron excursiones para la categoría
            if (excursionesFiltradas.length >=1){
                //comentar o descomentar para simular éxito/error recuperando datos
                resolve(excursionesFiltradas); 
                //reject("Base de datos no operativa"); 
            }
            else {
                //no se encontraron excursiones para la categoría
                reject("No se encontraron items para la categoría especificada");
            }
        }, 2000)  
    })
    
    return promiseExcursionesFiltradas;
}