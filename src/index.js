import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar} from './navbar.js'
import {Jumbotron} from './jumbotron.js'
import { Card } from "./card.js";

const estilosContenedor={
    
    margin:"auto 15%"
}

let Inicio =() =>{

return (
  <div>
    <Navbar />
    <div style={estilosContenedor} className="estilosContenedor1">
      <Jumbotron />

      <div className="row">
        <div className="col-4">
          <Card
            title="Titulo1"
            link="https://cnnespanol.cnn.com/wp-content/uploads/2019/12/s_64a163f16ecbb099e52f2f8271f73cbbfcfc9034be4d646f7375e4db1ca6f3d7_1573501883482_ap_19001106049831-1.jpg?quality=100&strip=info&w=320&h=240&crop=1"
          />
        </div>
        <div className="col-4">
          <Card
            title="Titulo2"
            link="https://i.blogs.es/594843/chrome/450_1000.jpg"
          />
        </div>
        <div className="col-4">
          <Card
            title="Titulo3"
            link="https://i.blogs.es/3650f5/eclipsed-moon-trail-c-chuanjin-su/450_1000.jpg"
          />
        </div>
      </div>
    </div>
    <div class="text-center p-3 footer">
      Copyright©:
      <a class="text-dark" href="#">
        Your website 
      </a>
      2019
    </div>
  </div>
);

}


ReactDom.render(<Inicio />, document.getElementById('root'))
