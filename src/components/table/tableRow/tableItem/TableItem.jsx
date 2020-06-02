import React from 'react';
import PropTypes from 'prop-types';
import './TableItem.scss';

class TableItem extends React.PureComponent {
  render() {
    const { children, className, onClick } = this.props;

    return (
      <td className={className} onClick={onClick}>{children}</td>
    );
  }
}

TableItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.number]).isRequired,
}

export default TableItem;
