import React, {useState, useContext} from 'react';

const TotalContadorContext = React.createContext();

const useContador = () => useContext(TotalContadorContext);

const ContadorJuegoProvider = ({children}) =>{
      const [contador, modificarContador] = useState(1);

      return(
            <TotalContadorContext.Provider value={{contador:contador}}>
                  {children}
            </TotalContadorContext.Provider>
      )
      
}

export {ContadorJuegoProvider, useContador}