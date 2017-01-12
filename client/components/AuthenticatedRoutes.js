import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';
import SignIn from './SignIn';

class AuthenticatedRoutes extends React.Component {
  componentDidMount() {
    this.props.dispatch(refreshLogin());
  }

  render() {
    return (
      <div className="container">
        { this.props.user._id ? this.props.children : <SignIn /> }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(AuthenticatedRoutes);
