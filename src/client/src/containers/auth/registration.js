import React from 'react';
import {Button,Form,Col,FormGroup,Label,Input,FormText} from 'reactstrap';

export default class Reg extends React.Component{
  constructor(props){
    super(props);
    this.state={
      info:{
        firstname:``,
        lastname:``,
        email:``,
        password:``,
        cpassword:``
      },
      samePass:true
    }
  }
  handleSubmit=(e)=>{
    e.stopPropagation();
    e.preventDefault();
  };
  handleChange=(e)=>{
    e.stopPropagation();
    e.preventDefault();

    const { name, value } = e.currentTarget;
    const { info } = this.state;
    info[name] = value;
    this.setState({ info });
  };
  checkPassword=()=>{
    this.state.info.password===this.state.info.cpassword?this.setState({samePass:true}):this.setState({samePass:false})
  };
  render(){
    return(
      <div className="login-wrapper">
        <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Label for="firstname" sm={2}>First name:</Label>
          <Col sm={10}>
            <Input type="text" name="firstname" id="firstname" placeholder="Firstname" value={this.state.info.firstname}
                   onChange={this.handleChange} required/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="lastname" sm={2}>Last name:</Label>
          <Col sm={10}>
            <Input type="text" name="lastname" id="lastname" placeholder="Lastname" value={this.state.info.lastname}
                   onChange={this.handleChange} required/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" sm={2}>Email</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="email" placeholder="Email" value={this.state.info.email}
                   onChange={this.handleChange} required/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm={2}>Password:</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="password" placeholder="Password" value={this.state.info.password}
                   onChange={this.handleChange} required/>
          </Col>
        </FormGroup>
          <FormGroup row>
            <Label for="cpassword" sm={2}>Confirm Password:</Label>
            <Col sm={10}>
              <Input onBlur={this.checkPassword} type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" value={this.state.info.cpassword}
                     onChange={this.handleChange} required/>
              {!this.state.samePass?<FormText>Given passwords do not match</FormText>:``}
            </Col>
        </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button style={{marginRight:"5px"}} type="submit">Submit</Button>
              <Button onClick={()=>{this.props.method()}}>Log in</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}
