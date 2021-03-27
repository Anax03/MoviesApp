import React,{createContext,useReducer} from 'react';
import Reducer from '../reducer/Reducer';




export const TheContextMovies= createContext();

 const MoviesContextProvider = (props)=> {

    const [data,dispatch]=useReducer(Reducer,{numberOfMovies:0,
        infosMovies:[]});

        

   
    
        return (  
           
            <TheContextMovies.Provider value={{data,dispatch}}>
            {props.children}
            </TheContextMovies.Provider>
        );
    
}
 
export default MoviesContextProvider;