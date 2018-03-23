import eventLog from '../../modules/reducer/eventLog';
import {GET_EVENT} from '../../modules/actions/eventLog';

const events=[
    {
        eventID: 'ev001', event:
        'party', eventDate:
        '30/02/1998', eventTime:
        '05:00', eventLocation:
        'india'
    }
    ,
    {
        eventID: 'ev002', event:
        'user1', eventDate:
        '11/03/2002', eventTime:
        '05:00', eventLocation:
        'us'
    }
    ,
    {
        eventID: 'ev003', event:
        'event3', eventDate:
        '08/04/2007', eventTime:
        '05:00', eventLocation:
        'pakistan'
    }
    ,
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
];

describe('eventLog reducer test:',()=>{
const initialState={
    events:[]
};
    it('initialize properly',()=>{
        expect(eventLog(initialState,{})).toEqual(initialState);
    });

    it('should return all events on GET_EVENT',()=>{
        expect(eventLog(initialState,{type:GET_EVENT})).toEqual({"events":events});
    });
});