import React, {Component} from 'react';
import './InfoBlock.css';

class InfoBlock extends Component {

  props: {
    title: string,
    description: string,
    linkLabel: string
  };

  render() {

    const {
      title = 'Commonwealth Games',
      description = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam aspernatur aut consequatur
            culpa.`,
      linkLabel = 'View events',
    } = this.props;

    return (
      <div className='InfoBlock'>
        <div className='InfoBlock__content'>
          <h4 className='InfoBlock__title'>{title}</h4>
          <p className='InfoBlock__description'>{description}</p>
          <a href='' className='InfoBlock__action'>{linkLabel}</a>
        </div>
      </div>
    );
  }
}

export default InfoBlock;