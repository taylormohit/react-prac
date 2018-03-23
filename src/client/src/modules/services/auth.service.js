import axios from 'axios';

export function loginUser(credentials) {

  let auth = new FormData();
  //todo: move client_id and client_secret to config file
  auth.append("client_id","ro.client");
  auth.append("client_secret","secret");
  auth.append("grant_type","password");
  auth.append("scope","api1");
  auth.append("username",credentials.email);
  auth.append("password",credentials.password);

  let config = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};

  //todo: move api root to config file
  return axios.post('/connect/token', auth, config )
    .then(({ data }) => data);
}

export const forgotPassword=(Email,ResetPasswordToken,Password)=>{
    axios.post('api/Account/ResetPassword', {
        //=> I have returned the email in username field for now because you are using it in api to find the record. we can change it in future once we figure out what to put there.
        Email,
        ResetPasswordToken,
        Password
    }).then((data) => {
        if(data.status===200){
            window.location='/';
        }
    }).catch((err) => {
            alert('request failed, try again');
        });
};

export const forgotPasswordData = (payload) =>{
    return axios.post('http://localhost:58810/api/values/getuser1',{Token:payload});
};

export default { loginUser };
