import React, { Component } from 'react';
import axios from 'axios';
import PostList from './PostList'
import CardC from './CardC'
import CardSection from './CardSection'
import './Experience.css'

class Experience extends Component {
    state = 
         {
            name:'',
            post:'',
            data:[]
        }
    

     async componentDidMount(){
       const {data} = await axios.get("http://localhost:3000/post");
       let newData = [...data]
       console.log(newData)
        this.setState({data:newData})
     }

     async componentWillUpdate(){
        const {data} = await axios.get("http://localhost:3000/products");
        // console.log("ComponentDiMount",data)
       const newData = [...data]
        this.setState({data:newData})
      }

     handlePostSummit = async () => {
        console.log("HandlePostSummit clicked")
         const {data} = await axios.post("http://localhost:3000/post", this.state)
        const blog = data.createdBlog

        window.location = '/experience'
        
     }
    render() { 
        return ( 
            
          <React.Fragment>
              
            <div style={{textAlign:'center'}}>
                <label style={{paddingRight:15, fontSize:50,fontFamily:'bold',fontWeight:'-moz-initial'}}>
                   Name:
                </label>
                <input
                placeholder='Name'
                onChange = {(event) => this.setState({name:event.target.value})}
                />
                
                </div>
                <div style={{textAlign:'center'}}>
                <textarea
                style={{width:400, height:100}}
                onChange={(event) => this.setState({post:event.target.value})}
                placeholder="Write a post here..."
                >
                
                </textarea>
                
                </div>
                <div style={{textAlign:'center'}} >
                <button className="button" onClick={this.handlePostSummit}>Submit</button>
                </div>

              
 
                {/* <div  className="container" style={{textAlign:'center', borderWidth:2, border:true}} className='textoutput'>  */}
                
                {this.state.data.map((data) => {
                    return ( <CardSection><CardC><label style={{fontWeight:'bold'}}>Name:</label><p>{data.name}</p><label  style={{fontWeight:'bold'}}>Blog:</label><p>{data.post}</p></CardC></CardSection> )
                  })}
             
                </React.Fragment>
         );
    }
}
 
export default Experience;