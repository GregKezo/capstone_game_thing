import React from 'react';
import { connect } from 'react-redux';
// Demo Game
import Demo from './demo-one/Demo';

const Game = ({ user }) => (
    <div className="row">
        <div className="col l9">
            Games!
        </div>
        <div className="col l3">
            <a href="/asteroids">Asteroids</a><br />
            <a href="/tetris">Tetris</a><br />
            <a href="/jeopardy">Jeopardy</a>
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps)(Game)
