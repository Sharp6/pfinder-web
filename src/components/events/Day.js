import React from 'react';
import Journey from './Journey';

class Day extends React.Component {
  render() {
    let day, date;
    if(this.props.params) {
      day = this.props.days[this.props.params.date];
      date = this.props.params.date;
    } else if(this.props.day) {
      day = this.props.day;
      date = this.props.date;
    }

    return(
      <div className="row">
        <h3>{date}</h3>
        {
          day && day.map((journey, index) => { return <Journey journey={journey} key={index} /> })
        }
      </div>
    );
  }
}

export default Day;
