// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isLogin: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSuccessLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFailedLogin = errorMsg => {
    this.setState({isLogin: true, errorMsg})
    console.log('suresh')
    console.log(errorMsg)
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response)
    console.log(data.error_msg)

    if (response.ok === true) {
      this.onSuccessLogin()
    } else {
      this.onFailedLogin(data.error_msg)
    }
  }

  renderUsername = () => {
    const {username} = this.state

    return (
      <div>
        <label htmlFor="username">USERNAME</label>
        <input
          type="text"
          placeholder="USERNAME"
          onChange={this.onChangeUsername}
          value={username}
          id="username"
          className="username-input-filed"
        />
      </div>
    )
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <div>
        <label htmlFor="password">PASSWORD</label>
        <input
          type="password"
          placeholder="PASSWORD"
          onChange={this.onChangePassword}
          value={password}
          id="password"
          className="password-input-filed"
        />
      </div>
    )
  }

  render() {
    const {isLogin, errorMsg} = this.state
    return (
      <div className="login-form-container">
        <div className="img-form-div">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              className="website-login-img"
              alt="website login"
            />
          </div>
          <form className="form-container" onSubmit={this.submitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="website-logo-img"
              alt="website logo"
            />
            <div className="input-container">{this.renderUsername()}</div>
            <div className="input-container">{this.renderPassword()}</div>
            <button type="submit" className="login-button">
              Login
            </button>
            {isLogin && <p className="error-message">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
