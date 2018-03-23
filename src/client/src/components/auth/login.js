import React from 'react';
import { Link } from 'react-router-dom'

const Login_component=(props)=>{
  return(
      <div className="container-fluid">

          <div className="row">
              <div className="content-block">
                  <div className="signin">
                      <form className="form-signin" onSubmit={props.handleSubmit}>
                          <h1>Welcome.</h1>
                          {!props.showAlert && <p>Enter your email and password to login.</p>}
                          {props.showAlert && <div className="alert alert-warning" role="alert">Invalid email / password combination. Please try again.</div>}
                          <div className="bg-white p-4 mt-4">
                              <div className="row">
                                  <div className="form-group col-md-12">
                                      <input type="email" className="form-control" id="email" name="email" placeholder="Email" value={props.credentials.email}
                                             onChange={props.handleChange} required />
                                  </div>
                                  <div className="form-group col-md-12">
                                      <div className="input-append input-group">
                                          {props.showPassword ?
                                              <input type="text" id="password" name="password" className="form-control password" placeholder="Password" autoComplete="off"
                                                     value={props.credentials.password} onChange={props.handleChange} required />
                                              : <input type="password" id="password" className="form-control password" name="password" placeholder="Password" autoComplete="off"
                                                       value={props.credentials.password} onChange={props.handleChange} required />}
                                          <span tabIndex="100" title="Click here to show/hide password" className="add-on input-group-addon"
                                                onClick={props.showHidePassword}>
                            <i className={props.showPassword ? "icon-eye-close glyphicon fa fa-eye-slash" : "icon-eye-open glyphicon fa fa-eye"} />
                          </span>
                                      </div>
                                  </div>
                              </div>
                              <div className="form-group col-md-12 text-right">
                                  <span className="forgot-pass"><Link id="linkToForgotPassword" to="/forgotpassword">Forgot your password?</Link></span>
                              </div>
                              <div className="col-md-12">
                                  <div className="row m-0 justify-content-end align-items-center">
                                      <button className="btn btn-primary" type="submit" disabled={props.isSubmitted}>Continue</button>
                                  </div>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  )
};
export default Login_component;