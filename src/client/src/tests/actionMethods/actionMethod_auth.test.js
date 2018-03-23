import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../modules/actions/auth';
import * as methods from '../../containers/auth/actionMethods';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('auth action methods:', () => {

    const credentials = {
        username: 'admin@admin.com',
        password: 'password'
    };

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('login user method', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {"access_token": 'test token', "expires_in": 3600, "token_type": "Bearer"},
            });
        });
        const store = mockStore({});
        //methods.logInUser(credentials);
        const expectedAction = [{
            payload: {
                user: {"access_token": 'test token', "expires_in": 3600, "token_type": "Bearer"}
            },
            type: actions.USER_LOGIN
        }];
        return store.dispatch(methods.logInUser(credentials)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        })
    });

    it('logout user method', () => {

        const store = mockStore({});
        const expectedAction = [{
            type: actions.USER_LOGOUT
        }];
        store.dispatch(methods.logOutUser());
        expect(store.getActions()).toEqual(expectedAction);
    });

    it('getForgotPasswordData method', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {data: "mock response data"},
            });
        });
        const store = mockStore({});
        const expectedAction = [{
            "payload": {
                "data": "mock response data",
            },
            type: actions.FORGOT_PASSWORD_DATA
        }];
        return store.dispatch(methods.getForgotPasswordData('test token')).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        })
    });
});