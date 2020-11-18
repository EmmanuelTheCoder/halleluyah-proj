import React, {Component} from 'react';
import HamburgerMenu from  'react-hamburger-menu';
import {Link} from 'react-router-dom';
import '../Halleluyah.css';


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
     scrollToTop = () => {
        window.scrollTo(0, 0)
    }

   displaySetting = ()=>{
        this.setState({
            toggler:{
                display: "none"
            },
            open: !this.state.open
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
                
                    
                    <div className="group-of-links" onClick={this.displaySetting}>
                        <Link to="/" onClick={()=>window.scrollTo(0,20)}>
                            <p>About Church</p>
                        </Link>
                        <Link to="/" onClick={()=>window.scrollTo(0,600)}>
                            <p>Service Schedule</p>
                        </Link>
                        <Link to="/" onClick={()=>window.scrollTo(0,1000)}>
                            <p>minister-in-charge</p>
                        </Link>
                        <Link to="/" onClick={()=>window.scrollTo(0,2600)}>
                            <p>contact</p>
                        </Link>
                    </div>
                   
                    <Link to="/executives" className="executives" onClick={this.scrollToTop}>
                        <p>meet the executives</p>
                    </Link>
                    
                
               </div>
               
            </div>
            
        );
    };
}
export default Hamburger;
