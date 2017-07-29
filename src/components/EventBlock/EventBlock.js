import React, {Component} from 'react';
import './EventBlock.css';

class EventBlock extends Component {

  render() {

    return (
      <div className='EventBlock'>
        <div className='EventBlock__content'>
          <h3>Event title</h3>
          <div>Time</div>
          <div>City</div>
          <div>Venue</div>
          <div>Price</div>
          <div>Description</div>
        </div>
      </div>
    );
  }
}

export default EventBlock;