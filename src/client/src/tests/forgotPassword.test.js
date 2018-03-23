import Enzyme,{shallow,mount,render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter,Router} from 'react-router-dom';
import ForgotPassword from './../containers/auth/forgotPassword';
import React from 'react';
import { browserHistory } from 'react-router';
Enzyme.configure({ adapter: new Adapter() });

describe('forgotPassword component:',()=>{
    const props = {
        history: {
            push: jest.fn(),
        }
    };

    it('should render correctly',()=>{
        const html = shallow(<MemoryRouter initialEntries={['/forgotpassword']}><ForgotPassword /></MemoryRouter>).html();
        const expectedHTML = '<div>' +
            '<nav class=\"p-0 navbar navbar-expand-lg fixed-top navbar-light bg-white\">' +
            '<a class=\"navbar-brand hd-logo col-lg-2 m-0\" href=\"/\">' +
            '<img src=\"logo.png\" alt=\"\" width=\"150\"/>' +
            '</a>' +
            '</nav>' +
            '<div class=\"container-fluid\">' +
            '<div class=\"row\">' +
            '<div class=\"content-block\">' +
            '<div class=\"signin\">' +
            '<form class=\"form-signin\"><h1>Can&#x27;t log in?</h1>' +
            '<p>Enter your email address below and we&#x27;ll send you password reset instructions.</p>' +
            '<div class=\"bg-white p-4 my-4\"><div class=\"row\">' +
            '<div class=\"form-group col-md-12 mb-4\">' +
            '<label for=\"email\" class=\"col-form-label\">Enter your email address</label>' +
            '<input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Enter your email address\" value=\"\" required=\"\"/>' +
            '</div>' +
            '<div class=\"col-md-12\">' +
            '<div class=\"row m-0 justify-content-end align-items-center\">' +
            '<button class=\"btn btn-primary\" type=\"submit\">' +
            'Email me reset instructions' +
            '</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<p>' +
            '<b>Never mind,</b>' +
            '<a id=\"linkToLogin\" href=\"/\">go back to the login screen</a>' +
            '</p>' +
            '</form>' +
            '</div></div></div></div></div>';
        expect(html).toEqual(expectedHTML);
    });

    it('handleSubmit called',()=>{
        const wrapper=mount(<MemoryRouter><ForgotPassword/></MemoryRouter>);
        const component=wrapper.find('ForgotPassword');
            let form = component.find('.form-signin');
            expect(form.length).toEqual(1);

            const e={
            preventDefault(){},
           };
            form.simulate('submit',e);
        expect(component.instance().state.isSubmitted).toBe(true);
    });

    it('handle change',()=>{
        const wrapper= mount(<MemoryRouter><ForgotPassword {...props}/></MemoryRouter>);
        const component=wrapper.find('ForgotPassword');
        const inst = component.instance();
        const e={
            preventDefault(){},
            target:{
            name:'email',
            value:'a'
        }};
        const inp = component.find('#email');
        inp.simulate('change',e);
        expect(inst.state.email).toEqual('a');
    });
});