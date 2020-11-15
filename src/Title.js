import React from 'react';
import {Link} from 'react-router-dom';
import Hamburger from './Hamburger';
import './Halleluyah.css';
import cac from './pictures/cac.png';
const Title = () =>{
    return(
        <div className="header">
            <img src={cac} alt="church logo" />
            <Link to="/">
                <h1> 
                <strong>Halleluyah Chapel</strong></h1>
            </Link>
            <div className="hamburger-container">
                <Hamburger />
            </div>
        </div>
    );
}
export default Title;