import {
    ADD_USER,
    DELETE_USER,
    EDIT_USER,
    SHOW_MSG,
    GET_PERMISSIONS,
    GET_USER,
    ADD_ORG,
    ADD_ORG_TMP,
    GET_ORG_TMP
} from '../../../modules/actions/userManagement';
import {USER_LOGOUT} from "../../../modules/actions/auth";
import { UsersData, addUserService,deleteUserService,editUserService } from '../../../modules/services/userManagement.service';

export const getPermissions =(data)=>{
    return(dispatch)=>{
        dispatch({
            type:GET_PERMISSIONS,
            payload:data
        });
    }
};

export const DeleteUser=(id)=>{
    return(dispatch)=>{

        return deleteUserService(id).then((res)=>{
            dispatch({
                type: DELETE_USER,
                payload:id
            });
        }).catch((err)=>{
            dispatch({
                type: SHOW_MSG,
                payload:err.message

            });
        });
    }
};
export const AddUser=(payload)=>{
    return(dispatch)=>{
        return addUserService(payload).then((res)=>{
            dispatch({
                type: ADD_USER,
                payload
            });
        }).catch((err)=>{
            dispatch({
                type: SHOW_MSG,
                payload:err.message

            });
        });
    }
};

export const editUserred=(payload)=>{
    return(dispatch)=>{
        return editUserService(payload).then((res)=>{

            dispatch({
                type: EDIT_USER,
                payload
            });
        }).catch((err)=>{
            dispatch({
                type: SHOW_MSG,
                payload:err.message

            });
        });
    }
};

export const getOrg = (id)=>{
    return(dispatch)=>
    {
        dispatch({
            type: GET_ORG_TMP,
            payload: id
        });
    }
};

export const GetUser = (params) => {
    return(dispatch)=>{
        return UsersData(params).then((res)=>{
           /* setTimeout(()=>{*/
                dispatch({
                    type: GET_USER,
                    payload:res.data
                });
           /* },2000);*/
        }).catch((err)=>{
            if(Number(err.response.status)===401){
                dispatch({
                    type: USER_LOGOUT
                });
            }
            if(Number(err.response.status)===500) {
                dispatch({
                    type: SHOW_MSG,
                    payload: 'Error:cant load the data from server'
                });
            }
        });
    }
};



