import React,{useState} from 'react';
import styled from 'styled-components';
import {ReactComponent as Triangulo} from './../images/bg-triangle.svg';
import {ReactComponent as LogoPapel} from './../images/icon-paper.svg';
import {ReactComponent as LogoTijera} from './../images/icon-scissors.svg';
import {ReactComponent as LogoPiedra} from './../images/icon-rock.svg';
import {useContador} from './../Contextos/ContadorContext';




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
      min-height:80%;

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
const Btn = styled.button`
      display:block;
      width: 8rem;
      height:8rem;
      background: #fff;
      box-shadow: 0px 5px inset;
      border-radius:50%;
      border: 1px solid hsl(217, 16%, 45%);
      margin: auto;
      display:flex;
      align-items: center;
      justify-content: center;
      text-align:center;
      cursor:pointer;
      
      svg{
            pointer-events:none;
            height:50%;
            width:auto;
      }

     
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
      const {contador} = useContador();
      const {modificarContador} = useContador();

      const [eleccionJugador, cambiarEleccionJugador] = useState("")
      const opciones = ["piedra", "papel", "tijeras"];
      
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
                              <Btn 
                                    name="papel"
                                    onClick={jugar}
                              > 
                                    <Papel                              
                                          viewBox="0 0 49 59"
                                    />
                              </Btn>
                        </ContenedorOpcionA>
                  <ContenedorOpcionB>
                              <Btn
                                    name="piedra"
                                    onClick={jugar}
                              > 
                                    <Piedra                         
                                          viewBox="0 0 49 59"
                                    />
                              </Btn>
                  </ContenedorOpcionB>
                  <ContenedorOpcionC>
                              <Btn
                                    name="tijeras"
                                    onClick={jugar}
                              
                              > 
                                    <Tijera                            
                                          viewBox="0 0 49 59"
                                    />
                              </Btn>
                  </ContenedorOpcionC>
            </ContenedordelJuego>
      );
}
 
export default ContenedorJuego;