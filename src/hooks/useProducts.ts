import { useQuery } from 'react-query';
import axiosClient from '@/lib/axiosClient';
import { ProductResponse } from '@/types/productTypes';

const fetchProducts = async (highlight: boolean = true): Promise<ProductResponse> => {
  const response = await axiosClient.get(`/itinerary?highlight=${highlight}`);
  
  return response.data;
};

const useProducts = (highlight: boolean) => {
  return useQuery({
    queryKey: ['products', highlight],
    queryFn: () => fetchProducts(highlight),
  })
};

export default useProducts;