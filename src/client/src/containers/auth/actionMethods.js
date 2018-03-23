
import authService,{forgotPasswordData} from './../../modules/services/auth.service';
import {FORGOT_PASSWORD_DATA,USER_LOGIN,USER_LOGOUT} from './../../modules/actions/auth';



export const logInUser = (credentials) => {
    return (dispatch) => {
        return authService.loginUser(credentials)
            .then((user) => {

                dispatch({
                    type: USER_LOGIN,
                    payload: {
                        user
                    }
                });
                return user;
            }).catch((err)=>{console.log(err)});
    }
};

export const logOutUser = () => {
    console.log('logoutuser action method called');
    return dispatch => {
        dispatch({
            type: USER_LOGOUT
        });
    }
};

export const getForgotPasswordData=(forgotPasswordToken)=>{
    return(dispatch)=>{
        return forgotPasswordData(forgotPasswordToken).then((res)=>{
            dispatch({
                type:FORGOT_PASSWORD_DATA,
                payload:res.data
            })
        }).catch((err)=>{
            alert('the link is expired,invalid or already used!');
        });
    }
};