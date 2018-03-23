import React from 'react';

const EventLog_component=(props)=>{
    return(
        <div className="col-lg-10 ml-auto p-5">
            <div className="row top-title-block align-items-center mb-4">
                <div className="col-md-6 col-xl-6 top-title">
                    <h1>Event log</h1>
                </div>
                <div className="col-md-6 col-xl-6 d-flex justify-content-end align-items-center">
                    <div className="form-group m-0 col-md-7 p-0">
                        <div className="form-group m-0 col-md-7 p-0">
                            <input onChange={props.searchChange} value={props.searchVal}
                                   className="form-control typeahead"
                                   placeholder="Searchbar" aria-label="Search" type="text"/>
                            <button className="button-search" type="submit"><i className="fa fa-search"/></button>
                        </div>
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
                                                border="0" id="table-block" cellSpacing="0" cellPadding="0"
                                                role="grid">
                                                <thead>
                                                <tr>
                                                    <th>Event</th>
                                                    <th>Event Date</th>
                                                    <th>Event Time</th>
                                                    <th>Event Location</th>
                                                    <th colSpan={2}/>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {props.allEvents && props.allEvents.map((e,i) => {
                                                    return <tr key={i}>
                                                        <td>{e.event}</td>
                                                        <td>{e.eventDate}</td>
                                                        <td>{e.eventTime}</td>
                                                        <td>{e.eventLocation}</td>
                                                        <td><button id={e.eventID} className="btn btn-success" onClick={props.ackHandler}>acknowledge</button></td>
                                                    </tr>
                                                })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default EventLog_component;