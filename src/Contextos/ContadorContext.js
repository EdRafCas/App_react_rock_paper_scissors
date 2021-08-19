import React, {useState} from 'react';

const TotalContadorContext = React.createContext();


const ContadorJuegoProvider = ({children}) =>{
      const [contador, modificarContador] = useState(0);
      const [seleccionJugador, modificarSeleccion] =useState("");
      const [seleccionDelCpu, modificarSeleccionCpu] =useState("");
      const [resultadoJuego, modificarResultado] =useState("");
      
      return(
            <TotalContadorContext.Provider value={{contador:contador, 
                                                      modificarContador:modificarContador,
                                                      seleccionJugador:seleccionJugador,
                                                      modificarSeleccion:modificarSeleccion,
                                                      seleccionDelCpu:seleccionDelCpu,
                                                      modificarSeleccionCpu:modificarSeleccionCpu,
                                                      resultadoJuego:resultadoJuego,
                                                      modificarResultado:modificarResultado
                                                      
                                                      }}>
                  {children}
            </TotalContadorContext.Provider>
      )
      
}

export {ContadorJuegoProvider, TotalContadorContext}