import React from 'react';
import styled from 'styled-components';
import Boton from './../Elementos/Boton'
import { useHistory } from 'react-router-dom';


const ContenedordelResultado = styled.div`
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


const ResultadoJuego = () => {
      let history = useHistory();

      const redirect =() =>{
            history.push("/")
      }


      return ( 
            <ContenedordelResultado>
                  <Boton onClick ={redirect}><h1>Resultado</h1></Boton>
            </ContenedordelResultado>
       );
}
 
export default ResultadoJuego;