import React from 'react'
import Resume from '../IMG/ZacharyRobin_07_2019.pdf'
import './style.css'

const Nav = () => {

    return (

    <nav className="navbar poppins text-light">
            <a className="navbar-brand text-light" href="test">
               <ins id='ul'>  Zack Robin </ins>  
            </a>
            <a type="button" id='linkedin-btn' href='https://www.linkedin.com/in/zrobin88/' target='_blank'rel="noopener noreferrer"  class="btn btn-outline-light btn-sm">Linkedin</a>
            <a type="button" href={Resume} target="blank" class="btn btn-outline-light btn-sm" rel="noopener noreferrer" >Resume</a>
    </nav>
            )
        }
        
export default Nav