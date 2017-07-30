/* global google */
import React, {Component} from 'react';
import classNames from 'classnames';
import './ThingsScreen.css';
import EventBlock from '../EventBlock/EventBlock';
import ScreenWrapper from '../ScreenWrapper/ScreenWrapper';
import EventsMap from '../EventsMap/EventsMap';
import {ALL_GAME_EVENTS} from '../../data/gamesEvents';
import FreeEventBlock from '../FreeEventBlock/FreeEventBlock';
import {FREE_EVENTS, getFreeEventMarkers} from '../../data/freeEvents';
import {getVenueMarkers} from '../../data/venues';

class ThingsScreen extends Component {

  props: {
    setCurrentPage(page: string): void
  };

  state: {
    mapRenderKey: number,
    fullScreenMap: boolean,
    tab: string
  };

  constructor(props) {
    super(props);
    this.state = {
      fullScreenMap: false,
      userLocation: null,
      directions: null,
      tab: 'games',
      mapRenderKey: 0
    };

    this.changeTab = this.changeTab.bind(this);
    this.exitMapFullscreen = this.exitMapFullscreen.bind(this);
    this.viewMapInFullscreen = this.viewMapInFullscreen.bind(this);
    this.setUserLocation = this.setUserLocation.bind(this);
    this.setDirections = this.setDirections.bind(this);

  }

  componentDidMount() {
    // this.props.setCurrentPage('things');
  }

  setUserLocation(location: any) {
    this.setState({
      userLocation: location
    });
  }

  setDirections(lat: number, long: number) {
    if (!this.state.userLocation) return;
    console.log('getting directions', this.state.userLocation, lat, long);
    const DirectionsService = new google.maps.DirectionsService();

    setTimeout(() => {
      document.getElementsByClassName("ScreenWrapper")[0].scrollTop = 0;
    }, 50);

    DirectionsService.route({
      origin: this.state.userLocation,
      destination: {
        lat: lat,
        lng: long
      },
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
        console.log('got directions');
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });

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

  getMapMarkers() {
    if (this.state.tab === 'games') {
      return getVenueMarkers();
    }
    return getFreeEventMarkers();
  }

  renderGameEvents() {
    return ALL_GAME_EVENTS.map((group) => {
      return (
        <div className='ThingsScreen__eventsList__group' key={group.label}>
          <h4 className='ThingsScreen__eventsList__group__title'>{group.label}</h4>
          <div className='ThingsScreen__eventsList__group__events'>
            {
              group.events.map((event, index) => (
                <EventBlock setDirections={this.setDirections} event={event} key={index}/>
              ))
            }
          </div>
        </div>
      )
    })
  }

  renderFreeEvents() {
    return (
      <div className='ThingsScreen__eventsList__group'>
        <h4 className='ThingsScreen__eventsList__group__title'>Saturday 7th of April</h4>
        <div className='ThingsScreen__eventsList__group__events'>
          {
            FREE_EVENTS.items.map((event, index) => (
              <FreeEventBlock setDirections={this.setDirections} event={event} key={index}/>
            ))
          }
        </div>
      </div>
    )
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
            <EventsMap mapRenderKey={this.state.mapRenderKey}
                       tab={tab} directions={this.state.directions} mapMarkers={this.getMapMarkers()}
                       fullScreenMap={fullScreenMap}
                       exitMapFullscreen={this.exitMapFullscreen}
                       viewMapInFullscreen={this.viewMapInFullscreen} setUserLocation={this.setUserLocation}/>
          </div>
          <div className={classNames([
            'ThingsScreen__directions',
            {
              'ThingsScreen__directions--hidden': !this.state.directions
            }
          ])}>
            <header className='ThingsScreen__directions__header'>
              <label>
                <span>
                  Transportation
                </span>
                <select>
                  <option>Car</option>
                  <option>Bus / Train</option>
                  <option>Walking</option>
                  <option>Cycling</option>
                </select>
              </label>
            </header>
            <div className='ThingsScreen__directions__body'>
              <div className='ThingsScreen__directions__body__departure'>Departure Time & Date: ASAP</div>
              <div className='ThingsScreen__directions__body__arrival'>Estimated Arrival Time: 10:27am</div>
              <div className='ThingsScreen__directions__body__directions'>
                <button>
                  Get Step-by-Step Directions
                </button>
              </div>
            </div>
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
                   }}>
                <span>Games</span>
                <span className='chinese'>竞技赛事</span>
              </div>
              <div className={classNames([
                'ThingsScreen__eventsTabs__tab',
                {
                  'ThingsScreen__eventsTabs__tab--selected': tab === 'free'
                }
              ])}
                   onClick={() => {
                     this.changeTab('free')
                   }}>
                <span>Free</span>
                <span className='chinese'>免费活动</span>
              </div>
              {/*<div className={classNames([*/}
              {/*'ThingsScreen__eventsTabs__tab',*/}
              {/*{*/}
              {/*'ThingsScreen__eventsTabs__tab--selected': tab === 'food'*/}
              {/*}*/}
              {/*])}*/}
              {/*onClick={() => {*/}
              {/*this.changeTab('food')*/}
              {/*}}>Food*/}
              {/*</div>*/}
            </div>
            <div className='ThingsScreen__eventsList'>
              {
                (tab === 'games') ? (
                  this.renderGameEvents()
                ) : null
              }
              {
                (tab === 'free') ? (
                  this.renderFreeEvents()
                ) : null
              }
            </div>
          </div>
        </div>
      </ScreenWrapper>
    );
  }
}

export default ThingsScreen;