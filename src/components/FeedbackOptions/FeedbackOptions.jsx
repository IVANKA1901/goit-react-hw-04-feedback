import PropTypes from 'prop-types';
import React from 'react';
import { ButtonList } from '../ButtonList/ButtonList';
import { ButtonItem } from '../ButtonItem/ButtonItem';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <ButtonList>
      {options.map(option => (
        <ButtonItem
          key={option}
          text={capitalizeFirstLetter(option)}
          name={option}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </ButtonList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
