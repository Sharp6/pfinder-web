import React from 'react';
import icons from './icons';

class Iconizer extends React.Component {
  render() {
    let thing = icons[this.props.thing] ? <i className={"fa fa-" +icons[this.props.thing]} aria-hidden="true"></i> : <span>{this.props.thing}</span>;
    return (<span>{ thing }</span>);
  }
}

export default Iconizer;
