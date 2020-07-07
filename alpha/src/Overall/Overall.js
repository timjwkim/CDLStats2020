import React from 'react';
import axios from 'axios';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import './Overall.css';

export default class Overall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    }
  }

  componentDidMount = () => {
    axios.get("/overall").then(res => {
      this.setState({players: res.data});
    });
  };

  render() {
    const columns = [
      {
        Header: "Player",
        accessor: "playerName"
      },
      {
        Header: "Team",
        accessor: "team",
        sortable: false
      },
      {
        Header: "Role",
        accessor: "role",
        sortable: false
      },
      {
        Header: "Kills",
        accessor: "kills",
        filterable: false
      },
      {
        Header: "Deaths",
        accessor: "deaths",
        filterable: false
      },
      {
        Header: "KD",
        accessor: "kd",
        filterable: false
      },
      {
        Header: "+ / -",
        accessor: "plusMinus",
        filterable: false
      },
      {
        Header: "aKD",
        accessor: "aKD",
        filterable: false
      },
      {
        Header: "Slayer Rating",
        accessor: "slayRate",
        filterable: false
      }
    ]

    return (
      <div className="Overall">
        <ReactTable className="Ovrtable" columns={columns} data={this.state.players} filterable>
        </ReactTable>
      </div>
    );
  }
}
