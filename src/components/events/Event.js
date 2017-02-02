import React from 'react';
import moment from 'moment';
import Iconizer from './Iconizer';

class Event extends React.Component {
  render() {
    return (
      <div>
        { moment(this.props.event.timeMoment).format('HH:mm') }:
        <Iconizer thing={this.props.event.location} />
        <Iconizer thing={this.props.event.status} />
        { this.props.event.duration && <span>Duration: {this.props.event.duration}</span> }
      </div>
    );
  }
}

export default Event;
