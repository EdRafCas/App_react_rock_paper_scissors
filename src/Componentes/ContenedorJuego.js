import React, {useContext} from 'react';
import styled from 'styled-components';
import tema from '../Tema';
import {FondoTriangulo, Papel, Piedra, Tijera} from './../Elementos/ElementosJuego'
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
      min-height:70%;

`

const ContenedorOpcionA= styled.div`
      display:flex;
      position:fixed;
      background: ${tema.GradienteAzul};
      width: 10rem;
      height:10rem;
      border-radius:50%;
      border: 1px solid ${tema.Borde};
      box-shadow: 0px 7px 0px 0px ;
      z-index:1;
      margin-top:-15rem;
      margin-left:-20rem;
`

const ContenedorOpcionB= styled.div`
      display:flex;
      position:fixed;
      background: ${tema.GradienteRojo};
      width: 10rem;
      height:10rem;
      border-radius:50%;
      border: 1px solid ${tema.Borde};
      box-shadow: 0px 7px 0px 0px ;
      z-index:1;
      margin-top:15rem;
      margin-left:0rem;
`
const ContenedorOpcionC= styled.div`
      display:flex;
      position:fixed;
      background: ${tema.GradienteAmarillo};
      width: 10rem;
      height:10rem;
      border-radius:50%;
      border: 1px solid ${tema.Borde};
      box-shadow: 0px 7px 0px 0px ;
      z-index:1;
      margin-top:-15rem;
      margin-left:20rem;
`

const ContenedorJuego = () => {
      const {modificarContador} = useContext(TotalContadorContext);
      const {contador}  = useContext(TotalContadorContext);
      const {modificarSeleccion} = useContext(TotalContadorContext);
      const {modificarSeleccionCpu} = useContext(TotalContadorContext);
      const {modificarResultado} = useContext(TotalContadorContext);

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
            </ContenedordelJuego>
      );
}
 
export default ContenedorJuego;