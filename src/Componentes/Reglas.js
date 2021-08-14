import React from 'react';
import styled from 'styled-components';


const ContenedorReglas = styled.div`
      display:flex;
      width: 100%;
      min-width:560px;
      border-radius:0.625rem;
      border: 0.25rem solid hsl(217, 16%, 45%);
      justify-content: space-between;
      align-items:center;
      margin-top: 0rem;
      padding:1rem 2rem;

` 


const Reglas = () => {
      

      return ( 
            <ContenedorReglas>
                  <h1>Hola</h1>
            </ContenedorReglas> 
       );
}
 
export default Reglas;