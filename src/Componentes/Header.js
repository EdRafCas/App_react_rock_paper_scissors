import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from './../images/logo.svg'
import ContenedorContador from '../Elementos/ContenedorContador';
import tema from '../Tema';


const ContenedorHeader = styled.div`
      display:flex;
      width: 100%;
      border-radius:0.625rem;
      /* border: 0.25rem solid ${tema.Borde}; */
      justify-content: space-between;
      align-items:center;
      margin-top: 0rem;
      padding:1rem 2rem;

      @media(max-width: 550px) { 
      justify-content: space-evenly;
      width:100%;
    }

` 
const Logotipo = styled(Logo)`
            max-width: 100%;
      @media(max-width: 500px) { 
           max-width: 20%;

      }

`


const Header = () => {
      

      return ( 
            <ContenedorHeader>
                  <Logotipo  viewBox="0 0 162 99" width="162" height="99" />
                  <ContenedorContador  />
            </ContenedorHeader> 
       );
}
 
export default Header;