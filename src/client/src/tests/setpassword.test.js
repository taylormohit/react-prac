import Enzyme, {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SetPassword from './../containers/auth/setpassword';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router-dom';
import  'mock-local-storage';
import thunk from "redux-thunk";

Enzyme.configure({adapter: new Adapter()});

const mockStore = configureStore([thunk]);
const initialState = {
    router: {
        location: {
            pathname: "/setpassword"
        }
    },
    auth: {
        forgotpassworddata: {}
    }

};

describe('setpassword component', () => {

    let wrapper, component, inst, store;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(<MemoryRouter><SetPassword store={store}/></MemoryRouter>);
        component=wrapper.find('SetPassword');
        inst=component.instance();
    });

    it('should render correctly', () => {
        const html = wrapper.html();
        const expectedhtml='<div>' +
            '<nav class="p-0 navbar navbar-expand-lg fixed-top navbar-light bg-white">' +
            '<a class="navbar-brand hd-logo col-lg-2 m-0" href="/">' +
            '<img src="logo.png" alt="" width="150">' +
            '</a></nav>' +
            '<div class="container-fluid">' +
            '<div class="row">' +
            '<div class="content-block">' +
            '<div class="signin">' +
            '<form class="form-signin">' +
            '<h1>Welcome,</h1>' +
            '<p>Let\'s set your password.</p>' +
            '<div class="bg-white p-4 mt-4">' +
            '<div class="form-group col-md-12">' +
            '<label for="name" class="col-form-label">Name</label>' +
            '<input type="name" class="form-control" id="name" name="name" placeholder="Name" value="" required="">' +
            '</div>' +
            '<div class="form-group col-md-12">' +
            '<label for="password" class="col-form-label">Password</label>' +
            '<div class="input-append input-group">' +
            '<input type="password" id="password" name="password" class="form-control password" placeholder="Password" autocomplete="off" value="" required="">' +
            '<span id="hide-show-btn1" tabindex="100" title="Click here to show/hide password" class="add-on input-group-addon">' +
            '<i class="icon-eye-open fa fa-eye"></i>' +
            '</span>' +
            '</div>' +
            '</div>' +
            '<div class="form-group col-md-12 mb-4">' +
            '<label for="confirmPassword" class="col-form-label">Confirm Password</label>' +
            '<div class="input-append input-group">' +
            '<input type="password" id="confirmPassword" name="confirmPassword" class="form-control password" placeholder="Confirm Password" autocomplete="off" value="" required="">' +
            '<span id="hide-show-btn2" tabindex="100" title="Click here to show/hide password" class="add-on input-group-addon">' +
            '<i class="icon-eye-open fa fa-eye"></i>' +
            '</span>' +
            '</div>' +
            '</div>' +
            '<div class="col-md-12">' +
            '<div class="row m-0 justify-content-end align-items-center">' +
            '<button class="btn btn-primary" type="submit">Continue</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</form>' +
            '</div></div></div></div></div>';
        expect(html).toEqual(expectedhtml);
    });

    it('state changes on change event on name',()=>{
        const input=component.find('.form-control #name');
        expect(input.length).toBe(1);
        input.instance().value='aa';
        input.simulate('change');
        expect(inst.state.credentials.name).toEqual('aa');
    });

    it('state changes on change event on password',()=>{
        const input=component.find('.form-control #password');
        expect(input.length).toBe(1);
        input.instance().value='bb';
        input.simulate('change');
        expect(inst.state.credentials.password).toEqual('bb');
    });

    it('state changes on change event on confirmPassword',()=>{
        const input=component.find('.form-control #confirmPassword');
        expect(input.length).toBe(1);
        input.instance().value='cc';
        input.simulate('change');
        expect(inst.state.credentials.confirmPassword).toEqual('cc');
    });

    it('click to show/hide password',()=>{
        const btn1=component.find('.add-on .input-group-addon #hide-show-btn1');
        const btn2=component.find('.add-on .input-group-addon #hide-show-btn1');
        expect(btn1.length).toBe(1);
        expect(btn2.length).toBe(1);
        btn1.simulate('click');
        expect(inst.state.showPassword).toBe(true);
        btn2.simulate('click');
        expect(inst.state.showPassword).toBe(false);
    });

    it('show alert when passwords dont match and submit button',()=>{
        const form=component.find('.form-signin');
        expect(form.length).toBe(1);
        form.simulate('submit');
        expect(inst.state.showAlert).toBe(true);
        inst.state.credentials.confirmPassword='bb';
        form.simulate('submit');
        expect(inst.state.showAlert).toBe(false);

    });

});