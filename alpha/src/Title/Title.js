import React from 'react';
import './Title.css';

export default class Title extends React.Component {

  render() {
    return (
      <div className="Title">
        <div className="Header">
          Call of Duty League 2020 Stats Tracker
        </div>
        <body><b1>*stats provided by Activision's Call of Duty League and tracked by Easy Mac (twitter @Its_EasyMac)</b1></body>
        <body><b1>*for more advanced stats and original spreadsheet click here</b1></body>
      </div>
    );
  }
}
