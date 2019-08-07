import React, {Component} from 'react';
import Card from './card';
import Jumbotron from './jumbotron';
import Nav from './Nav';
import img from '../IMG/moon.jpg'
class App extends Component{
    
  

    render(){
    return(
        <div className='main'style={{marginTop:'20px'}}>
            <Nav />
            <br />
            <Card />
            <div className='row'>
            <Jumbotron />
            </div>
        </div>
        
    )
}
}

export default App; 