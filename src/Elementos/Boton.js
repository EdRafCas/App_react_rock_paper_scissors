import styled from "styled-components";
import {Link} from "react-router-dom";
import tema from "../Tema";


const Boton = styled(Link)`
      display:block;
      width: 8rem;
      height:8rem;
      background: #fff;
      /* box-shadow: 0px 1.25rem 2.5rem rgba(0,0,0,.05) */
      box-shadow: 0px 5px rgba(0,0,0,.3) inset;
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
      
      @media(max-width: 500px) { 
            width: 4rem;
            height:4rem;
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
     width:auto;
     color:black ;
     border-radius:0.625rem;
     border: 0.25rem solid white;
     height:3rem;
     cursor:pointer;
     text-decoration:none;

     h1{
            font-size:1rem;
            color:${tema.AzulContador}
           
     }

     @media(max-width: 500px) { 
            margin:0 1rem;
            height:2rem;
            border: 0.25rem solid white;
      }
`


export {Boton, BotonReglas, BotonResultado};