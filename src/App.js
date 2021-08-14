import React from 'react';
import {Helmet} from 'react-helmet'
import Header from './Componentes/Header';
import Reglas from './Componentes/Reglas';
import ContenedorJuego from './Componentes/ContenedorJuego';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ContadorJuegoProvider} from './Contextos/ContadorContext';

function App() {         

  

  return (
    <>
      <Helmet>
          <title> Rock paper scissors</title>
      </Helmet>

    <ContadorJuegoProvider>
        <Header  />
          <BrowserRouter>
            <Switch>
              <Route path="/"  component={ContenedorJuego} />
            </Switch>
          </BrowserRouter>
        <Reglas/>
    </ContadorJuegoProvider>
      
      
    </>
  );
}

export default App;
