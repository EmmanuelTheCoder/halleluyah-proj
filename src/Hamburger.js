import React, {Component} from 'react';
import HamburgerMenu from  'react-hamburger-menu';
import './Halleluyah.css';


class Hamburger extends Component{
    state = {
        open: [false, true, false, true],
        toggler: {
            display: 'none'
        }
    };

   

    handleClick(){
        // if(!this.state.toggler){
        //     this.setState({
        //         toggler: this.state.toggler
        //     })
        // }
        
        this.setState({
            open: !this.state.open,
            
        });
                    // if(this.state.open){
                    //     alert("open")
                    // }
                    // this.setState({
                    //     toggler:{
                    //         display: 'block'
                    //     }
                    // })
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
        const arrangement = {
            display: 'none',
        }
        return(
            <div>
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

               <div style={this.state.toggler}>
               <p>hello peope</p>
                <p>how are you doing</p>
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