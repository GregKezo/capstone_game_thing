import React from 'react';
import { connect } from 'react-redux';
// Demo Game
import Demo from './demo-one/Demo';

const Game = ({ user }) => (
    <div className="col l9">
        Games!
    </div>
)

const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps)(Game)
