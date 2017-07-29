import React, {Component} from 'react';
import './FreeEventBlock.css';
import {_freeEvent} from '../../data/freeEvents';

class FreeEventBlock extends Component {

  props: {
    event: _freeEvent
  };

  render() {

    const {event} = this.props;

    return (
      <div className='FreeEventBlock'>
        <div className='FreeEventBlock__content'>
          <header className='FreeEventBlock__header'>
            <div className='FreeEventBlock__header__info'>
              <h3 className='FreeEventBlock__title' dangerouslySetInnerHTML={{__html: event.title}}></h3>
              <div className='FreeEventBlock__time'>{event.time}</div>
            </div>
            <div className='FreeEventBlock__header__options'>
              <button className='FreeEventBlock__directions'>Get directions</button>
            </div>
          </header>
          <div className='FreeEventBlock__body'>
            <div className='FreeEventBlock__infoItem'>
              <span>Location</span>
              {event.location}
            </div>
            <div className='FreeEventBlock__infoItem'>
              <span>Price</span>
              FREE
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FreeEventBlock;