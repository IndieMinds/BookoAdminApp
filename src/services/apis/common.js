import axios from 'axios';
import constants from '../../constants/urlConstant';

const createClient = (token, navigate) => {
  const api = axios.create({
    baseURL: constants.baseURL,
    timeout: 30000,
    headers: {
      Authorization: `Bearer ${token || ''}`, // Use the passed token
    },
  });

  // api.interceptors.request.use((config) => {
  //   // You can add any additional dynamic header logic here
  //   return config;
  // });

  api.interceptors.response.use(
    (response) => response,
    (err) => {
      if (err.response) {
        switch (err.response.status) {
          case 401:
          case 403:
          case 404:
          case 500:
            if (navigate) navigate('/not-found');
            break;
          default:
            return Promise.reject(err);
        }
      }
      throw err;
    }
  );

  return api;
};

export default createClient;
