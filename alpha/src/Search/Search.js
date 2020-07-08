import React from 'react';
import axios from 'axios';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import './Search.css';
import '../Table/Table.css';

export default class Search extends React.Component {


    constructor(props) {
      super(props);

      this.state = {
        players: []
      }
    }

    componentDidMount = () => {
      axios.get("/search").then(res => {
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
          Header: "DpG",
          accessor: "dpg",
          filterable: false
        },
        {
          Header: "First Bloods",
          accessor: "opDuels",
          filterable: false
        },
        {
          Header: "FB Win%",
          accessor: "opDP",
          filterable: false
        },
        {
          Header: "Rounds",
          accessor: "rounds",
          filterable: false
        }
      ]

      return (
        <div className="Search">
          <ReactTable className="Table" columns={columns} data={this.state.players} filterable>
          </ReactTable>
        </div>
      );
    }
}
