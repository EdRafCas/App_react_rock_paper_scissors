import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Triangulo} from './../images/bg-triangle.svg'
import {ReactComponent as LogoPapel} from './../images/icon-paper.svg'


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
      background: linear-gradient(to top, hsl(230, 89%, 62%), hsl(230, 89%, 65%));
      width: 10rem;
      height:10rem;
      border-radius:50%;
      border: 1px solid hsl(217, 16%, 45%);
      box-shadow: 0px 7px 0px 0px ;
      z-index:1;
      margin-top:-15rem;
      margin-left:-20rem;
`
const ContenedorPapel= styled.div`
      width: 8rem;
      height:8rem;
      background: white;
      box-shadow: 0px 5px inset;
      border-radius:50%;
      border: 1px solid hsl(217, 16%, 45%);
      margin: auto;
      display:flex;
`

const Papel = styled(LogoPapel)`
      width:59;
      height:71;
      margin:auto;
      
`

const ContenedorOpcionB= styled.div`
      position:fixed;
      width: 10rem;
      height:10rem;
      border-radius:50%;
      border: 0.25rem solid hsl(217, 16%, 45%);
      z-index:1;
      margin-top:15rem;
      margin-left:0rem;
`
const ContenedorOpcionC= styled.div`
      position:fixed;
      width: 10rem;
      height:10rem;
      border-radius:50%;
      border: 0.25rem solid hsl(217, 16%, 45%);
      z-index:1;
      margin-top:-15rem;
      margin-left:20rem;
`



const ContenedorJuego = () => {
      return ( 
            <ContenedordelJuego>
                  <FondoTriangulo/>
                        <ContenedorOpcionA>
                              <ContenedorPapel>
                                    <Papel 
                                          width="70"
                                          height="90"
                                          viewBox= "1 2 55 65"
                                    />
                              </ContenedorPapel>
                        </ContenedorOpcionA>
                  <ContenedorOpcionB>

                  </ContenedorOpcionB>
                  <ContenedorOpcionC  />
            </ContenedordelJuego>
      );
}
 
export default ContenedorJuego;