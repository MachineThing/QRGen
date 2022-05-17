import React from 'react';
import QRCode from 'qrcode';
import {Buffer} from 'buffer';

var lastQR = null;

function getQr(state) {
  if (state.text !== "") {
    let url;
    QRCode.toString(state.text,
      {
        errorCorrectionLevel: state.detect,
        type: 'svg',
        margin: 0,
        color: {
          dark: '#000',  // Black
          light: '#0000' // Transparent background
        }
      }, function(err, ret) {
      url = ret;
    });

    lastQR = "data:image/svg+xml;base64,"+Buffer.from(url, "utf8").toString("base64");
  }
  return lastQR;
}

export default class GenQRCode extends React.Component {
  render() {
    let url = getQr(this.props.state);

    return(
      <img src={url} alt="QR Code" />
    )
  }
}
