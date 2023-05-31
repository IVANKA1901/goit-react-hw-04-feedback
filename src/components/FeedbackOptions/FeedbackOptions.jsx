import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ButtonList } from '../ButtonList/ButtonList';
import { ButtonItem } from '../ButtonItem/ButtonItem';

export class FeedbackOptions extends Component {
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <ButtonList>
        {options.map(option => (
          <ButtonItem
            key={option}
            text={this.capitalizeFirstLetter(option)}
            name={option}
            onLeaveFeedback={onLeaveFeedback}
          />
        ))}
      </ButtonList>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
