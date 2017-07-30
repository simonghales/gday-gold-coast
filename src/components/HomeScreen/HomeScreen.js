import React, {Component} from 'react';
import './HomeScreen.css';
import GdayIntro from '../GdayIntro/GdayIntro';
import LanguagesSelect from '../LanguagesSelect/LanguagesSelect';
import InfoBlock from '../InfoBlock/InfoBlock';
import IntroBlock from '../IntroBlock/IntroBlock';
import ScreenWrapper from '../ScreenWrapper/ScreenWrapper';
import OverlayMessage from '../OverlayMessage/OverlayMessage';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hotel: false,
      airport: false
    };
  }

  render() {
    return (
      <ScreenWrapper>
        <div className='HomeScreen'>
          <IntroBlock/>
          <div>
            <div className='HomeScreen__extra'>
              <h3 className='HomeScreen__extra__title'>Just Arrived at the Airport?</h3>
              <h4 className='HomeScreen__extra__chinese'>刚下飞机吗？</h4>
              <div className='HomeScreen__extra__actionWrapper'>
                <button className='HomeScreen__extra__action' onClick={() => {
                  this.setState({
                    hotel: true
                  });
                }}>
                  <span>Find me a hotel</span>
                  <span>酒店预订</span>
                </button>
              </div>
            </div>
            <div className='HomeScreen__extra'>
              <h3 className='HomeScreen__extra__title'>Flying Somewhere?</h3>
              <h4 className='HomeScreen__extra__chinese'>要去搭乘航班吗？</h4>
              <div className='HomeScreen__extra__actionWrapper'>
                <button className='HomeScreen__extra__action' onClick={() => {
                  this.setState({
                    airport: true
                  });
                }}>
                  <span>Get directions to the Airport</span>
                  <span>通往机场线路一览</span>
                </button>
              </div>
            </div>
            <InfoBlock title='Commonwealth Games'
                       chineseTitle='英联邦运动会'
                       chineseDescription='各项竞技赛事的时间表、比赛地点及路线查询。'
                       description='The Commonwealth Games are beginning soon. Tap here to check out when and where the events will be taking place and to receive directions.'
                       chineseLinkLabel='查看赛事'
                       linkTo='/events'/>
            <InfoBlock title='Free things to do'
                       chineseTitle='免费活动一览'
                       chineseDescription='各种有趣好玩又免费的活动，助你畅游黄金海岸。'
                       description="Whilst you're in the Gold Coast there are a bunch of free events taking place that you can check out."
                       chineseLinkLabel='查看活动'
                       linkTo='/events'/>
            <InfoBlock title='Learn some Aussie phrases'
                       chineseTitle='澳洲俚语连连看'
                       chineseDescription='学几句澳洲常用的俚语，和当地人交流多几分轻松。'
                       description="We've got some Aussie phrases to teach you that will help you out during your stay."
                       chineseLinkLabel='查看俚语'
                       linkLabel='View phrases'
                       linkTo='/language'/>
          </div>
        </div>
        {
          this.state.hotel ? (
            <OverlayMessage onClose={() => {
              this.setState({
                hotel: false
              });
            }}/>
          ) : null
        }
        {
          this.state.airport ? (
            <OverlayMessage airport={true} onClose={() => {
              this.setState({
                airport: false
              });
            }}/>
          ) : null
        }
      </ScreenWrapper>
    );
  }
}

export default HomeScreen;