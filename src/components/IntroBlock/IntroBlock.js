import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import './IntroBlock.css';

class IntroBlock extends Component {
  render() {
    return (
      <div className='IntroBlock'>
        <h2>Ni Hao</h2>
        <div className='IntroBlock__return'>
          <Link to='/'>
            return
          </Link>
        </div>
      </div>
    );
  }
}

export default IntroBlock;