import React from "react";
import { Redirect } from "react-router-dom";

class AuthPage extends React.Component {
  state = {
    login: '',
    password: '',
    loggIn: false
  }
  onInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  onAuth = (e) => {
    e.preventDefault();
    const {login, password} = this.state;
    if (login === "pasha" && password === "pasha21"){
      this.setState({
        loggIn: true
      })
    } else {
      alert ("Неверные данные!")
    }
  }

  render() {
    if (this.state.loggIn){
     return <Redirect to="/usersTable"/>
    }
    return (

      <form onSubmit={this.onAuth}>
        <div className="form-group">
          <label htmlFor="login">Login</label>
          <input
            name="login"
            type="text"
            className="form-control"
            id="login"
            onChange={this.onInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="password"
            onChange={this.onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    );
  }
}

export default AuthPage;
