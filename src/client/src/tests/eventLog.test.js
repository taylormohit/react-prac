import Enzyme,{ mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {EventLog} from './../containers/eventLog/eventLog';
import React from 'react';

Enzyme.configure({adapter: new Adapter()});

describe('eventlog component',()=>{
    let wrapper,inst;
    const props={
        getEvent:jest.fn()
    };
    beforeEach(()=>{
        wrapper=mount(<EventLog {...props}/>);
        inst=wrapper.instance();
    });

    it('should render correctly',()=>{
        inst.setState({allEvents:[
            {
                eventID: 'ev001', event:
                'party', eventDate:
                '30/02/1998', eventTime:
                '05:00', eventLocation:
                'india'
            },
            {
                eventID: 'ev002', event:
                'user1', eventDate:
                '11/03/2002', eventTime:
                '05:00', eventLocation:
                'us'
            },
            {
                eventID: 'ev003', event:
                'event3', eventDate:
                '08/04/2007', eventTime:
                '05:00', eventLocation:
                'pakistan'
            },
            {
                eventID: 'ev004', event:
                'edm', eventDate:
                '02/05/2008', eventTime:
                '05:00', eventLocation:
                'china'
            },
            {
                eventID: 'ev005', event:
                'event5', eventDate:
                '05/06/2015', eventTime:
                '05:00', eventLocation:
                'us'
            }
        ]});
        wrapper.update();
        const expectedHtml='<div class="col-lg-10 ml-auto p-5"><div class="row top-title-block align-items-center mb-4"><div class="col-md-6 col-xl-6 top-title"><h1>Event log</h1></div><div class="col-md-6 col-xl-6 d-flex justify-content-end align-items-center"><div class="form-group m-0 col-md-7 p-0"><div class="form-group m-0 col-md-7 p-0"><input type="text" value="" class="form-control typeahead" placeholder="Searchbar" aria-label="Search"><button class="button-search" type="submit"><i class="fa fa-search"></i></button></div></div></div><div class="row"><div class="col-lg-12 col-xl-12 mb-12"><div class="p-4 bg-white rounded recent-vehicles"><div class="d-block"><div id="table-block_wrapper" class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"><div class="row"><div class="col-sm-12"><table class="user-management table table-hover table-sorting-um dataTable no-footer" border="0" id="table-block" cellspacing="0" cellpadding="0" role="grid"><thead><tr><th>Event</th><th>Event Date</th><th>Event Time</th><th>Event Location</th><th colspan="2"></th></tr></thead><tbody><tr><td>party</td><td>30/02/1998</td><td>05:00</td><td>india</td><td><button id="ev001" class="btn btn-success">acknowledge</button></td></tr><tr><td>user1</td><td>11/03/2002</td><td>05:00</td><td>us</td><td><button id="ev002" class="btn btn-success">acknowledge</button></td></tr><tr><td>event3</td><td>08/04/2007</td><td>05:00</td><td>pakistan</td><td><button id="ev003" class="btn btn-success">acknowledge</button></td></tr><tr><td>edm</td><td>02/05/2008</td><td>05:00</td><td>china</td><td><button id="ev004" class="btn btn-success">acknowledge</button></td></tr><tr><td>event5</td><td>05/06/2015</td><td>05:00</td><td>us</td><td><button id="ev005" class="btn btn-success">acknowledge</button></td></tr></tbody></table></div></div></div></div></div></div></div></div></div>';
        expect(wrapper.html()).toEqual(expectedHtml);
    });
});
