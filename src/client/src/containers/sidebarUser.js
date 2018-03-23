import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SideBarUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink:'',
            activeclass:`nav-item active`
        };
    }
    activeLink=(e)=>{
        let target=e.target.name;
        this.setState({
            activeLink:target
        });

    };

    render() {
        return (

            <div className={"col-md-2 sidebar bg-white hide"} id="sidebar-wrapper">
                {/*<a className="pull-left show-menu" onClick={this.props.toggleSidebar}>
                  <i className="fa fa-bars fa-2x"/>
              </a>*/}
                <Link className="navbar-brand hd-logo col-lg-2 mr-0" to="/">
                    <img src="logo.png" alt="" width="150"/>
                </Link>
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li name="Dashboard" className={this.props.active === 'Dashboard' ? "nav-item active" :"nav-item"} ><Link className="nav-link" onClick={this.activeLink}  name="Dashboard" to="/"><i className="fa fa-th-large"></i> <span> Dashboard </span></Link></li>
                        <li name="eventLog" className={this.props.active === 'eventLog' ? "nav-item active" :"nav-item"} onClick={this.activeLink}><Link className="nav-link"  name="eventlog" to="/eventlog"><i className="fa fa-user"/><span>Event Log</span></Link></li>
                        <li name="settings" className={this.props.active === 'Settings' ? "nav-item active" :"nav-item"} onClick={this.activeLink}><Link className="nav-link"  name="settings" to="/settings"><i className="fa fa-gear"></i> <span> Settings </span></Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideBarUser;