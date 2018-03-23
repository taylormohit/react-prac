import _ from 'lodash';
import {
    ADD_USER,
    DELETE_USER,
    EDIT_USER,
    SHOW_MSG,
    GET_PERMISSIONS,
    GET_USER,
    ADD_ORG_TMP,
    GET_ORG_TMP,
    CLR_ORG,
    EDIT_ORG_TMP,
    DELETE_ORG_TMP,
    CLR_MSG
} from './../../modules/actions/userManagement';
import {ADD_ORG} from "../actions/userManagement";
export const initial={
    users:[],
    msg:'',
    permissions:[],
    asd:"asd",
    tempOrg:[],
    loader:false
};

export default(state=initial,action)=>{
  switch (action.type){
      case GET_USER:
      return {
          ...state,
          users:action.payload,
          msg:''
      };
      case ADD_USER:
          action.payload['orgList']=state.tempOrg;
          state.users.push(action.payload);
          return {
              ...state,
              msg:`user ${action.payload.firstName} successfully added!`,
              tempOrg:[]
          };
      case DELETE_USER:
          let user=state.users[_.findIndex(state.users,{id:Number(action.payload)})];
          state.users.splice(_.findIndex(state.users,{id:Number(action.payload)}),1);
          return {
              ...state,
              msg:`user ${user.firstName} successfully deleted!`
          };
      case EDIT_USER:
          state.users[_.findIndex(state.users,{id:Number(action.payload.id)})]=action.payload;
          state.users=_.cloneDeep(state.users);
          return {
              ...state,
              msg:`user ${action.payload.firstName} successfully updated!`,
              tempOrg:[]
          };
      case GET_PERMISSIONS:
          return{
              ...state,
              permissions:action.payload
          };
      case SHOW_MSG:

          return {
              ...state,
              msg:action.payload
          };

      case ADD_ORG_TMP:
          state.tempOrg.push(action.payload);
          return{...state,msg:`organization ${action.payload.orgName} added`};

      case GET_ORG_TMP:
          let org=state.users[_.findIndex(state.users,{id:Number(action.payload)})].orgList;
          if(!org){
              org=[]
          }
          return{...state,tempOrg:org};

      case CLR_ORG:
          return{...state,tempOrg:[]};

      case EDIT_ORG_TMP:
          state.tempOrg[_.findIndex(state.tempOrg,{orgID:action.id})]=action.payload;
          return{...state,msg:`${action.payload.orgName} successfully updated!`};
      case DELETE_ORG_TMP:
          state.tempOrg.splice(_.findIndex(state.tempOrg,{orgID:action.payload}),1);
          return{...state,tempOrg:_.cloneDeep(state.tempOrg),msg:`${action.payload} successfully deleted!`};

      case CLR_MSG:
          return{...state,msg:''};

    default:
      return state;
  }
}
