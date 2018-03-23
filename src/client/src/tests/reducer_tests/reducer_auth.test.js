import 'mock-local-storage';

import auth from './../../modules/reducer/auth';
import * as actions from './../../modules/actions/auth';

const initial={
    user:  null,
    decoded_user:  null,
    forgotpassworddata:{}
};

describe('auth reducer',()=>{
    it('should initialize properly',()=>{
        expect(auth(initial,{})).toEqual({...initial});
    });

    it('USER_LOGIN',()=>{
        const user={"access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImJkNjU5M2U1MTA1ZWMzNzlmZmZkZGFkZTY2MGJkNTI3IiwidHlwIjoiSldUIn0.eyJuYmYiOjE1MjA1OTkwMzUsImV4cCI6MTUyMDYwMjYzNSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1ODgxMCIsImF1ZCI6WyJodHRwOi8vbG9jYWxob3N0OjU4ODEwL3Jlc291cmNlcyIsImFwaTEiXSwiY2xpZW50X2lkIjoicm8uY2xpZW50Iiwic3ViIjoiYTk3MTk3ODAtYjA2MC00YjRiLWFjZDMtNTJmNmY3NzQ5NDc4IiwiYXV0aF90aW1lIjoxNTIwNTk5MDM1LCJpZHAiOiJsb2NhbCIsInJvbGUiOiJhZG1pbjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhZG1pbkBhZG1pbi5jb20iLCJzY29wZSI6WyJhcGkxIl0sImFtciI6WyJwYXNzd29yZCJdfQ.H9JeXLoRCZn9wlShJF9JianPNf2syO_sz3gFk0vrNfsG614h_fiZhghvbxMCTEPSbBeQqBDt-_7xjZhjcRcbgqo_Yn0BokvVMaBnYbMUCgMTToUKilQUYgRrVPuKAOd0rkG082Fv7Nwjj6P32K17bC8t9H8-9T1VGR-OIao_ipIlofpFx0h2-e404ap-ZrtdXqgYlG14EcCSSWEKOi-chAlJMwSRiVNEugv8KhIActMeFktZe2S2rf8JKEWzpLhG9veEQSkx7c-gojU9Gnq4U8iIW1HrlmnsN75bY2SqTiqFvL6ipt1ARzqUXMQOxXpBQmP0FFZtdfqwCrTbdFocZA","expires_in":3600,"token_type":"Bearer"}
        const action={
          type:actions.USER_LOGIN,
          payload:{user}
        };
        const expectedState={
            ...initial,
            user,
            decoded_user:"admin1"
        };
        expect(auth(initial,action)).toEqual(expectedState);

    });

    it('USER_LOGOUT',()=>{
        const user={"access_token":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImJkNjU5M2U1MTA1ZWMzNzlmZmZkZGFkZTY2MGJkNTI3IiwidHlwIjoiSldUIn0.eyJuYmYiOjE1MjA1OTkwMzUsImV4cCI6MTUyMDYwMjYzNSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1ODgxMCIsImF1ZCI6WyJodHRwOi8vbG9jYWxob3N0OjU4ODEwL3Jlc291cmNlcyIsImFwaTEiXSwiY2xpZW50X2lkIjoicm8uY2xpZW50Iiwic3ViIjoiYTk3MTk3ODAtYjA2MC00YjRiLWFjZDMtNTJmNmY3NzQ5NDc4IiwiYXV0aF90aW1lIjoxNTIwNTk5MDM1LCJpZHAiOiJsb2NhbCIsInJvbGUiOiJhZG1pbjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhZG1pbkBhZG1pbi5jb20iLCJzY29wZSI6WyJhcGkxIl0sImFtciI6WyJwYXNzd29yZCJdfQ.H9JeXLoRCZn9wlShJF9JianPNf2syO_sz3gFk0vrNfsG614h_fiZhghvbxMCTEPSbBeQqBDt-_7xjZhjcRcbgqo_Yn0BokvVMaBnYbMUCgMTToUKilQUYgRrVPuKAOd0rkG082Fv7Nwjj6P32K17bC8t9H8-9T1VGR-OIao_ipIlofpFx0h2-e404ap-ZrtdXqgYlG14EcCSSWEKOi-chAlJMwSRiVNEugv8KhIActMeFktZe2S2rf8JKEWzpLhG9veEQSkx7c-gojU9Gnq4U8iIW1HrlmnsN75bY2SqTiqFvL6ipt1ARzqUXMQOxXpBQmP0FFZtdfqwCrTbdFocZA","expires_in":3600,"token_type":"Bearer"}
        const action={
            type:actions.USER_LOGOUT,
            payload:{user}
        };
        expect(auth(initial,action)).toEqual({...initial,user:null,decoded_user:null});

    });

    it('FORGOT_PASSWORD_DATA',()=>{
        const action={
            type:actions.FORGOT_PASSWORD_DATA,
            payload:"mock payload"
        };
        expect(auth(initial,action)).toEqual({...initial,forgotpassworddata:action.payload});

    });
});
