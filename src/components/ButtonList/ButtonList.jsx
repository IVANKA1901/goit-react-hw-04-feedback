import React from 'react';
import PropTypes from 'prop-types';
import css from './ButtonList.module.css';

export function ButtonList({ children }) {
  return <ul className={css.list}>{children}</ul>;
}

ButtonList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
