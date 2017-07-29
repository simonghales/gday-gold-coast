import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import './LanguagesSelect.css';

class LanguagesSelect extends Component {
  render() {
    return (
      <div className='LanguagesSelect'>
        <Link to='/home'>
          <div className='LanguagesSelect__language'>
            <h3>Ni Hao</h3>
          </div>
          <div className='LanguagesSelect__language'>
            <h3>Bonjour</h3>
          </div>
          <div className='LanguagesSelect__language'>
            <h3>Aloha</h3>
          </div>
          <div className='LanguagesSelect__language'>
            <h3>Gutentarg</h3>
          </div>
          <div className='LanguagesSelect__language'>
            <h3>Konichiwa</h3>
          </div>
        </Link>
      </div>
    );
  }
}

export default LanguagesSelect;