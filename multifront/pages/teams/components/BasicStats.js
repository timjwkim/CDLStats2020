import React from 'react'

export default class BasicStats extends React.Component {
  render() {
    return (
      <div className="Basicstats">
        <div className="Playerdesc">
          <body className="Desc-team">
            <b1>Team: </b1>
            </body>
          <body className="Desc-role">
            <b1>Role: </b1>
          </body>
        </div>
        <div className="PlayerKD">
          <div className="OverallKD">
            <body><b1>KD: </b1></body>
          </div>
          <div className="ModeKD">
            <body className="HardpointKD">
              <b1>HP KD: </b1>
            </body>
            <body className="SearchKD">
              <b1>SnD KD: </b1>
            </body>
            <body className="DominationKD">
              <b1>Dom KD: </b1>
            </body>
          </div>
        </div>
      </div>
    )
  }
}
