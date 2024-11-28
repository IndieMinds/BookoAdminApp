import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import constants from '../../constants/urlConstant';
import useAuthStore from '../../stores/authStore';

const useCommon = () => {
  const navigate = useNavigate();
  const { token } = useAuthStore(); // Access the token

  const createClient = () => {
    const api = axios.create({
      baseURL: constants.baseURL,
      timeout: 30000,
      headers: {
        Authorization: `Bearer ${token || ''}`, // Use token from the store, fallback to empty string
      },
    });

    api.interceptors.request.use((config) => {
      // Attach the token dynamically in case it was updated
      const currentToken = useAuthStore.getState().token; // Get the current token
      if (currentToken) {
        config.headers.Authorization = `Bearer ${currentToken}`;
      }
      return config;
    });

    api.interceptors.response.use(
      (response) => response,
      (err) => {
        if (err.response) {
          switch (err.response.status) {
            case 401:
            case 403:
            case 404:
            case 500:
              navigate('/not-found');
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

  return { createClient };
};

export default useCommon;
