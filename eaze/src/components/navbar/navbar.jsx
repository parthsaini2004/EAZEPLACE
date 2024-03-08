import React from 'react';
import '../navbar/navbar.css';
// import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";


import '../navbar/navbar.css';

import {Link} from "react-scroll";

// REACT FONT AWESOME IMPORTS

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



function Navbar() {
    
        const [collapsed, setCollapsed] = useState(false);
    
        useEffect(() => {
            let timeoutId;
            if (collapsed) {
                timeoutId = setTimeout(() => {
                    setCollapsed(false);
                }, 2000); // 2 seconds delay
            }
            return () => clearTimeout(timeoutId);
        }, [collapsed]);
    
        const handleToggleClick = () => {
            setCollapsed(!collapsed);
        };
    
    return (
        <>
        <div className="navbarease">
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                {/* <img className="logo" src={logo} alt="logo..." /> */}
                <h1>EAZEPLACE</h1>
                </a>
                <button className="navbar-toggler" id="navtoggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent " aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <FontAwesomeIcon  icon={faBars} style={{color: "#000000"}}/>
                </button>

               {/* <button 
                className="navbar-toggler" 
                id="navtoggle" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                onClick={handleToggleClick}
            >
                <FontAwesomeIcon  icon={faBars} style={{color: "#000000"}}/>
            </button> */}
            

            <button
                            className="navbar-toggler"
                            id="navtoggle"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded={collapsed ? 'true' : 'false'}
                            aria-label="Toggle navigation"
                            onClick={handleToggleClick}
                        >
                            <FontAwesomeIcon icon={faBars} style={{ color: "#000000" }} />
                        </button>

                <div className="collapse navbar-collapse rightadjust" id="navbarSupportedContent"  >
                   
                   
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 changedisplayatmedia " data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" offset={-110}  >
                    <li className="nav-item dropdown padd dropd paddingright" >
                            {/* <a  smooth={true} duration={100} to="teamm" offset={-110} className="nav-link" href="/teamm" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Team</a> */}
                            <a smooth={true} duration={100}  className="dropdown-item dropdown-toggle downitemby1vw " href="/team "  >Internships</a>
                           
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                                <li><a className="dropdown-item" href="/act">Alumni Carrer Talk</a></li>
                                <li><a className="dropdown-item" href="/class-song">Class Song</a></li>
                                <li><a className="dropdown-item" href="/mock-interviews">Mock Interview</a></li>
                                <li><a className="dropdown-item" href="/r-land">R-Land Memoirs</a></li>
                                <li><a className="dropdown-item" href="/legacy-thoughts">Legacy Thoughts</a></li>
                                <li><a className="dropdown-item" href="/rainzo">Rainzo</a></li>
                                <li><a className="dropdown-item" href="/alumini-bigwigs">Alumni Bigwigs</a></li>
                                <li><a className="dropdown-item" href="/alumini-podcasts">Alum Podcast</a></li>
                                
                            </ul>
                      
                      
                        </li>
                        <li className="nav-item dropdown padd dropd paddingright">
                            {/* <a  smooth={true} duration={100} to="teamm" offset={-110} className="nav-link" href="/teamm" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Team</a> */}
                            <a smooth={true} duration={100}  className="dropdown-item dropdown-toggle downitemby1vw" href="/team" >Team</a>
                      
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="/act">Alumni Carrer Talk</a></li>
                                <li><a className="dropdown-item" href="/class-song">Class Song</a></li>
                                <li><a className="dropdown-item" href="/mock-interviews">Mock Interview</a></li>
                                <li><a className="dropdown-item" href="/r-land">R-Land Memoirs</a></li>
                                <li><a className="dropdown-item" href="/legacy-thoughts">Legacy Thoughts</a></li>
                                <li><a className="dropdown-item" href="/rainzo">Rainzo</a></li>
                                <li><a className="dropdown-item" href="/alumini-bigwigs">Alumni Bigwigs</a></li>
                                <li><a className="dropdown-item" href="/alumini-podcasts">Alum Podcast</a></li>
                                
                            </ul>
                      
                        </li> <li className="nav-item">
                            {/* <a  smooth={true} duration={100} to="teamm" offset={-110} className="nav-link" href="/teamm" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Team</a> */}
                            <a smooth={true} duration={100}  className="dropdown-item downitembyhalfvw" href="/team" >
                            <button className="btn  btn-primary  mr-sm-2 " id="signinnav" type="submit">Sign In</button>
                            </a>
                        </li>
                    </ul>


                </div>


            </div>
        </nav>
        </div>
        </>
    )
}


export default Navbar

