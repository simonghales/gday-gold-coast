import React, {Component} from 'react';
import './LandingScreen.css';
import GdayIntro from '../GdayIntro/GdayIntro';
import LanguagesSelect from '../LanguagesSelect/LanguagesSelect';
import ScreenWrapper from '../ScreenWrapper/ScreenWrapper';

class LandingScreen extends Component {
  render() {
    return (
      <ScreenWrapper>
        <div className='LandingScreen'>
          <GdayIntro/>
          <LanguagesSelect/>
        </div>
      </ScreenWrapper>
    );
  }
}

export default LandingScreen;