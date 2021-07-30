import React from 'react';
import {Helmet} from 'react-helmet'
import Header from './Componentes/Header';
import ContenedorJuego from './Componentes/ContenedorJuego';

function App() {
  return (
    <>
      <Helmet>
          <title> Rock paper scissors</title>
      </Helmet>

      <Header/>
      <ContenedorJuego/>
    </>
  );
}

export default App;
