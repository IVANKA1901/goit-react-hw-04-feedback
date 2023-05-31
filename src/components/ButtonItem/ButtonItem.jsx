import PropTypes from 'prop-types';
import React from 'react';
import css from './ButtonItem.module.css';

export function ButtonItem({ name, onLeaveFeedback, text }) {
  return (
    <li>
      <button className={css.btn} name={name} onClick={onLeaveFeedback}>
        {text}
      </button>
    </li>
  );
}

ButtonItem.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
