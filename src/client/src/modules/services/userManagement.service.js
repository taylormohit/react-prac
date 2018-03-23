import axios from 'axios';
import storage from '../../helpers/storage';
const USER_LOCAL_KEY = 'auth.user';
export function UsersData(params) {
    let token=storage.getItem(USER_LOCAL_KEY);

    let paramString="";
    for(let x in params){
        paramString+=`${x}=${params[x]}&`;
    }
    paramString=paramString.slice(0,paramString.length-1);
    return axios.get(`/api/user?${paramString}`,{headers:{'Authorization':`${ token.token_type} ${ token.access_token}`}});
}
export function addUserService(newUser){

    let token=storage.getItem(USER_LOCAL_KEY);

    let newU =
    {
        "ID": newUser.id,
        "FirstName": newUser.firstName,
        "LastName": newUser.lastName,
        "Email": newUser.email,
        "Role": newUser.role,
        "RepID": newUser.repID,
        "Organization": newUser.organization,
        "EffectiveDate": newUser.effectiveDate,
        "Enabled": true,
        "Permissions":newUser.permissions,
        "OrgList":newUser.orgList
    };

    return axios.post('/api/user', newU,{headers:{'Authorization':`${token.token_type} ${token.access_token}`}});
}

export function deleteUserService(index){

    let token=storage.getItem(USER_LOCAL_KEY);


    return axios.delete(`/api/user/${index}`,{headers:{'Authorization':`${ token && token.token_type} ${token && token.access_token}`}});
}
export function editUserService(newUser){

    let token= storage.getItem(USER_LOCAL_KEY) && storage.getItem(USER_LOCAL_KEY);

    let newU =
        {
            "ID":  newUser.id,
            "FirstName":  newUser.firstName,
            "LastName":  newUser.lastName,
            "Email":  newUser.email,
            "Role":  newUser.role,
            "RepID":  newUser.repID,
            "Organization":  newUser.organization,
            "EffectiveDate":  newUser.effectiveDate,
            "Enabled": newUser.enabled,
            "Permissions":newUser.permissions,
            "OrgList":newUser.orgList
        };
    return axios.put('/api/user', newU,{headers:{'Authorization':`${ token && token.token_type} ${ token && token.access_token}`}});
}