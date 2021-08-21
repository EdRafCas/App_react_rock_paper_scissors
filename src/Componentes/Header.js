import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from './../images/logo.svg'
import ContenedorContador from '../Elementos/ContenedorContador';
import tema from '../Tema';


const ContenedorHeader = styled.div`
      display:flex;
      width: 100%;
      min-width:560px;
      border-radius:0.625rem;
      border: 0.25rem solid ${tema.Borde};
      justify-content: space-between;
      align-items:center;
      margin-top: 0rem;
      padding:1rem 2rem;

` 
const Logotipo = styled(Logo)`

`


const Header = () => {
      

      return ( 
            <ContenedorHeader>
                  <Logotipo/>
                  <ContenedorContador  />
            </ContenedorHeader> 
       );
}
 
export default Header;