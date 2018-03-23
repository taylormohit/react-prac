import React from 'react';
import { Link } from 'react-router-dom'


const ForgotPassword_component=(props)=>{
    return(
        <div className="container-fluid">

            <div className="row">
                <div className="content-block">
                    <div className="signin">
                        <form className="form-signin" onSubmit={props.handleSubmit}>
                            <h1>Can't log in?</h1>
                            <p>Enter your email address below and we'll send you password reset instructions.</p>
                            <div className="bg-white p-4 my-4">
                                <div className="row">
                                    <div className="form-group col-md-12 mb-4">
                                        <label htmlFor="email" className="col-form-label">Enter your email address</label>
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email address" value={props.email}
                                               onChange={props.handleChange} required />
                                    </div>
                                    <div className="col-md-12">


                                        <div className="row m-0 justify-content-end align-items-center">
                                            <button className="btn btn-primary" type="submit" disabled={props.isSubmitted}>Email me reset instructions</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p><b>Never mind,</b>
                                <Link id="linkToLogin" to="/">go back to the login screen</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ForgotPassword_component;