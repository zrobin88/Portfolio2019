import React, { Component } from 'react'
import './style.css'


class Jumbotron extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 7,
            header: 'My Web Apps',
            title: ['The A-List', 'MeTube', 'Concordia Music', 'Unsplash Image Search', 'Converter', 'C-R-U-D Packer', 'Click Game App'],
            description: ['The A-List is a MERN stack app that helps musicians connect with each and find the right person for the job. The user simply creates a profile and can then search for musicians based on Location, Style, Instrument and Gender','This is a React video app that queries the YouTube API to return a list of videos based upon a search term', 'This is a React app that uses the Last.fm API to return information on any musical artist.', 'A React App that queries the Unsplash API for Images. Just type a word in the search bar and the app will return images as long as they are on Unsplash.', 'An app that converts units of measurement. For example, converting a value in miles to kilometers', 'A C-R-U-D application that helps users manage boxes and inventory. Users can input the contents of the box and the application will save that content and generate a barcode with a unique ID. Users can either scan the barcode or input the unique ID in order to see the box’s contents', 'This app is a game based on state, event handlers and components in React.js. Each card contains a set score and other data attributes. When the user clicks on a card, the app responds to the users click and alters the React apps state accordingly by adjusting the score in accordance to the users click and reshuffling the card deck after each click.'],
            appLink: ["https://alistmusic.herokuapp.com","http://me-tube.s3-website-us-east-1.amazonaws.com/", "http://concertoaws.s3-website.us-east-2.amazonaws.com/", "http://unsplashsearch.s3-website.us-east-2.amazonaws.com/", "https://zrobin88.github.io/converter/", "https://sleepy-reaches-75666.herokuapp.com/", "https://limitless-springs-76199.herokuapp.com/"],
            ghLink: ["https://github.com/zrobin88/A_List_Music", "","https://github.com/zrobin88/React_Unsplash_Image_Search", "https://github.com/zrobin88/ZR_ImageSearch", "https://github.com/zrobin88/converter", "https://github.com/DrySoldier/CRUD-Packer", "https://github.com/zrobin88/REACT_Memory_Game"],
            btnText1: ['Link to App', ''],
            btnTex2: ['Github', ''],

            currentIndex: 0,
            translateValue: 0
        }
        // preserve the initial state in a new object
        this.baseState = this.state
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

        if (this.state.currentIndex === this.state.count - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }


    };

    resetState = () => {
        this.setState(this.baseState)
    }


    //Method that sets the state from web to music
    switchTheme = () => {
        this.setState({
            count: 4,
            header: 'My Music, Production and Sound Design Work',
            title: ['Detoura Album', 'Berklee Jam', 'Example Album', 'Sound Design'],
            description: ['I have produced recorded, produced, mixed and played guitar on all recorded music from Orlando heavy metal band Detoura'],
            appLink: ['https://open.spotify.com/artist/386vqvNmndYq0FjjJi2eHS?si=U_HEhpYuQ5CywFxUIEfoxQ',],
            ghLink: ['https://detouraband.com',],

            // btnText1: ['Listen on Spotify', ],
            // btnTex2: ['Band Website']
        })
    }


    render() {
        let linkData = this.props.linkData
        const { header, title, currentIndex, iframeLink, description, appLink, ghLink } = this.state;
        return (
            <div className='container'>

                <div className='row'>

                    <div className="jumbotron apptron poppins text-light exp">
                        <div className='row'>
                            <div className='col-lg-6'>
                                {/* <button type="button" className="btn btn-outline-light upperBtn web" onClick={this.resetState}>Web Apps</button> */}
                            </div>
                            <div className='col-lg-6'>
                                {/* <button type="button" className="btn  btn-outline-light upperBtn musicAudio" onClick={this.switchTheme}>Music/Audio</button> */}
                            </div>
                        </div>
                        <h1 className='myApps'>{header}</h1>

                        <h2 className="title">{title[currentIndex]}</h2>
                        <div className='row'>
                        <p className="font-weight-light description">{description[currentIndex]}</p>
                        </div>
                        <hr className="my-4" />
                        <div class='btn-container'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <a className="btn btn-outline-light btn-md" target='_blank' rel="noopener noreferrer" href={appLink[currentIndex]} role="button">{this.state.btnText1}</a>
                                </div>
                                <div className='col-md-4'></div>
                                <div className='col-md-4'>
                                    <a className="btn btn-outline-light btn-md ghLink jtbtn" target='_blank' rel="noopener noreferrer" href={ghLink[currentIndex]} role="button">{this.state.btnTex2}</a>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-sm-4'>
                                    <button type="button" id='prev' className="btn btn_color jtbtn" onClick={this.goToPrev}>Previous</button>
                                </div>
                                <div className='col-sm-4'></div>
                                <div className='col-sm-4'>
                                    <button type="button" id='next' className="btn btn_color jtbtn" onClick={this.goToNext}>Next</button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron; 