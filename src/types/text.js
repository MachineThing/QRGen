import React from 'react';
import InputText from '../inputs/text.js';

export default class TypeText extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
    this.handleChange = props.handleChange
  }

  render() {
    return(
      <InputText state={this.state} handleChange={this.handleChange}/>
    )
  }
}
