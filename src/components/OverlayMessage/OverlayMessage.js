import React, {Component} from 'react';
import './OverlayMessage.css';

class OverlayMessage extends Component {

  props: {
    onClose(): void,
    airport?: boolean,
    directions?: boolean,
  };

  render() {
    return (
      <div className='OverlayMessage' onClick={this.props.onClose}>
        <div className='OverlayMessage__bg'></div>
        <div className='OverlayMessage__content'>
          <h3>Coming soon...</h3>
          {
            this.props.airport ? (

              <p>
                The plan is to give the user directions to the Airport.
              </p>
            ) : this.props.directions ? (

              <p>
                The plan is to either embed or emulate Google Map's step by step directions.
              </p>
            ) : (
              <p>
                The plan is to have a list of hotels retrieved from Google Maps and presented to the user
                alongside cost and distance.
              </p>
            )
          }
          <p>
            Due to time constraints this hasn't been implemented yet.
          </p>
          <p>
            Tap anywhere to close this.
          </p>
        </div>
      </div>
    );
  }

}

export default OverlayMessage;