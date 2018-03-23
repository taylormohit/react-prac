import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {toggleSidebar} from './../modules/actions/classes';

import {
  logOutUser
} from '../containers/auth/actionMethods';

export class NavBar extends Component{

  handleLogout = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.props.logOutUser();
  };  

  changeSidebarClass=()=>{
        const ele1 = document.getElementById('sidebar-open-body');
        const ele2=document.getElementById('sidebar-wrapper');
        if(ele2.classList.contains('hide')){
            ele2.classList.remove('hide');
            ele2.classList.add('sidebar-open');
        }else{
            ele2.classList.add('hide');
            ele2.classList.remove('sidebar-open');
        }
      if (ele1.classList.contains('body-sidebar') ){
          ele1.classList.remove('body-sidebar');
      }else{
          ele1.classList.add('body-sidebar');
      }
  };


  render(){

    return(
        <nav className="p-0 navbar navbar-expand-lg fixed-top navbar-light bg-white">
            <span className="pull-left show-menu">
                <i className="fa fa-bars fa-2x" onClick={this.changeSidebarClass}/>
            </span>
            <Link className="nav-link navbar-brand hd-logo col-lg-2 mr-0" to="/">
           </Link>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"/>
        </button>
          <div className="navbar-collapse text-right">
              <form action="" className="hd-search form-inline mr-auto ml-5">
                <input className="form-control" placeholder="Global Search" aria-label="Search" type="text"/>
                <button className="button-search" type="submit"><i className="fa fa-search"/></button>
              </form>
              <div className="dropdown user-menu pr-5 ml-auto">
                  <button className="btn btn-secondary dropdown-toggle rounded-circle " type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img className="rounded-circle" src="images/user-pic.png" width="42" alt=""/>
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item nav-link" to="/profile">Profile</Link>
                    <Link id="logoutBtn" className="dropdown-item nav-link" to="/" onClick={this.handleLogout}>Logout</Link>
                  </div>
              </div>
          </div>
        </nav>
    );
  }
}

const mapStateToProps = state => ({ user: state.auth && state.auth.user });

const mapDispatchToProps = dispatch => bindActionCreators({
  logOutUser,
    toggleSidebar
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)

