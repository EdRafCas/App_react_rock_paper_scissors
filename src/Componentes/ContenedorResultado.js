import React, {useContext} from 'react';
import styled from 'styled-components';
import {Boton, BotonResultado} from './../Elementos/Boton'
import {TotalContadorContext} from './../Contextos/ContadorContext';
import tema from '../Tema';

import {

      Papel, 
      Piedra, 
      Tijera, 
      ContenedorOpciones,
      } from './../Elementos/ElementosJuego'



const ContenedordelResultado = styled.div`
      display:flex;
      width: 100%;
      min-width:566px;
      border-radius:0.625rem;
      border: 0.25rem solid ${tema.Borde};
      justify-content: space-evenly;
      align-items:center;
      margin-top: 0rem;
      padding:1rem 2rem;
      min-height:70%;
      

`


const ResultadoJuego = () => {
      const {seleccionJugador} = useContext(TotalContadorContext);
      const {seleccionDelCpu} = useContext(TotalContadorContext);
      const {resultadoJuego} = useContext(TotalContadorContext);


      return ( 
            <ContenedordelResultado>
                  
                  {
                        seleccionJugador === "papel" ? 
                        <ContenedorOpciones Papel>
                              <Boton name="papel" to="/"> 
                                          <Papel viewBox="0 0 49 59"/>
                              </Boton>
                        </ContenedorOpciones>
                        : seleccionJugador === "piedra" ?
                        <ContenedorOpciones Piedra>
                              <Boton name="piedra" to="/"> 
                                          <Piedra viewBox="0 0 49 59"/>
                              </Boton>
                        </ContenedorOpciones>
                        : seleccionJugador === "tijeras" ?
                        <ContenedorOpciones Tijera>
                              <Boton name="tijera" to="/"> 
                                          <Tijera viewBox="0 0 49 59"/>
                              </Boton>
                        </ContenedorOpciones>
                        : <ContenedorOpciones Vacio>
                              <Boton to="/"> 
                                          <h1>PLAY!</h1>
                              </Boton>
                        </ContenedorOpciones>
                  }
                  {resultadoJuego ? <BotonResultado to="/">
                                          <h1>{resultadoJuego}</h1>
                                    </BotonResultado>:
                  ""}
                  {
                        seleccionDelCpu === "papel" ? 
                        <ContenedorOpciones Papel>
                              <Boton name="papel" to="/"> 
                                          <Papel viewBox="0 0 49 59"/>
                              </Boton>
                        </ContenedorOpciones>
                        : seleccionDelCpu === "piedra" ?
                        <ContenedorOpciones Piedra>
                              <Boton name="piedra" to="/"> 
                                          <Piedra viewBox="0 0 49 59"/>
                              </Boton>
                        </ContenedorOpciones>
                        : seleccionDelCpu === "tijeras" ?
                        <ContenedorOpciones Tijera>
                              <Boton name="tijera" to="/"> 
                                          <Tijera viewBox="0 0 49 59"/>
                              </Boton>
                        </ContenedorOpciones>
                        : ""
                  }

            </ContenedordelResultado>
       );
}
 
export default ResultadoJuego;