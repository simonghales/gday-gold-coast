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
            <h3>Hello</h3>
          </Link>
        </div>
        <div className='LanguagesSelect__language'>
          <Link to='/home'>
            <h3>Ni Hao</h3>
          </Link>
        </div>
        <div className='LanguagesSelect__language'>
          <Link to='/home'>
            <h3>Bonjour</h3>
          </Link>
        </div>
        <div className='LanguagesSelect__language'>
          <Link to='/home'>
            <h3>Aloha</h3>
          </Link>
        </div>
        <div className='LanguagesSelect__language'>
          <Link to='/home'>
            <h3>Guten tag</h3>
          </Link>
        </div>
        <div className='LanguagesSelect__language'>
          <Link to='/home'>
            <h3>Konichiwa</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default LanguagesSelect;