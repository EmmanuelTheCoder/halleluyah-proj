import React from 'react';
import './Halleluyah.css';
import Title from './Title';
import Executive from './Executive';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import Footer from './Footer';



const App = () =>{
   return(
      <React.Fragment>
        <Title />
        <Switch>
          <Route path="/"  exact component={LandingPage} />
          <Route path="/executives" component={Executive} />
        </Switch>
        <Footer />
      </React.Fragment>
   );
}
export default App;
















































// import React from 'react';
// import cac from './pictures/cac.png';
// import './App.css';
// import adeola from './pictures/adeola.jpg';
// import darasimi from './pictures/darasimi.jpg';
// import elijah from './pictures/elijah.jpg';
// import emmanuel from './pictures/emmanuel.jpg';
// import halleluyah from './pictures/halleluyah.png';
// import iyanu from './pictures/iyanu.jpg';
// import justina from './pictures/justina.jpg';
// import lydia from './pictures/lydia.jpg';
// import pastor from './pictures/pastor Ajiroba.png';
// import paul from './pictures/paul.jpg';
// import timothy from './pictures/timothy.jpg';
// import tope from './pictures/tope.jpg'


// const App = () =>{
//     return(
//         <div className="app">
//             <div className="logo-background">
//                <div className="header">
//                      <div className="popup">
                        
//                      </div>
//                   <img src={cac} alt="cac logo" className="logo" />

//                   <h2>Halleluyah <span className="c">c</span>hapel</h2>
//                </div>
//                <div className="about">
//                   {/* <h2>About Church</h2> */}
//                   <p className="church-info"><span className="halleluyah">Christ Apostolic Church (CAC) Halleluyah chapel</span>
//                      is a church located at Beatrice Anike street, Tanke-Okeodo, Ilorin, Nigeria. It was established in the
//                      year 2003 by the Lord's decree to Pastor M.B Ajiroba who is the Minister-in-charge. The church has been
//                      a life-changing arena, helping youths and interested adults to model their part
//                   </p>
//                   <img src={halleluyah} alt="halleluyah" className="halleluyah-pix"/>
//                   <p>

//                   </p>
//                </div>
//             </div>
//             <div className="service">
//                <h2>Service schedule</h2>
//                <table>
//                   <tr>
//                      <td>Sunday</td>
//                      <td>Worship service</td>
//                      <td>7:00am</td>
//                   </tr>
//                   <tr>
//                      <td>Wednesday</td>
//                      <td>Bible study</td>
//                      <td>5:00pm</td>
//                   </tr>
//                   <tr>
//                      <td>Friday</td>
//                      <td> Prayer</td>
//                      <td>5:00pm</td>
//                   </tr>
//                </table>
//             </div>
//             <div className="minister">
//                <h2>Minister-in-charge</h2>
//                <img src={pastor} alt="pastor" className="pastor"/>
//                <p>Pastor Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
//                   Harum dolor accusamus quasi eveniet 
//                   ad expedita beatae exercitationem veritatis
//                    facilis eligendi mollitia, magni explicabo 
//                    rerum illum dicta quaerat amet quae sint.
//                </p>
//             </div>
//             <div className="excos">
//                <h2>Meet the youth excecutives</h2>
//                <p className="excos-info">CAC Halleluyah Chapel is a church that is attended by alot of
//                   youths hence the need to have the Youth Executives body. These are the current excos
//                   for the 2019/2020 tenure; 
//                </p>
//                   {/* start display grid */}
//                   <div className="grid">
//                      <div className="president">
//                      <div className="president-info">
//                         <img src={paul} alt="Paul Oyinloye" className="paul general"/>
//                            <p> <label>Name:</label> Paul Oyinloye</p>
//                            <p> <label>Department: </label>Linguistics and Nigerian Languages</p>
//                            <p> <label>Phone:</label></p>
//                            <p> <label>Office:</label> Youth President</p>
//                      </div>

//                      <div className="president-info">
//                      <img src={iyanu} alt="Iyanuoluwa Owoyemi" className="iyanu general"/>
//                         <p><label>Name:</label> Owoyemi, Iyanuoluwa Oluwaseun</p>
//                         <p><label>Department:</label> Agricultural and Biosystems Engineering</p>
//                         <p><label>Phone:</label> 08109685985</p>
//                         <p><label>Office:</label> Vice President</p>
//                      </div>

