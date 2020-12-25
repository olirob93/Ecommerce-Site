import React from "react";
import Homepage from "./pages/Homepage";
import Shop from './pages/Shop'
import { Route , Switch } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
