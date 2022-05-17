import React from 'react';

export default class InputDetect extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
    this.handleChange = props.handleChange
  }

  render() {
    return(
      <form>
        <input onChange={this.handleChange} type="radio" value="L" id="L" name="detect"/>
        <label for="L">Low</label>
        <input onChange={this.handleChange} defaultChecked type="radio" value="M" id="M" name="detect"/>
        <label for="M">Medium</label>
        <input onChange={this.handleChange} type="radio" value="Q" id="Q" name="detect"/>
        <label for="Q">Quartile</label>
        <input onChange={this.handleChange} type="radio" value="H" id="H" name="detect"/>
        <label for="H">High</label>
      </form>
    )
  }
}