//                   </div>
//                   <div className="group1">
//                      <div className="gensec">
//                         <img src={tope} alt="Tope Akinyele" className="tope general"/>
//                         <p><label>Name:</label> Akinyele, Temitope Esther</p>
//                         <p><label>Department:</label> Art Education</p>
//                         <p><label>Phone:</label> 08109685985</p>
//                         <p><label>Office:</label> General Secretary</p>

                           
//                      </div>
                     
//                      <div className="gensec">
//                            <img src={emmanuel} alt="" className="samuel general"/>
//                            <p><label>Name:</label> Akinyele, Temitope Esther</p>
//                            <p><label>Department</label>Art Education</p>
//                            <p><label>Phone:</label> 08109685985</p>
//                            <p><label>Office:</label> General Secretary</p>
//                         </div>
//                   </div>
//                   <div className="group2">
//                      <div className="academic-cord">
//                         <img src={adeola} alt="Adeola Adekeye" className="tope general"/>
//                            <p><label>Name:</label> Adekeye, Adeola Oluwatomi</p>
//                            <p><label>Department:</label> Agricultural Economic and Farm Management Practice</p>
//                            <p><label>Phone:</label> 08109685985</p>
//                            <p><label>Office:</label> Academic Coordinator 1</p>
//                      </div>
//                      <div className="academic-cord">
                           
//                            <img src={timothy} alt="Timothy Solarin" className="samuel general"/>
//                            <p><label>Name:</label> Solarin, O. Timothy</p>
//                            <p><label>Department</label> Finance</p>
//                            <p><label>Phone:</label> 08109685985</p>
//                            <p><label>Office:</label> Academic Coordinator 2</p>
//                      </div>
//                   </div>
//                   <div className="group3">
//                      <div className="prayer-cord">
//                         <img src={emmanuel} alt="Emmanuel Aiyenigba" className="emmanuel general" />
//                         <p><label>Name:</label> Emmanuel Juwon Aiyenigba</p>
//                         <p><label>Department</label> Zoology</p>
//                         <p><label>Phone</label> 08147367859</p>
//                         <p><label>Office</label> Prayer Secretary 1</p>

//                         <img src={elijah} alt="Elijah Otunla" className="elijah general"/>
//                            <p><label>Name:</label> Otunla, Elijah Oluwafemi</p>
//                            <p><label>Department:</label> Telecommunication Science</p>
//                            <p><label>Phone:</label> 09074916632</p>
//                            <p><label>Office:</label> Prayer Secretary 2</p>
//                      </div>
//                      <div className="group4">
//                         <img src={darasimi} alt="Darasimi Onigbinde" className="darasimi general"/>
//                            <p><label>Name:</label> Onigbinde, Oluwadarasimi</p>
//                            <p><label>Department</label> Marketing</p>
//                            <p><label>Phone:</label> 09066724369</p>
//                            <p><label>Office:</label> Public Relation Officer</p>

//                            <img src={lydia} alt="lydia Solarin" className="lydia general"/>
//                               <p><label>Name:</label> Solarin, Lydia Adeola</p>
//                               <p><label>Department:</label> Educational Management</p>
//                               <p><label>Phone:</label> 08186786401</p>
//                               <p><label>Office:</label>Financial Secretary</p>
//                      </div>
//                   </div>
//                   </div>
//                   {/* end display grid */}
            
//             </div>
//             <div className="hod">
//                <h2>Meet the H.O.D<span className="hod-s">s</span></h2>
//                <p className="description">At CAC Halleuyah Chapel, there are
//                different units or department where members can volunteer to work for 
//                the Lord. Each unit is led by the "Head of Department (HOD)". Meet them!
//                </p>
//                   <div className="justina">
//                      <img src={justina} alt="Justina Megbowon" className="justina general"/>
//                      <p><label>Name:</label> Megbowon, Justina Abiola</p>
//                      <p><label>Department</label> Educational Management</p>
//                      <p><label>Phone:</label> 08186786401</p>
//                      <p><label>Office:</label>HOD, Technical Unit</p>
//                   </div>
//       </div>
//         </div>
//     )
// }
// export default App;