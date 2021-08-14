import React, {useState} from 'react';

const TotalContadorContext = React.createContext();


const ContadorJuegoProvider = ({children}) =>{
      const [contador, modificarContador] = useState(0);

      return(
            <TotalContadorContext.Provider value={{contador:contador, modificarContador:modificarContador}}>
                  {children}
            </TotalContadorContext.Provider>
      )
      
}

export {ContadorJuegoProvider, TotalContadorContext}