import React from 'react';

const SetPassword_component=(props)=>{
    return(
        <div className="container-fluid">

            <div className="row">
                <div className="content-block">
                    <div className="signin">
                        <form className="form-signin" onSubmit={props.handleSubmit}>
                            <h1>Welcome,</h1>
                            {!props.showAlert && <p>Let's set your password.</p>}
                            {props.showAlert && <div className="alert alert-warning" role="alert">Confirm password does not match. Please try again.</div>}

                            <div className="bg-white p-4 mt-4">
                                <div className="form-group col-md-12">
                                    <label htmlFor="name" className="col-form-label">Name</label>
                                    <input type="name" className="form-control" id="name" name="name" placeholder="Name" value={props.credentials.name}
                                           onChange={props.handleChange} required />
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="password" className="col-form-label">Password</label>
                                    <div className="input-append input-group">
                                        {props.showPassword ?
                                            <input type="text" id="password" name="password" className="form-control password" placeholder="Password" autoComplete="off"
                                                   value={props.credentials.password} onChange={props.handleChange} required />
                                            : <input type="password" id="password" name="password" className="form-control password" placeholder="Password" autoComplete="off"
                                                     value={props.credentials.password} onChange={props.handleChange} required />}
                                        <span id="hide-show-btn1" tabIndex="100" title="Click here to show/hide password" className="add-on input-group-addon"
                                              onClick={props.showHidePassword}>
                          <i className={props.showPassword ? "icon-eye-close fa fa-eye-slash" : "icon-eye-open fa fa-eye"} />
                        </span>
                                    </div>
                                </div>
                                <div className="form-group col-md-12 mb-4">
                                    <label htmlFor="confirmPassword" className="col-form-label">Confirm Password</label>
                                    <div className="input-append input-group">
                                        {props.showConfirmPassword ?
                                            <input type="text" id="confirmPassword" name="confirmPassword" className="form-control password" placeholder="Confirm Password" autoComplete="off"
                                                   value={props.credentials.confirmPassword} onChange={props.handleChange} required />
                                            : <input type="password" id="confirmPassword" name="confirmPassword" className="form-control password" placeholder="Confirm Password" autoComplete="off"
                                                     value={props.credentials.confirmPassword} onChange={props.handleChange} required />}
                                        <span id="hide-show-btn2" tabIndex="100" title="Click here to show/hide password" className="add-on input-group-addon"
                                              onClick={props.showHidePassword}>
                          <i className={props.showConfirmPassword ? "icon-eye-close  fa fa-eye-slash" : "icon-eye-open fa fa-eye"} />
                        </span>
                                    </div>
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
export default SetPassword_component;