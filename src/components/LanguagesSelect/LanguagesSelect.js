import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import './LanguagesSelect.css';

class LanguagesSelect extends Component {
  render() {
    return (
      <div className='LanguagesSelect'>
        <div className='LanguagesSelect__language'>
          <Link to='/home'>
            <h3>Hello Queensland</h3>
          </Link>
        </div>
        <div className='LanguagesSelect__language'>
          <Link to='/home'>
            <h3>早安，昆士兰</h3>
          </Link>
        </div>
        <div className='LanguagesSelect__language'>
          <Link to='/home'>
            <h3>Bonjour Queensland</h3>
          </Link>
        </div>
        <div className='LanguagesSelect__language'>
          <Link to='/home'>
            <h3>ආයුබෝවන් ක්වීන්ස්ලන්ඩ්</h3>
          </Link>
        </div>
        <div className='LanguagesSelect__language'>
          <Link to='/home'>
            <h3>こんにちはクイーンズランド</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default LanguagesSelect;