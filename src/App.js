import React from 'react';
import {Helmet} from 'react-helmet'
import Header from './Componentes/Header';
import ContenedorJuego from './Componentes/ContenedorJuego';
import ContenedorResultado from './Componentes/ContenedorResultado';
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
                <Route path="/" exact={true} component={ContenedorJuego} />
                <Route path="/Resultado" exact={true} component={ContenedorResultado} />
              </Switch>
          </BrowserRouter>
    </ContadorJuegoProvider>

      
    </>
  );
}

export default App;
