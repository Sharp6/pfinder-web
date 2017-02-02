import React from 'react';
import {Link} from 'react-router';



class DateMenu extends React.Component {
  render() {

    <Link to="/login"><i className="fa fa-cogs" aria-hidden="true"></i></Link>
    const dates = this.props.dates.map(date => {return <li key={date}><Link to={"/"+date}>{date}</Link></li>});

    return (
      <ul>
        {dates}
      </ul>
    );
  }
}

export default DateMenu;
