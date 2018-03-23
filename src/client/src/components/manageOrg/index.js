import React from 'react';
import {NavLink,Table} from 'reactstrap';

const ManageOrg_component = (props)=>{
  return(
      <div className="col-lg-10 ml-auto p-5 addEditForm hide">
          <div className="col-md-6 col-xl-6 top-title">
              <NavLink href="#" onClick={props.openManageOrg}>{'< Back to Form'}</NavLink>
          </div>
          <div className="col-md-6 col-xl-6 top-title">
              <h1>{'Manage Organizations'}</h1>
          </div>
          <div className="p-4 bg-white rounded recent-vehicles">
              <Table>
                  <thead>
                  <tr>
                      <th>orgID</th>
                      <th>orgName</th>
                      <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  {props.orgList && props.orgList.map((x,i)=>{
                      return <tr key={i}>
                          <td>{x.orgID}</td>
                          <td>{x.orgName}</td>
                          <td>
                              <i id={x.orgID} className="fa fa-edit fa-lg" onClick={(e)=>{props.EditOrgMode(e,x)}}/>
                              <i id={x.orgID} className="fa fa-trash fa-lg" onClick={(e)=>{props.deleteOrg(e.target.id)}}/>
                          </td>
                      </tr>
                  })
                  }
                  </tbody>
              </Table>
              <button id="saveBtn" className="btn btn-success btn-top-margin update-btn-margin" disabled={props.readOnly} onClick={props.openManageOrg}>
                  Save
              </button>
              <button id="addOrgBtn" className="btn btn-primary btn-top-margin update-btn-margin" disabled={props.readOnly} onClick={props.addOrgBtnHandler}>
                  Add Organization</button>

              {/* <button className="btn btn-default btn-top-margin" disabled={this.state.readOnly} onClick={this.cancelButtonHandler}>
                        cancel
                    </button>*/}
          </div>
      </div>
  )
};
export default ManageOrg_component;