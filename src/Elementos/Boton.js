import styled from "styled-components";
import {Link} from "react-router-dom";
import tema from "../Tema";


const Boton = styled(Link)`
      display:block;
      width: 8rem;
      height:8rem;
      background: #fff;
      box-shadow: 0px 5px inset;
      border-radius:50%;
      border: 1px solid ${tema.Borde};
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
const BotonReglas = styled.button`
     background: none; 
     color: #ffff ;
     border-radius:0.625rem;
     border: 0.25rem solid white;
     width: 10rem;
     height:3rem;
     cursor:pointer;

`
const BotonResultado = styled(Link)`
      display:flex;
      align-items:center;
      justify-content:center;
     background: #fff; 
     color:black ;
     border-radius:0.625rem;
     border: 0.25rem solid white;
     width: 100%;
     height:3rem;
     cursor:pointer;
     text-decoration:none;
     margin: auto;

     *{
            font-size:1rem;
            color:${tema.AzulContador}
           
     }

`


export {Boton, BotonReglas, BotonResultado};