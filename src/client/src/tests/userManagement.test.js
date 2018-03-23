import ConnectedUserManagement,{UserManagement} from './../containers/admin/userManagement';
import Enzyme, {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router-dom';
import thunk from "redux-thunk";
import 'mock-local-storage';

Enzyme.configure({adapter: new Adapter()});

const props = {
    GetUser: jest.fn(),
    editUserred: jest.fn(),
    DeleteUser: jest.fn(),
    getOrg: jest.fn(),
    permissions:[],
    Allusers:[{
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
    }]
};

const userData=[{
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
}];

const mockStore = configureStore([thunk]);
const initialState = {
    users: [],
    msg: '',
    permissions: [],
    tempOrg: [],
    userManagement:{msg:'',permissions:[]}
};

describe('user management component:', () => {

    let wrapper, component, inst, store;
    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(<Provider store={store}><MemoryRouter><UserManagement {...props}/></MemoryRouter></Provider>);
        component=wrapper.find('UserManagement');
        inst = component.instance();
    });

    it('should render SpinnerLoader without data', () => {

        const html = wrapper.html();

        const expectedHtml = '<div>' +
            '<div class="col-lg-12 ml-auto p-5 hide">' +
            '<div class="row top-title-block align-items-center mb-4">' +
            '<div class="spinner-rolling spinner-loading spinner-image-position undefined" style="width: 16px; height: 16px;"><img src="Spinner.svg"></div>' +
            '</div>' +
            '</div>' +
            '</div>';
        expect(html).toEqual(expectedHtml);
        expect(props.GetUser).toHaveBeenCalled();

    });

    it('should render correctly with data',()=> {

        inst.setState({
            users: userData,
            loading:false,
        });

        const expectedHtml='<div><div class="col-lg-12 ml-auto p-5 hide">' +
            '<div class="row top-title-block align-items-center mb-4">' +
            '<div class="col-md-6 col-xl-6 top-title">' +
            '<h1>User Management</h1>' +
            '</div>' +
            '<div class="col-md-6 col-xl-6 d-flex justify-content-end align-items-center">' +
            '<div class="form-group m-0 col-md-7 p-0">' +
            '<input type="text" value="" class="form-control typeahead" placeholder="Search by name, role, or ID" aria-label="Search">' +
            '<button class="button-search" type="submit">' +
            '<i class="fa fa-search"></i>' +
            '</button></div>' +
            '<button type="button" class="ml-2 btn btn-primary" data-toggle="modal" id="btn_addUser" data-target="#add-user">' +
            '<i class="fa fa-user mr-1"></i>Add User</button>' +
            '<button type="button" class="ml-2 btn btn-secondary"><i class="fa fa-upload mr-1"></i>Import Users</button></div></div><div class="row">' +
            '<div class="col-lg-12 col-xl-12 mb-12">' +
            '<div class="p-4 bg-white rounded recent-vehicles">' +
            '<div class="d-block">' +
            '<div id="table-block_wrapper" class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">' +
            '<div class="row">' +
            '<div class="col-sm-12">' +
            '<table class="user-management table table-hover table-sorting-um dataTable no-footer" border="0" id="table-block" cellspacing="0" cellpadding="0" role="grid">' +
            '<thead>' +
            '<tr>' +
            '<th class="sorting" data-sortable="true" id="firstName" tabindex="0" aria-controls="table-block" rowspan="1" colspan="1" aria-label="Last Name: activate to sort column ascending">First Name</th>' +
            '<th class="sorting" data-sortable="true" id="lastName">Last Name</th>' +
            '<th class="sorting" data-sortable="true" id="repID">Rep ID</th>' +
            '<th class="sorting" data-sortable="true" id="role">Role</th>' +
            '<th class="sorting" data-sortable="true" id="organization">Org</th>' +
            '<th class="sorting" data-sortable="true" id="effectiveDate">Effective Date</th>' +
            '<th colspan="2"></th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<td id="21" class="aa"><div class="firstname" id="readOnly">User</div></td>' +
            '<td id="21" class="aa"><div class="lastname" id="readOnly">Usertest</div></td>' +
            '<td class="">qwesd</td><td class="">User2</td>' +
            '<td class="">aaa</td>' +
            '<td class=""><span class="badge badge-light">03/21/18</span></td>' +
            '<td colspan="2" class="right-icons text-right sorting_1">' +
            '<fieldset class="d-inline-block mr-5 p-0 align-middle">' +
            '<label class="custom-control custom-toggle m-0 p-0 w-50">' +
            '<input type="checkbox" id="21" class="custom-control-input" value="on">' +
            '<span class="custom-control-indicator"></span>' +
            '</label></fieldset>&nbsp;&nbsp;' +
            '<a style="cursor: pointer;" id="21" class="text-secondary ml-2 table-icon">' +
            '<i class="fa fa-edit fa-lg"></i></a>&nbsp;' +
            '<a style="cursor: pointer;" id="21" class="text-danger ml-2 table-icon">' +
            '<i id="21" class="fa fa-trash fa-lg"></i>' +
            '</a>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div>' +
            '</div>' +
            '</div></div></div></div></div></div></div>';
            expect(wrapper.html()).toEqual(expectedHtml);
    });

    it('render addEdit component on add user button click',()=>{
        inst.setState({
            users: userData,
            loading:false,
        });
        wrapper.update();
        const btn=wrapper.find('#btn_addUser');
        expect(btn.length).toBe(1);
        btn.simulate('click');
        expect(inst.state.addUser).toBe(true);

    });

    it('search',()=>{
        inst.setState({
            users: userData,
            loading:false,
        });
        wrapper.update();
        const searchbar=wrapper.find('.form-control .typeahead');
        expect(searchbar.length).toBe(1);
        inst.searchUser=jest.fn();
        searchbar.instance().value='z';
        searchbar.simulate('change');
        expect(inst.state.searchVal).toEqual('z');
        expect(inst.searchUser).toHaveBeenCalledWith('z');
        expect(inst.state.page).toEqual(1);
    });

    it('enable/disable button',()=>{
        inst.setState({
            users: userData,
            loading:false,
        });
        wrapper.update();
        const checkbox=wrapper.find('.custom-control-input');
        expect(checkbox.length).toBe(1);
        checkbox.simulate('change');
        expect(inst.state.openEnableModal).toBe(true);
        expect(inst.state.enableIndex).toBe(checkbox.instance().id);
        expect(inst.state.addUserValues).toEqual(userData[0]);
    });

    it('edit button',()=>{
        inst.setState({
            users: userData,
            loading:false,
            addUserValues:userData[0]
        });
        wrapper.update();
        const Btn=wrapper.find('.text-secondary .ml-2 .table-icon');
        expect(Btn.length).toBe(1);
        Btn.simulate('click');
        expect(inst.state.editUser).toBe(true);
        expect(inst.state.addUser).toBe(true);
        expect(inst.state.editIndex).toBe(Number(Btn.instance().id));
        expect(props.getOrg).toHaveBeenCalled();
    });

    it('delete button',()=>{
        inst.setState({
            users: userData,
            loading:false,
            addUserValues:userData[0]
        });
        wrapper.update();
        const Btn=wrapper.find('.fa .fa-trash .fa-lg');
        expect(Btn.length).toBe(1);
        Btn.simulate('click');
        expect(inst.state.openDeleteModal).toBe(true);
        expect(inst.state.deleteIndex).toBe(Btn.instance().id);
    });

    it('onclick firstname readOnly mode',()=>{
        inst.setState({
            users: userData,
            loading:false,
            addUserValues:userData[0]
        });
        wrapper.update();
        const div=wrapper.find('.firstname');
        expect(div.length).toBe(1);
        div.simulate('click');
        expect(inst.state.editUser).toBe(true);
        expect(inst.state.addUser).toBe(true);
        expect(inst.state.readOnly).toBe(true);
        expect(inst.state.editIndex).toBe(21);
        expect(props.getOrg).toHaveBeenCalled();
    });

    it('onclick lastname readOnly mode',()=>{
        inst.setState({
            users: userData,
            loading:false,
            addUserValues:userData[0]
        });
        wrapper.update();
        const div=wrapper.find('.lastname');
        expect(div.length).toBe(1);
        div.simulate('click');
        expect(inst.state.editUser).toBe(true);
        expect(inst.state.addUser).toBe(true);
        expect(inst.state.readOnly).toBe(true);
        expect(inst.state.editIndex).toBe(21);
        expect(props.getOrg).toHaveBeenCalled();
    });
});
