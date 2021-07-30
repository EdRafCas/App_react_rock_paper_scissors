import React from 'react';
import styled from 'styled-components';

const ContenedorPrincipal= styled.div`
      background-color:white;
      display:flex;
      flex-direction:column;
      padding: 1em 2em;
      border-radius:5%;
`

const TituloContador= styled.h1`
      color: hsl(229, 64%, 46%);
      font-size:1rem;
      `;

const Contador = styled.p`
      color: hsl(229, 25%, 31%);
      font-size: 3rem;
      font-weight:700;
      `;

const ContenedorContador = () => {
      return ( 
            <ContenedorPrincipal>
                  <TituloContador>SCORE</TituloContador>
                  <Contador>15</Contador>
            </ContenedorPrincipal>
       );
}
 
export default ContenedorContador;