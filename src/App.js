import React from 'react';
import {Helmet} from 'react-helmet'
import Header from './Componentes/Header';

function App() {
  return (
    <>
      <Helmet>
          <title> Rock paper scissors</title>
      </Helmet>

      <Header/>
    </>
  );
}

export default App;
