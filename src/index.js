import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from 'react-helmet';
import WebFont from 'webfontloader';
import './index.css';
import Contenedor from './Elementos/Contenedor';
import Favicon from './images/favicon-32x32.png';
import App from './App'

WebFont.load({
  google: {
    families: ['Barlow Semi Condensed:600,700', 'sans-serif']
  }
});


const Index = () => {
  return ( 
    <>
      <Helmet>
        <link rel="shortcut icon" href={Favicon} type="image/x-icon"/>
      </Helmet>

      <Contenedor >
        <App />
      </Contenedor>
      
    </>
   );
}


ReactDOM.render(<Index /> ,  document.getElementById('root'));
