import React, {Component} from 'react';
import './LandingScreen.css';
import GdayIntro from '../GdayIntro/GdayIntro';
import LanguagesSelect from '../LanguagesSelect/LanguagesSelect';

class LandingScreen extends Component {
  render() {
    return (
      <div className='LandingScreen'>
        <GdayIntro/>
        <LanguagesSelect/>
      </div>
    );
  }
}

export default LandingScreen;