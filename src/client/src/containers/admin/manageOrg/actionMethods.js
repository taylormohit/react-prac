import {
    EDIT_ORG_TMP,
    ADD_ORG_TMP,
    CLR_ORG,
    DELETE_ORG_TMP,

} from '../../../modules/actions/userManagement';

export const addOrg = (payload) => {
    return (dispatch)=>{
        dispatch({
            type:ADD_ORG_TMP,
            payload
        })
    }
};

export const updateOrg = (payload,id) => {
    return (dispatch)=>{
        dispatch({
            type:EDIT_ORG_TMP,
            payload,
            id
        })
    }
};

export const deleteOrg = (id) => {
    return (dispatch)=>{
        dispatch({
            type:DELETE_ORG_TMP,
            payload:id
        })
    }
};

export const clearTempOrg = ()=>{
    return(dispatch)=>{
        dispatch({
            type:CLR_ORG
        })
    }
};