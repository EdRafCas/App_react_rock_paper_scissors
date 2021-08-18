import styled from "styled-components";


const Boton = styled.button`
      display:block;
      width: 8rem;
      height:8rem;
      background: #fff;
      box-shadow: 0px 5px inset;
      border-radius:50%;
      border: 1px solid hsl(217, 16%, 45%);
      margin: auto;
      display:flex;
      align-items: center;
      justify-content: center;
      text-align:center;
      cursor:pointer;
      
      svg{
            pointer-events:none;
            height:50%;
            width:auto;
      } 
`

export default Boton;