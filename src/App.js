import React, { useState, useEffect } from "react";
import './app.css';
import Homepage from "./pages/Homepage";
import Shop from './pages/Shop';
import { Route , Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import { auth } from './Firebase/firebase.utils';

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(user => {

      setCurrentUser(user);

      console.log(user)
    })
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/Login' component={Login}/>
        <Route path='/Contact' />
      </Switch>
    </div>
  );
}

export default App;
