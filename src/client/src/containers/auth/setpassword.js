import React from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import NavbarPublic from '../navbarPublic';
import {forgotPassword} from './../../modules/services/auth.service';
import {getForgotPasswordData, logOutUser} from './../../containers/auth/actionMethods';
import {bindActionCreators} from 'redux';
import Storage from './../../helpers/storage';
import SetPassword_component from './../../components/auth/setpassword';


const initialState = {
    credentials: {
        name: '',
        password: '',
        confirmPassword: '',
        Email: ''
    },
};

class SetPassword extends React.Component {

    constructor(props) {
        super(props);
        const urlParams = new URLSearchParams(window.location.search);
        //console.log(decodeURI(urlParams.get('token'))); // "edit"
        //console.log(this.props.location.search.slice(this.props.location.search.indexOf('=')+1)); // "edit"

        this.state = {
            ...initialState,
            ResetPasswordToken: decodeURI(urlParams.get('token')),
            showAlert: false
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            userData: nextProps.forgotpassworddata, credentials:
                {
                    name: `${nextProps.forgotpassworddata.firstName} ${nextProps.forgotpassworddata.lastName}`,
                    Email: nextProps.forgotpassworddata.email
                }
        });
    };

    componentWillMount() {
        if (Storage.getItem('auth.user')) {
            this.props.logOutUser();
        }
        this.props.getForgotPasswordData(this.state.ResetPasswordToken);
    }

    handleChange = (e) => {
        e.stopPropagation();
        e.preventDefault();

        const {name, value} = e.currentTarget;
        const {credentials} = this.state;
        credentials[name] = value;
        this.setState({credentials});
    };

    handleSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.setState(() => {
            if (this.state.credentials.password !== this.state.credentials.confirmPassword) {
                this.setState({showAlert: true});
            } else {
                this.setState({showAlert: false}, () => {
                    forgotPassword(this.state.credentials.Email, this.state.ResetPasswordToken, this.state.credentials.password);
                });
            }
        });
    };
    showHidePassword=() => { this.setState({ showPassword: !this.state.showPassword }) };
    render() {

        return (

            <div>

                <NavbarPublic/>
                <SetPassword_component
                    {...this.state}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    showHidePassword={this.showHidePassword}
                />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        location: state.router.location,
        forgotpassworddata: state.auth.forgotpassworddata
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({getForgotPasswordData, logOutUser}, dispatch);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SetPassword));
