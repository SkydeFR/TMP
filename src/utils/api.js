import axios from 'axios';
//import config from '../config';
import {setupCache} from 'axios-cache-adapter';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});

const api = axios.create({
  baseURL: 'http://localhost:8081',
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
  login: ((email, password) => api.post(`/users/signin`, {
    email,
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

      this.userInfos().then(
        ({data: {user}}) => {
        resolve(user.admin)
      }).catch(err => reject(err));
      
    

    });
  }),

  /**
   * @return {Promise<any>} Permet de récupérer les types d'événement.
   */
  getTypes: () => api.get('/types/get', {}, {headers}),

  /**
   * @param {Object} options Options à traiter (tableau intitulé nature, déterminant le type, 'espace' et/ou 'temps')
   */
  getDestinations: (options = {}) => api.get('/destinations/get', {options}, {headers}),

  /**
   * @param {String} token Token de l'utilisateur
   * @param {String} nom Nom du type à créer.
   */
  createType: (token, nom) => api.post('/admin/type/add', {token, nom}, {headers}),
  
  /**
   * @param {String} token Token de l'utilisateur.
   * @param {Object} informations Informations de l'utilisateur.
   * @param {String} informations.lieu Lieu de la destination.
   */
  createDestination: (token, informations) => api.post('/admin/destination/add', {token, ...informations}, {headers}),

  // countUsers:(function(users) {
  //   return new Promise((resolve, reject) => {
  //     const options = (users === undefined) ? '' : JSON.stringify({status: users});
  //     console.log(options);
  //     api.get('/admin/users/count', {
  //       params: {
  //         token: getToken(),
  //         options,
  //       }
  //     }, {headers})
  //       .then(({data}) => {
  //         resolve(data.users_count);
  //       })
  //       .catch((err) => {
  //         if(err.response.data.code && err.response.data.code === 'no_admin') {
  //           resolve(0);
  //         }
  //         else {
  //           reject(err);
  //         }
  //       })
  //   })
  // }),

  logout,
};