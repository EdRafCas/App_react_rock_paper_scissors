import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import tema from '../Tema';
import {
      FondoTriangulo, 
      Papel, 
      Piedra, 
      Tijera, 
      ReglasJuego,
      ContenedorOpciones
} from './../Elementos/ElementosJuego'
import {TotalContadorContext} from './../Contextos/ContadorContext';
import {Boton, BotonReglas} from './../Elementos/Boton'

const ContenedordelJuego = styled.div`
      display:flex;
      flex-direction:column;
      width: 100%;
      border-radius:0.625rem;
      /* border: 0.25rem solid ${tema.Borde}; */
      justify-content: center;
      align-items:center;
      margin: 0rem;
      padding:1rem 2rem;
      min-height:60%;
      
      @media(max-width: 500px) { 
            width:375px;
           min-width:375px;
      }

`
const ContenedorReglas = styled.div`
      display:flex;
      width: 100%;
      border-radius:0.625rem;
      /* border: 0.25rem solid hsl(217, 16%, 45%); */
      justify-content: flex-end;
      align-items:center;
      margin-top: 0rem;
      padding:1rem 2rem;

      @media(max-width: 550px) { 
      justify-content:center;
    }

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
        max-width: 100%;

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

      @media(max-width: 375px) { 
      width:100%;
    }
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
                                    resultado = "You win"
                                    modificarResultado(resultado)
                                    /* console.log(resultado) */
                                    break;
                              case 'papeltijeras':
                                    modificarContador(contador -1)
                                    modificarSeleccion(e.target.name)
                                    modificarSeleccionCpu(opciones[seleccionCpu])
                                    resultado = "You lose"
                                    modificarResultado(resultado)
                                    /* console.log(resultado) */
                                    break;
                              default:
                                    modificarContador(contador +0)
                                    modificarSeleccion(e.target.name)
                                    modificarSeleccionCpu(opciones[seleccionCpu])
                                    resultado = "Tie"
                                    modificarResultado(resultado)
                                    /* console.log(resultado) */
                                    break;
                  } 

            }

            if(e.target.name === "piedra") {
                  switch (e.target.name + opciones[seleccionCpu]){
                              case 'piedratijeras':
                                    modificarContador(contador + 1)
                                    modificarSeleccion(e.target.name)
                                    modificarSeleccionCpu(opciones[seleccionCpu])
                                    resultado = "You win"
                                    modificarResultado(resultado)
                                    /* console.log(resultado) */
                                    break;
                              case 'piedrapapel':
                                    modificarContador(contador -1)
                                    modificarSeleccion(e.target.name)
                                    modificarSeleccionCpu(opciones[seleccionCpu])
                                    resultado = "You lose"
                                    modificarResultado(resultado)
                                    /* console.log(resultado) */
                                    break;
                              default:
                                    modificarContador(contador +0)
                                    modificarSeleccion(e.target.name)
                                    modificarSeleccionCpu(opciones[seleccionCpu])
                                    resultado = "Tie"
                                    modificarResultado(resultado)
                                    /* console.log(resultado) */
                                    break;
                  }      
            }

            if(e.target.name === "tijeras") {
                  switch (e.target.name + opciones[seleccionCpu]){
                              case 'tijeraspapel':
                                    modificarContador(contador + 1)
                                    modificarSeleccion(e.target.name)
                                    modificarSeleccionCpu(opciones[seleccionCpu])
                                    resultado = "You win"
                                    modificarResultado(resultado)
                                    /* console.log(resultado) */
                                    break;
                              case 'tijeraspiedra':
                                    modificarContador(contador -1)
                                    modificarSeleccion(e.target.name)
                                    modificarSeleccionCpu(opciones[seleccionCpu])
                                    resultado = "You lose"
                                    modificarResultado(resultado)
                                    /* console.log(resultado) */
                                    break;
                              default:
                                    modificarContador(contador +0)
                                    modificarSeleccion(e.target.name)
                                    modificarSeleccionCpu(opciones[seleccionCpu])
                                    resultado = "Tie"
                                    modificarResultado(resultado)
                                    /* console.log(resultado) */
                  }      
            }

            
            
      }; 
      
      return ( 
            <>
            <ContenedordelJuego>
                  <FondoTriangulo viewBox="0 0 305 260" height="277" width="305"/>
                        <ContenedorOpciones OpcionA Papel>
                              <Boton to='/Resultado' name="papel" onClick={jugar} > 
                                    <Papel viewBox="0 0 49 59"/>
                              </Boton>
                        </ContenedorOpciones>
                  <ContenedorOpciones OpcionB Piedra>
                              <Boton to='/Resultado' name="piedra" onClick={jugar}> 
                                    <Piedra viewBox="0 0 49 59"/>
                              </Boton>
                  </ContenedorOpciones>
                  <ContenedorOpciones OpcionC Tijera>
                              <Boton to='/Resultado' name="tijeras" onClick={jugar} > 
                                    <Tijera viewBox="0 0 49 59" />
                              </Boton>
                  </ContenedorOpciones> 

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