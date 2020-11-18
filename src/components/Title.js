import React from 'react';
import {Link} from 'react-router-dom';
import Hamburger from './Hamburger';
import '../Halleluyah.css';

const Title = () =>{
    
    const scrollToTop = () =>{
        window.scrollTo(0,0);
    }
    return(
        <div className="header">
            <img src="pictures/cac.png" alt="church logo" />
            <Link to="/">
                <h1> 
                <strong>Halleluyah Chapel</strong></h1>
            </Link>
            <div className="top-header">
                        <Link to="/" className="display-later" onClick={()=>window.scrollTo(0,20)}>
                            <p>About Church</p>
                        </Link>
                        <Link to="/" onClick={()=>window.scrollTo(0,600)}>
                            <p>Service Schedule</p>
                        </Link>
                        <Link to="/" onClick={()=>window.scrollTo(0,1000)}>
                            <p>minister-in-charge</p>
                        </Link>
                        <Link to="/" className="display-later" onClick={()=>window.scrollTo(0,2600)}>
                            <p>contact</p>
                        </Link>
                        <Link to="/executives" className="executives" onClick={scrollToTop}>
                            <p>meet the executives</p>
                        </Link>
            </div>
            <div className="hamburger-container">
                <Hamburger />
            </div>
        </div>
    );
}
export default Title;