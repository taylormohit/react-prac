import React from 'react';
import moment from 'moment';
import {
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';


const UserManagement_component = (props) => {
    return (
        <div className={"col-lg-12 ml-auto p-5 hide"}>
            <div className="row top-title-block align-items-center mb-4">
                <div className="col-md-6 col-xl-6 top-title">
                    <h1>User Management</h1>
                </div>
                <div className="col-md-6 col-xl-6 d-flex justify-content-end align-items-center">
                    <div className="form-group m-0 col-md-7 p-0">
                        <input onChange={props.searchChange} value={props.searchVal}
                               className="form-control typeahead"
                               placeholder="Search by name, role, or ID" aria-label="Search" type="text"/>
                        <button className="button-search" type="submit"><i className="fa fa-search"/></button>
                    </div>
                    <button type="button" className="ml-2 btn btn-primary" data-toggle="modal" id="btn_addUser"
                            data-target="#add-user" onClick={props.addUserBtnHandler}><i className="fa fa-user mr-1"/>
                        Add User
                    </button>
                    <button type="button" className="ml-2 btn btn-secondary"><i className="fa fa-upload mr-1"/>
                        Import Users
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-xl-12 mb-12">
                    <div className="p-4 bg-white rounded recent-vehicles">
                        <div className="d-block">
                            <div id="table-block_wrapper"
                                 className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <table
                                            className="user-management table table-hover table-sorting-um dataTable no-footer"
                                            border="0" id="table-block" cellSpacing="0" cellPadding="0" role="grid">
                                            <thead>
                                            <tr>
                                                <th className="sorting" data-sortable="true" id='firstName'
                                                    tabIndex="0" aria-controls="table-block" rowSpan="1" colSpan="1"
                                                    aria-label="Last Name: activate to sort column ascending"
                                                    onClick={props.toggleOrderby}>First Name
                                                </th>
                                                <th className="sorting" data-sortable="true" id='lastName'
                                                    onClick={props.toggleOrderby}>Last Name
                                                </th>
                                                <th className="sorting" data-sortable="true" id='repID'
                                                    onClick={props.toggleOrderby}>Rep ID
                                                </th>
                                                <th className="sorting" data-sortable="true" id='role'
                                                    onClick={props.toggleOrderby}>Role
                                                </th>
                                                <th className="sorting" data-sortable="true" id='organization'
                                                    onClick={props.toggleOrderby}>Org
                                                </th>
                                                <th className="sorting" data-sortable="true" id='effectiveDate'
                                                    onClick={props.toggleOrderby}>Effective Date
                                                </th>
                                                <th colSpan={2}></th>
                                            </tr>
                                            </thead>
                                            {
                                                props.users && props.users.map((x, i) => {
                                                        if (i >= (props.endPoint - 10) && i < props.endPoint) {
                                                            return (<tbody key={i}>
                                                            <tr>
                                                                <td id={x.id} className="aa">
                                                                    <div className="firstname" onClick={props.EditUser}
                                                                         id="readOnly">{x.firstName}</div>
                                                                </td>
                                                                <td id={x.id} className="aa">
                                                                    <div className="lastname" onClick={props.EditUser}
                                                                         id="readOnly">{x.lastName}</div>
                                                                </td>
                                                                <td className="">{x.repID}</td>
                                                                <td className="">{x.role}</td>
                                                                <td className="">{x.organization}</td>
                                                                <td className=""><span
                                                                    className="badge badge-light">{moment(x.effectiveDate).format('MM/DD/YY')}</span>
                                                                </td>
                                                                <td colSpan={2}
                                                                    className="right-icons text-right sorting_1">
                                                                    <fieldset
                                                                        className="d-inline-block mr-5 p-0 align-middle">
                                                                        <label
                                                                            className="custom-control custom-toggle m-0 p-0 w-50">
                                                                            <input id={x.id}
                                                                                   onChange={props.activeBtnHandler}
                                                                                   type="checkbox"
                                                                                   className="custom-control-input"
                                                                                   required="" checked={x.enabled}/>
                                                                            <span className="custom-control-indicator"/>
                                                                        </label>
                                                                    </fieldset>
                                                                    &nbsp;&nbsp;<a style={{cursor: 'pointer'}} id={x.id}
                                                                                   onClick={props.EditUser}
                                                                                   className="text-secondary ml-2 table-icon"><i
                                                                    className="fa fa-edit fa-lg"/></a>
                                                                    &nbsp;{<a style={{cursor: 'pointer'}} id={x.id}
                                                                              className="text-danger ml-2 table-icon">
                                                                    {x.role === "Admin1" || x.guidID === props.loggedInUser.sub ?
                                                                        <i className="fa fa-lock fa-lg"/> :
                                                                        <i id={x.id} className="fa fa-trash fa-lg"
                                                                           onClick={props.trashBtnHandler}
                                                                        />}
                                                                </a>}
                                                                </td>
                                                            </tr>
                                                            </tbody>);
                                                        } else {
                                                            return <tbody key={i}/>
                                                        }
                                                    }
                                                )
                                            }
                                        </table>
                                    </div>
                                    {props.totalPages.length > 1 &&

                                    <div className="d-block mt-4">
                                        <nav aria-label="Page navigation">
                                            <Pagination className="justify-content-end m-0">
                                                <PaginationItem>
                                                    <PaginationLink previous onClick={props.previousPage}/>
                                                </PaginationItem>
                                                {
                                                    props.totalPages.map((v, i) => {
                                                        return (<PaginationItem key={i}>
                                                            <PaginationLink onClick={props.changePage}>
                                                                {i + 1}
                                                            </PaginationLink>
                                                        </PaginationItem>)
                                                    })
                                                }
                                                <PaginationItem>
                                                    <PaginationLink next onClick={props.nextPage}/>
                                                </PaginationItem>
                                            </Pagination>
                                        </nav>
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserManagement_component;