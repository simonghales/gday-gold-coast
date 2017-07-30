import React, {Component} from 'react';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';
import LandingScreen from '../LandingScreen/LandingScreen';
import MainNav from '../MainNav/MainNav';
import LanguageScreen from '../LanguageScreen/LanguageScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import ThingsScreen from '../ThingsScreen/ThingsScreen';
import classNames from 'classnames';

class App extends Component {

  state: {
    page: string
  };

  constructor(props) {
    super(props);
    this.state = {
      page: 'landing'
    };
    this.setCurrentPage = this.setCurrentPage.bind(this);
  }

  setCurrentPage(page: string) {
    this.setState({
      page
    });
  }

  render() {
    console.log('app props', this.props);
    return (
      <div className='App'>
        {/*<LandingScreen/>*/}
        <div className={classNames([
          'App__screenWrapper',
          {
            'App__screenWrapper--landing': this.props.location.pathname === '/'
          }
        ])}>
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
                <Route key='/events' exact path='/events' component={ThingsScreen}/>
                <Route key='/language' exact path='/language' component={LanguageScreen}/>
              </Switch>
            </ReactCSSTransitionGroup>
          )}/>
          {/*<HomeScreen/>*/}
          {/*<ThingsScreen/>*/}
          {/*<LanguageScreen/>*/}
        </div>
        <MainNav page={this.props.location.pathname}/>
      </div>
    );
  }
}

export default withRouter(App);