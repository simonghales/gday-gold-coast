import React, {Component} from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';
import LandingScreen from '../LandingScreen/LandingScreen';
import MainNav from '../MainNav/MainNav';
import LanguageScreen from '../LanguageScreen/LanguageScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import ThingsScreen from '../ThingsScreen/ThingsScreen';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/*<LandingScreen/>*/}
        <div className='App__screenWrapper'>
          <Route render={({location}) => (
            <ReactCSSTransitionGroup
              transitionName={'pageTransition'}
              transitionEnterTimeout={700}
              transitionLeaveTimeout={700}
            >
              <Switch key={location.pathname}
                      location={location}>
                <Route key='/' exact path='/' component={LandingScreen}/>
                <Route key='/home' exact path='/home' component={HomeScreen}/>
                <Route key='/things' exact path='/things' component={ThingsScreen}/>
                <Route key='/language' exact path='/language' component={LanguageScreen}/>
              </Switch>
            </ReactCSSTransitionGroup>
          )}/>
          {/*<HomeScreen/>*/}
          {/*<ThingsScreen/>*/}
          {/*<LanguageScreen/>*/}
        </div>
        <MainNav/>
      </div>
    );
  }
}

export default App;