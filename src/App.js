
import './App.css';
import Cover from './components/Cover';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SobreNosotros from './components/SobreNosotros';
import Servicios from './components/Servicios';
import Producto from './components/Producto';

import Login from './components/login/Login';
import CoverPortada from './components/CoverPortada';
import Navegacion from './components/Navegacion';

import Footer from './components/footer/Footer'
import Form from './components/formHome/Form';

import Registro from './components/login/Registro';


function App() {
  return (
    <div className="App">


      <Router>
        <Switch>

          <Route exact path='/'>
            <Cover />
            <br />
            <CoverPortada />
            <br />
            <Form />
            <Footer />

          </Route>
          <Route exact path='/Sobre'>
            <br />
            <SobreNosotros />
            <Footer />
          </Route>

          <Route exact path='/Servicios'>
            <br />
            <br />
            <br />
            <Servicios />
            <Footer />
          </Route>

          <Route exact path='/Producto'>
            <br />
            <Producto />
            <Footer />
          </Route>

          <Route exact path='/Login'>
            <Login />
            <Footer />
          </Route>

          <Route exact path='/Registro'>
            <Registro />
            <Footer />
          </Route>




        </Switch>



      </Router>





    </div>
  );
}

export default App;
