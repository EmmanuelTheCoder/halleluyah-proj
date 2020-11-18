import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const scrollToTop = () => {
    window.scrollTo(0, 0)
}

const Executive = () =>{
    return(
        <Container>
           <h2 id="executives">meet the youth executives</h2>
           <p className="intro">
               At Christ Apostolic Church Halleluyah Chapel, we have some people selected through the inspiration of the Holy Ghost into various offices to coordinate the youth. These set of people are called <strong>The Youth Executives</strong>. Meet them! 

           </p>
           <div className="executive">
               <div className="president">
                    <img src="pictures/paul.jpg" alt="president"/>
                    <p>Oyinloye, Paul</p>
                    <p>Youth President</p>
                    <p>08031332168</p>
               </div>

               <div className="vp">
                    <img src="pictures/iyanu.jpg" alt="vp"/>
                    <p>Owoyemi, Iyanuoluwa</p>
                    <p>Vice President</p>
                    <p>08109685983</p> 
               </div>
               
               <div className="gen-sec">
                    <img src="pictures/tope.jpg" alt="General secretary"/>
                    <p>Akinyele, Temitope</p>
                    <p>General Secretary</p>
                    <p>09060613238</p> 
               </div>
               <div className="asst-gen-sec">
                    <img src="pictures/samuel.jpg" alt=" Asst.General secretary"/>
                    <p>Idowu, Samuel</p>
                    <p>Assistant General Secretary</p>
                    <p>08105160160</p> 
               </div>
               <div className="treasurer">
                    <img src="pictures/folashayo.jpg" alt="Treasurer"/>
                    <p>Olawole, Folashayo</p>
                    <p>Treasurer</p>
                    <p>07060438908</p> 
               </div>
               <div className="fin-sec">
                    <img src="pictures/lydia.jpg" alt="Financial Secretary"/>
                    <p>Solarin, Lydia</p>
                    <p>Financial Secretary</p>
                    <p>08186786401</p> 
               </div>
               <div className="pro">
                   <img src="pictures/darasimi.jpg" alt="PRO"/>
                   <p>Onigbinde, Oluwadarasimi</p>
                   <p>Public Relation Officer</p>
                   <p>09066724369</p>
               </div>
               <div className="acad-cord1">
                    <img src="pictures/adeola.jpg" alt="Academic coordinator1"/>
                    <p>Adekeye, Adeola</p>
                    <p>Academic Coordinator 1</p>
                    <p>08100581923</p> 
               </div>
               <div className="acad-cord2">
                    <img src="pictures/timothy.jpg" alt="Academic coordinator 2"/>
                    <p>Solarin, Timothy</p>
                    <p>Academic Coordinator 2</p>
                    <p>08094169801</p> 
               </div>
               <div className="Prayo1">
                    <img src="pictures/emmanuel.jpg" alt="Prayer Secretary1"/>
                    <p>Aiyenigba, Emmanuel</p>
                    <p>Prayer Secretary 1</p>
                    <p>08147367859</p> 
               </div>
               <div className="Prayo2">
                    <img src="pictures/elijah.jpg" alt="Prayer Secretary 2"/>
                    <p>Otunla, Elijah</p>
                    <p>Prayer Secretary 2</p>
                    <p>08136766543</p> 
               </div>
           </div>
           <div className="hods">
               <h2>meet the HOD<small>s</small></h2>
               <p className="hod-intro">Meet the Heads of the various departments in CAC Halleluyah Chapel</p>
               <div className="hod">
                   <div className="technical">
                       <img src="pictures/justina.jpg" alt="Technical unit HOD"/>
                       <p>Megbowon, Justinah</p>
                       <p>HOD, Technical unit</p>
                       <p>07065972873</p>
                   </div>
                  
                   <div className="sunday-school">
                        <img src="pictures/barrister.jpg" alt="HOD Sunday School Unit" />
                        <p>Barr. Ajiroba, Paul</p>
                        <p>HOD, Sunday School Unit</p>
                        <p>08174593928</p>
                    </div>
                   <div className="press">
                       <img src="pictures/darasimi.jpg" alt="HOD Press Unit"/>
                       <p>Onigbinde, Oluwadarasimi</p>
                       <p>HOD, Press Unit</p>
                        <p>09066724369</p>
                   </div>

                    <div className="interpretation">
                       <img src="pictures/ifeoluwa.jpg" alt="HOD interpretaion"/>
                       <p>Adebayo, Ifeoluwa</p>
                       <p>HOD, Drama and Interpretaion Units</p>
                       <p>08165385205</p>
                   </div>
                    <div className="usher">
                        <img src="pictures/lanre.jpg" alt="HOD Ushering Unit" />
                        <p>Ashaolu, Olanrewaju</p>
                        <p>HOD, Ushering Unit </p>
                        <p>08087872367</p>
                    </div>
                    <div className="choir">
                        <img src="pictures/christiana.jpg" alt="HOD Choir Unit" />
                        <p>Ayoade, Christianah</p>
                        <p>HOD, Choir Unit</p>
                        <p>08166998987</p>
                    </div>
                    <div className="sanitation">
                        <img src="pictures/adeniyi.jpg" alt="HOD Sanitation Unit" />
                        <p>Ashaolu, Adeniyi</p>
                        <p>HOD, Sanitation Unit</p>
                        <p>07035582976</p>
                    </div>
                    <div className="children-unit">
                        <img src="pictures/temitope.jpg" alt="HOD Children Unit" />
                        <p>Ajiroba, Temitope</p>
                        <p>HOD, Children Unit</p>
                        <p>08134557555</p>
                    </div>

               </div>

               
           </div>
           
           <div className="home" onClick={scrollToTop}>
                <Link to="/">
                    <img src="https://img.icons8.com/flat_round/64/000000/arrow-left.png" alt="return home"/>
                    <p>Return to homepage</p>
                </Link>
           </div>
        </Container>
        // name, department, phone and office
    );
}
export default Executive;

const Container = styled.div`
    margin-top: 9rem;
    box-sizing: border-box;
    h2{
        text-transform: uppercase;
        text-align: center;
        color: blue;
        
    }
    .intro{
        text-align: justify;
        padding: 1rem 2rem;
        font-size: 1.1rem;
        font-family: sans-serif;
    }

    img{
        width: 15rem;
    }
    .executive{
        text-align: center;
        margin-top: 2rem;
    }
    .executive > div, .hod > div{
        margin-bottom: 2.3rem;
    }
    .executive p, .hods p{
        font-size: 1.2rem;
        font-family: sans-serif;
    }
    .vp img{
        width: 12rem;
    }
    .acad-cord2 img{
        height: 24rem;
        width: 14rem;

    }
    .hod-intro{
        text-align: center;
        font-size: 1.2rem;
        padding: .2 .8rem;
        margin-bottom: 2rem;
    }
    .hods{
        text-align: center;
        margin-top: 3rem;
    }
    .home{
        margin-top: 5rem;
        text-align: center;
        font-size: 1.1rem;
        font-weight: 800;
    }
    .home img{
        width: 4rem;
    }
    .sunday-school img{
        height: 15rem;
        width: 18rem;
    }
    @media(min-width: 960px){
        .executive, .hod{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
        .vp img{
            width: 12rem;
        }
        .acad-cord2 img{
            height: 20rem;
            width: 13rem;

        }
    }
`