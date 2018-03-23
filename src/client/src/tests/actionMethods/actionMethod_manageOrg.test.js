import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../modules/actions/userManagement';
import * as methods from '../../containers/admin/manageOrg/actionMethods';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('manageOrg action methods',()=>{

    it('addOrg method',()=>{
        const store = mockStore({});
        const expectedAction = [{
            payload:"mock payload",
            type: actions.ADD_ORG_TMP
        }];
        store.dispatch(methods.addOrg("mock payload"));
        expect(store.getActions()).toEqual(expectedAction);

    });

    it('updateOrg method',()=>{
        const id=5;
        const store = mockStore({});
        const expectedAction = [{
            id,
            payload:"mock payload",
            type: actions.EDIT_ORG_TMP
        }];
        store.dispatch(methods.updateOrg("mock payload",id));
        expect(store.getActions()).toEqual(expectedAction);
    });

    it('deleteOrg method',()=>{
        const id=5;
        const store = mockStore({});
        const expectedAction = [{
            payload:id,
            type: actions.DELETE_ORG_TMP
        }];
        store.dispatch(methods.deleteOrg(id));
        expect(store.getActions()).toEqual(expectedAction);

    });

    it('clearTempOrg method',()=>{
        const store = mockStore({});
        const expectedAction = [{
            type: actions.CLR_ORG
        }];
        store.dispatch(methods.clearTempOrg());
        expect(store.getActions()).toEqual(expectedAction);

    });

});