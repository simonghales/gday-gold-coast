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
          <div className='LanguageScreen__intro'>
            <h2>Learn some Aussie slang</h2>
          </div>
          <div>
            <div className='LanguageScreen__block'>
              <h3>G'day</h3>
              <h4>通用的问候语，相当于“你好”。</h4>
              <p>
                Australian greeting. i.e. Hello, greetings
              </p>
            </div>
            <div className='LanguageScreen__block'>
              <h3>How's it goin?</h3>
              <h4>最近如何？</h4>
              <p>
                Australian form of asking 'how are you?'
              </p>
            </div>
            <div className='LanguageScreen__block'>
              <h3>Cheers mate</h3>
              <h4>谢啦！</h4>
              <p>
                Australian way of saying 'thank you'
              </p>
            </div>
            <div className='LanguageScreen__block'>
              <h3>Crikey!</h3>
              <h4>哎呀！用于表示惊讶。</h4>
              <p>
                Exclamation of excitement or shock.
              </p>
            </div>
            <div className='LanguageScreen__block'>
              <h3>Aussie aussie aussie... OI OI OI</h3>
              <h4>澳洲队，加油！</h4>
              <p>
                Typical Aussie chant used at sporting events.
              </p>
            </div>
          </div>
          <div className='LanguageScreen__google'>
            <div>
              <h3>Google Translate</h3>
              <p>
                Google Translate is an app that allows you to enter text and translate it from one language to another.
              </p>
              <p>
                It also allows audio translation and visual translation.
              </p>
              <div className='LanguageScreen__google__apps'>
                <div className='LanguageScreen__google__apps__app'>
                  <a href='https://play.google.com/store/apps/details?id=com.google.android.apps.translate&hl=en'
                     target='_blank'>
                    Get it for Android
                  </a>
                </div>
                <div className='LanguageScreen__google__apps__app'>
                  <a href='https://itunes.apple.com/au/app/google-translate/id414706506?mt=8' target='_blank'>
                    Get it for iOS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScreenWrapper>
    );
  }
}

export default LanguageScreen;