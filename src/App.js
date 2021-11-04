
import './App.css';
import Cover from './components/Cover';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SobreNosotros from './components/SobreNosotros';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';

import Login from './components/login/Login';
import CoverPortada from './components/CoverPortada';
import Navegacion from './components/Navegacion';
import Footer from './components/footer/Footer'
import Form from './components/formHome/Form';

function App() {
  return (
    <div className="App">


      <Router>
      <Switch>

      <Route exact path='/'>
      <Navegacion/>
          <Cover/>
          <CoverPortada/>
          <Form/>
          <Footer/>
         
        </Route>
        <Route exact path='/Sobre'>
        <Navegacion/>
        <br/>
          <SobreNosotros />
          <Footer/>
        </Route>

        <Route exact path='/Servicios'>
        <Navegacion/>
          <Servicios />
          <Footer/>
        </Route>


        <Route  exact path='/Contacto'>
        
          <Contacto />
          <Footer/>
        </Route>

        <Route exact path='/Login'>
        <Navegacion/>
          <Login />
          <Footer/>
        </Route>

        


      </Switch>



      </Router>
      

    


    </div>
  );
}

export default App;
