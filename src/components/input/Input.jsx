import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

function Input(props, ref) {
    const {
      className,
      type,
      placeholder,
      name,
      onChange,
      hidden,
    } = props;

    return (
      <input className={className} ref={ref} type={type} placeholder={placeholder} name={name} onChange={onChange} hidden={hidden} />
    );
}

Input.defaultProps = {
  hidden: false,
  name: '',
}

Input.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  hidden: PropTypes.bool,
}

export default Input;
