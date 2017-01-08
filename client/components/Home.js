import React from 'react';
import { connect } from 'react-redux';

const Home = ({ user}, props) => (
    <div className="container">
        HOME PAGE!
    </div>
);

const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps)(Home);
