import React, {Component} from 'react';
import Img from '../IMG/portrait.jpg'
import './style.css'


//change state for contact info 
class Card extends Component{

    state={
        count: 2,
        header: ['From Musician to Developer', 'Contact Info'],
        text: ['My name is Zack Robin I am a web developer with a background in music, recording-technology and entertainment business. My skills Include: - React.js - Javascript - HTML5/CSS3 - SQL/MongoDB - Node.js - Express.js - Working with APIs - Knowledge of MVC architecture - Knowledge of MERN stack', '- zrobin88@gmail.com - (407)416-9895'],
        btnText: ['Contact','Go Back'],
        currentIndex: 0,
        translateValue: 0
    }


    contactClick=(event)=>{
        event.preventDefault();
        if(this.state.currentIndex === 0) {
            return this.setState({
              currentIndex: 1,
              translateValue: 1
            })}
        else if(this.state.currentIndex ===1){
            return this.setState({
                currentIndex:0,
                translateValue: 0
            })
        }
    }


    render(){
        const{header,text,btnText,currentIndex}=this.state
    return (
       
        <div className="card mb-3m poppins text-light"style={{'max-width': '93%'}} id='pf'>
            <div className="row ">
                <div className="col-md-4"style={{padding:'20px'}}>
                    <img src={Img} className="card-img img" alt="..."/>
            </div>
                    <div className="col-md-8" style={{padding:'20px'}}>
                        <div className="card-body">
                            <h5 className="card-title">{header[currentIndex]}</h5>
                            <p className="card-text">{text[currentIndex]}</p>
                           
                            <button type="button" id='contact'onClick={this.contactClick}className="btn  btn-outline-light btn-sm">{btnText[currentIndex]}</button>
                        </div>
                    </div>
                </div>
            </div>

            )
        }
    }
        
export default Card; 