import React from 'react';
import Event from './Event';
import Iconizer from './Iconizer';
import ErrorList from './ErrorList';
import classes from './classes';

class Journey extends React.Component {
  createClassName(className) {
    return "label label-" + className;
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading">
            Journey
            { this.props.journey.label && <Iconizer thing={this.props.journey.label} /> }
            <span className={"pull-right label label-"+classes[this.props.journey.valid]}>{ this.props.journey.valid }</span>
          </div>
          <div className="panel-body">
            <p>
              Journey summary: total time, time in creche, total travel time, comparison with min, max, avg.
            </p>

            <ul>
              { this.props.journey.totalDuration && <li>Duration: {this.props.journey.totalDuration}</li> }
              { this.props.journey.timeInCreche && <li>Time in creche: {this.props.journey.timeInCreche}</li> }
              { this.props.journey.totalTravelTime && <li>Total travel time: {this.props.journey.totalTravelTime}</li> }
            </ul>

            { this.props.journey.validErrors && <ErrorList errorType="Valid errors" errors={this.props.journey.validErrors} /> }
            { this.props.journey.completeErrors && <ErrorList errorType="Complete errors" errors={this.props.journey.completeErrors} /> }
          </div>

          <ul className="list-group">
              { this.props.journey.events.map((event,index) => { return (
                <li className="list-group-item" key={index}>
                  <Event event={event} />
                </li> )}
              )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Journey;
