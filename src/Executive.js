import React from 'react';
import styled from 'styled-components';

const Executive = () =>{
    return(
        <Container>
           <h2>meet the youth executives</h2>
           <p className="intro">
               At Christ Apostolic Church Halleluyah Chapel, we have some people selected through the inspiration of the Holy Ghost into various offices to coordinate the youth. These set of people are called <strong>The Youth Executives</strong>. Meet them! 

           </p>
           <div className="executive">
               <div className="president">
                    <img src="pictures/paul.jpg" alt="president"/>
                    <p>Oyinloye, Paul</p>
                    <p>Youth President</p>
                    <p>08147383949</p>
               </div>

               <div className="vp">
                    <img src="pictures/iyanu.jpg" alt="vp"/>
                    <p>Owoyemi, Iyanuoluwa</p>
                    <p>Vice President</p>
                    <p>08147383949</p> 
               </div>
               
               <div className="gen-sec">
                    <img src="pictures/tope.jpg" alt="General secretary"/>
                    <p>Akinyele, Temitope</p>
                    <p>General Secretary</p>
                    <p>08147383949</p> 
               </div>
               <div className="asst-gen-sec">
                    <img src="pictures/tope.jpg" alt="General secretary"/>
                    <p>Idowu, Samuel</p>
                    <p>Assistant General Secretary</p>
                    <p>08147383949</p> 
               </div>
               <div className="treasurer">
                    <img src="pictures/adeola.jpg" alt="General secretary"/>
                    <p>Olawole, Folashayo</p>
                    <p>Treasurer</p>
                    <p>08147383949</p> 
               </div>
               <div className="fin-sec">
                    <img src="pictures/lydia.jpg" alt="General secretary"/>
                    <p>Solarin, Lydia</p>
                    <p>Financial Secretary</p>
                    <p>08147383949</p> 
               </div>
               <div className="acad-cord1">
                    <img src="pictures/adeola.jpg" alt="General secretary"/>
                    <p>Adekeye, Adeola</p>
                    <p>Academic Coordinator 1</p>
                    <p>08147383949</p> 
               </div>
               <div className="acad-cord2">
                    <img src="pictures/timothy.jpg" alt="General secretary"/>
                    <p>Solarin, Timothy</p>
                    <p>Academic Coordinator 2</p>
                    <p>08147383949</p> 
               </div>
               <div className="Prayo1">
                    <img src="pictures/emmanuel.jpg" alt="General secretary"/>
                    <p>Aiyenigba, Emmanuel</p>
                    <p>Prayer Secretary 1</p>
                    <p>08147383949</p> 
               </div>
               <div className="Prayo2">
                    <img src="pictures/elijah.jpg" alt="General secretary"/>
                    <p>Otunla, Elijah</p>
                    <p>Prayer Secretary 2</p>
                    <p>08147383949</p> 
               </div>
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
    .executive > div{
        margin-bottom: 2.3rem;
    }
    .executive p{
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
    @media(min-width: 960px){
        .executive{
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