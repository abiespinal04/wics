import React, { Component } from 'react';
import NavBar from './Header'
import Profile from './Profile';


import axios from 'axios'

class Home extends Component {
    state = { 
        data:null
     }

     async componentDidMount(){
        const {data} = await axios.get("http://localhost:3000/post");
        let newData = [...data]
        console.log(newData)
         this.setState({data:newData})
      }

    render() { 
        return ( <Profile/> );
    }
}
 
export default Home;