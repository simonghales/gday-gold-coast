import React, {Component} from 'react';
import './ThingsScreen.css';
import GdayIntro from '../GdayIntro/GdayIntro';
import LanguagesSelect from '../LanguagesSelect/LanguagesSelect';
import InfoBlock from '../InfoBlock/InfoBlock';
import IntroBlock from '../IntroBlock/IntroBlock';

class ThingsScreen extends Component {

  state: {
    tab: string
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='ThingsScreen'>
        <div className='ThingsScreen__mapWrapper'>
          MAP GOES HERE
        </div>
        <div className='ThingsScreen__eventsWrapper'>
          <div className='ThingsScreen__eventsTabs'>
            <div className='ThingsScreen__eventsTabs__tab ThingsScreen__eventsTabs__tab--selected'>Games</div>
            <div className='ThingsScreen__eventsTabs__tab'>Free</div>
            <div className='ThingsScreen__eventsTabs__tab'>Food</div>
          </div>
          EVENTS GO HERE...
        </div>
      </div>
    );
  }
}

export default ThingsScreen;