import React, {useContext} from 'react';
import styled from 'styled-components';
import Boton from './../Elementos/Boton'
import {TotalContadorContext} from './../Contextos/ContadorContext';


const ContenedordelResultado = styled.div`
      display:flex;
      width: 100%;
      min-width:566px;
      border-radius:0.625rem;
      border: 0.25rem solid hsl(217, 16%, 45%);
      justify-content: center;
      align-items:center;
      margin-top: 0rem;
      padding:1rem 2rem;
      min-height:70%;

`


const ResultadoJuego = () => {
      const {seleccionJugador} = useContext(TotalContadorContext);
      const {seleccionDelCpu} = useContext(TotalContadorContext);


      return ( 
            <ContenedordelResultado>
                  <Boton to="/"><h1>{seleccionJugador}</h1></Boton>
                  <Boton to="/"><h1>{seleccionDelCpu}</h1></Boton>
            </ContenedordelResultado>
       );
}
 
export default ResultadoJuego;