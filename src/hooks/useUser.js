import { useQuery } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi'; // assuming you have this utility function
import { useAuth } from '../Context/AuthContext'; // assuming you have this

export const useUser = () => {

  const apiService = useApi();
  const { token } = useAuth(); // token from context

  return useQuery({
    queryKey: ['userData'],
    queryFn: async () => {
      const response = await apiService({
        method: 'GET',
        endpoint: '/getUser',
        token
      });
      return response;
    },
    enabled: !!token,
  });
};
