import React,{Component} from 'react';
import { Link } from 'react-router-dom'

const NavbarPublic=()=>{
    return(
      <nav className="p-0 navbar navbar-expand-lg fixed-top navbar-light bg-white">
        <Link className="navbar-brand hd-logo col-lg-2 m-0" to="/">
          <img src="logo.png" alt="" width="150" />
           </Link>
           </nav>
    );
};

export default NavbarPublic;
