import axios from 'axios';

export function deleteUserService(index){

    let token=storage.getItem(USER_LOCAL_KEY);


   /* return axios.post(`/api/user/${index}`,{headers:{'Authorization':`${token.token_type} ${token.access_token}`}});*/
}