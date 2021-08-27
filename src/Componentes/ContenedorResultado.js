import React, {useContext} from 'react';
import styled from 'styled-components';
import Boton from './../Elementos/Boton'
import {TotalContadorContext} from './../Contextos/ContadorContext';
import tema from '../Tema';

import {

      Papel, 
      Piedra, 
      Tijera, 
      ReglasJuego, 
      ContenedorOpcionA, 
      ContenedorOpcionB, 
      ContenedorOpcionC} from './../Elementos/ElementosJuego'



const ContenedordelResultado = styled.div`
      display:flex;
      width: 100%;
      min-width:566px;
      border-radius:0.625rem;
      border: 0.25rem solid ${tema.Borde};
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
                  {seleccionJugador == "papel" 
                  ? 
                  <ContenedorOpcionA>
                        <Boton name="papel" to="/"> 
                                    <Papel viewBox="0 0 49 59"/>
                        </Boton>
                  </ContenedorOpcionA>
                  : <h1>diferente</h1>}

                  {seleccionDelCpu == "piedra" 
                  ? 
                  <ContenedorOpcionB>
                        <Boton name="piedra" to="/"> 
                                    <Piedra viewBox="0 0 49 59"/>
                        </Boton>
                  </ContenedorOpcionB>
                  : <h1>diferente</h1>}
            </ContenedordelResultado>
       );
}
 
export default ResultadoJuego;