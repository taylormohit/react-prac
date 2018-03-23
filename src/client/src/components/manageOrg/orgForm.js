import React from 'react';
import {Input,NavLink,Alert} from 'reactstrap';

const OrgForm_component=(props)=>{
  return(
      <div className="col-lg-10 ml-auto p-5 addEditForm hide">
          <div className="col-md-6 col-xl-6 top-title">
              <NavLink href="#" onClick={props.toggleForm}>{'< Back to manageOrg'}</NavLink>
          </div>
          <div className="col-md-6 col-xl-6 top-title">
              <h1>{'add Organizations'}</h1>
          </div>
          <div className="p-4 bg-white rounded recent-vehicles">
              <div className="form-group">
                  <label className="col-form-label">orgID</label>
                  <Input id="input_orgID" name="orgID" placeholder="orgID" value={props.newOrgValues.orgID}
                         onChange={props.changeInput} required/>
              </div>
              <div className="form-group">
                  <label className="col-form-label">orgName</label>
                  <Input id="input_orgName" name="orgName" value={props.newOrgValues.orgName} placeholder="orgName"
                         onChange={props.changeInput} required/>
              </div>
              <button className="btn btn-success update-btn-margin" onClick={props.validate}>{props.editOrgMode ? 'update' : 'add'}</button>
              <button className="btn btn-default" onClick={props.toggleForm}>cancel</button>
              {props.showError && <Alert color="danger">You need to fill values!</Alert>}
          </div>
      </div>
  )
};
export default OrgForm_component;