import React from 'react';
import { connect } from 'react-redux';
import Game from './Game';
import HighScore from './HighScore';

const Dashboard = ({ user }, props) => (
  <div className="row">
      <Game />
      <HighScore />
  </div>
);

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Dashboard);
