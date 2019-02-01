import axios from 'axios';
import config from '../config';
import {setupCache} from 'axios-cache-adapter';

const headers = {
  'Content-Type': 'application/json',
};

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});

const api = axios.create({
  baseURL: config.api,
  timeout: 2500,
  headers,
  adapter: cache.adapter,
});

// const burl = config.server;

function isAuth() {
  return (localStorage.getItem('token') !== null);
}

function logout() {
  localStorage.clear();
}

function getToken() {
  return  localStorage.getItem('token');
}


export default {
  login: ((username, password) => api.post(`/users/signin`, {
    username,
    password,
  }, {
    headers
  })),

  signup: ((send) => api.post(`/users/signup`, send, {headers})),

  isAuth,

  userInfos: (() => api.get('/users/get', {
    params: {
      token: getToken()
    }
  }, {headers})),

  isAdmin:(function() {
    return new Promise((resolve,reject) => {
      this.userInfos().then(({data: {user}}) => {
        resolve(user.admin)
      }).catch(err => reject(err));
    });
  }),

  countUsers:(function(users) {
    return new Promise((resolve, reject) => {
      const options = (users === undefined) ? '' : JSON.stringify({status: users});
      console.log(options);
      api.get('/admin/users/count', {
        params: {
          token: getToken(),
          options,
        }
      }, {headers})
        .then(({data}) => {
          resolve(data.users_count);
        })
        .catch((err) => {
          if(err.response.data.code && err.response.data.code === 'no_admin') {
            resolve(0);
          }
          else {
            reject(err);
          }
        })
    })
  }),

  logout,
};