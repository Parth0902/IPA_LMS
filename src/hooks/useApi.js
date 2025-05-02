import { useAuth } from '../Context/AuthContext';
import { toast } from 'react-toastify';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useApi = () => {
  const { logout, token } = useAuth();

  const callApi = async ({ method = 'GET', endpoint, data = null }) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
      };

      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const options = {
        method: method.toUpperCase(),
        headers,
      };

      if (data && method !== 'GET') {
        options.body = JSON.stringify(data);
      }

      const response = await fetch(`${BASE_URL}${endpoint}`, options);
      const result = await response.json();
      console.log(result)
      if (response.status === 401) {
        toast.warn('Your session has expired. Please log in again.');
        logout(); // ✅ Safe here
        return null;
      }

      if (!response.ok) {
        toast.warn(result?.message || 'Something went wrong');
        return null;
      }

      return result;
    } catch (error) {
      toast.error('Network error or server not responding');
      console.error('[apiService Error]', error);
      return null;
    }
  };

  return callApi;
};
