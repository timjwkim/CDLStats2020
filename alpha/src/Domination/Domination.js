import React from 'react';
import axios from 'axios';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import './Domination.css';
import '../Table/Table.css';

export default class Domination extends React.Component {


    constructor(props) {
      super(props);

      this.state = {
        players: []
      }
    }

    componentDidMount = () => {
      axios.get("/domination").then(res => {
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
          Header: "KD",
          accessor: "kd",
          filterable: false
        },
        {
          Header: "High Kills",
          accessor: "hiKills",
          filterable: false
        },
        {
          Header: "KpG",
          accessor: "kpg",
          filterable: false
        },
        {
          Header: "EpG",
          accessor: "epg",
          filterable: false
        },
        {
          Header: "CpG",
          accessor: "cpg",
          filterable: false
        },
        {
          Header: "TES%",
          accessor: "trueES",
          filterable: false
        }
      ]

      return (
        <div className="Domination">
          <ReactTable className="Table" columns={columns} data={this.state.players} filterable>
          </ReactTable>
        </div>
      );
    }
}
