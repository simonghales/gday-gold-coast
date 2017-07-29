/* global google */
import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps";
import {MAP} from 'react-google-maps/lib/constants';
import ReactResizeDetector from 'react-resize-detector';
import canUseDOM from "can-use-dom";
import classNames from 'classnames';
import './EventsMap.css';
import {getVenueMarkers} from '../../data/venues';

const geolocation = (
  canUseDOM && navigator.geolocation ?
    navigator.geolocation :
    ({
      getCurrentPosition(success, failure) {
        failure(`Your browser doesn't support geolocation.`);
      },
    })
);

const DirectionsExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={props.center}
  >
    {props.user && (
      <Marker position={props.user}/>
      // <InfoWindow position={props.user}>
      //   <div>{props.content}</div>
      // </InfoWindow>
    )}
    {/*<ReactResizeDetector handleWidth handleHeight onResize={props.onResize}/>*/}
    {
      props.markers.map((marker) => (
        <Marker
          {...marker}
        />
      ))
    }
  </GoogleMap>
));

class EventsMap extends Component {

  props: {
    fullScreenMap: boolean,
    exitMapFullscreen(): void,
    viewMapInFullscreen(): void,
  };

  state: {
    mapRenderKey: number,
    overlayDismissed: boolean
  };

  markers = getVenueMarkers();

  map;

  isUnmounted = false;

  constructor(props) {
    super(props);
    this.state = {
      origin: new google.maps.LatLng(-28.009281, 153.362754),
      overlayDismissed: false,
      mapRenderKey: 0,
      user: null,
      content: null,
      // destination: new google.maps.LatLng(41.8525800, -87.6514100),
      // directions: null,
    }
    this.exitFullscreen = this.exitFullscreen.bind(this);
    this.overlayClicked = this.overlayClicked.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    geolocation.getCurrentPosition((position) => {
      if (this.isUnmounted) {
        return;
      }
      this.setState({
        user: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        content: `Location found using HTML5.`,
      });

    }, (reason) => {
      if (this.isUnmounted) {
        return;
      }
      this.setState({
        content: `Error: The Geolocation service failed (${reason}).`,
      });
    });
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  overlayClicked() {
    this.setState({
      overlayDismissed: true
    });
    this.props.viewMapInFullscreen();
    setTimeout(() => {
      this.setState({
        mapRenderKey: this.state.mapRenderKey + 1
      });
    }, 250);
    setTimeout(() => {
      this.setState({
        mapRenderKey: this.state.mapRenderKey + 1
      });
    }, 500);
  }

  onResize() {
    console.log('resizing...');
    if (!this.map) return;
    const mapInstance = this.map && this.map.context[MAP];
    google.maps.event.trigger(mapInstance, 'resize');
  }

  exitFullscreen() {
    this.props.exitMapFullscreen();
    setTimeout(() => {
      this.setState({
        mapRenderKey: this.state.mapRenderKey + 1
      });
    }, 250);
    setTimeout(() => {
      this.setState({
        mapRenderKey: this.state.mapRenderKey + 1
      });
      const mapInstance = this.map && this.map.context[MAP];
      google.maps.event.trigger(mapInstance, 'fullscreen');
    }, 500);
  }

  render() {
    const {fullScreenMap, viewMapInFullscreen} = this.props;
    const {overlayDismissed} = this.state;

    return (
      <div className={classNames([
        'EventsMap',
        {
          'EventsMap--overlayVisible': !overlayDismissed
        }
      ])}>
        <DirectionsExampleGoogleMap
          key={this.state.mapRenderKey}
          ref={(elem) => {
            if (this.map) return;
            this.map = elem;
            console.log('set the ref...');
          }}
          containerElement={
            <div style={{height: `100%`}}/>
          }
          mapElement={
            <div style={{height: `100%`}}/>
          }
          center={this.state.origin}
          content={this.state.content}
          user={this.state.user}
          onResize={this.onResize}
          markers={this.markers}
        />
        {/*{*/}
        {/*overlayDismissed ? null : (*/}
        {/*<div className='EventsMap__overlay' onClick={this.overlayClicked}>*/}
        {/*<a className='EventsMap__overlay__viewButton'>View Map</a>*/}
        {/*</div>*/}
        {/*)*/}
        {/*}*/}
        {/*{*/}
        {/*fullScreenMap ? (*/}
        {/*<div className='EventsMap__exitFullscreen' onClick={this.exitFullscreen}>Return</div>*/}
        {/*) : null*/}
        {/*}*/}
      </div>
    );
  }
}

export default EventsMap;