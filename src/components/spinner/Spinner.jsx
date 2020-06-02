import React from 'react';
import './Spinner.scss'

class Spinner extends React.Component {
  render() {
    const { hidden } = this.props;

    return (
      <div className="spinner" hidden={hidden}>
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    );
  }
}

export default Spinner;
