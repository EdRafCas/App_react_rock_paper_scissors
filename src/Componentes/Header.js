import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from './../images/logo.svg'

const ContenedorHeader = styled.div`
      display:flex;
      width: 100%;
      border: 5px solid #f3f3f3;
      justify-content: space-between;
      align-items:center;
      margin-top: 0rem;
      padding:10px;

` 
const Logotipo = styled(Logo)`

`


const Header = () => {
      return ( 
            <ContenedorHeader>
                  <Logotipo/>
                  <h1>asd</h1>
            </ContenedorHeader> 
       );
}
 
export default Header;