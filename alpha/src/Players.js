import React from 'react';
import axios from 'axios';
import ReactTable from 'react-table';

export default class Players extends React.Component {

  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount = () => {
    axios.get("/players").then(response => {
      this.setState({players: response.data});
    });
  };


  render() {
    return (
      <ReactTable>
      </ReactTable>
    );
  }
}
