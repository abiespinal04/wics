import React from 'react';
import {Link} from "react-router-dom";
import About from './About';
import Card from './Card'
import nav from './navBar.css'
import Experience from '../screens/Experience';


const NavBar = () => {
    return ( 
      <div className="shadow">
        <nav class="navbar navbar-light" style={{backgroundColor:'#ff9999'}}>
         
            <nav style={{width:"100%"}} className="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="nav-link active" id="pills-home-tab" data-toggle="pill" to="/" role="tab" aria-controls="pills-home" aria-selected="true">Home</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">

    <Link class="nav-link" id="pills-profile-tab" data-toggle="pill" to="/Experience" role="tab" aria-controls="pills-profile" aria-selected="false">Experience</Link>
      <Link class="nav-item nav-link" to="/Resources" >Resources</Link>
      {/* <Link class="nav-item nav-link" to="/" >About</Link>
    */}
    </div>
  </div>
</nav>
       
        </nav>
        </div>
     );
}
 
export default NavBar;