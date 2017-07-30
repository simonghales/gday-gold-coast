import React, {Component} from 'react';
import './EventBlock.css';
import {_gameEvent} from '../../data/gamesEvents';
import {getIcon} from '../../icons/icons';

class EventBlock extends Component {

  props: {
    event: _gameEvent,
    setDirections(lat: number, long: number): void
  };

  render() {

    const {event} = this.props;
    const eventIcon = getIcon(event.sportName);

    return (
      <div className='EventBlock'>
        <div className='EventBlock__content'>
          <header className='EventBlock__header'>
            {
              eventIcon ? (
                <svg className='EventBlock__header__icon' {...eventIcon.svg}>
                  <path d={eventIcon.d}/>
                </svg>
              ) : null
            }
            <div className='EventBlock__header__info'>
              <h3 className='EventBlock__title'>{event.sportName}</h3>
              <div className='EventBlock__time'>{event.sportTime}</div>
            </div>
            <div className='EventBlock__header__options'>
              <button className='EventBlock__directions' onClick={() => {
                if (!event.X || !event.Y) return;
                this.props.setDirections(event.Y, event.X);
              }}>Get directions<span>导航</span>
              </button>
            </div>
          </header>
          <div className='EventBlock__body'>
            <div className='EventBlock__infoItem'>
              <span>City</span>
              {event.sportCity}
            </div>
            <div className='EventBlock__infoItem'>
              <span>Venue</span>
              {event.sportVenue}
            </div>
            <div className='EventBlock__infoItem'>
              <span>Price</span>
              {event.sportPrice}
            </div>
          </div>
          {/*<div>Description</div>*/}
        </div>
      </div>
    );
  }
}

export default EventBlock;