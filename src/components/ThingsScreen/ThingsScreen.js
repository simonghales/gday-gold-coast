import React, {Component} from 'react';
import classNames from 'classnames';
import './ThingsScreen.css';
import EventBlock from '../EventBlock/EventBlock';
import ScreenWrapper from '../ScreenWrapper/ScreenWrapper';

class ThingsScreen extends Component {

  state: {
    tab: string
  };

  constructor(props) {
    super(props);

    this.state = {
      tab: 'games'
    };

    this.changeTab = this.changeTab.bind(this);

  }

  changeTab(tab: string) {
    this.setState({
      tab
    });
  }

  render() {
    const {tab} = this.state;
    return (
      <ScreenWrapper>
        <div className='ThingsScreen'>
          <div className='ThingsScreen__mapWrapper'>
            MAP GOES HERE
          </div>
          <div className='ThingsScreen__eventsWrapper'>
            <div className='ThingsScreen__eventsTabs'>
              <div className={classNames([
                'ThingsScreen__eventsTabs__tab',
                {
                  'ThingsScreen__eventsTabs__tab--selected': tab === 'games'
                }
              ])}
                   onClick={() => {
                     this.changeTab('games')
                   }}>Games
              </div>
              <div className={classNames([
                'ThingsScreen__eventsTabs__tab',
                {
                  'ThingsScreen__eventsTabs__tab--selected': tab === 'free'
                }
              ])}
                   onClick={() => {
                     this.changeTab('free')
                   }}>Free
              </div>
              <div className={classNames([
                'ThingsScreen__eventsTabs__tab',
                {
                  'ThingsScreen__eventsTabs__tab--selected': tab === 'food'
                }
              ])}
                   onClick={() => {
                     this.changeTab('food')
                   }}>Food
              </div>
            </div>
            <div className='ThingsScreen__eventsList'>
              <div className='ThingsScreen__eventsList__group'>
                <h4 className='ThingsScreen__eventsList__group__title'>Monday - 06/07</h4>
                <div className='ThingsScreen__eventsList__group__events'>
                  <EventBlock/>
                  <EventBlock/>
                  <EventBlock/>
                  <EventBlock/>
                  <EventBlock/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScreenWrapper>
    );
  }
}

export default ThingsScreen;