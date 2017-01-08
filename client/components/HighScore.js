import React from 'react';
import { connect } from 'react-redux';

const HighScore = ({ user }) => (
    <div className="col l3">
        <a href="/asteroids">Asteroids</a><br />
        <a href="/tetris">Tetris</a>
    </div>
)

const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps)(HighScore)
