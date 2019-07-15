import React, { Component } from 'react'
import './style.css'
// import img01 from '../IMG/p4.jpg';


class Jumbotron extends Component {

    state = {
        count: 5,
        title: ['The A-List', 'React-Unsplash Image Search','Season Display', 'Concerto','C-R-U-D Packer','Click Game App'],
        description: ['The A-List is a MERN stack app that helps musicians connect with each and find the right person for the job. The user simply creates a profile and can then search for musicians based on Location, Style, Instrument and Gender','This is a React app that uses the Unsplash API to return the first 25 images based upon a search term. Just type a word in the search bar and the app will return images as long as they are on Unsplash.', 'Season Display is a React app that takes the users latitude via Geolocation API and determines whether it is summer or winter in the users current hemisphere of the Earth', 'Concerto an app for music fans. When the user enters the name of an artist, the app connects to the LastFM and Ticketmaster API in order to return the artist top tracks and upcoming live events','A C-R-U-D application that helps users manage boxes and inventory. Users can input the contents of the box and the application will save that content and generate a barcode with a unique ID. Users can either scan the barcode or input the unique ID in order to see the box’s contents', 'This app is a game based on state, event handlers and components in React.js. Each "Rockstar" card contains a set score and other data attributes. When the user clicks on a card, the app responds to the users click and alters the React apps state accordingly by adjusting the score in accordance to the users click and reshuffling the card deck after each click.' ],
        appLink: ["https://alistmusic.herokuapp.com","https://classique-monsieur-26158.herokuapp.com/","https://lit-meadow-55014.herokuapp.com","https://zrobin88.github.io/project_01/","https://sleepy-reaches-75666.herokuapp.com/", "https://limitless-springs-76199.herokuapp.com/"],
        ghLink: ["https://github.com/zrobin88/A_List_Music","https://github.com/zrobin88/React_Unsplash_Image_Search","https://github.com/zrobin88/SeasonDisplay",'https://github.com/zrobin88/project_01',"https://github.com/DrySoldier/CRUD-Packer", "https://github.com/zrobin88/REACT_Memory_Game"],
        currentIndex: 0,
        translateValue: 0
    }

    goToPrev = () => {

        this.setState({
            currentIndex: this.state.currentIndex - 1
        })
        
    }

    goToNext = () => {
        console.log('clicked')
        console.log(this.state.currentIndex)
        this.setState({
            currentIndex: this.state.currentIndex + 1
        })
        
        if(this.state.currentIndex === this.state.count - 1) {
            return this.setState({
              currentIndex: 0,
              translateValue: 0
            })
        }

    };



    render() {
        const { title, currentIndex, description, appLink, ghLink } = this.state;
        return (
            <div className='ui container'>
               
                <div className="jumbotron poppins text-light">

                    <h2 className="title">{title[currentIndex]}</h2>

                    <p className="font-weight-light">{description[currentIndex]}</p>
                    <hr className="my-4" />

                    <a className="btn btn-primary btn-md appLink" target='_blank'rel="noopener noreferrer" href={appLink[currentIndex]} role="button">Go to App</a>
                    <a className="btn btn-primary btn-md ghLink" target='_blank' rel="noopener noreferrer" href={ghLink} style={{ float: 'right' }} role="button">Github Repo</a>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <button type="button" id='prev' className="btn btn_color" onClick={this.goToPrev}>Previous</button>
                        </div>
                        <div className='col-sm-4'></div>
                        <div className='col-sm-4'>
                            <button type="button" id='next' className="btn btn_color" onClick={this.goToNext}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron; 