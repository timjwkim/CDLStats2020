import React from 'react';
import axios from 'axios';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import './Hardpoint.css';
import '../Table/Table.css';

export default class Hardpoint extends React.Component {


    constructor(props) {
      super(props);

      this.state = {
        players: []
      }
    }

    componentDidMount = () => {
      axios.get("/hardpoint").then(res => {
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
          Header: "Kp10m",
          accessor: "kp10m",
          filterable: false
        },
        {
          Header: "Ep10m",
          accessor: "ep10m",
          filterable: false
        },
        {
          Header: "HTpGT (s)",
          accessor: "htpgt",
          filterable: false
        },
        {
          Header: "TES%",
          accessor: "trueES",
          filterable: false
        }
      ]

      return (
        <div className="Hardpoint">
          <ReactTable className="Table" columns={columns} data={this.state.players} filterable>
          </ReactTable>
        </div>
      );
    }
}
