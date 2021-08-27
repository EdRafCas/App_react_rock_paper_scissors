import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import tema from '../Tema';
import {
      FondoTriangulo, 
      Papel, 
      Piedra, 
      Tijera, 
      ReglasJuego, 
      ContenedorOpcionA, 
      ContenedorOpcionB, 
      ContenedorOpcionC} from './../Elementos/ElementosJuego'
import {TotalContadorContext} from './../Contextos/ContadorContext';
import Boton from './../Elementos/Boton'

const ContenedordelJuego = styled.div`
      display:flex;
      width: 100%;
      min-width:566px;
      border-radius:0.625rem;
      border: 0.25rem solid ${tema.Borde};
      justify-content: center;
      align-items:center;
      margin-top: 0rem;
      padding:1rem 2rem;
      min-height:60%;

`
const ContenedorReglas = styled.div`
      display:flex;
      width: 100%;
      min-width:560px;
      border-radius:0.625rem;
      border: 0.25rem solid hsl(217, 16%, 45%);
      justify-content: flex-end;
      align-items:center;
      margin-top: 0rem;
      padding:1rem 2rem;
`
const BotonReglas = styled.button`
     background: none; 
     color: #ffff ;
     border-radius:0.625rem;
     border: 0.25rem solid white;
     width: 10rem;
     height:3rem;
     cursor:pointer;

`
const BotonCierre = styled.button`
      background: none; 
      color: black;
      border-radius:0.625rem;
      border: 0.25rem solid white;
      width: 5rem;
      height:3rem;
      cursor:pointer;
      position:absolute;
      top:0;
      right:0;
      font-size:2rem;
`


const Svg = styled(ReglasJuego)`

`
const ContenedorSvg = styled.div`
      display:flex;
      flex-direction:column;
      position:absolute;
      z-index:1;
      justify-content:center;
      background:white;
      padding:1.5rem;
      border-radius:5%;
`


const ContenedorJuego = () => {
      const {modificarContador} = useContext(TotalContadorContext);
      const {contador}  = useContext(TotalContadorContext);
      const {modificarSeleccion} = useContext(TotalContadorContext);
      const {modificarSeleccionCpu} = useContext(TotalContadorContext);
      const {modificarResultado} = useContext(TotalContadorContext);
      const [mostrar, cambiarMostrar] = useState(false);

      const opciones = ["piedra", "papel", "tijeras"];

      
      const jugar = (e) => {
            var seleccionCpu = Math.floor(Math.random() * 3);
            let resultado;
            if(e.target.name === "papel") {
                  switch (e.target.name + opciones[seleccionCpu]){
                              case 'papelpiedra':
                                    modificarContador(contador + 1)
                                    modificarSeleccion(e.target.name)
                                    modificarSeleccionCpu(opciones[seleccionCpu])
                                    resultado = "Ganaste"
                                    modificarResultado(resultado)
                                    console.log(resultado)
                                    break;
                              case 'papeltijeras':
                                    modificarContador(contador -1)
                                    modificarSeleccion(e.target.name)
                                    modificarSeleccionCpu(opciones[seleccionCpu])
                                    resultado = "Perdiste"
                                    modificarResultado(resultado)
                                    console.log(resultado)
                                    break;
                              default:
                                    modificarContador(contador +0)
                                    modificarSeleccion(e.target.name)
                                    modificarSeleccionCpu(opciones[seleccionCpu])
                                    resultado = "Empate"
                                    modificarResultado(resultado)
                                    console.log(resultado)
                                    break;
                  } 

            }

            if(e.target.name === "piedra") {
                  switch (e.target.name + opciones[seleccionCpu]){
                              case 'piedratijeras':
                                    modificarContador(contador + 1)
                                    modificarSeleccion(e.target.name)
                                    modificarSeleccionCpu(opciones[seleccionCpu])
                                    resultado = "Ganaste"
                                    modificarResultado(resultado)
                                    console.log(resultado)
                                    break;
                              case 'piedrapapel':
                                    modificarContador(contador -1)
                                    modificarSeleccion(e.target.name)
                                    modificarSeleccionCpu(opciones[seleccionCpu])
                                    resultado = "Perdiste"
                                    modificarResultado(resultado)
                                    console.log(resultado)
                                    break;
                              default:
                                    modificarContador(contador +0)
                                    modificarSeleccion(e.target.name)
                                    modificarSeleccionCpu(opciones[seleccionCpu])
                                    resultado = "Empate"
                                    modificarResultado(resultado)
                                    console.log(resultado)
                                    break;
                  }      
            }

            if(e.target.name === "tijeras") {
                  switch (e.target.name + opciones[seleccionCpu]){
                              case 'tijeraspapel':
                                    modificarContador(contador + 1)
                                    modificarSeleccion(e.target.name)
                                    modificarSeleccionCpu(opciones[seleccionCpu])
                                    resultado = "Ganaste"
                                    modificarResultado(resultado)
                                    console.log(resultado)
                                    break;
                              case 'tijeraspiedra':
                                    modificarContador(contador -1)
                                    modificarSeleccion(e.target.name)
                                    modificarSeleccionCpu(opciones[seleccionCpu])
                                    resultado = "Perdiste"
                                    modificarResultado(resultado)
                                    console.log(resultado)
                                    break;
                              default:
                                    modificarContador(contador +0)
                                    modificarSeleccion(e.target.name)
                                    modificarSeleccionCpu(opciones[seleccionCpu])
                                    resultado = "Empate"
                                    modificarResultado(resultado)
                                    console.log(resultado)
                  }      
            }

            
            
      }; 
      
      return ( 
            <>
            <ContenedordelJuego>
                  <FondoTriangulo/>
                        <ContenedorOpcionA>
                              <Boton to='/Resultado' name="papel" onClick={jugar} > 
                                    <Papel viewBox="0 0 49 59"/>
                              </Boton>
                        </ContenedorOpcionA>
                  <ContenedorOpcionB>
                              <Boton to='/Resultado' name="piedra" onClick={jugar}> 
                                    <Piedra viewBox="0 0 49 59"/>
                              </Boton>
                  </ContenedorOpcionB>
                  <ContenedorOpcionC>
                              <Boton to='/Resultado' name="tijeras" onClick={jugar} > 
                                    <Tijera viewBox="0 0 49 59" />
                              </Boton>
                  </ContenedorOpcionC> 
                  {mostrar ? <ContenedorSvg>
                                    <h1>RULES</h1>
                                    <BotonCierre onClick={ ()=> cambiarMostrar(!mostrar)}>X</BotonCierre>
                                    <Svg viewBox="0 0 304 270" height="430" width="490"/>
                              </ContenedorSvg>
                  : ""
                  }                 
            </ContenedordelJuego>
            
            <ContenedorReglas>
                  <BotonReglas onClick={ ()=> cambiarMostrar(!mostrar)}>R U L E S</BotonReglas>
                  
            </ContenedorReglas> 
            </>
      );
}
 
export default ContenedorJuego;