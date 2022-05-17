import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GenQRCode from './qrcode.js';
import Types from './types/types.js';
import InputDetect from './inputs/detect.js';

export class QRApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: "Hello, world!", detect: "M"};
    this.handleText = this.handleText.bind(this);
    this.handleDetect = this.handleDetect.bind(this);
  }

  handleDetect(detect) {
    this.setState({detect: detect.target.value});
  }

  handleText(txt) {
    this.setState({text: txt.target.value});
  }

  render() {
    const InputText = Types[0].class;

    return(
      <>
      <GenQRCode state={this.state}/>
      <InputText state={this.state} handleChange={this.handleText}/>
      <InputDetect state={this.state} handleChange={this.handleDetect}/>
      </>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('content'));
root.render(
  <QRApp/>
);
