import React, {Component} from 'react';
import './LanguagesSelect.css';

class LanguagesSelect extends Component {
  render() {
    return (
      <div className='LanguagesSelect'>
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
      </div>
    );
  }
}

export default LanguagesSelect;