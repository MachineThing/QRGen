import React from 'react';

export default class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
    this.handleChange = props.handleChange
  }

  render() {
    return(
      <textarea
        onChange={this.handleChange}
        defaultValue={this.state.text}
      />
    )
  }
}
