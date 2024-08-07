import { useQuery } from 'react-query';
import axiosClient from '@/lib/axiosClient';

const fetchProducts = async () => {
  const response = await axiosClient.get('/itinerary?highlight=true');
  
  return response.data;
};

const useProducts = () => {
  return useQuery('products', fetchProducts);
};

export default useProducts;