import ConnectedaddEditForm,{AddEditForm} from './../containers/admin/userManagement/addEditForm';
import Enzyme, { mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router-dom';
import thunk from "redux-thunk";
import localStorage from 'mock-local-storage';
import store from "../store";

Enzyme.configure({adapter: new Adapter()});
const props={

    addUserHandler:jest.fn(),
    getPermissions:jest.fn(),
    toggle:jest.fn(),
    clearTempOrg:jest.fn(),
    permissions:[{label: "Notify Vehicle Recovery Vendor (Repairable)", isChecked: false},
        {label: "Notify Vehicle Recovery Vendor (Savage)", isChecked: false},
        {label: "Move Vehicle to Storage Free Location", isChecked: false},
        {label: "Request Digital Image of Damage", isChecked: false},
        {label: "Notify Policy Holder that an Event was Declined", isChecked: false},
        {label: "Notify First Responds", isChecked: false}],
    addUserValues:
    { id: '',
        firstName: '',
        lastName: '',
        email: '',
        role: 'User1',
        repID: '',
        organization: '',
        effectiveDate: '',
        enabled: true,
        permissions: [] }};

describe('addEditForm component:',()=>{
    let wrapper,inst;
    beforeEach(()=>{
        wrapper=mount(<AddEditForm {...props}/>);
        inst=wrapper.instance();
    });

    it('should render correctly',()=>{

        inst.setState({values:{
            permissions:[{label: "Notify Vehicle Recovery Vendor (Repairable)", isChecked: false},
                {label: "Notify Vehicle Recovery Vendor (Savage)", isChecked: false},
                {label: "Move Vehicle to Storage Free Location", isChecked: false},
                {label: "Request Digital Image of Damage", isChecked: false},
                {label: "Notify Policy Holder that an Event was Declined", isChecked: false},
                {label: "Notify First Responds", isChecked: false}]
        }});
        const html=wrapper.html();
        const expectedHtml= '<div class="col-lg-10 ml-auto p-5 addEditForm hide">' +
            '<div class="col-md-6 col-xl-6 top-title">' +
            '<a id="backNavLink" href="#" class="nav-link">&lt; Back to UserManagement Table</a>' +
            '</div>' +
            '<div class="col-md-6 col-xl-6 top-title">' +
            '<h1> Add User</h1>' +
            '</div>' +
            '<div class="p-4 bg-white rounded recent-vehicles">' +
            '<div class="row">' +
            '<div class="col-md-4">' +
            '<div class="form-group">' +
            '<label class=" col-form-label">First Name</label>' +
            '<input type="text" id="firstName" name="firstName" placeholder="First Name" value="" required="" class="form-control">' +
            '</div>' +
            '<div class="form-group">' +
            '<label class="col-form-label">Last Name</label>' +
            '<input type="text" id="lastName" name="lastName" placeholder="Last Name" value="" required="" class="form-control"></div>' +
            '<div class="form-group">' +
            '<label class="col-form-label">Email</label>' +
            '<input type="text" id="email" name="email" placeholder="Email" value="" required="" class="form-control"></div>' +
            '<div class="form-group">' +
            '<label class="col-form-label">Rep ID</label><input type="text" id="repID" name="repID" placeholder="Rep ID" value="" required="" class="form-control"></div>' +
            '</div>' +
            '<div class="col-md-4"><div class="form-group"><label for="form1-role" class="col-form-label">Role</label>' +
            '<select id="role" name="role" required="" type="select" class="custom-select form-control">' +
            '<option value="">Choose One</option>' +
            '<option value="User1">User 1</option>' +
            '<option value="User2">User 2</option>' +
            '<option value="Admin1">Admin 1</option>' +
            '<option value="Admin2">Admin 2</option>' +
            '</select>' +
            '</div>' +
            '<div class="form-group">' +
            '<label class="col-form-label">Org</label>' +
            '<select id="organization" name="organization" required="" type="select" class="custom-select form-control">' +
            '<option>Choose One</option>' +
            '</select><label>' +
            '<button id="manageOrg" class="btn btn-success btn-top-margin">manage Organizations</button>' +
            '</label>' +
            '</div>' +
            '<div class="form-group">' +
            '<label class="col-form-label">Effective Date</label>' +
            '<input type="date" id="effectiveDate" name="effectiveDate" placeholder="Effective Date" value="" required="" class="form-control">' +
            '</div>' +
            '</div>' +
            '<div class="col-md-4">' +
            '<div class="form-group">' +
            '<h4>Permissions</h4>' +
            '<div>' +
            '<input type="checkbox" id="Notify Vehicle Recovery Vendor (Repairable)" name="permissions" value="on">' +
            '<label class="col-form-label">Notify Vehicle Recovery Vendor (Repairable)</label>' +
            '</div>' +
            '<div><input type="checkbox" id="Notify Vehicle Recovery Vendor (Savage)" name="permissions" value="on">' +
            '<label class="col-form-label">Notify Vehicle Recovery Vendor (Savage)</label>' +
            '</div>' +
            '<div>' +
            '<input type="checkbox" id="Move Vehicle to Storage Free Location" name="permissions" value="on">' +
            '<label class="col-form-label">Move Vehicle to Storage Free Location</label>' +
            '</div>' +
            '<div><input type="checkbox" id="Request Digital Image of Damage" name="permissions" value="on">' +
            '<label class="col-form-label">Request Digital Image of Damage</label></div>' +
            '<div><input type="checkbox" id="Notify Policy Holder that an Event was Declined" name="permissions" value="on">' +
            '<label class="col-form-label">Notify Policy Holder that an Event was Declined</label></div>' +
            '<div><input type="checkbox" id="Notify First Responds" name="permissions" value="on"><label class="col-form-label">Notify First Responds</label>' +
            '</div>' +
            '</div>' +

            '</div>' +
            '</div>' +
            '<div class="gray-line"></div>' +
            '<div><button type="button" id="addUpdateBtn" class="update-btn-margin btn btn-success">' +
            '<span>Save</span>' +
            '</button>' +
            '<button type="button" id="cancelBtn" class="btn-light btn btn-secondary">Cancel</button>' +
            ' </div></div></div>';
        expect(html).toEqual(expectedHtml);
    });

    it('state changes on change event firstname field',()=>{
        const firstName=wrapper.find('input #firstName');
        expect(firstName.length).toBe(1);
        firstName.instance().value='aa';
        firstName.simulate('change');
        expect(inst.state.values.firstName).toBe('aa');
    });
    it('state change on change event lastName field',()=>{
        const lastName=wrapper.find('input #lastName');
        expect(lastName.length).toBe(1);
        lastName.instance().value='bb';
        lastName.simulate('change');
        expect(inst.state.values.lastName).toBe('bb');
    });
    it('state change on change event email field',()=>{
        const email=wrapper.find('input #email');
        expect(email.length).toBe(1);
        email.instance().value='cc';
        email.simulate('change');
        expect(inst.state.values.email).toBe('cc');
    });

    it('state change on change event repID field',()=>{
        const repID=wrapper.find('input #repID');
        expect(repID.length).toBe(1);
        repID.instance().value='dd';
        repID.simulate('change');
        expect(inst.state.values.repID).toBe('dd');
    });

    it('state change on change event effectiveDate field',()=>{
        const effectiveDate=wrapper.find('input #effectiveDate');
        expect(effectiveDate.length).toBe(1);
        effectiveDate.instance().value=new Date;
        effectiveDate.simulate('change');
        expect(inst.state.values.effectiveDate).toBe(effectiveDate.instance().value);
    });

    it('state change on change event Role select',()=>{
        const role=wrapper.find('select #role');
        expect(role.length).toBe(1);
        role.instance().value='User1';
        role.simulate('change');
        expect(inst.state.values.role).toBe('User1');
    });

    it('click on cancel button',()=>{
        const cancelBtn=wrapper.find('button #cancelBtn');
        expect(cancelBtn.length).toBe(1);
        cancelBtn.simulate('click');
        expect(props.toggle).toHaveBeenCalled();
        expect(props.clearTempOrg).toHaveBeenCalled();
    });

    it('click on save button when values not given',()=>{
        const Btn=wrapper.find('button #addUpdateBtn');
        expect(Btn.length).toBe(1);
        Btn.simulate('click');
        expect(inst.state.alertMsg).toEqual('all fields must be filled first!');
        expect(inst.state.showAlert).toBe(true);
    });

    it('click on save button when email is incorrect',()=>{
        inst.setState({values:{
            firstName:'test',
            lastName:'jest',
            email:'enzyme',
            repId:'something',
            organization:'org1',
            effectiveDate:new Date(),
            permissions:[{},{},{},{}],
            orgList:[{},{}]
        }});
        const Btn=wrapper.find('button #addUpdateBtn');
        expect(Btn.length).toBe(1);
        Btn.simulate('click');
        expect(inst.state.alertMsg).toEqual('please enter a valid email address!');
        expect(inst.state.showAlert).toBe(true);
    });

    it('click on save button when data is correct',()=>{
        inst.setState({values:{
            firstName:'test',
            lastName:'jest',
            email:'enzyme@jest.com',
            repId:'something',
            organization:'org1',
            effectiveDate:new Date(),
            permissions:[{},{},{},{}],
            orgList:[{},{}]
        }});
        const Btn=wrapper.find('button #addUpdateBtn');
        expect(Btn.length).toBe(1);
        Btn.simulate('click');
        expect(props.addUserHandler).toHaveBeenCalled();
    });

    it('click on manage org button',()=>{
        const wrapper_Router=mount(<Provider store={store}><MemoryRouter><AddEditForm {...props}/></MemoryRouter></Provider>);
        const component=wrapper_Router.find('AddEditForm');
        expect(component.length).toBe(1);
        const inst=component.instance();
        const Btn=component.find('button #manageOrg');
        expect(Btn.length).toBe(1);
        Btn.simulate('click');
        expect(inst.state.manageOrgOpen).toBe(true);
    });

    it('back NavLink',()=>{
        const NavLink=wrapper.find('a #backNavLink');
        expect(NavLink.length).toBe(1);
        NavLink.simulate('click');
        expect(props.toggle).toHaveBeenCalled();
    });

    it('read only mode',()=>{
        props.readOnly=true;
        props.editUser=true;
        props.addUserValues={
            "id": 21,
            "GuidID": "3d1d26c1-7f5d-42cb-97c1-7a10f55356ff",
            "firstName": "User",
            "lastName": "Usertest",
            "email": "user1@cmail.club",
            "role": "User2",
            "repID": "qwesd",
            "organization": "aaa",
            "effectiveDate": "2018-03-21T00:00:00+05:30",
            "enabled": true,
            "Deleted": false,
            "ForgotToken": null,
            "permissions": [
                {
                    "label": "Notify Vehicle Recovery Vendor (Repairable)",
                    "isChecked": false
                },
                {
                    "label": "Notify Vehicle Recovery Vendor (Savage)",
                    "isChecked": false
                },
                {
                    "label": "Move Vehicle to Storage Free Location",
                    "isChecked": false
                },
                {
                    "label": "Request Digital Image of Damage",
                    "isChecked": false
                },
                {
                    "label": "Notify Policy Holder that an Event was Declined",
                    "isChecked": false
                },
                {
                    "label": "Notify First Responds",
                    "isChecked": false
                }
            ],
            "OrgList": [
                {
                    "orgID": "aaa",
                    "orgName": "aaa"
                },
                {
                    "orgID": "sss",
                    "orgName": "sss"
                }
            ]
        };
        const wrapper=mount(<AddEditForm {...props}/>);
        const inst=wrapper.instance();
        const expectedHtml='<div class="col-lg-10 ml-auto p-5 addEditForm hide">' +
            '<div class="col-md-6 col-xl-6 top-title">' +
            '<a id="backNavLink" href="#" class="nav-link">&lt; Back to UserManagement Table</a>' +
            '</div>' +
            '<div class="col-md-6 col-xl-6 top-title">' +
            '<h1> Edit User</h1>' +
            '</div>' +
            '<div class="p-4 bg-white rounded recent-vehicles">' +
            '<div class="row">' +
            '<div class="col-md-4">' +
            '<div class="form-group">' +
            '<label class=" col-form-label">First Name</label>' +
            '<input type="text" id="firstName" name="firstName" placeholder="First Name" value="User" required="" disabled="" class="form-control"></div>' +
            '<div class="form-group">' +
            '<label class="col-form-label">Last Name</label>' +
            '<input type="text" id="lastName" name="lastName" placeholder="Last Name" value="Usertest" required="" disabled="" class="form-control"></div>' +
            '<div class="form-group">' +
            '<label class="col-form-label">Email</label>' +
            '<input type="text" id="email" name="email" placeholder="Email" value="user1@cmail.club" required="" disabled="" class="form-control"></div>' +
            '<div class="form-group">' +
            '<label class="col-form-label">Rep ID</label>' +
            '<input type="text" id="repID" name="repID" placeholder="Rep ID" value="qwesd" required="" disabled="" class="form-control"></div></div>' +
            '<div class="col-md-4">' +
            '<div class="form-group">' +
            '<label for="form1-role" class="col-form-label">Role</label>' +
            '<select id="role" name="role" required="" disabled="" type="select" class="custom-select form-control">' +
            '<option value="">Choose One</option>' +
            '<option value="User1">User 1</option>' +
            '<option value="User2">User 2</option>' +
            '<option value="Admin1">Admin 1</option>' +
            '<option value="Admin2">Admin 2</option>' +
            '</select></div>' +
            '<div class="form-group">' +
            '<label class="col-form-label">Org</label>' +
            '<select id="organization" name="organization" required="" disabled="" type="select" class="custom-select form-control">' +
            '<option>Choose One</option>' +
            '</select>' +
            '<label>' +
            '<button id="manageOrg" class="btn btn-success btn-top-margin" disabled="">manage Organizations</button>' +
            '</label></div>' +
            '<div class="form-group">' +
            '<label class="col-form-label">Effective Date</label>' +
            '<input type="date" id="effectiveDate" name="effectiveDate" placeholder="Effective Date" value="2018-03-21" required="" disabled="" class="form-control">' +
            '</div></div>' +
            '<div class="col-md-4">' +
            '<div class="form-group">' +
            '<h4>Permissions</h4>' +
            '<div><input type="checkbox" id="Notify Vehicle Recovery Vendor (Repairable)" name="permissions" disabled="" value="on">' +
            '<label class="col-form-label">Notify Vehicle Recovery Vendor (Repairable)</label></div>' +
            '<div><input type="checkbox" id="Notify Vehicle Recovery Vendor (Savage)" name="permissions" disabled="" value="on">' +
            '<label class="col-form-label">Notify Vehicle Recovery Vendor (Savage)</label></div>' +
            '<div>' +
            '<input type="checkbox" id="Move Vehicle to Storage Free Location" name="permissions" disabled="" value="on">' +
            '<label class="col-form-label">Move Vehicle to Storage Free Location</label>' +
            '</div>' +
            '<div>' +
            '<input type="checkbox" id="Request Digital Image of Damage" name="permissions" disabled="" value="on">' +
            '<label class="col-form-label">Request Digital Image of Damage</label>' +
            '</div><div>' +
            '<input type="checkbox" id="Notify Policy Holder that an Event was Declined" name="permissions" disabled="" value="on">' +
            '<label class="col-form-label">Notify Policy Holder that an Event was Declined</label>' +
            '</div><div>' +
            '<input type="checkbox" id="Notify First Responds" name="permissions" disabled="" value="on">' +
            '<label class="col-form-label">Notify First Responds</label></div></div></div></div>' +
            '<div class="gray-line"></div><div>' +
            '<button type="button" id="addUpdateBtn" class="update-btn-margin btn btn-success"><span>Edit mode</span></button>' +
            '<button type="button" id="cancelBtn" class="btn-light btn btn-secondary">Cancel</button>' +
            ' </div></div></div>';
        expect(wrapper.html()).toBe(expectedHtml);
        const btn=wrapper.find('button #addUpdateBtn');
        expect(btn.length).toBe(1);
        btn.simulate('click');
        expect(inst.state.readOnly).toBe(false);
    });

    it('edit mode',()=>{
        props.readOnly=false;
        props.editUser=true;
        props.addUserValues={
            "id": 21,
            "GuidID": "3d1d26c1-7f5d-42cb-97c1-7a10f55356ff",
            "firstName": "User",
            "lastName": "Usertest",
            "email": "user1@cmail.club",
            "role": "User2",
            "repID": "qwesd",
            "organization": "aaa",
            "effectiveDate": "2018-03-21T00:00:00+05:30",
            "enabled": true,
            "Deleted": false,
            "ForgotToken": null,
            "permissions": [
                {
                    "label": "Notify Vehicle Recovery Vendor (Repairable)",
                    "isChecked": false
                },
                {
                    "label": "Notify Vehicle Recovery Vendor (Savage)",
                    "isChecked": false
                },
                {
                    "label": "Move Vehicle to Storage Free Location",
                    "isChecked": false
                },
                {
                    "label": "Request Digital Image of Damage",
                    "isChecked": false
                },
                {
                    "label": "Notify Policy Holder that an Event was Declined",
                    "isChecked": false
                },
                {
                    "label": "Notify First Responds",
                    "isChecked": false
                }
            ],
            "OrgList": [
                {
                    "orgID": "aaa",
                    "orgName": "aaa"
                },
                {
                    "orgID": "sss",
                    "orgName": "sss"
                }
            ]
        };
        const wrapper=mount(<AddEditForm {...props}/>);
        const expectedHtml='<div class="col-lg-10 ml-auto p-5 addEditForm hide"><div class="col-md-6 col-xl-6 top-title"><a id="backNavLink" href="#" class="nav-link">&lt; Back to UserManagement Table</a></div><div class="col-md-6 col-xl-6 top-title"><h1> Edit User</h1></div><div class="p-4 bg-white rounded recent-vehicles"><div class="row"><div class="col-md-4"><div class="form-group"><label class=" col-form-label">First Name</label><input type="text" id="firstName" name="firstName" placeholder="First Name" value="User" required="" class="form-control"></div><div class="form-group"><label class="col-form-label">Last Name</label><input type="text" id="lastName" name="lastName" placeholder="Last Name" value="Usertest" required="" class="form-control"></div><div class="form-group"><label class="col-form-label">Email</label><input type="text" id="email" name="email" placeholder="Email" value="user1@cmail.club" required="" class="form-control"></div><div class="form-group"><label class="col-form-label">Rep ID</label><input type="text" id="repID" name="repID" placeholder="Rep ID" value="qwesd" required="" class="form-control"></div></div><div class="col-md-4"><div class="form-group"><label for="form1-role" class="col-form-label">Role</label><select id="role" name="role" required="" type="select" class="custom-select form-control"><option value="">Choose One</option><option value="User1">User 1</option><option value="User2">User 2</option><option value="Admin1">Admin 1</option><option value="Admin2">Admin 2</option></select></div><div class="form-group"><label class="col-form-label">Org</label><select id="organization" name="organization" required="" type="select" class="custom-select form-control"><option>Choose One</option></select><label><button id="manageOrg" class="btn btn-success btn-top-margin">manage Organizations</button></label></div><div class="form-group"><label class="col-form-label">Effective Date</label><input type="date" id="effectiveDate" name="effectiveDate" placeholder="Effective Date" value="2018-03-21" required="" class="form-control"></div></div><div class="col-md-4"><div class="form-group"><h4>Permissions</h4><div><input type="checkbox" id="Notify Vehicle Recovery Vendor (Repairable)" name="permissions" value="on"><label class="col-form-label">Notify Vehicle Recovery Vendor (Repairable)</label></div><div><input type="checkbox" id="Notify Vehicle Recovery Vendor (Savage)" name="permissions" value="on"><label class="col-form-label">Notify Vehicle Recovery Vendor (Savage)</label></div><div><input type="checkbox" id="Move Vehicle to Storage Free Location" name="permissions" value="on"><label class="col-form-label">Move Vehicle to Storage Free Location</label></div><div><input type="checkbox" id="Request Digital Image of Damage" name="permissions" value="on"><label class="col-form-label">Request Digital Image of Damage</label></div><div><input type="checkbox" id="Notify Policy Holder that an Event was Declined" name="permissions" value="on"><label class="col-form-label">Notify Policy Holder that an Event was Declined</label></div><div><input type="checkbox" id="Notify First Responds" name="permissions" value="on"><label class="col-form-label">Notify First Responds</label></div></div></div></div><div class="gray-line"></div><div><button type="button" id="addUpdateBtn" class="update-btn-margin btn btn-success"><span>Update</span></button><button type="button" id="cancelBtn" class="btn-light btn btn-secondary">Cancel</button> </div></div></div>';
        expect(wrapper.html()).toEqual(expectedHtml);
    });
});








