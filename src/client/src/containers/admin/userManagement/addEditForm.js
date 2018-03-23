import React from 'react';
import {connect} from 'react-redux';
import {clearTempOrg} from './../manageOrg/actionMethods';
import _ from 'lodash';
import {getPermissions} from './actionMethods';
import {bindActionCreators} from 'redux';
import Spinner from '../../../components/spinnerLoader/index'
import ManageOrg from '../manageOrg/index';
import AddEditForm_component from './../../../components/userManagement/addEditForm';

import './usermanagement.css';
export class AddEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Default:"",
            values: {
                id:props.addUserValues && props.addUserValues.id,
                firstName:props.addUserValues && props.addUserValues.firstName,
                lastName:props.addUserValues && props.addUserValues.lastName,
                email:props.addUserValues && props.addUserValues.email,
                role:props.addUserValues && props.addUserValues.role,
                repID:props.addUserValues && props.addUserValues.repID,
                organization:props.addUserValues && props.addUserValues.organization,
                effectiveDate:props.addUserValues && props.addUserValues.effectiveDate,
                enabled:props.addUserValues && props.addUserValues.enabled,
                permissions:props.addUserValues &&  props.addUserValues.permissions,
                orgList:props.addUserValues && props.addUserValues.orgList
            },
            showAlert: false,
            readOnly:props.editUser ? props.readOnly : false,
            fields: true,
            manageOrgOpen:false
        }
    }

    componentWillMount() {
        const permissions = [
            {label: "Notify Vehicle Recovery Vendor (Repairable)", isChecked: false},
            {label: "Notify Vehicle Recovery Vendor (Savage)", isChecked: false},
            {label: "Move Vehicle to Storage Free Location", isChecked: false},
            {label: "Request Digital Image of Damage", isChecked: false},
            {label: "Notify Policy Holder that an Event was Declined", isChecked: false},
            {label: "Notify First Responds", isChecked: false}
        ];
        this.props.getPermissions(permissions);
    }

    componentWillReceiveProps(nextProps) {
        let {values} = this.state;
        const {permissions} = nextProps;
        !values.permissions && (values.permissions = _.cloneDeep(permissions));
        this.setState({
            values
        })
    }

    addUserChange = (e) => {

        if (e.target.name === 'firstName' || e.target.name === 'lastName') {
            let {values} = this.state;
            if ((/[0-9]/).test(e.target.value)) {

                values[e.target.name] = values[e.target.name];
                this.setState({values});
            } else {
                values[e.target.name] = e.target.value;
                this.setState({values});
            }

        } else if (e.target.name === 'permissions') {

            let values = this.state.values;
            values.permissions.map((el, index) => {
                if (el.label === e.target.id) {
                    values.permissions[index].isChecked = e.target.checked;
                }
                return true;
            });
            this.setState({values},()=>{
            });
        } else {
            let {values} = this.state;
            values[e.target.name] = e.target.value;
            this.setState({values});
        }
    };

    openManageOrg=()=>{
        this.setState({
            manageOrgOpen:!this.state.manageOrgOpen
        });
    };


    validate = (e) => {
        if (_.compact(Object.values(this.state.values)).length <= 7) {
            this.setState({alertMsg: 'all fields must be filled first!', showAlert: true});
        } else {
            const reEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


            if (this.state.values['email'] && !reEmail.test(this.state.values['email'])) {
                this.setState({alertMsg: 'please enter a valid email address!', showAlert: true});
            } else if (Object.values(this.state.values).map((x) => {
                    return !!(x && x.length > 100);
                }).includes(true)) {
                this.setState({alertMsg: 'length of every field must be less then 100', showAlert: true});
            }
            else {
                this.setState({showAlert: false}, () => {
                    this.props.editUser ? this.props.editUserHandler(e, this.state.values,this.props.tempOrg) : this.props.addUserHandler(e, this.state.values,this.props.tempOrg);
                });
            }
        }
    };

    toggleReadmode =(e)=>{
      this.setState({readOnly:false});
    };

    cancelBtnHandler=() => {
        this.setState({showAlert: false}, () => {
            this.props.toggle();
            this.props.clearTempOrg();
        })
    };

    render() {
        if (this.props.permissions.length === 0) {
            return (<div>
                <center><Spinner/></center>
            </div>);
        }
        return (

            this.state.manageOrgOpen ? <ManageOrg values={this.state.values} openManageOrg={this.openManageOrg} edituser={this.props.editUser}/> :
                <AddEditForm_component
                    {...this.props}
                    {...this.state}
                    addUserChange={this.addUserChange}
                    toggleReadmode={this.toggleReadmode}
                    validate={this.validate}
                    cancelBtnHandler={this.cancelBtnHandler}
                    openManageOrg={this.openManageOrg}
                />

        )
    }
}
const matchStateToProps = (state) => {
    return {
        permissions: state.userManagement.permissions,
        tempOrg:state.userManagement.tempOrg
    }
};
const matchDispatchToProps = dispatch => bindActionCreators({getPermissions,clearTempOrg}, dispatch);
export default connect(matchStateToProps, matchDispatchToProps)(AddEditForm );