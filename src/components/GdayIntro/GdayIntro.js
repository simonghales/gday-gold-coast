import React, {Component} from 'react';
import './GdayIntro.css';

class GdayIntro extends Component {
  render() {
    return (
      <div className='GdayIntro'>
        <h2>
          G'day Queensland
        </h2>
        <h3 className='GdayIntro__prompt'>select a language below</h3>
      </div>
    );
  }
}

export default GdayIntro;