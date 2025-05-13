import { createContext, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from '../hooks/useApi';
import { useAuth } from './AuthContext';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { token } = useAuth();
  const queryClient = useQueryClient();
  const apiService = useApi()

  // 1. Fetch Cart
  const { data: cartData, isLoading, isError, refetch } = useQuery({
    queryKey: ['cartData'],
    queryFn: async () => {
      const response = await apiService({
        method: 'GET',
        endpoint: '/getCart',
        token,
      });
      const transformedCart = response.cartData.map(item => ({
        id: item._id,
        name: item.courseName,
        price: Number(item.coursePrice), // converting string to number
        quantity: 1, // default quantity 1
        image: item.courseThumbNail
      }));
      return transformedCart;
    },
    enabled: !!token,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  // 2. Add Item
  const addItemMutation = useMutation({
    mutationFn: async (courseId) => {
      const response = await apiService({
        method: 'POST',
        endpoint: '/addToCart',
        token,
        data: { courseId },
      });
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['cartData']);
    },
    onError: () => {
      toast.error('Failed to add item');
    },
  });

  // 3. Remove Item
  const removeItemMutation = useMutation({
    mutationFn: async (courseId) => {
      const response = await apiService({
        method: 'DELETE',
        endpoint: '/deleteFromCart',
        token,
        data: { courseId },
      });
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['cartData']);
    },
    onError: () => {
      toast.error('Failed to remove item');
    },
  });

  const contextValue = useMemo(() => ({
    cartItems: cartData || [],
    isLoading,
    isError,
    refetchCart: refetch,
    addItem: addItemMutation.mutate,
    removeItem: removeItemMutation.mutate,
  }), [
    cartData,
    isLoading,
    isError,
    refetch,
    addItemMutation.mutate,
    removeItemMutation.mutate,
  ]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCart = () => useContext(CartContext);
