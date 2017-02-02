import React from 'react';
import DateMenu from './events/DateMenu';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: {}
    }
  }

  componentDidMount() {
    fetch(`http://localhost:4000/journeys`)
      .then(result=>result.json())
      .then(days=>this.setState({days}))
  }

  render() {
    return (
    <div className="container">
      <DateMenu dates={Object.keys(this.state.days)} />
      {React.cloneElement(this.props.children, {days: this.state.days})}
    </div>
    );
  }
}
export default App;
