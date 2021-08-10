import React,{useState} from 'react';
import {Helmet} from 'react-helmet'
import Header from './Componentes/Header';
import ContenedorJuego from './Componentes/ContenedorJuego';

function App() {
  const [contador, modificarContador] = useState(0);
      
      /* const ganar = () => {
            modificarContador(contador + 1);
            console.log(contador)} */
      

  return (
    <>
      <Helmet>
          <title> Rock paper scissors</title>
      </Helmet>


      <Header contador={contador} modificarContador={modificarContador} />
      <ContenedorJuego contador={contador} modificarContador={modificarContador}/>
    </>
  );
}

export default App;
