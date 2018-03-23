import Enzyme,{ mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SideBarUser from './../containers/sidebarUser';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter,Router} from 'react-router-dom';
import thunk from "redux-thunk";

Enzyme.configure({adapter: new Adapter()});


describe('sidebar',()=>{
    let wrapper,inst;
    wrapper=Enzyme.shallow(<MemoryRouter><SideBarUser/></MemoryRouter>);

    it('should render correctly',()=>{
        const expectedHtml='<div class="col-md-2 sidebar bg-white hide" id="sidebar-wrapper">' +
            '<a class="navbar-brand hd-logo col-lg-2 mr-0" href="/">' +
            '<img src="logo.png" alt="" width="150"/></a>' +
            '<div class="sidebar-sticky">' +
            '<ul class="nav flex-column">' +
            '<li name="Dashboard" class="nav-item">' +
            '<a class="nav-link" name="Dashboard" href="/"><i class="fa fa-th-large"></i> <span> Dashboard </span></a>' +
            '</li>' +
            '<li name="eventLog" class="nav-item"><a class="nav-link" name="eventlog" href="/eventlog"><i class="fa fa-user"></i><span>Event Log</span></a></li>' +
            '<li name="settings" class="nav-item"><a class="nav-link" name="settings" href="/settings"><i class="fa fa-gear"></i> <span> Settings </span></a></li>' +
            '</ul>' +
            '</div>' +
            '</div>';
        expect(wrapper.html()).toEqual(expectedHtml);
    });
});