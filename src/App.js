
import './App.css';
import Cover from './components/Cover';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SobreNosotros from './components/SobreNosotros';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';

import Login from './components/login/Login';
import CoverPortada from './components/CoverPortada';
import Navegacion from './components/Navegacion';
import Registro from './components/login/Registro';

function App() {
  return (
    <div className="App">


      <Router>
      <Switch>

      <Route exact path='/'>
      <Navegacion/>
          <Cover/>
          <CoverPortada/>
        
         
        </Route>
        <Route exact path='/Sobre'>
        <Navegacion/>
        <br/>
          <SobreNosotros />
        </Route>

        <Route exact path='/Servicios'>
        <Navegacion/>
       
        
          <Servicios />
        </Route>


        <Route  exact path='/Contacto'>
        
          <Contacto />
        </Route>

        <Route exact path='/Login'>
        <Navegacion/>
          <Login />
        </Route>

        <Route exact path='/Registro'>
        <Navegacion/>
          <Registro/>
        </Route>

        


      </Switch>



      </Router>
      

    


    </div>
  );
}

export default App;
