import React from 'react';
import {Helmet} from 'react-helmet'
import Contenedor from './Elementos/Contenedor';
import ReactDOM from 'react-dom';
import Favicon from './images/favicon-32x32.png'
import './index.css';
import App from './App'



const Index = () => {
  return ( 
    <>
      <Helmet>
        <link rel="shortcut icon" href={Favicon} type="image/x-icon"/>
      </Helmet>

      <Contenedor>
        <App />
      </Contenedor>
      
    </>
   );
}


ReactDOM.render(<Index /> ,  document.getElementById('root'));
