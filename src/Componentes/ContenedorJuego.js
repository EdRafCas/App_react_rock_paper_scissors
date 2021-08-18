import React,{useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as Triangulo} from './../images/bg-triangle.svg';
import {ReactComponent as LogoPapel} from './../images/icon-paper.svg';
import {ReactComponent as LogoTijera} from './../images/icon-scissors.svg';
import {ReactComponent as LogoPiedra} from './../images/icon-rock.svg';
import {TotalContadorContext} from './../Contextos/ContadorContext';
import Boton from './../Elementos/Boton'

const ContenedordelJuego = styled.div`
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
const FondoTriangulo = styled(Triangulo)`
      height:auto;
`

const ContenedorOpcionA= styled.div`
      display:flex;
      position:fixed;
      background: linear-gradient(hsl(230, 89%, 65%), hsl(230, 89%, 62%));
      width: 10rem;
      height:10rem;
      border-radius:50%;
      border: 1px solid hsl(217, 16%, 45%);
      box-shadow: 0px 7px 0px 0px ;
      z-index:1;
      margin-top:-15rem;
      margin-left:-20rem;
`
const Papel = styled(LogoPapel)`      
`
const Piedra = styled(LogoPiedra)`
`
const Tijera = styled(LogoTijera)`
`

const ContenedorOpcionB= styled.div`
      display:flex;
      position:fixed;
      background: linear-gradient(hsl(349, 70%, 56%), hsl(349, 71%, 52%));
      width: 10rem;
      height:10rem;
      border-radius:50%;
      border: 1px solid hsl(217, 16%, 45%);
      box-shadow: 0px 7px 0px 0px ;
      z-index:1;
      margin-top:15rem;
      margin-left:0rem;
`
const ContenedorOpcionC= styled.div`
      display:flex;
      position:fixed;
      background: linear-gradient(hsl(40, 84%, 53%), hsl(39, 89%, 49%));
      width: 10rem;
      height:10rem;
      border-radius:50%;
      border: 1px solid hsl(217, 16%, 45%);
      box-shadow: 0px 7px 0px 0px ;
      z-index:1;
      margin-top:-15rem;
      margin-left:20rem;
`

const ContenedorJuego = () => {
      const {modificarContador} = useContext(TotalContadorContext);
      const {contador}  = useContext(TotalContadorContext);

      const [eleccionJugador, cambiarEleccionJugador] = useState("")
      const opciones = ["piedra", "papel", "tijeras"];

      let history = useHistory();

      const redirect =() =>{
            history.push("/Resultado")
      }
      
      const jugar = (e) => {
            
            var seleccionCpu = Math.floor(Math.random() * 3);
            cambiarEleccionJugador(e.target.name);
            let resultado;
            if(e.target.name === "papel") {
                  switch (eleccionJugador + opciones[seleccionCpu]){
                              case 'papelpiedra':
                                    modificarContador(contador + 1)
                                    resultado = "ganaste"
                                    console.log(resultado)
                                    break;
                              case 'papeltijeras':
                                    modificarContador(contador -1)
                                    resultado = "perdiste"
                                    console.log(resultado)
                                    break;
                              default:
                                    modificarContador(contador +0)
                                    resultado = "empate"
                                    console.log(resultado)
                                    break;
                  } 

            }

            if(e.target.name === "piedra") {
                  switch (eleccionJugador + opciones[seleccionCpu]){
                              case 'piedratijeras':
                                    modificarContador(contador + 1)
                                    resultado = "ganaste"
                                    console.log(resultado)
                                    break;
                              case 'piedrapapel':
                                    modificarContador(contador -1)
                                    resultado = "perdiste"
                                    console.log(resultado)
                                    break;
                              default:
                                    modificarContador(contador +0)
                                    resultado = "empate"
                                    console.log(resultado)
                  }      
            }

            if(e.target.name === "tijeras") {
                  switch (eleccionJugador + opciones[seleccionCpu]){
                              case 'tijeraspapel':
                                    modificarContador(contador + 1)
                                    resultado = "ganaste"
                                    console.log(resultado)
                                    break;
                              case 'tijeraspiedra':
                                    modificarContador(contador -1)
                                    resultado = "perdiste"
                                    console.log(resultado)
                                    break;
                              default:
                                    modificarContador(contador +0)
                                    resultado = "empate"
                                    console.log(resultado)
                  }      
            }

            
            
      }; 
      
      return ( 
            <ContenedordelJuego>
                  <FondoTriangulo/>
                        <ContenedorOpcionA>
                              <Boton name="papel" onClick={ (e)=>{jugar(e);redirect()}} > 
                                    <Papel viewBox="0 0 49 59"/>
                              </Boton>
                        </ContenedorOpcionA>
                  <ContenedorOpcionB>
                              <Boton onClick={redirect} to='/Resultado' name="piedra" > 
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