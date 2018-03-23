import _ from 'lodash';
import {GET_EVENT} from "../actions/eventLog";

const events=
    [
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

export const initialState = {
    events:[]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENT:
            return {
                ...state,
        events:_.cloneDeep(events)
            };
        default:
            return state;
    }
}