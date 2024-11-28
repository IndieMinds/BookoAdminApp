import { useNavigate } from 'react-router-dom';
import createClient from './common';
import useAuthStore from '../../stores/authStore';

const useApi = () => {
  const navigate = useNavigate();
  const { token } = useAuthStore(); // Extract the token in a valid hook context

  const api = createClient(token, navigate); // Pass the token and navigate function

  const bkoApi = async (url, { method = 'GET', requestData = {} }) => {
    try {
      const options = {
        method,
        url,
        headers: {
          'Content-Type': 'application/json',
        },
        data: method !== 'GET' ? requestData : undefined,
      };

      const response = await api(options);
      if (response && response.data.success) {
        return response.data;
      } else {
        return response.error;
      }
    } catch (err) {
      throw err;
    }
  };

  return bkoApi;
};

export default useApi;
