import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let { email, password } = this.refs;

    $.ajax({
      url: '/api/auth/signup',
      type: 'POST',
      data: { email: email.value, password: password.value },
      dataType: 'JSON'
    }).done( user => {
      this.props.dispatch(refreshLogin(user));
      this.props.router.push('/dashboard');
    }).fail( err => {
      //A great place to dispatch flash actions
    });
  }

  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col l12">
                  <h2>Sign Up</h2>
                  <form onSubmit={this.handleSubmit}>
                      <div className="row">
                          <div className="col l5 input-field">
                              <input type="email" placeholder="email" ref="email" required={true} />
                          </div>
                          <div className="col l5 input-field">
                              <input type="password" placeholder="password" ref="password" required={true} />
                          </div>
                          <div className="col l12">
                              <button className="btn orange darken-4">Sign Up</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    )
  }
}

export default connect()(SignUp);
