import React,{Component} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Modal,ModalFooter,ModalBody } from 'reactstrap';
import IdleTimer from 'react-idle-timer';
import Storage from './../helpers/storage';
import {logOutUser} from './../containers/auth/actionMethods';



import Login from './auth/login';
import Home from './home';
import SetPassword from './auth/setpassword';
import ForgotPassword from './auth/forgotPassword';
import UserManagement from './admin/userManagement/index';
import SideBar from './sidebarAdmin';
import NavBar from './navbar';
import Settings from './settings';
import EventLog from './eventLog/eventLog';
import SideBarUser from './sidebarUser';

class App extends Component{

  constructor(){
    super();

    this.state={
        sidebarShow:true,
      active:true,
        time:2000,
        a:true,
        showModal:false,
        seconds:10,
        logout:true,
        timer:null
    }
  }

    /*shouldComponentUpdate(nextProps,nextState){

    }*/

  toggleClass = () => {
    this.setState({
      active:!this.state.active
    });
  };
  logoutUser=()=>{
      this.setState({showModal:true,logout:true},()=>{
          clearTimeout(this.timer);
          this.setState({timer:setTimeout(()=>{ this.state.logout && this.props.logOutUser()},10000)});
      });
  };

  render(){
    const PublicRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(routeProps) => (
        !this.props.user
          ? <Component {...routeProps} />
          : <Redirect to='/' />
      )} />
    );

      const Routewithlogin = ({ component: Component, ...rest }) => (
          <Route {...rest} render={(routeProps) => (
              <Component {...routeProps} />
          )} />
      );

    const PrivateRoute = ({ component: Component, activeLink,...rest }) => (
      <Route {...rest} render={(routeProps) => (this.props.user?
        <div className={this.state.active ? "parent-class show" : "parent-class hide"}>

            {this.props.decoded_user && this.props.decoded_user.includes('admin') ? <SideBar
                    active={activeLink}
                    method={this.toggleClass}

                />:
                <SideBarUser
                    active={activeLink}
                    method={this.toggleClass}
                />}
            <div id="sidebar-open-body" className={"sidebar-open-body"}>
            <NavBar/>
            <Modal isOpen={this.state.showModal} fade={false}>
                <ModalBody>
                    <h4>You are about to be logged out after 10 seconds due to inactivity!</h4>
                    <h4> do you want to extend your session?</h4>
                </ModalBody>+
                <ModalFooter><button className="btn btn-success"
                                     onClick={()=>{this.setState({showModal:false,logout:false});clearTimeout(this.state.timer)}}
                >extend my session</button></ModalFooter>
            </Modal>
        <div className="mobile-menu-left-overlay"/>
        <div className="container-fluid">
        <div className="row">

              <div className={ "content-block"}>

                  <Component {...routeProps} />

              </div>
        </div>
        </div>
            </div></div>
        : <Redirect to='/login' /> 
      )}  />
    );


      const PrivateRouteAdmin = ({ component: Component, activeLink,...rest }) => (
          <Route {...rest} render={(routeProps) => (this.props.user && this.props.decoded_user.includes('admin')?
                  <div className={this.state.active ? "parent-class show" : "parent-class hide"}>
                      {this.props.decoded_user && this.props.decoded_user.includes('admin') ?
                          <SideBar active={activeLink} method={this.toggleClass}/> :
                          <SideBar active={activeLink} method={this.toggleClass}/>}
                          <div id="sidebar-open-body" className={"sidebar-open-body"}>
                      <NavBar/>
                      <Modal isOpen={this.state.showModal} fade={false}>
                          <ModalBody>
                              <h4>You are about to be logged out after 10 seconds due to inactivity!</h4>
                              <h4> do you want to extend your session?</h4>
                          </ModalBody>
                          <ModalFooter>
                              <button className="btn btn-success" onClick={() => {
                                  this.setState({showModal: false, logout: false});
                                  clearTimeout(this.state.timer)
                              }}>extend my session
                              </button>
                          </ModalFooter>
                      </Modal>
                      <div className="mobile-menu-left-overlay"/>
                      <div className="container-fluid">
                          <div className="row">

                              <div className="content-block">
                                  <Component {...routeProps} />
                              </div>
                          </div>
                      </div>
                          </div>
                  </div>
              : <Redirect to='/login' />
              )}  />
      );

      const PrivateRouteUser = ({ component: Component, activeLink,...rest }) => (
          <Route {...rest} render={(routeProps) => (this.props.user && !this.props.decoded_user.includes('admin')?
                  <div className={this.state.active ? "parent-class show" : "parent-class hide"}>
                      {this.props.decoded_user && this.props.decoded_user.includes('admin') ? <SideBar active={activeLink} method={this.toggleClass}/>:
                          <SideBarUser active={activeLink} method={this.toggleClass}/>}
                      <div id="sidebar-open-body" className={"sidebar-open-body "}>
                      <NavBar />

                      <Modal isOpen={this.state.showModal} fade={false}>
                          <ModalBody>
                              <h4>You are about to be logged out after 10 seconds due to inactivity!</h4>
                              <h4> do you want to extend your session?</h4>
                          </ModalBody>
                          <ModalFooter><button className="btn btn-success" onClick={()=>{this.setState({showModal:false,logout:false});clearTimeout(this.state.timer)}}>extend my session</button></ModalFooter>
                      </Modal>
                      <div className="mobile-menu-left-overlay"/>
                      <div className="container-fluid">
                          <div className="row">


                              <div className={"content-block"}>

                                  <Component {...routeProps} />

                              </div>
                          </div>
                      </div>
                      </div></div>
                  : <Redirect to='/login' />
          )}  />
      );


    return (
      <div className="app-wrapper main-wrapper">
        <main>
          <Switch>

            <PublicRoute exact path="/login" component={Login} />
            <Routewithlogin exact path="/setpassword" component={SetPassword} />
            <PublicRoute exact path="/forgotpassword" component={ForgotPassword} />
              <IdleTimer
                  ref="idleTimer"
                  element={document}
                  activeAction={()=>{console.log('active')}}
                  idleAction={()=>{this.logoutUser()}}
                  timeout={Storage.getItem('auth.user')?Storage.getItem('auth.user').expires_in*1000:0}
                  format="MM-DD-YYYY HH:MM:ss.SSS">
            <PrivateRoute exact path="/" component={Home} activeLink='Dashboard' />
            <PrivateRouteAdmin exact path="/userManage" component={UserManagement} activeLink='UserManagement'/>
            <PrivateRoute exact path="/settings" component={Settings} activeLink='Settings' />
                  <PrivateRouteUser exact path="/eventlog" component={EventLog} activeLink='eventLog'/>
              </IdleTimer>
          </Switch>
        </main>
      </div>
    );
  }

};

const mapStateToProps = state => ({
  user: state.auth.user,
    decoded_user:state.auth.decoded_user
});

const mapDispatchToProps = dispatch=>bindActionCreators({logOutUser},dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
