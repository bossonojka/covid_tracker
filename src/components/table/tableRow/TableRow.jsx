import React from 'react';
import PropTypes from 'prop-types';
import './TableRow.scss';

class TableRow extends React.PureComponent {
  render() {
    const { children, className } = this.props;

    return (
      <tr className={className}>{children}</tr>
    );
  }
}

TableRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default TableRow;
