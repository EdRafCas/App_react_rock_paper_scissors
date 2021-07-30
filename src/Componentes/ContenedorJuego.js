import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Triangulo} from './../images/bg-triangle.svg'


const ContenedordelJuego = styled.div`
      display:flex;
      width: 100%;
      border-radius:0.625rem;
      border: 0.25rem solid hsl(217, 16%, 45%);
      justify-content: center;
      align-items:center;
      margin-top: 0rem;
      padding:1rem 2rem;
      min-height:80%;

`
const FondoTriangulo = styled(Triangulo)`
`


const ContenedorJuego = () => {
      return ( 
            <ContenedordelJuego>
                  <FondoTriangulo/>
            </ContenedordelJuego>
      );
}
 
export default ContenedorJuego;