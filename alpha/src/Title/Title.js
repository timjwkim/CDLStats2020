import React from 'react';
import './Title.css';

export default class Title extends React.Component {

  render() {
    return (
      <div className="Title">
        <header>
          <h1>Call of Duty League 2020 Stats</h1>
        </header>
        <body>
          <b1>stats provided by Activision's Call of Duty League and
              tracked by Easy Mac (twitter: its_Easy_Mac)</b1>
        </body>
      </div>
    );
  }
}
