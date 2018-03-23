export const TOGGLE_SIDEBAR = 'togglesidebar';
export const OPEN_SIDEBAR='opensidebar';
export const CLOSE_SIDEBAR='closesidebar';

export const toggleSidebar=()=>{
    return(dispatch)=>{
        dispatch({
            type:TOGGLE_SIDEBAR
        })
    }
};
export const closeSidebar=()=>{
    return(dispatch)=>{
        dispatch({
            type:OPEN_SIDEBAR
        })
    };
};

export const openSidebar=()=>{
    return(dispatch)=>{
        dispatch({
            type:CLOSE_SIDEBAR
        })
    };
};