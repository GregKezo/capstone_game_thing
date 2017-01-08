import React from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import Trivia from './jeopardy/app';

const Jeopardy = ({ user }, props) => (
  <div>
      <Trivia />
  </div>
);

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Jeopardy);
