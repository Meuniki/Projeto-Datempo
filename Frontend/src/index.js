import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/pages/Home/App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Sobrenos from './pages/Sobrenos/sobrenos';
import Ajuda from './pages/Ajuda/ajuda';
import Login from './pages/Login/login';
import Perfilusuario from './pages/Perfilusuario/perfilusuario';
import cadastroOferta from './pages/cadastroOferta/cadastrooferta';
import Mostruario from './pages/Mostruario/mostruario';
import Carrinho from './pages/Carrinho/carrinho';
import Perfiladm from './pages/Perfiladm/perfiladm';
import NotFound from './pages/NotFound/notfound';
import Minhasofertas from './pages/Minhasofertas/minhasofertas';
import Categoria from './pages/Perfiladm/categoria';
    
import './assets/css/estilo.css';
//import './assets/css/flexbox.css'
//import './assets/css/reset.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Produto from './pages/Perfiladm/produto';
import Usuario from './pages/Perfiladm/usuario';

//Realizamos a criação das rotas
const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/sobrenos" component={Sobrenos} />
                <Route path="/perfilusuario" component={Perfilusuario} />
                <Route path="/oferta" component={cadastroOferta} />
                <Route path="/mostruario" component={Mostruario} />
                <Route path="/minhasofertas" component={Minhasofertas}/>
                <Route path="/carrinho" component={Carrinho}/>
                <Route path="/ajuda" component={Ajuda} />
                <Route path="/Login" component={Login} />
                <Route path="/perfiladm" component={Perfiladm} />
                <Route path="/categoria" component={Categoria} />
                <Route path="/produto" component={Produto} />
                <Route path="/usuario" component={Usuario} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
