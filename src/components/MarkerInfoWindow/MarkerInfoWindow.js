import React, {Component} from 'react';
import './MarkerInfoWindow.css';
import {VenueData} from '../../data/venues';
import {_freeEvent} from '../../data/freeEvents';

class MarkerInfoWindow extends Component {

  props: {
    venueData?: VenueData,
    eventData?: _freeEvent,
  };

  render() {
    const {venueData, eventData} = this.props;
    return (
      <div className='MarkerInfoWindow'>
        {
          venueData ? this.renderVenue() : this.renderEvent()
        }
      </div>
    );
  }

  renderVenue() {
    const {venueData} = this.props;
    return (
      <div className='MarkerInfoWindow__venue'>
        <div className='MarkerInfoWindow__venue__title'>{venueData.VENUE_NAME}</div>
        <div className='MarkerInfoWindow__venue__subtitle'>{venueData.VENUE_TYPE}</div>
        <div className='MarkerInfoWindow__venue__sports'>
          {
            (venueData.SPORT_1) ? (
              <div className='MarkerInfoWindow__venue__sport'>{venueData.SPORT_1}</div>
            ) : null
          }
          {
            (venueData.SPORT_2) ? (
              <div className='MarkerInfoWindow__venue__sport'>{venueData.SPORT_2}</div>
            ) : null
          }
          {
            (venueData.SPORT_3) ? (
              <div className='MarkerInfoWindow__venue__sport'>{venueData.SPORT_3}</div>
            ) : null
          }
          {
            (venueData.SPORT_4) ? (
              <div className='MarkerInfoWindow__venue__sport'>{venueData.SPORT_4}</div>
            ) : null
          }
          {
            (venueData.SPORT_5) ? (
              <div className='MarkerInfoWindow__venue__sport'>{venueData.SPORT_5}</div>
            ) : null
          }
        </div>
      </div>
    );
  }

  renderEvent() {
    const {eventData} = this.props;
    return (
      <div>
        EVENT
      </div>
    );
  }

}

export default MarkerInfoWindow;