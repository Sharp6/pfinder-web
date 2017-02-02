import React from 'react';
import Day from './Day';

class Days extends React.Component {
  render() {
      console.log(this.props.days);
      return (
        <div>
          {
            Object.keys(this.props.days).map(dayKey => {
              return <Day day={this.props.days[dayKey]} date={dayKey} key={dayKey} />
            })
          }
        </div>
      );
  }
}

export default Days;
