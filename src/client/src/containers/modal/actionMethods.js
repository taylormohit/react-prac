import {CLR_MSG} from './../../modules/actions/userManagement'


export const clearMsg=()=>{
    return(dispatch)=>{
        dispatch({
            type:CLR_MSG
        })
    }
};