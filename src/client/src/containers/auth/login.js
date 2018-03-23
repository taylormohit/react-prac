import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavbarPublic from '../navbarPublic';
import { logInUser } from '../../containers/auth/actionMethods';
import Login_component from '../../components/auth/login';

const initialState = {
  credentials: {
    email: '',
    password: '',
  },
  showPassword: false,
  showAlert: false,
  isSubmitted: false
};

export class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  handleChange = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const { name, value } = e.currentTarget;
    const { credentials } = this.state;
    credentials[name] = value;
    this.setState({ credentials });
  };

  handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const { logInUser, goToHome } = this.props;
    this.setState({ isSubmitted: true });
    logInUser(this.state.credentials)
      .then(user => goToHome(user))
      .catch(e => {
        this.setState({ showAlert: true, isSubmitted: false });
      });
  };


  showHidePassword=() => { this.setState({ showPassword: !this.state.showPassword }) };

  render() {
    return (
      <div>

        <NavbarPublic />
        <Login_component
            {...this.state}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            showHidePassword={this.showHidePassword}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.auth && state.auth.user });

const mapDispatchToProps = dispatch => bindActionCreators({
  logInUser,
  goToHome: () => push('/')
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

