import React from 'react';
import './Toggle.css';
import Basic from '../Basic/Basic.js';
import Overall from '../Overall/Overall.js';
import Hardpoint from '../Hardpoint/Hardpoint.js';
import Search from '../Search/Search.js';
import Domination from '../Domination/Domination.js'

export default class Toggle extends React.Component {
  state = {
    whichComponentToShow: "Basic"
  }

  render() {
    if (this.state.whichComponentToShow === 'Basic') {
      return (
        <div className="Toggle">
          <button className="Disbutton" disabled={true}>Basic</button>
          <button className="Button" onClick={() => {
              this.setState({ whichComponentToShow: "Overall" });
            }}>Overall</button>
          <button className="Button" onClick={() => {
              this.setState({ whichComponentToShow: "Hardpoint" });
            }}>Hardpoint</button>
          <button className="Button" onClick={() => {
              this.setState({ whichComponentToShow: "Search" });
            }}>Search and Destroy</button>
          <button className="Button" onClick={() => {
              this.setState({ whichComponentToShow: "Domination" });
            }}>Domination</button>
          <Basic/>
        </div>
      );
    }

    else if (this.state.whichComponentToShow === 'Overall') {
      return (
        <div className="Toggle">
          <button className="Button" onClick={() => {
              this.setState({ whichComponentToShow: "Basic" });
            }}>Basic</button>
          <button className="Disbutton" disabled={true}>Overall</button>
          <button className="Button" onClick={() => {
              this.setState({ whichComponentToShow: "Hardpoint" });
            }}>Hardpoint</button>
          <button className="Button" onClick={() => {
              this.setState({ whichComponentToShow: "Search" });
            }}>Search and Destroy</button>
          <button className="Button" onClick={() => {
              this.setState({ whichComponentToShow: "Domination" });
            }}>Domination</button>
          <Overall/>
        </div>
      )
    }

    else if (this.state.whichComponentToShow === 'Hardpoint') {
      return (
        <div className="Toggle">
          <button className="Button" onClick={() => {
              this.setState({ whichComponentToShow: "Basic" });
            }}>Basic</button>
          <button className="Button" onClick={() => {
              this.setState({ whichComponentToShow: "Overall" });
            }}>Overall</button>
          <button className="Disbutton" disabled={true}>Hardpoint</button>
          <button className="Button" onClick={() => {
              this.setState({ whichComponentToShow: "Search" });
            }}>Search and Destroy</button>
          <button className="Button" onClick={() => {
              this.setState({ whichComponentToShow: "Domination" });
            }}>Domination</button>
          <Hardpoint/>
        </div>
      )
    }

    else if (this.state.whichComponentToShow === 'Search') {
      return (
        <div className="Toggle">
          <button className="Button" onClick={() => {
              this.setState({ whichComponentToShow: "Basic" });
            }}>Basic</button>
          <button className="Button" onClick={() => {
              this.setState({ whichComponentToShow: "Overall" });
            }}>Overall</button>
          <button className="Button" onClick={() => {
              this.setState({ whichComponentToShow: "Hardpoint" });
            }}>Hardpoint</button>
          <button className="Disbutton" disabled={true}>Search and Destroy</button>
          <button className="Button" onClick={() => {
              this.setState({ whichComponentToShow: "Domination" });
            }}>Domination</button>
          <Search/>
        </div>
      )
    }

    else if (this.state.whichComponentToShow === 'Domination') {
      return (
        <div className="Toggle">
          <button className="Button" onClick={() => {
              this.setState({ whichComponentToShow: "Basic" });
            }}>Basic</button>
          <button className="Button" onClick={() => {
              this.setState({ whichComponentToShow: "Overall" });
            }}>Overall</button>
          <button className="Button" onClick={() => {
              this.setState({ whichComponentToShow: "Hardpoint" });
            }}>Hardpoint</button>
          <button className="Button" onClick={() => {
              this.setState({ whichComponentToShow: "Search" });
            }}>Search and Destroy</button>
          <button className="Disbutton" disabled={true}>Domination</button>
          <Domination/>
        </div>
      )
    }

    return null;
  }
}
