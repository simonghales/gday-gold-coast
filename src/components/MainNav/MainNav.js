import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';
import './MainNav.css';
import GdayIntro from '../GdayIntro/GdayIntro';
import LanguagesSelect from '../LanguagesSelect/LanguagesSelect';

class MainNav extends Component {
  render() {
    return (
      <nav className='MainNav'>
        <div className='MainNav__tab'>
          <Link to='/home'>
            HOME
          </Link>
        </div>
        <div className='MainNav__tab'>
          <Link to='/things'>
            THINGS
          </Link>
        </div>
        <div className='MainNav__tab'>
          <Link to='/language'>
            LANG
          </Link>
        </div>
        <div className='MainNav__tab'>
          <Link to='/language'>
            NAV
          </Link>
        </div>
      </nav>
    );
  }
}

export default MainNav;