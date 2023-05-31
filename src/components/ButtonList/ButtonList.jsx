import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ButtonList.module.css';

export class ButtonList extends Component {
  render() {
    return <ul className={css.list}>{this.props.children}</ul>;
  }
}

ButtonList.propTypes = {
  children: PropTypes.node.isRequired,
};
