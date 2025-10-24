import {createContext} from 'react';

const cartContext = createContext();

export function CartProvider(props){
    return(
        <cartContext.Provider value="custom">
            {props.children}
        </cartContext.Provider>
    )
}

export default cartContext;

