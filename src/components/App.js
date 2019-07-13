import React, {Component} from 'react';
import Card from './card';
import Jumbotron from './jumbotron';
import Nav from './Nav';
class App extends Component{
    
    state={}

    render(){
    return(
        <div className='ui container'style={{marginTop:'20px'}}>
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