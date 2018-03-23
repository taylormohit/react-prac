import Enzyme,{ mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ManageOrg} from './../containers/admin/manageOrg';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter,Router} from 'react-router-dom';
import thunk from "redux-thunk";

Enzyme.configure({adapter: new Adapter()});

describe('manageOrg',()=>{
    const props={openManageOrg:jest.fn(),deleteOrg:jest.fn()};
    let wrapper,inst,component;
    beforeEach(()=>{
        wrapper=mount(<MemoryRouter><ManageOrg {...props}/></MemoryRouter>);
        component=wrapper.find('ManageOrg');
        inst=component.instance();
    });

    it('should render correctly without any data',()=>{
        const expectedHtml='<div><div class="col-lg-10 ml-auto p-5 addEditForm hide"><div class="col-md-6 col-xl-6 top-title"><a href="#" class="nav-link">&lt; Back to Form</a></div><div class="col-md-6 col-xl-6 top-title"><h1>Manage Organizations</h1></div><div class="p-4 bg-white rounded recent-vehicles"><table class="table"><thead><tr><th>orgID</th><th>orgName</th><th></th></tr></thead><tbody></tbody></table><button id="saveBtn" class="btn btn-success btn-top-margin update-btn-margin">Save</button><button id="addOrgBtn" class="btn btn-primary btn-top-margin update-btn-margin">Add Organization</button></div></div></div>';
        expect(wrapper.html()).toEqual(expectedHtml);
    });

    it('should render correctly with data',()=>{
        inst.setState({orgList:[
            {
                orgID:'aa',
                orgName:'aa'
            },{
                orgID:'bb',
                orgName:'bb'
            },{
                orgID:'cc',
                orgName:'cc'
            }
        ]});
        wrapper.update();
        const expectedHtml='<div><div class="col-lg-10 ml-auto p-5 addEditForm hide"><div class="col-md-6 col-xl-6 top-title"><a href="#" class="nav-link">&lt; Back to Form</a></div><div class="col-md-6 col-xl-6 top-title"><h1>Manage Organizations</h1></div><div class="p-4 bg-white rounded recent-vehicles"><table class="table"><thead><tr><th>orgID</th><th>orgName</th><th></th></tr></thead><tbody><tr><td>aa</td><td>aa</td><td><i id="aa" class="fa fa-edit fa-lg"></i><i id="aa" class="fa fa-trash fa-lg"></i></td></tr><tr><td>bb</td><td>bb</td><td><i id="bb" class="fa fa-edit fa-lg"></i><i id="bb" class="fa fa-trash fa-lg"></i></td></tr><tr><td>cc</td><td>cc</td><td><i id="cc" class="fa fa-edit fa-lg"></i><i id="cc" class="fa fa-trash fa-lg"></i></td></tr></tbody></table><button id="saveBtn" class="btn btn-success btn-top-margin update-btn-margin">Save</button><button id="addOrgBtn" class="btn btn-primary btn-top-margin update-btn-margin">Add Organization</button></div></div></div>';
        expect(wrapper.html()).toBe(expectedHtml);
    });

    it('open addOrg on button click',()=>{
        inst.setState({orgList:[
            {
                orgID:'aa',
                orgName:'aa'
            },{
                orgID:'bb',
                orgName:'bb'
            },{
                orgID:'cc',
                orgName:'cc'
            }
        ]});
        wrapper.update();
       const btn=wrapper.find('#addOrgBtn');
       expect(btn.length).toBe(1);
        expect(inst.state.formOpen).toBe(false);
       btn.simulate('click');
       expect(inst.state.formOpen).toBe(true);
    });

    it('save button click',()=>{
        const btn=wrapper.find('#saveBtn');
        expect(btn.length).toBe(1);
        btn.simulate('click');
        expect(props.openManageOrg).toHaveBeenCalled();
    });

    it('edit button click',()=>{
        inst.setState({orgList:[
            {
                orgID:'aa',
                orgName:'aa'
            },{
                orgID:'bb',
                orgName:'bb'
            },{
                orgID:'cc',
                orgName:'cc'
            }
        ]});
        wrapper.update();
        const btn=wrapper.find('#aa .fa .fa-edit .fa-lg');
        expect(btn.length).toBe(1);
        btn.simulate('click');
        expect(inst.state.updateOrgId).toEqual('aa');
        expect(inst.state.editOrgMode).toBe(true);
        expect(inst.state.formOpen).toBe(true);
        expect(inst.state.org).toEqual({
            orgID:'aa',
            orgName:'aa'
        });

    });

    it('delete button click',()=>{
        inst.setState({orgList:[
            {
                orgID:'aa',
                orgName:'aa'
            },{
                orgID:'bb',
                orgName:'bb'
            },{
                orgID:'cc',
                orgName:'cc'
            }
        ]});
        wrapper.update();
        const btn=wrapper.find('#aa .fa .fa-trash .fa-lg');
        expect(btn.length).toBe(1);
        btn.simulate('click');
        expect(props.deleteOrg).toHaveBeenCalledWith(btn.instance().id);
    });

    it('back to form link click',()=>{
        const btn=wrapper.find('a .nav-link');
        expect(btn.length).toBe(1);
        btn.simulate('click');
        expect(props.openManageOrg).toHaveBeenCalled();
    });

});