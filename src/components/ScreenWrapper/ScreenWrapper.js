import React, {Component} from 'react';
import './ScreenWrapper.css';

class ScreenWrapper extends Component {

  props: {
    children?: any
  };

  render() {

    return (
      <div className='ScreenWrapper'>
        {this.props.children}
      </div>
    );
  }
}

export default ScreenWrapper;