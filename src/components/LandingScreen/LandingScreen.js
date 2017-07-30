import React, {Component} from 'react';
import './LandingScreen.css';
import GdayIntro from '../GdayIntro/GdayIntro';
import LanguagesSelect from '../LanguagesSelect/LanguagesSelect';
import ScreenWrapper from '../ScreenWrapper/ScreenWrapper';

class LandingScreen extends Component {

  state: {
    modalOpen: boolean
  };

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: true
    };
  }

  render() {
    return (
      <ScreenWrapper>
        <div className='LandingScreen'>
          <GdayIntro/>
          <LanguagesSelect/>
        </div>
        {
          this.state.modalOpen ? (
            <div className='LandingScreen__overlay' onClick={() => {
              this.setState({
                modalOpen: false
              });
            }}>
              <div className='LandingScreen__overlay__bg'></div>
              <div className='LandingScreen__overlay__content'>
                <h4>G'day</h4>
                <h5>Just a few tips for using the site</h5>
                <div>
                  <p>
                    Please view the site on a mobile, it's been designed as a mobile-web-app so it hasn't had any
                    desktop
                    styling done yet.
                  </p>
                  <p>
                    Please disable adblocker. It would appear that some adblockers are blocking the loading of the
                    Google
                    Maps API.
                  </p>
                  <p>
                    <strong>
                      Tap anywhere to close this.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          ) : null
        }
      </ScreenWrapper>
    );
  }
}

export default LandingScreen;