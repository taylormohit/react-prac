import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OrgForm from './../containers/admin/manageOrg/orgForm';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter, Router} from 'react-router-dom';
import thunk from "redux-thunk";

Enzyme.configure({adapter: new Adapter()});

describe('OrgForm', () => {
    let wrapper, inst;
    const props = {
        addOrg: jest.fn(),
        updateOrg:jest.fn(),
        toggleForm: jest.fn(),
        values: {
            orgID: '',
            orgName: ''
        },
        updateOrgId: '',
        editOrgMode: false
    };
    beforeEach(() => {
        wrapper = mount(<OrgForm {...props}/>);
        inst = wrapper.instance();
    });
    it('should render correctly in addmode', () => {
        const expectedHtml = '<div class="col-lg-10 ml-auto p-5 addEditForm hide"><div class="col-md-6 col-xl-6 top-title"><a href="#" class="nav-link">&lt; Back to manageOrg</a></div><div class="col-md-6 col-xl-6 top-title"><h1>add Organizations</h1></div><div class="p-4 bg-white rounded recent-vehicles"><div class="form-group"><label class="col-form-label">orgID</label><input type="text" id="input_orgID" name="orgID" placeholder="orgID" value="" required="" class="form-control"></div><div class="form-group"><label class="col-form-label">orgName</label><input type="text" id="input_orgName" name="orgName" value="" placeholder="orgName" required="" class="form-control"></div><button class="btn btn-success update-btn-margin">add</button><button class="btn btn-default">cancel</button></div></div>';
        expect(wrapper.html()).toEqual(expectedHtml);
    });

    it('should render correctly in editmode', () => {
        props.values.orgID = 'aa';
        props.values.orgName = 'bb';
        const expectedHtml = '<div class="col-lg-10 ml-auto p-5 addEditForm hide"><div class="col-md-6 col-xl-6 top-title"><a href="#" class="nav-link">&lt; Back to manageOrg</a></div><div class="col-md-6 col-xl-6 top-title"><h1>add Organizations</h1></div><div class="p-4 bg-white rounded recent-vehicles"><div class="form-group"><label class="col-form-label">orgID</label><input type="text" id="input_orgID" name="orgID" placeholder="orgID" value="" required="" class="form-control"></div><div class="form-group"><label class="col-form-label">orgName</label><input type="text" id="input_orgName" name="orgName" value="" placeholder="orgName" required="" class="form-control"></div><button class="btn btn-success update-btn-margin">add</button><button class="btn btn-default">cancel</button></div></div>';
        expect(wrapper.html()).toEqual(expectedHtml);
    });

    it('change event on orgID field', () => {
        const orgID = wrapper.find('input #input_orgID');
        expect(orgID.length).toBe(1);
        orgID.instance().value = 'testID';
        orgID.simulate('change');
        expect(inst.state.newOrgValues.orgID).toEqual('testID');

    });

    it('change event on orgName field', () => {
        const orgName = wrapper.find('input #input_orgName');
        expect(orgName.length).toBe(1);
        orgName.instance().value = 'testName';
        orgName.simulate('change');
        expect(inst.state.newOrgValues.orgName).toEqual('testName');
    });

    it('add button', () => {
        const addBtn = wrapper.find('.btn .btn-success .update-btn-margin');
        expect(addBtn.length).toBe(1);
        addBtn.simulate('click');
        expect(props.addOrg).toHaveBeenCalledWith(inst.state.newOrgValues);
        props.editOrgMode=true;
        props.updateOrgId= 'aa'
    });

    it('update button',()=>{
        const updateBtn = wrapper.find('.btn .btn-success .update-btn-margin');
        expect(updateBtn.length).toBe(1);
        updateBtn.simulate('click');
        expect(props.updateOrg).toHaveBeenCalledWith(inst.state.newOrgValues,inst.props.updateOrgId);
    });

    it('cancel button',()=>{
        const cancelBtn=wrapper.find('.btn .btn-default');
        expect(cancelBtn.length).toBe(1);
        cancelBtn.simulate('click');
        expect(props.toggleForm).toHaveBeenCalled();
    });

    it('back NavLink',()=>{
        const cancelBtn=wrapper.find('.nav-link');
        expect(cancelBtn.length).toBe(1);
        cancelBtn.simulate('click');
        expect(props.toggleForm).toHaveBeenCalled();
    });
});