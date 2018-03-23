import userManagement from '../../modules/reducer/userManagement';
import * as actions from '../../modules/actions/userManagement';

const initialState = {
    users: [],
    msg: '',
    permissions: [],
    tempOrg: []
};

const users = [
    {
        "id": 19,
        "ID": 19,
        "GuidID": "1a3r5t",
        "firstName": "Qwe",
        "LastName": "Asdaaa",
        "Email": "qwead@adf.add",
        "Role": "User2",
        "RepID": "dqwdwqd",
        "Organization": "qqq",
        "EffectiveDate": "2018-01-29T00:00:00+05:30",
        "Enabled": true,
        "Deleted": false,
        "ForgotToken": null,
        "Permissions": [
            {
                "label": "Notify Vehicle Recovery Vendor (Repairable)",
                "isChecked": false
            },
            {
                "label": "Notify Vehicle Recovery Vendor (Savage)",
                "isChecked": false
            },
            {
                "label": "Move Vehicle to Storage Free Location",
                "isChecked": false
            },
            {
                "label": "Request Digital Image of Damage",
                "isChecked": false
            },
            {
                "label": "Notify Policy Holder that an Event was Declined",
                "isChecked": false
            },
            {
                "label": "Notify First Responds",
                "isChecked": false
            }
        ],
        "OrgList": [
            {
                "orgID": "qqq",
                "orgName": "qqq"
            }
        ]
    },
    {
        "id": 21,
        "ID": 21,
        "GuidID": "3d1d26c1-7f5d-42cb-97c1-7a10f55356ff",
        "FirstName": "User",
        "LastName": "Usertest",
        "Email": "user1@cmail.club",
        "Role": "User2",
        "RepID": "qwesd",
        "Organization": "aaa",
        "EffectiveDate": "2018-03-21T00:00:00+05:30",
        "Enabled": true,
        "Deleted": false,
        "ForgotToken": null,
        "Permissions": [
            {
                "label": "Notify Vehicle Recovery Vendor (Repairable)",
                "isChecked": false
            },
            {
                "label": "Notify Vehicle Recovery Vendor (Savage)",
                "isChecked": false
            },
            {
                "label": "Move Vehicle to Storage Free Location",
                "isChecked": false
            },
            {
                "label": "Request Digital Image of Damage",
                "isChecked": false
            },
            {
                "label": "Notify Policy Holder that an Event was Declined",
                "isChecked": false
            },
            {
                "label": "Notify First Responds",
                "isChecked": false
            }
        ],
        "orgList": [
            {
                "orgID": "aaa",
                "orgName": "aaa"
            },
            {
                "orgID": "sss",
                "orgName": "sss"
            }
        ]
    }];

