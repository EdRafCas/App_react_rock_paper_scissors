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
      flex-direction:column;
      border-radius:0.625rem;
      /* border: 0.25rem solid ${tema.Borde}; */
      justify-content:space-evenly;
      align-items:center;
      margin-top: 0rem;
      min-height:80%;

      @media(max-width: 500px) { 
            flex-direction:column;
            justify-content: space-evenly;
            min-height:80%
    }
     

`

const ContenedorElecciones =styled.div`
      /* border: 0.25rem solid ${tema.Borde}; */
      justify-content:center;
      display:flex;
      width: 100%;
      flex-direction:row;
      margin:0;
      padding:0;


`
const Resultado = styled.div`
      display:flex;
      width:100%;
      flex-direction:column;
      justify-content:space-evenly;
      align-items:center;

      @media(max-width: 500px) { 
      flex-direction:column-reverse;
    }
      

`

const ResultadoFinal = styled.div`
      display:flex;
      width:100%;
      flex-direction:column;
      justify-content:space-evenly;
      align-items:center;
      margin:1rem;

      @media(max-width: 500px) { 
      flex-direction:row;
      justify-content:center;
            h1{
                  font-size:1.2rem;
            
      }
    }
      
`

const Eleccion = styled.h1`
      display:inline-block;
      font-size:2rem;
      color:white;
      margin:auto;
      text-align:center;
      margin: 2rem 0;


      @media(max-width: 500px) { 
      font-size:1rem;
      margin: 0.5rem 0;
      
    }
      
`


const ResultadoJuego = () => {
      const {seleccionJugador} = useContext(TotalContadorContext);
      const {seleccionDelCpu} = useContext(TotalContadorContext);
      const {resultadoJuego} = useContext(TotalContadorContext);


      return ( 
            <ContenedordelResultado>
                  <ContenedorElecciones>
                  {
                        seleccionJugador === "papel" ?
                        <Resultado>
                              <Eleccion>You picked</Eleccion>
                              <ContenedorOpciones Papel>
                                    <Boton name="papel" to="/Resultado"> 
                                                <Papel viewBox="0 0 49 59"/>
                                    </Boton>
                              </ContenedorOpciones>
                        </Resultado>
                              
                        : seleccionJugador === "piedra" ?
                        <Resultado>
                              <Eleccion>You picked</Eleccion>
                              <ContenedorOpciones Piedra>
                                    <Boton name="piedra" to="/Resultado"> 
                                                <Piedra viewBox="0 0 49 59"/>
                                    </Boton>
                              </ContenedorOpciones>
                        </Resultado>
                        
                        : seleccionJugador === "tijeras" ?
                        <Resultado>
                              <Eleccion>You picked</Eleccion>
                              <ContenedorOpciones Tijera>
                                    <Boton name="tijera" to="/Resultado"> 
                                                <Tijera viewBox="0 0 49 59"/>
                                    </Boton>
                              </ContenedorOpciones>
                        </Resultado>
                        : <ContenedorOpciones Vacio>
                              <Boton to="/"> 
                                          <h1>PLAY!</h1>
                              </Boton>
                        </ContenedorOpciones>
                  }
                  
                  {
                        seleccionDelCpu === "papel" ? 
                        <Resultado>
                              <Eleccion>CPU picked</Eleccion>
                              <ContenedorOpciones Papel>
                                    <Boton name="papel" to="/Resultado"> 
                                                <Papel viewBox="0 0 49 59"/>
                                    </Boton>
                              </ContenedorOpciones>
                        </Resultado>
                        
                        : seleccionDelCpu === "piedra" ?
                        <Resultado>
                              <Eleccion>CPU picked</Eleccion>
                              <ContenedorOpciones Piedra>
                                    <Boton name="piedra" to="/Resultado"> 
                                                <Piedra viewBox="0 0 49 59"/>
                                    </Boton>
                              </ContenedorOpciones>
                        </Resultado>
                        : seleccionDelCpu === "tijeras" ?
                        <Resultado>
                              <Eleccion>CPU picked</Eleccion>
                              <ContenedorOpciones Tijera>
                                    <Boton name="tijera" to="/Resultado"> 
                                                <Tijera viewBox="0 0 49 59"/>
                                    </Boton>
                              </ContenedorOpciones>
                        </Resultado>
                        
                        : ""
                  }
                  </ContenedorElecciones>
                  
                  {resultadoJuego ? <ResultadoFinal>
                                          <Eleccion>{resultadoJuego}</Eleccion>
                                          <BotonResultado to="/">
                                                <h1> PLAY   AGAIN </h1>
                                          </BotonResultado>
                                    </ResultadoFinal>
                                          
                  :""}

            </ContenedordelResultado>
       );
}
 
export default ResultadoJuego;