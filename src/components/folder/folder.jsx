import './folder.css';
import React, { Component } from "react";

const renderWhen = (cond, component) => {
  if(cond) {
    return component;
  }

  return null;
}

class Folder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: this.props.open
    }
  }

  toggleState = (evt) => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render(){
    return (
      <div className={`folder ${this.props.className}`}>
        <h3 className='title' onClick={ this.toggleState }>{this.props.title}</h3>
        <div className='folder-content'>
          { renderWhen(this.state.isOpen, this.props.children) }
        </div>
      </div>
    )
  }
}

export { Folder };

