import {NavBar} from './../containers/navbar';
import Enzyme, {shallow, mount, render} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";


const mockStore = configureStore([thunk]);
const initialState = {

};
const store=mockStore(initialState);
Enzyme.configure({adapter: new Adapter()});

describe('navbar component:',()=>{
    it('should render correctly:',()=>{
        const html=shallow(<MemoryRouter><NavBar store={store}/></MemoryRouter>).html();
        const expectedHtml='<nav class="p-0 navbar navbar-expand-lg fixed-top navbar-light bg-white">' +
            '<span class="pull-left show-menu"><i class="fa fa-bars fa-2x"></i></span>' +
            '<a class="nav-link navbar-brand hd-logo col-lg-2 mr-0" href="/"></a>' +
            '<button class="navbar-toggler" type="button">' +
            '<span class="navbar-toggler-icon"></span>' +
            '</button>' +
            '<div class="navbar-collapse text-right">' +
            '<form action="" class="hd-search form-inline mr-auto ml-5">' +
            '<input type="text" class="form-control" placeholder="Global Search" aria-label="Search"/>' +
            '<button class="button-search" type="submit">' +
            '<i class="fa fa-search"></i>' +
            '</button></form>' +
            '<div class="dropdown user-menu pr-5 ml-auto">' +
            '<button class="btn btn-secondary dropdown-toggle rounded-circle " type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
            '<img class="rounded-circle" src="images/user-pic.png" width="42" alt=""/>' +
            '</button>' +
            '<div class="dropdown-menu">' +
            '<a class="dropdown-item nav-link" href="/profile">Profile</a>' +
            '<a id="logoutBtn" class="dropdown-item nav-link" href="/">Logout</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</nav>';
        expect(html).toEqual(expectedHtml);
    });

    it('logout user',()=>{
        const logOutUser=jest.fn();
        const wrapper=mount(<MemoryRouter><NavBar logOutUser={logOutUser} store={store}/></MemoryRouter>);
        const component = wrapper.find('NavBar');
        expect(component.length).toBe(1);
        const btn=component.find('a #logoutBtn');
        expect(btn.length).toBe(1);
        btn.simulate('click');
        expect(logOutUser.mock.calls.length).toBe(1);
    });
});