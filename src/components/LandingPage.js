import React from 'react';
import '../Halleluyah.css';
import Title from './Title';
import {Link} from 'react-router-dom';


const scrollToTop = () => {
   window.scrollTo(0, 0)
}

const LandingPage = () =>{
   
   return(
      <React.Fragment>
        
         <div>
            <Title />
            <div className="about-church">
               
               <div className="church-info-container">
                  
                  <p className="church-info" id="about-church">
                     Christ Apostolic Church (CAC) Halleluyah chapel is located at Beatrice Anike street, Tanke-Okeodo, Ilorin, Nigeria. It was established on
                     November 1, 2003 by the Lord's decree to Pastor M.B Ajiroba who is the Minister-in-charge. The church has been
                     a life-changing arena, helping people, especially youths to do better and to set their focus on Christ alone. <i>To succeed in life and make heaven </i> 
                     is the Church's mission statement; derived from Matthew 6:33. From the inception of CAC Halleluyah Chapel, everyone who worships or has ever worshipped here have been known to testify of how mightily the Lord has blessed them and the encouters they've had with the Lord. It is indeed a life changing arena.
                     Worship with us, today! 
                  </p>
               </div>
               <div className="church-image-container">
                  <img src="pictures/halleluyah.png" alt="church" className="church-image" />
                  <p className="image-desc">side view of the church</p>
               </div>

            </div>

            <div className="service">
              <h2 id="service-schedule">Service schedule</h2>
              <table>
                  <tbody>
                     <tr>
                        <td>Sunday</td>
                        <td>Worship service</td>
                        <td>7:00am</td>
                     </tr>
                   </tbody>

                   <tbody>
                     <tr>
                        <td>Wednesday</td>
                        <td>Bible study</td>
                        <td>5:00pm</td>
                     </tr>
                   </tbody>

                   <tbody>
                     <tr>
                        <td>Friday</td>
                           <td> Prayer</td>
                        <td>5:00pm</td>
                     </tr>
                  </tbody>
               </table>
           </div>
           <div className="minister">
              <h2 id="minister-in-charge">minister-in-charge</h2>
              <img src="pictures/pastor Ajiroba.png" alt="pastor" className="pastor"/>
              <p className="minister-desc">
                  Pastor M.B Ajiroba is the pastor in charge of Christ Apostolic Church, Halleluyah Chapel. Daddy, as he is fondly called by his members
                  is a father, mentor par excellence and a disciplinarian. He is fond of saying <i>yo ku ku da fun yin.</i> In English it means <i>it shall surely be well with you. </i>
                  After Daddy received God's call, he proceeded to a seminary school and after which he started CAC Halleluyah Chapel on November 1, 2003. Prior to this time, he has served in different capacities as a church leader including being an Elder at Christ Apostolic Church, Oke-isegun, Ilorin, Nigeria.
                  Pastor M.B Ajiroba loves education so much and always admonish young people to embrace education as one of the pathways to success. He has Masters Degrees in Business Administration and Theology. He is currently undergoing his PhD in Theology program.
                  He is happily married and blessed with wonderful children.
              </p>
           </div>
           <div className="events">
              <h2>upcoming events</h2>
              <img src="pictures/harvest.jpg" alt="harvest" />
               <p>Donation for the 17th year harvest anniversary should be sent to this account <strong>Oyewole Oluwabori, 0243946979, GTB.</strong></p>
           </div>
           <div className="watch-word">
              <h2>Watchword for year 2020</h2>
              <p>"Look unto me, and be ye saved, all the ends of the earth:
                 for I am God, and there is none else." <strong>Isaiah 45:22(KJV)</strong>
              </p>
           </div>
           <div className="contact" id="contact">
              
              <p>For contact, prayer request and/or counselling, use the form below!</p>
               <form method="post" name="contact, prayer and counselling" netlify className="contact-form">
                  <input type="hidden" name="form-name" value="hire" />
               
                     <label>Your Name: <input type="text" name="name"/></label>
                  
                     <label>Your Email: <input type="email" name="email"/></label>
                  
                  
                     <label>About company: <textarea name="message" placeholder="Type in your message and/or prayer request(s) here" cols="30" rows="10"></textarea></label>
                  
                  
                     <button type="submit">Send</button>
                  </form>
           </div>
            <div className="meet-the-executives">
               <Link to="/executives" onClick={scrollToTop}>
                  <button>meet the executives</button>
               </Link>
            </div>   
         </div>
      </React.Fragment>
   );
}
export default LandingPage;
