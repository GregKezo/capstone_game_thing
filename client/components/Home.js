import React from 'react';
import { connect } from 'react-redux';

const Home = ({ user}, props) => (
    <div className="container">
        <figure className="home-caption">
            <img src="assets/GameHub-logo-lg.png" />
            <figcaption>
                A Portal for React Based Games
            </figcaption>
        </figure>
    </div>
);

const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps)(Home);
