import Enzyme, {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login_connected,{Login} from './../containers/auth/login';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter,Router} from 'react-router-dom';
import thunk from "redux-thunk";

Enzyme.configure({adapter: new Adapter()});

const mockStore = configureStore([thunk]);
const initialState = {
    user: null,
    decoded_user: null,
    forgotpassworddata: {}
};
let store = mockStore(initialState);
describe('login component:', () => {

    it('should check that it renders correctly', () => {
        const html = mount(<MemoryRouter><Provider store={store}><Login/></Provider></MemoryRouter>).html();
        const expectedHTML = '<div>' +
            '<nav class="p-0 navbar navbar-expand-lg fixed-top navbar-light bg-white">' +
            '<a class="navbar-brand hd-logo col-lg-2 m-0" href="/">' +
            '<img src="logo.png" alt="" width="150"></a></nav><div class="container-fluid">' +
            '<div class="row"><div class="content-block">' +
            '<div class="signin"><form class="form-signin">' +
            '<h1>Welcome.</h1><p>Enter your email and password to login.</p>' +
            '<div class="bg-white p-4 mt-4">' +
            '<div class="row">' +
            '<div class="form-group col-md-12">' +
            '<input type="email" class="form-control" id="email" name="email" placeholder="Email" value="" required="">' +
            '</div>' +
            '<div class="form-group col-md-12"><div class="input-append input-group">' +
            '<input type="password" id="password" class="form-control password" name="password" placeholder="Password" autocomplete="off" value="" required="">' +
            '<span tabindex="100" title="Click here to show/hide password" class="add-on input-group-addon"><i class="icon-eye-open glyphicon fa fa-eye">' +
            '</i>' +
            '</span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="form-group col-md-12 text-right"><span class="forgot-pass">' +
            '<a id="linkToForgotPassword" href="/forgotpassword">Forgot your password?</a></span></div><div class="col-md-12">' +
            '<div class="row m-0 justify-content-end align-items-center">' +
            '<button class="btn btn-primary" type="submit">Continue</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</form>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div></div>';
        expect(html).toEqual(expectedHTML);
    });
});

describe('login component state changes', () => {

    const props = {
        logInUser: jest.fn(),
        goToHome: jest.fn()
    };
    const routerProps={
        history:{
            push:jest.fn()
        }
    };
    let wrapper, component, inst;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(<MemoryRouter><Login_connected {...props} store={store}/></MemoryRouter>);
        component = wrapper.find('Login');
        inst = component.instance();
    });

    it('onChange email', () => {

        expect(component).toHaveLength(1);

        const inp = component.find('#email');
        inp.instance().value = 'aa';
        expect(inp).toHaveLength(1);
        inp.simulate('change');
        expect(inst.state.credentials.email).toEqual('aa');
    });

    it('onChange password', () => {

        expect(component).toHaveLength(1);


        const inp = component.find('#password');
        inp.instance().value = 'pp';
        expect(inp).toHaveLength(1);
        inp.simulate('change');
        expect(inst.state.credentials.password).toEqual('pp');
    });

    it('show password button', () => {
        const btn = component.find('.add-on .input-group-addon');
        expect(btn.length).toBe(1);
        btn.simulate('click');
        expect(inst.state.showPassword).toBe(true);
    });

    it('handle submit', () => {
        const form = component.find('.form-signin');
        expect(form.length).toBe(1);
        form.simulate('submit');
        expect(inst.state.isSubmitted).toBe(true);
    });
});