import React from 'react';
import { connect } from 'react-redux';
import Game from './Game';
import HighScore from './HighScore';

const Dashboard = ({ user }, props) => (
  <div>
      <Game />
  </div>
);

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Dashboard);
