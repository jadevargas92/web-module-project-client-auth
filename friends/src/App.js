import Login from './components/Login'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'
import { axiosWithAuth } from './utils/axiosWithAuth'

function App() {

  return (
    <Router>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <div className="App">
        <h1>Friends App</h1>
    </div>
    <Switch>
      <PrivateRoute path="/protected" component={Friends} />
      <Route exact path="/login" component={Login} />
    </Switch>
    </Router>
    
  );
}

export default App;
