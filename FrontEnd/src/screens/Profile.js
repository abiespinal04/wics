import React, { Component } from 'react';
import Card from '../component/Card'


class Profile extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <div >
               <h1 style={{alignItems:'center', fontFamily:'Impact'}}>
                   WICS
               </h1>
               </div>
               <div>
               <p style={{fontWeight:'bold', fontFamily:'Comic Sans MS'}}>Woman in computer science stands for woman in computer science</p>
               <p>With this website women in CS can post a comment about how they get intrested in the field,</p>
               <p> and hopefully connect woman in the tech field.</p>
           </div>
           </React.Fragment>
         );
    }
}
 
export default Profile;