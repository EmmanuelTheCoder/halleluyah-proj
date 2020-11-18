import React from 'react';
import './Halleluyah.css';
import Title from './components/Title';
import Executive from './components/Executive';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';



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





