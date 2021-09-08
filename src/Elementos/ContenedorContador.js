import React, {useContext} from 'react';
import styled from 'styled-components';
import tema from '../Tema';
import {TotalContadorContext} from './../Contextos/ContadorContext';

const ContenedorPrincipal= styled.div`
      background-color:white;
      display:flex;
      flex-direction:column;
      padding: 1em 2em;
      border-radius:5%;
      justify-content: space-between;

            @media(max-width: 500px) {
            width:auto;
            padding: 0.5em 1em
    }
`

const TituloContador= styled.h1`
      color: ${tema.AzulContador};
      font-size:1rem;
            @media(max-width: 500px) { 
                  font-size: 1rem;
                  }
      `;

const Contador = styled.p`
      color: ${tema.GrisContador};
      font-size: 3rem;
      font-weight:700;
      margin:auto;

            @media(max-width: 500px) { 
            font-size: 2rem;
            }
      `;

const ContenedorContador =  () => {
      const {contador} = useContext(TotalContadorContext);
      return ( 
            <ContenedorPrincipal>
                  <TituloContador>SCORE</TituloContador>
                  <Contador>{contador}</Contador>
            </ContenedorPrincipal>
             
       );
}
 
export default ContenedorContador;