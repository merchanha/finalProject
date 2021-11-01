
import './App.css';
import Cover from './components/Cover';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SobreNosotros from './components/SobreNosotros';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';

import Login from './components/Login';
import CoverPortada from './components/CoverPortada';

function App() {
  return (
    <div className="App">


      <Router>
      <Switch>

      <Route exact path='/'>
          <Cover/>
          <CoverPortada/>
        
         
        </Route>
        <Route exact path='/Sobre'>
          <SobreNosotros />
        </Route>

        <Route exact path='/Servicios'>
          <Servicios />
        </Route>


        <Route  exact path='/Contacto'>
          <Contacto />
        </Route>

        <Route exact path='/Login'>
          <Login />
        </Route>

        


      </Switch>



      </Router>
      

    


    </div>
  );
}

export default App;
