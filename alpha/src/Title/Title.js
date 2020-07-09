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
        <body><b1>*for more advanced stats and original spreadsheet click </b1>
        <a href="https://docs.google.com/spreadsheets/d/1cMsCIoKjDkbS6hBzdioriq-PNZbHdZId6B7A3al84mM/edit?usp=sharing">here</a></body>
      </div>
    );
  }
}
