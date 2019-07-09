import React, { Component } from "react";
import "./ToolComponent.css";
import * as helpers from "./../helpers";
import PanelComponent from "../../../PanelComponent";

class ToolComponent extends Component {
  state = {};

  onClose() {
    // ADD CLEAN UP HERE (e.g. Map Layers, Popups, etc)

    // CALL PARENT WITH CLOSE
    this.props.onClose();
  }

  render() {
    return (
      <PanelComponent onClose={this.props.onClose} name={this.props.name} type="tools">
        <div>Put your components in here.</div>
      </PanelComponent>
    );
  }
}

export default ToolComponent;
