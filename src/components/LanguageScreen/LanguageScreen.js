import React, {Component} from 'react';
import './LanguageScreen.css';
import GdayIntro from '../GdayIntro/GdayIntro';
import LanguagesSelect from '../LanguagesSelect/LanguagesSelect';
import ScreenWrapper from '../ScreenWrapper/ScreenWrapper';

class LanguageScreen extends Component {
  render() {
    return (
      <ScreenWrapper>
        <div className='LanguageScreen'>
          <div>
            COMMON PHRASES IN THE LANGUAGE
          </div>
          <div>
            GOOGLE TRANSLATE EMBED
          </div>
        </div>
      </ScreenWrapper>
    );
  }
}

export default LanguageScreen;