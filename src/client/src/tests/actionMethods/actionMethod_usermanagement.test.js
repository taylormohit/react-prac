import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../modules/actions/userManagement';
import * as actionAuth from '../../modules/actions/auth';
import * as methods from '../../containers/admin/userManagement/actionMethods';
import moxios from 'moxios';
import 'mock-local-storage';

localStorage.setItem('auth.user',"test");
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('usermanagement action methods',()=>{

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('getPermissions method',()=>{
        const store = mockStore({});
        const expectedAction = [{
            type: actions.GET_PERMISSIONS
        }];
        store.dispatch(methods.getPermissions());
        expect(store.getActions()).toEqual(expectedAction);

    });

    it('DeleteUser method on success', () => {
        const id=5;
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {},
            });
        });
        const store = mockStore({});
        const expectedAction = [{
            payload: id,
            type: actions.DELETE_USER
        }];
        return store.dispatch(methods.DeleteUser(id)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        })
    });

    it('DeleteUser method on failure', () => {
        const id=5;
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 401,
                response: {},
            });
        });
        const store = mockStore({});
        const expectedAction = [{
            payload:"Request failed with status code 401",
            type: actions.SHOW_MSG
        }];
        return store.dispatch(methods.DeleteUser(id)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        })
    });

    it('AddUser method on success', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {},
            });
        });
        const store = mockStore({});
        const expectedAction = [{
            payload: {},
            type: actions.ADD_USER
        }];
        return store.dispatch(methods.AddUser({})).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        })
    });

    it('AddUser method on failure', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 401,
                response: {},
            });
        });
        const store = mockStore({});
        const expectedAction = [{
            payload: "Request failed with status code 401",
            type: actions.SHOW_MSG
        }];
        return store.dispatch(methods.AddUser({})).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        })
    });

    it('editUserred method on success', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {},
            });
        });
        const store = mockStore({});
        const expectedAction = [{
            payload: {},
            type: actions.EDIT_USER
        }];
        return store.dispatch(methods.editUserred({})).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
    it('editUserred method on failure', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 401,
                response: {},
            });
        });
        const store = mockStore({});
        const expectedAction = [{
            payload: "Request failed with status code 401",
            type: actions.SHOW_MSG
        }];
        return store.dispatch(methods.editUserred({})).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it('getOrg method',()=>{
        const id=5;
        const store = mockStore({});
        const expectedAction = [{
            payload:id,
            type: actions.GET_ORG_TMP
        }];
        store.dispatch(methods.getOrg(id));
        expect(store.getActions()).toEqual(expectedAction);

    });

    it('GetUser method on success', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response:{data:"mock data"},
            });
        });
        const store = mockStore({});
        const expectedAction = [{
            payload: {
                data:"mock data"
            },
            type: actions.GET_USER
        }];
        return store.dispatch(methods.GetUser("mock paramas")).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
    it('GetUser method on unauthorised', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 401,
                response:{data:"mock data"},
            });
        });
        const store = mockStore({});
        const expectedAction = [{
            type: actionAuth.USER_LOGOUT
        }];
        return store.dispatch(methods.GetUser("mock paramas")).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

    it('GetUser method on failure', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 500,
                response:{data:"mock data"},
            });
        });
        const store = mockStore({});
        const expectedAction = [{
            type: actions.SHOW_MSG,
            payload: 'Error:cant load the data from server'
        }];
        return store.dispatch(methods.GetUser("mock paramas")).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });

});