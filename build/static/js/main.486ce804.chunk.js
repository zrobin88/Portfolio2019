(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/ZacharyRobinResume2019.98d7482c.docx"},,function(e,t,a){e.exports=a.p+"static/media/portrait.796e591d.jpg"},function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){e.exports=a.p+"static/media/moon.761239d3.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),c=a.n(r),o=a(1),i=a(2),l=a(4),m=a(3),u=a(5),d=a(10),h=a.n(d),p=(a(8),a(6),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={count:3,header:["About Me:","Contact Info","Web Development Skills and Technologies","Music & Production Skills"],text:["My name is Zack Robin and I am a web developer with a background in music, recording-technology and entertainment business. Music has always been my greatest passion in life and technology has been what advances it. Through out the past two decades, technology has drastically reshaped music from the way busisness is done, to how it is produced and to how consumers listen to it. This was my primary motivation to get into software development. Technology is able to do incredible things in our modern era and its incredibly exciting to work in the midst of it. Through technology, I aim to change the music industry and the musical experience as a whole. ","- zrobin88@gmail.com - (407)416-9895",""],skills:[[],[],["React.js","Javascript/ES6","HTML5/CSS3","jQuery","Bootstrap(and other CSS libraries)","Relational and Non-Relational Databases","Node.js","Express","API ","MVC","MERN stack","AWS"],["Extensive Knowledge of DAW software specifically Pro Tools and Logic X","Knowledge of Microphone Theory","Concise knowledge of signal flow","Experience working in professional studios","Experience producing full-length albums","Experience working with recoridng artists"," Experience recording albums as an artist myself","Perfect Pitch (the ability to identify musical notes by hearing alone)","20 years experience as a guitarist","Experience playing live shows and tours"]],btnText:["Contact","Go Back","Go Back","Go Back"],btnText2:"Music & Production",btnText3:"Skills and Technologies",cardText:["Check out examples of my work below!","","This Portfolio Was Made With React.js"],currentIndex:0,translateValue:0},a.contactClick=function(e){return e.preventDefault(),0===a.state.currentIndex?a.setState({currentIndex:1,translateValue:1}):(a.state.currentIndex,a.setState({currentIndex:0,translateValue:0}))},a.musicClick=function(e){return e.preventDefault(),a.state.currentIndex,a.setState({currentIndex:3,translateValue:3})},a.devClick=function(e){return e.preventDefault(),a.state.currentIndex,a.setState({currentIndex:2,translateValue:2})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.header,a=e.text,n=e.btnText,r=(e.btnText2,e.btnText3),c=e.cardText,o=e.currentIndex;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"card mb-3m poppins aboutMe text-light exp",style:{"max-width":"93%"},id:"pf"},s.a.createElement("div",{className:"row "},s.a.createElement("div",{className:"col-md-4",style:{padding:"20px"}},s.a.createElement("img",{src:h.a,className:"card-img img",alt:"..."})),s.a.createElement("div",{className:"col-md-8",style:{padding:"20px"}},s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title"},t[o]),s.a.createElement("p",{className:"card-text"},a[o]),s.a.createElement("ul",null,this.state.skills[o].map(function(e){return s.a.createElement("li",null,e)})),s.a.createElement("br",null),s.a.createElement("button",{type:"button",id:"contact",onClick:this.contactClick,className:"btn  btn-outline-light btn-sm"},n[o]),s.a.createElement("button",{type:"button",id:"contact",onClick:this.devClick,className:"btn  btn-outline-light btn-sm"},r),s.a.createElement("br",null),s.a.createElement("p",{className:"card-text",style:{"margin-top":"20px"}},c[o]))))))}}]),t}(n.Component)),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).goToPrev=function(){a.setState({currentIndex:a.state.currentIndex-1})},a.goToNext=function(){if(console.log("clicked"),console.log(a.state.currentIndex),a.setState({currentIndex:a.state.currentIndex+1}),a.state.currentIndex===a.state.count-1)return a.setState({currentIndex:0,translateValue:0})},a.resetState=function(){a.setState(a.baseState)},a.switchTheme=function(){a.setState({count:4,header:"My Music, Production and Sound Design Work",title:["Detoura Album","Berklee Jam","Example Album","Sound Design"],description:["I have produced recorded, produced, mixed and played guitar on all recorded music from Orlando heavy metal band Detoura"],appLink:["https://open.spotify.com/artist/386vqvNmndYq0FjjJi2eHS?si=U_HEhpYuQ5CywFxUIEfoxQ"],ghLink:["https://detouraband.com"]})},a.state={count:8,header:"My Web Apps",title:["Password Generator","The A-List","MeTube","Concordia Music","Unsplash Image Search","Converter","C-R-U-D Packer","Click Game App"],description:["Strong password generator built in React.js","The A-List is a MERN stack app that helps musicians connect with each and find the right person for the job. The user simply creates a profile and can then search for musicians based on Location, Style, Instrument and Gender","This is a React video app that queries the YouTube API to return a list of videos based upon a search term","This is a React app that uses the Last.fm API to return information on any musical artist.","A React App that queries the Unsplash API for Images. Just type a word in the search bar and the app will return images as long as they are on Unsplash.","An app that converts units of measurement. For example, converting a value in miles to kilometers","A C-R-U-D application that helps users manage boxes and inventory. Users can input the contents of the box and the application will save that content and generate a barcode with a unique ID. Users can either scan the barcode or input the unique ID in order to see the box\u2019s contents","This app is a game based on state, event handlers and components in React.js. Each card contains a set score and other data attributes. When the user clicks on a card, the app responds to the users click and alters the React apps state accordingly by adjusting the score in accordance to the users click and reshuffling the card deck after each click."],appLink:["http://zrpasswordgenerator.s3-website.us-east-2.amazonaws.com/","https://alistmusic.herokuapp.com","http://me-tube.s3-website-us-east-1.amazonaws.com/","http://concertoaws.s3-website.us-east-2.amazonaws.com/","http://unsplashsearch.s3-website.us-east-2.amazonaws.com/","https://zrobin88.github.io/converter/","https://sleepy-reaches-75666.herokuapp.com/","https://limitless-springs-76199.herokuapp.com/"],ghLink:["https://github.com/zrobin88/ReactPasswordGenerator","https://github.com/zrobin88/A_List_Music","","https://github.com/zrobin88/React_Unsplash_Image_Search","https://github.com/zrobin88/ZR_ImageSearch","https://github.com/zrobin88/converter","https://github.com/DrySoldier/CRUD-Packer","https://github.com/zrobin88/REACT_Memory_Game"],btnText1:["Link to App",""],btnTex2:["Github",""],currentIndex:0,translateValue:0},a.baseState=a.state,a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){this.props.linkData;var e=this.state,t=e.header,a=e.title,n=e.currentIndex,r=(e.iframeLink,e.description),c=e.appLink,o=e.ghLink;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"jumbotron apptron poppins text-light exp"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"}),s.a.createElement("div",{className:"col-lg-6"})),s.a.createElement("h1",{className:"myApps"},t),s.a.createElement("h2",{className:"title"},a[n]),s.a.createElement("div",{className:"row"},s.a.createElement("p",{className:"font-weight-light description"},r[n])),s.a.createElement("hr",{className:"my-4"}),s.a.createElement("div",{class:"btn-container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4"},s.a.createElement("a",{className:"btn btn-outline-light btn-md",target:"_blank",rel:"noopener noreferrer",href:c[n],role:"button"},this.state.btnText1)),s.a.createElement("div",{className:"col-md-4"}),s.a.createElement("div",{className:"col-md-4"},s.a.createElement("a",{className:"btn btn-outline-light btn-md ghLink jtbtn",target:"_blank",rel:"noopener noreferrer",href:o[n],role:"button"},this.state.btnTex2))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-4"},s.a.createElement("button",{type:"button",id:"prev",className:"btn btn_color jtbtn",onClick:this.goToPrev},"Previous")),s.a.createElement("div",{className:"col-sm-4"}),s.a.createElement("div",{className:"col-sm-4"},s.a.createElement("button",{type:"button",id:"next",className:"btn btn_color jtbtn",onClick:this.goToNext},"Next")))))))}}]),t}(n.Component),g=function(){return s.a.createElement("nav",{className:"navbar poppins navbar-expand-lg exp text-light mainNav fixed-top"},s.a.createElement("a",{className:"navbar-brand text-light",href:"test"}),s.a.createElement("div",{className:"col-md-8"},s.a.createElement("h3",{className:"text-wrap name"},"Zack Robin")),s.a.createElement("div",{className:"col-md-2"},s.a.createElement("a",{className:"btn btn-small btn-light linkedin",type:"btn",target:"blank",href:"https://www.linkedin.com/in/zrobin88/"},"Linkedin")),s.a.createElement("div",{className:"col-md-2"},s.a.createElement("a",{className:"btn btn-small btn-light linkedin",type:"btn",target:"blank",href:"/static/media/ZacharyRobinResume2019.98d7482c.docx",rel:"noopener noreferrer"},"Resume")))},x=function(){return s.a.createElement("footer",null,s.a.createElement("span",{className:"foot"}))},f=(a(17),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"main",style:{marginTop:"20px"}},s.a.createElement(g,null),s.a.createElement("br",null),s.a.createElement(p,null),s.a.createElement("div",{className:"row"},s.a.createElement(b,null)),s.a.createElement(x,null))}}]),t}(n.Component));c.a.render(s.a.createElement(f,null),document.querySelector("#root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.486ce804.chunk.js.map