describe('userManagement reducer', () => {
    it('should initialize properly', () => {
        const action = {};
        expect(userManagement(initialState, action)).toEqual(initialState);
    });

    it('GET_USER', () => {
        const action = {
            type: actions.GET_USER,
            payload: users
        };
        const expectedState = {
            ...initialState,
            users
        };
        expect(userManagement(initialState, action)).toEqual(expectedState);
    });

    it('ADD_USER', () => {
        const newUser = {
            "id": 8,
            "GuidID": null,
            "firstName": "Jj",
            "LastName": "Jj",
            "Email": "jjjj@kk.lll",
            "Role": "User2",
            "RepID": "qwe",
            "Organization": "fffff",
            "EffectiveDate": "2018-02-14T00:00:00+05:30",
            "Enabled": true,
            "Deleted": false,
            "ForgotToken": null,
            "Permissions": [
                {
                    "label": "Notify Vehicle Recovery Vendor (Repairable)",
                    "isChecked": false
                },
                {
                    "label": "Notify Vehicle Recovery Vendor (Savage)",
                    "isChecked": false
                },
                {
                    "label": "Move Vehicle to Storage Free Location",
                    "isChecked": false
                },
                {
                    "label": "Request Digital Image of Damage",
                    "isChecked": false
                },
                {
                    "label": "Notify Policy Holder that an Event was Declined",
                    "isChecked": false
                },
                {
                    "label": "Notify First Responds",
                    "isChecked": false
                }
            ],
            "OrgList": [
                {
                    "orgID": "dddd",
                    "orgName": "ddddd"
                },
                {
                    "orgID": "fffff",
                    "orgName": "fffff"
                },
                {
                    "orgID": "ggg",
                    "orgName": "ggg"
                }
            ]
        };
        const action = {
            type: actions.ADD_USER,
            payload: newUser
        };
        const expectedState = {
            ...initialState,
            users: [],
            msg: `user Jj successfully added!`,
            tempOrg: []
        };
        expectedState.users.push(newUser);
        expect(userManagement({...initialState}, action)).toEqual(expectedState)
    });

    it('DELETE_USER', () => {
        const action = {
            type: actions.DELETE_USER,
            payload: 19
        };
        const expectedState = {
            ...initialState,
            users: [{
                "id": 21,
                "ID": 21,
                "GuidID": "3d1d26c1-7f5d-42cb-97c1-7a10f55356ff",
                "FirstName": "User",
                "LastName": "Usertest",
                "Email": "user1@cmail.club",
                "Role": "User2",
                "RepID": "qwesd",
                "Organization": "aaa",
                "EffectiveDate": "2018-03-21T00:00:00+05:30",
                "Enabled": true,
                "Deleted": false,
                "ForgotToken": null,
                "Permissions": [
                    {
                        "label": "Notify Vehicle Recovery Vendor (Repairable)",
                        "isChecked": false
                    },
                    {
                        "label": "Notify Vehicle Recovery Vendor (Savage)",
                        "isChecked": false
                    },
                    {
                        "label": "Move Vehicle to Storage Free Location",
                        "isChecked": false
                    },
                    {
                        "label": "Request Digital Image of Damage",
                        "isChecked": false
                    },
                    {
                        "label": "Notify Policy Holder that an Event was Declined",
                        "isChecked": false
                    },
                    {
                        "label": "Notify First Responds",
                        "isChecked": false
                    }
                ],
                "orgList": [
                    {
                        "orgID": "aaa",
                        "orgName": "aaa"
                    },
                    {
                        "orgID": "sss",
                        "orgName": "sss"
                    }
                ]
            }],
            msg: "user Qwe successfully deleted!"
        };
        expect(userManagement({...initialState, users}, action)).toEqual(expectedState);

    });

    it('EDIT_USER', () => {
        let payload = {
            ...users[0]
        };
        payload.firstName = "testing";
        const action = {
            type: actions.EDIT_USER,
            payload
        };
        const expectedState = {
            ...initialState,
            users,
            msg: "user testing successfully updated!"
        };
        expect(userManagement({...initialState, users}, action)).toEqual(expectedState);
    });
    it('GET_PERMISSIONS', () => {
        let payload:
            [{
            "label": "Notify Vehicle Recovery Vendor (Repairable)",
            "isChecked": false
        },
            {
                "label": "Notify Vehicle Recovery Vendor (Savage)",
                "isChecked": false
            },
            {
                "label": "Move Vehicle to Storage Free Location",
                "isChecked": false
            },
            {
                "label": "Request Digital Image of Damage",
                "isChecked": false
            },
            {
                "label": "Notify Policy Holder that an Event was Declined",
                "isChecked": false
            },
            {
                "label": "Notify First Responds",
                "isChecked": false
            }
            ];
        const action = {
            type: actions.GET_PERMISSIONS,
            payload
        };
        let expectedState = {...initialState, permissions: payload};
        expect(userManagement({...initialState}, action)).toEqual(expectedState);

    });
    it('SHOW_MSG', () => {
        const action = {
            type: actions.SHOW_MSG,
            payload: 'test message'
        };
        const expectedState = {
            ...initialState,
            msg: 'test message'
        };
        expect(userManagement({...initialState}, action)).toEqual(expectedState);
    });

    it('ADD_ORG_TMP', () => {
        const action = {
            type: actions.ADD_ORG_TMP,
            payload: {
                "orgID": "test id",
                "orgName": "test name"
            }
        };
        const expectedState = {
            ...initialState,
            tempOrg: [{
                "orgID": "test id",
                "orgName": "test name"
            }],
            msg: 'organization test name added'
        };
        expect(userManagement({...initialState}, action)).toEqual(expectedState);
    });

    it('GET_ORG_TMP', () => {
        const initialState = {
            users,
            msg: '',
            permissions: [],
            tempOrg: []
        };
        const action = {
            type: actions.GET_ORG_TMP,
            payload: 21
        };
        const expectedState = {
            ...initialState,
            tempOrg: [
                {
                    "orgID": "aaa",
                    "orgName": "aaa"
                },
                {
                    "orgID": "sss",
                    "orgName": "sss"
                }
            ]
        };

        expect(userManagement(initialState, action)).toEqual(expectedState);
    });
    it('CLR_ORG', () => {
        const action = {
            type: actions.CLR_ORG
        };
        expect(userManagement({...initialState}, action)).toEqual({...initialState, tempOrg: []})
    });

    let tempOrg = [
        {
            "orgID": "asd",
            "orgName": "asd"
        },
        {
            "orgID": "fffff",
            "orgName": "fffff"
        },
        {
            "orgID": "ggg",
            "orgName": "ggg"
        }
    ];

    it('EDIT_ORG_TMP', () => {
        const action = {
            type: actions.EDIT_ORG_TMP,
            payload: {
                "orgID": "asd",
                "orgName": "test"
            },
            id:"asd"
        };
        const expectedState = {
            ...initialState,
            tempOrg:[
                {
                    "orgID": "asd",
                    "orgName": "test"
                },
                {
                    "orgID": "fffff",
                    "orgName": "fffff"
                },
                {
                    "orgID": "ggg",
                    "orgName": "ggg"
                }
            ],
            msg: 'test successfully updated!'
        };
        expect(userManagement({...initialState, tempOrg}, action)).toEqual(expectedState);
    });

    it('DELETE_ORG_TMP', () => {
        const action = {
            type: actions.DELETE_ORG_TMP,
            payload:"fffff"
        };
        const expectedState = {
            ...initialState,
            tempOrg: [
                { orgID: 'asd', orgName: 'test' },
                { orgID: 'ggg', orgName: 'ggg' }
                ],
            msg: 'fffff successfully deleted!'
        };
        expect(userManagement({...initialState,tempOrg},action)).toEqual(expectedState);
    });

    it('CLR_MSG', () => {
        const action={
            type:actions.CLR_MSG
        };
        const expectedState={
            ...initialState,
            msg:''
        };
        expect(userManagement({...initialState,msg:'clear message testing'},action)).toEqual(expectedState);
    });
});