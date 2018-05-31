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

  render(){
    return (
      <div className={`folder ${this.props.className}`}>
        <h3 className='title' onClick={ (evt) => this.setState({ isOpen: !this.state.isOpen })}>{this.props.title}</h3>
        <div className='folder-content'>
          { renderWhen(this.state.isOpen, this.props.children) }
        </div>
      </div>
    )
  }
}

export { Folder };

