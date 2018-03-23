import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as methods from '../../components/modal/actionMethods';
import * as actions from '../../modules/actions/userManagement';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('modal action methods',()=>{

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('logout user method', () => {

        const store = mockStore({});
        const expectedAction = [{
            type: actions.CLR_MSG
        }];
        store.dispatch(methods.clearMsg());
        expect(store.getActions()).toEqual(expectedAction);
    });
});