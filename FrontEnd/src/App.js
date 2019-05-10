import React from 'react';
import logo from './logo.svg';
import './bg.css'
import Home from './screens/Home'
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Profile from './screens/Profile';
import Experience from './screens/Experience';
import NavBar from './component/NavBar';
import Resources from './screens/Resources';

function App() {
  return (
    
   <div className="bgtheme">
   <NavBar/>
 <div className="container"> 
      <Switch>
      <Route path='/Resources' component={Resources}/>
      <Route path='/Experience' component={Experience} />
      <Route path='/' component={Home} />
     </Switch>
     </div>
     </div>

  );
}

export default App;
