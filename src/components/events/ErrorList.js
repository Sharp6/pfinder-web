import React from 'react';

class ErrorList extends React.Component {
  render() {
    return(
      <div>
        <h6>{this.props.errorType}</h6>
        <ul>
          {
            this.props.errors.map(function(err) { return <li key={err}>{err}</li>; } )
          }
        </ul>
      </div>
    );
  }
}

export default ErrorList;
