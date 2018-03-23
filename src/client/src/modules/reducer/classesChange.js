import {TOGGLE_SIDEBAR,CLOSE_SIDEBAR,OPEN_SIDEBAR} from './../actions/classes';

const initial={
    sidebarShow:false
};

export default (state=initial,action)=>{
    switch(action.type){
        case TOGGLE_SIDEBAR:
            return{...state,sidebarShow:!state.sidebarShow};
        case OPEN_SIDEBAR:
            return{...state,sidebarShow:true};
        case CLOSE_SIDEBAR:
            return{...state,sidebarShow:false};
        default:
            return state
    }
}