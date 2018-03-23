import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../modules/actions/eventLog';
import * as methods from '../../containers/eventLog/actionMethods';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('eventlog action methods',()=>{

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('getEvent',()=>{
        const store = mockStore({});
        const expectedAction = [{
            type: actions.GET_EVENT
        }];
        store.dispatch(methods.getEvent());
        expect(store.getActions()).toEqual(expectedAction);

    });
});