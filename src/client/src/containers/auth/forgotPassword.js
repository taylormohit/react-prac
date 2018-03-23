import React from 'react';
import NavbarPublic from '../navbarPublic';
import ForgotPassword_component from './../../components/auth/forgotPassword';

const axios = require('axios');

class ForgotPassword extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      active: false,
      isSubmitted: false
    };
  }

  toggleActive = () => {
    this.setState({ active: !this.state.active })
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleOkay = () => {
    this.props.history.push('/login');
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let { email } = this.state;

    this.setState({ isSubmitted: true });
    axios.post('api/Account/ForgotPassword', { email })
      .then((data) => {
        //console.log('data : ', data);
        //alert(`Link to reset your password sent to ${Email} .`);
        //this.props.method();
        //console.log(data);
        this.handleOkay();
      })
      .catch((err) => {
        //this.toggleActive();
        //this.setState({isSubmitted:false});
        this.handleOkay() //always go back to login, as we don't want user to know if email does not exist
      });

  };

  render() {
    return (
      <div>

        <NavbarPublic />
        <ForgotPassword_component
            handleSubmit={this.handleSubmit}
            {...this.state}
            handleChange={this.handleChange}
        />

      </div>
    );
  }
}


export default ForgotPassword;
