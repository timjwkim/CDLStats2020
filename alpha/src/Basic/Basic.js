import React from 'react';
import axios from 'axios';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import './Basic.css';

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
        Header: "Overall KD",
        accessor: "overallKD",
        filterable: false
      },
      {
        Header: "Hardpoint KD",
        accessor: "hpKD",
        filterable: false
      },
      {
        Header: "Search and Destroy KD",
        accessor: "sndKD",
        filterable: false
      },
      {
        Header: "Domination KD",
        accessor: "domKD",
        filterable: false
      }
    ]

    return (
      <div className="Basic">
        <ReactTable className="Basictable" columns={columns} data={this.state.players} filterable>
        </ReactTable>
      </div>
    );
  }
}
