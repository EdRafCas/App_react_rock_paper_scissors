import React, {useState} from 'react';
import styled from 'styled-components';




const ContenedorReglas = styled.div`
      display:flex;
      width: 100%;
      min-width:560px;
      border-radius:0.625rem;
      border: 0.25rem solid hsl(217, 16%, 45%);
      justify-content: flex-end;
      align-items:center;
      margin-top: 0rem;
      padding:1rem 2rem;
      
` 

const BotonReglas = styled.button`
     background: none; 
     color: #ffff ;
     border-radius:0.625rem;
     border: 0.25rem solid white;
     width: 10rem;
     height:3rem;
     cursor:pointer;

`


const Reglas = () => {
      const [mostrar, cambiarMostrar] = useState(false)


      

      return ( 
            <ContenedorReglas>
                  <BotonReglas onClick={ ()=> cambiarMostrar(!mostrar)}>R U L E S</BotonReglas>
                  {mostrar ? <h1>mostrar</h1>
                  : <h1>Ocultar</h1>
                  }
            </ContenedorReglas> 
       );
}
 
export default Reglas;