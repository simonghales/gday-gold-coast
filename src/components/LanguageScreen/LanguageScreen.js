import React, {Component} from 'react';
import './LanguageScreen.css';
import GdayIntro from '../GdayIntro/GdayIntro';
import LanguagesSelect from '../LanguagesSelect/LanguagesSelect';

class LanguageScreen extends Component {
  render() {
    return (
      <div className='LanguageScreen'>
        <div>
          COMMON PHRASES IN THE LANGUAGE
        </div>
        <div>
          GOOGLE TRANSLATE EMBED
        </div>
      </div>
    );
  }
}

export default LanguageScreen;