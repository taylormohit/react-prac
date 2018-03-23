import {GET_EVENT} from "../../modules/actions/eventLog";

export const getEvent=()=>{
    return(dispatch)=>{
        dispatch({
            type:GET_EVENT,
        })
    }
};