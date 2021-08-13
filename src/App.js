import React,{useState} from 'react';
import {Helmet} from 'react-helmet'
import Header from './Componentes/Header';
import ContenedorJuego from './Componentes/ContenedorJuego';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {ContadorJuegoProvider} from './Contextos/ContadorContext';
import {useContador} from './Contextos/ContadorContext';

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
              {/* <ContenedorJuego contador={contador} modificarContador={modificarContador}/> */}
              <Route path="/"  component={ContenedorJuego} />
            </Switch>
          </BrowserRouter>
    </ContadorJuegoProvider>
      
      
    </>
  );
}

export default App;
