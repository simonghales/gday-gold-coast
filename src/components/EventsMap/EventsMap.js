/* global google */
import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps";
import {MAP} from 'react-google-maps/lib/constants';
import ReactResizeDetector from 'react-resize-detector';
import canUseDOM from "can-use-dom";
import classNames from 'classnames';
import './EventsMap.css';
import {getVenueMarkers} from '../../data/venues';
import {_googleMarker, getFreeEventMarkers} from '../../data/freeEvents';
import MarkerInfoWindow from '../MarkerInfoWindow/MarkerInfoWindow';

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
      <Marker position={props.user} icon={{
        path: google.maps.SymbolPath.CIRCLE,
        scale: 5,
        strokeColor: '#65bfff',
      }}/>
      // <InfoWindow position={props.user}>
      //   <div>{props.content}</div>
      // </InfoWindow>
    )}
    {/*<ReactResizeDetector handleWidth handleHeight onResize={props.onResize}/>*/}
    {
      props.markers.map((marker, index) => (
        <Marker
          {...marker}
          onClick={() => {
            props.markerOnClick(marker)
          }}
        >
          {
            (marker.showInfo) ? (
              <InfoWindow onCloseClick={() => {
                props.markerOnClose(marker)
              }}>
                {
                  (marker.type === 'venue') ? (
                    <MarkerInfoWindow venueData={marker.venueData}/>
                  ) : (
                    <MarkerInfoWindow eventData={marker.eventData}/>
                  )
                }
              </InfoWindow>
            ) : null
          }
        </Marker>
      ))
    }
  </GoogleMap>
));

class EventsMap extends Component {

  props: {
    tab: string,
    fullScreenMap: boolean,
    mapMarkers: _googleMarker[],
    exitMapFullscreen(): void,
    viewMapInFullscreen(): void,
  };

  state: {
    origin: any,
    mapRenderKey: number,
    overlayDismissed: boolean,
    markers: _googleMarker[],
  };

  map;

  markers = {
    games: getVenueMarkers(),
    free: getFreeEventMarkers(),
    food: getFreeEventMarkers()
  };

  isUnmounted = false;

  constructor(props) {
    super(props);
    this.state = {
      origin: new google.maps.LatLng(-28.009281, 153.362754),
      overlayDismissed: false,
      mapRenderKey: 0,
      user: null,
      content: null,
      markers: this.markers[props.tab]
      // destination: new google.maps.LatLng(41.8525800, -87.6514100),
      // directions: null,
    }
    this.exitFullscreen = this.exitFullscreen.bind(this);
    this.overlayClicked = this.overlayClicked.bind(this);
    this.onResize = this.onResize.bind(this);
    this.handleShowMarker = this.handleShowMarker.bind(this);
    this.handleHideMarker = this.handleHideMarker.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.tab !== nextProps.tab) {
      this.setState({
        markers: this.markers[nextProps.tab]
      });
    }
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
        user: this.state.origin,
        content: `Error: The Geolocation service failed (${reason}).`,
      });
    });
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  handleShowMarker(targetMarker) {
    this.setState({
      markers: this.state.markers.map((marker) => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true
          }
        } else {
          return marker;
        }
      })
    });
  }

  handleHideMarker(targetMarker) {
    this.setState({
      markers: this.state.markers.map((marker) => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false
          }
        } else {
          return marker;
        }
      })
    });
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
    const {fullScreenMap, viewMapInFullscreen, mapMarkers} = this.props;
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
          markers={this.state.markers}
          markerOnClick={this.handleShowMarker}
          markerOnClose={this.handleHideMarker}
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