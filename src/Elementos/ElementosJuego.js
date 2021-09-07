import styled from 'styled-components';
import {ReactComponent as Triangulo} from './../images/bg-triangle.svg';
import {ReactComponent as LogoPapel} from './../images/icon-paper.svg';
import {ReactComponent as LogoTijera} from './../images/icon-scissors.svg';
import {ReactComponent as LogoPiedra} from './../images/icon-rock.svg';
import {ReactComponent as ReglasJuego} from './../images/image-rules.svg';
import tema from '../Tema';

const FondoTriangulo = styled(Triangulo)`
      max-width: 100%;

     @media(max-width: 500px) { 
           max-width: 50%;
           min-width:50%;
      }
`
const Papel = styled(LogoPapel)`     
 
`
const Piedra = styled(LogoPiedra)`
`
const Tijera = styled(LogoTijera)`
`
const ContenedorOpciones= styled.div`
      display:flex;
      position: ${(props) => props.OpcionA || props.OpcionB || props.OpcionC ? "absolute"
                  : "auto"
                  };
      background: ${(props) => props.Papel ? tema.GradienteAzul 
                              : props.Piedra ? tema.GradienteRojo 
                              : props.Tijera ? tema.GradienteAmarillo 
                              : props.Vacio ? tema.AzulContador 
                              : "0000"};
      width: 10rem;
      height:10rem;
      border-radius:50%;
      border: 1px solid ${tema.Borde};
      box-shadow: 0px 7px 5px 3px rgba(0,0,0,.4);
      z-index:1;
      margin-top:${(props) => props.OpcionA ? "-15rem" 
                              : props.OpcionB ? "15rem" 
                              : props.OpcionC ? "-15rem" 
                              : props.Resultado ? "auto" 
                              : "0rem"};
      margin-left:${(props) => props.OpcionA ? "-20rem" 
                              : props.OpcionB ? "0rem" 
                              : props.OpcionC ? "20rem" 
                              : props.Resultado ? "auto" 
                              : "0rem"};
      h1{
            color:black;
            text-decoration:none;
      } 
      a {text-decoration:none;}

      @media(max-width: 500px) { 
            width: 5rem;
            height:5rem;
      margin-top:${(props) => props.OpcionA ? "-10rem" 
                              : props.OpcionB ? "10rem" 
                              : props.OpcionC ? "-10rem" 
                              : props.Resultado ? "auto" 
                              : "0rem"};
      margin-left:${(props) => props.OpcionA ? "-12rem" 
                              : props.OpcionB ? "0rem" 
                              : props.OpcionC ? "12rem" 
                              : props.Resultado ? "auto" 
                              : "0rem"};
      }

      
                  
`
/* ${tema.GradienteAzul} */
 
export {FondoTriangulo, Papel, Piedra, Tijera, ReglasJuego, ContenedorOpciones};