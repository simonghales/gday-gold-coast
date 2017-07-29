import React, {Component} from 'react';
import classNames from 'classnames';
import './ThingsScreen.css';
import EventBlock from '../EventBlock/EventBlock';
import ScreenWrapper from '../ScreenWrapper/ScreenWrapper';
import EventsMap from '../EventsMap/EventsMap';
import {ALL_GAME_EVENTS} from '../../data/gamesEvents';

class ThingsScreen extends Component {

  state: {
    fullScreenMap: boolean,
    tab: string
  };

  constructor(props) {
    super(props);

    this.state = {
      fullScreenMap: false,
      tab: 'games'
    };

    this.changeTab = this.changeTab.bind(this);
    this.exitMapFullscreen = this.exitMapFullscreen.bind(this);
    this.viewMapInFullscreen = this.viewMapInFullscreen.bind(this);

  }

  changeTab(tab: string) {
    this.setState({
      tab
    });
  }

  exitMapFullscreen() {
    this.setState({
      fullScreenMap: false
    });
  }

  viewMapInFullscreen() {
    this.setState({
      fullScreenMap: true
    });
    // scroll to top of page? - prevent scrolling any further?
  }

  renderGameEvents() {
    return ALL_GAME_EVENTS.map((group) => {
      return (
        <div className='ThingsScreen__eventsList__group' key={group.label}>
          <h4 className='ThingsScreen__eventsList__group__title'>{group.label}</h4>
          <div className='ThingsScreen__eventsList__group__events'>
            {
              group.events.map((event, index) => (
                <EventBlock event={event} key={index}/>
              ))
            }
          </div>
        </div>
      )
    })
  }

  render() {
    const {fullScreenMap, tab} = this.state;
    return (
      <ScreenWrapper>
        <div className={classNames([
          'ThingsScreen',
          {
            'ThingsScreen--fullScreenMap': fullScreenMap
          }
        ])}>
          <div className='ThingsScreen__mapWrapper'>
            <EventsMap fullScreenMap={fullScreenMap} exitMapFullscreen={this.exitMapFullscreen}
                       viewMapInFullscreen={this.viewMapInFullscreen}/>
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
              {
                this.renderGameEvents()
              }
            </div>
          </div>
        </div>
      </ScreenWrapper>
    );
  }
}

export default ThingsScreen;