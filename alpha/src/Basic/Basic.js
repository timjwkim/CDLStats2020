import React from 'react';
import axios from 'axios';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import './Basic.css';
import '../Table/Table.css';

export default class Basic extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      players: []
    }
  }

  componentDidMount = () => {
    axios.get("/players").then(res => {
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
        Header: "Ovr KD",
        accessor: "overallKD",
        filterable: false
      },
      {
        Header: "HP KD",
        accessor: "hpKD",
        filterable: false
      },
      {
        Header: "SnD KD",
        accessor: "sndKD",
        filterable: false
      },
      {
        Header: "Dom KD",
        accessor: "domKD",
        filterable: false
      }
    ]

    return (
      <div className="Basic">
        <ReactTable className="Table" columns={columns} data={this.state.players} filterable>
        </ReactTable>
      </div>
    );
  }
}
