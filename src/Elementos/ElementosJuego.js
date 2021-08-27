import styled from 'styled-components';
import {ReactComponent as Triangulo} from './../images/bg-triangle.svg';
import {ReactComponent as LogoPapel} from './../images/icon-paper.svg';
import {ReactComponent as LogoTijera} from './../images/icon-scissors.svg';
import {ReactComponent as LogoPiedra} from './../images/icon-rock.svg';
import {ReactComponent as ReglasJuego} from './../images/image-rules.svg';
import tema from '../Tema';

const FondoTriangulo = styled(Triangulo)`
      height:auto;
`
const Papel = styled(LogoPapel)`      
`
const Piedra = styled(LogoPiedra)`
`
const Tijera = styled(LogoTijera)`
`
const ContenedorOpcionA= styled.div`
      display:flex;
      position:absolute;
      background: ${tema.GradienteAzul};
      width: 10rem;
      height:10rem;
      border-radius:50%;
      border: 1px solid ${tema.Borde};
      box-shadow: 0px 7px 0px 0px ;
      z-index:1;
      margin-top:-15rem;
      margin-left:-20rem;
`

const ContenedorOpcionB= styled.div`
      display:flex;
      position:absolute;
      background: ${tema.GradienteRojo};
      width: 10rem;
      height:10rem;
      border-radius:50%;
      border: 1px solid ${tema.Borde};
      box-shadow: 0px 7px 0px 0px ;
      z-index:1;
      margin-top:15rem;
      margin-left:0rem;
`
const ContenedorOpcionC= styled.div`
      display:flex;
      position:absolute;
      background: ${tema.GradienteAmarillo};
      width: 10rem;
      height:10rem;
      border-radius:50%;
      border: 1px solid ${tema.Borde};
      box-shadow: 0px 7px 0px 0px ;
      z-index:1;
      margin-top:-15rem;
      margin-left:20rem;
`
 
export {FondoTriangulo, Papel, Piedra, Tijera, ReglasJuego, ContenedorOpcionA, ContenedorOpcionB, ContenedorOpcionC};