import React, {Component} from 'react';
import './HomeScreen.css';
import GdayIntro from '../GdayIntro/GdayIntro';
import LanguagesSelect from '../LanguagesSelect/LanguagesSelect';
import InfoBlock from '../InfoBlock/InfoBlock';
import IntroBlock from '../IntroBlock/IntroBlock';
import ScreenWrapper from '../ScreenWrapper/ScreenWrapper';

class HomeScreen extends Component {

  render() {
    return (
      <ScreenWrapper>
        <div className='HomeScreen'>
          <IntroBlock/>
          <div>
            <InfoBlock title='Commonwealth Games'
                       description='The Commonwealth Games are beginning soon. Tap here to check out when and where the events will be taking place and to receive directions.'
                       linkTo='/events'/>
            <InfoBlock title='Free things to do'
                       description="Whilst you're in the Gold Coast there are a bunch of free events taking place that you can check out."
                       linkTo='/events'/>
            <InfoBlock title='Learn some Aussie phrases'
                       description="We've got some Aussie phrases to teach you that will help you out during your stay."
                       linkLabel='View phrases'
                       linkTo='/language'/>
          </div>
        </div>
      </ScreenWrapper>
    );
  }
}

export default HomeScreen;