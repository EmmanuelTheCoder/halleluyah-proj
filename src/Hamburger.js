import React, {Component} from 'react';
import HamburgerMenu from  'react-hamburger-menu';
import {Link} from 'react-router-dom';
import './Halleluyah.css';


class Hamburger extends Component{
    state = {
        open: [false, true, false, true],
        toggler: {
            display: 'none'
        },
        handleDisplay:{
            display: 'block'
        }
       
    };
    
    handleHide =() =>{
        this.setState({
            handleDisplay:{
                display: 'none'
            }
        })

        
    }
   

    handleClick(){
        
        this.setState({
            open: !this.state.open,
            
        });
        if(this.state.open){
            this.setState({
                toggler:{
                    display: 'block'
                }
            })
        }else{
            this.setState({
                toggler:{
                    display: 'none'
                }
            })
        }
    }
    render(){
       
        return(
            <div>
                <div className="hamburger-div">
                    <HamburgerMenu
                        isOpen={!this.state.open}
                        menuClicked={this.handleClick.bind(this)}
                        width={30}
                        height={20}
                        strokeWidth={3}
                        rotate={0}
                        color='white'
                        borderRadius={0}
                        animationDuration={0.5}
                        className="hamburger"
                    />
                </div>

               <div style={this.state.toggler} className="hamburger-list">
                
                    <Link to="/">
                        {/* <a href="#about-church">About Church</a>
                        <a href="#service-schedule">Service Schedule</a>
                        <a href="#minister-in-charge">Minister-In-Charge</a> */}
                        <a href="#contact">Contact</a>
                    </Link>
                    <Link to="/">
                        <a href="#about-church">About Church</a>
                        <p href="#contact">contact fake</p>
                    </Link>
                    <Link to="/executives" className="executives">
                        <a href="#executive" >Meet The Executive</a>
                    </Link>
                    <a href="#minister-in-charge">dfaffdfad</a>
                
               </div>
            </div>
            
        );
    };
}
export default Hamburger;




// handleClick() {
//     this.setState({
//         open: !this.state.open
//     });
// }
// An example use of React Hamburger Menu looks like:

// <HamburgerMenu
//     isOpen={this.state.open}
//     menuClicked={this.handleClick.bind(this)}
//     width={18}
//     height={15}
//     strokeWidth={1}
//     rotate={0}
//     color='black'
//     borderRadius={0}
//     animationDuration={0.5}
// />