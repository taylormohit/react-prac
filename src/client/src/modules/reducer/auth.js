import storage from '../../helpers/storage';
import jwt from 'jwt-decode';

import {FORGOT_PASSWORD_DATA,USER_LOGIN,USER_LOGOUT,USER_LOCAL_KEY, USER_ROLE} from './../../modules/actions/auth';

const initialState = {
  user: storage.getItem(USER_LOCAL_KEY) || null,
    decoded_user: storage.getItem(USER_ROLE) || null,
    forgotpassworddata:{}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      const user = action.payload && action.payload.user;
      console.log(user.access_token);
      storage.setItem(USER_LOCAL_KEY, user);
        let decoded_user;
        jwt(user.access_token).role ? decoded_user=jwt(user.access_token).role : decoded_user='user';
        storage.setItem(`decoded`,jwt(user.access_token));
        storage.setItem(USER_ROLE,decoded_user);
      return {
        ...state,
        user,
          decoded_user
      };

    case USER_LOGOUT:
      storage.setItem(USER_LOCAL_KEY, null);
      storage.deleteAllCookies();
      return {
        ...state,
        user: null,
          decoded_user:null
      };

      case FORGOT_PASSWORD_DATA:
        return {
            ...state,
            forgotpassworddata:action.payload
        };


    default:
      return state
  }
}
