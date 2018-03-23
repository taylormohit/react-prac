import React from 'react';
import {
    Input,
    Button,
    Alert,
    NavLink
} from 'reactstrap';
import moment from 'moment';

const AddEditForm_component=(props)=>{
    return(
        <div className="col-lg-10 ml-auto p-5 addEditForm hide" >
            <div className="col-md-6 col-xl-6 top-title">

                <NavLink id="backNavLink" href="#" onClick={()=>{props.toggle();props.clearTempOrg()}}>{'< Back to UserManagement Table'}</NavLink>

            </div>
            <div className="col-md-6 col-xl-6 top-title">
                <h1>{props.editUser ? ' Edit User' : ' Add User'}</h1>
            </div>
            <div className="p-4 bg-white rounded recent-vehicles">

                <div className="row">
                    <div className="col-md-4">

                        <div className="form-group">
                            <label className=" col-form-label">First Name</label>
                            <Input id="firstName" name="firstName" placeholder="First Name" value={props.values.firstName}
                                   onChange={props.addUserChange} required disabled={props.readOnly}/>
                        </div>
                        <div className="form-group">
                            <label className="col-form-label">Last Name</label>
                            <Input id="lastName" name="lastName" placeholder="Last Name" value={props.values.lastName}
                                   onChange={props.addUserChange} required disabled={props.readOnly}/>
                        </div>
                        <div className="form-group">
                            <label className="col-form-label">Email</label>
                            <Input id="email" name="email" placeholder="Email" value={props.values.email}
                                   onChange={props.addUserChange} required disabled={props.readOnly} />
                        </div>
                        <div className="form-group">
                            <label className="col-form-label">Rep ID</label>
                            <Input id="repID" name="repID" placeholder="Rep ID" value={props.values.repID}
                                   onChange={props.addUserChange} required disabled={props.readOnly}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="form1-role" className="col-form-label">Role</label>
                            <Input id="role" type="select" name="role" className="custom-select"
                                   value={props.values.role} onChange={props.addUserChange} required disabled={props.readOnly}>
                                <option value="">Choose One</option>
                                <option value="User1">User 1</option>
                                <option value="User2">User 2</option>
                                <option value="Admin1">Admin 1</option>
                                <option value="Admin2">Admin 2</option>
                            </Input>
                        </div>
                        <div className="form-group">
                            <label className="col-form-label">Org</label>
                            <Input id="organization" type="select" name="organization" className="custom-select" value={props.values.organization }
                                   onChange={props.addUserChange} required disabled={props.readOnly}>
                                <option value={null}>Choose One</option>
                                {/*<option value="orgtest">orgtest</option>*/}
                                {props.tempOrg && props.tempOrg.map((x,i)=>{
                                    return <option key={i} value={x.orgID}>{`${x.orgID} - ${x.orgName}`}</option>
                                }) }
                            </Input>
                            <label>
                                <button id="manageOrg" className="btn btn-success btn-top-margin" disabled={props.readOnly} onClick={props.openManageOrg}>manage Organizations</button>
                            </label>
                        </div>

                        <div className="form-group">
                            <label className="col-form-label">Effective Date</label>
                            <Input id="effectiveDate" type="date" name="effectiveDate" placeholder="Effective Date"
                                   value={props.values.effectiveDate && moment(props.values.effectiveDate).format('YYYY-MM-DD')}
                                   onChange={props.addUserChange} required disabled={props.readOnly}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <h4>Permissions</h4>
                            {
                                props.values.permissions && props.values.permissions.map((el,key) => {
                                    return (
                                        <div key={key}>
                                            <input id={el.label} name="permissions" type="checkbox"
                                                   onChange={props.addUserChange} checked={el.isChecked} disabled={props.readOnly}/>
                                            <label className="col-form-label">{el.label}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
                {props.showAlert && <Alert color="danger">
                    {props.showAlert && props.alertMsg}
                </Alert>}
                <div className="gray-line"/>
                <div>
                    <Button id="addUpdateBtn" color="success"
                            onClick={props.readOnly ? props.toggleReadmode : props.validate} className="update-btn-margin" >
                        {props.editUser ? props.readOnly ? <span>Edit mode</span> : <span>Update</span> : <span>Save</span>}</Button>
                    <Button id="cancelBtn" className="btn-light" onClick={props.cancelBtnHandler}>Cancel</Button>{' '}
                </div>
            </div>
        </div>
    )
};

export default AddEditForm_component;