import React from 'react';
import { connect } from 'react-redux';

const HighScore = ({ user }) => (
    <div className="col l3">
        HighScore
    </div>
)

const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps)(HighScore)
