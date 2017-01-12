import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let { email, password } = this.refs;

    $.ajax({
      url: '/api/auth/signin',
      type: 'POST',
      dataType: 'JSON',
      data: { email: email.value, password: password.value }
    }).done( user => {
      this.props.dispatch(refreshLogin(user));
      this.props.router.push("/dashboard")
    }).fail( err => {
    });
  }

  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col l12">
                  <h2>Sign In</h2>
                  <form onSubmit={this.handleSubmit}>
                      <div className="row">
                          <div className="col l5 input-field">
                              <input type="email" required={true} ref="email" placeholder="email" />
                          </div>
                          <div className="col l5 input-field">
                              <input type="password" required={true} ref="password" placeholder="password" />
                          </div>
                          <div className="col l12">
                              <button className="btn orange darken-4">Sign In</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    )
  }
}

export default connect()(SignIn);
