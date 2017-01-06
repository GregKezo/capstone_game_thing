import React from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import { Reacteroids } from './Reacteroids/Reacteroids';

const Asteroids = ({ user }, props) => (
  <div>
      <Reacteroids />
  </div>
);

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Asteroids);
