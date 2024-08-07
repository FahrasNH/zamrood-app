import { useQuery } from 'react-query';
import axiosClient from '@/lib/axiosClient';

const fetchArticles = async () => {
  const response = await axiosClient.get('/article');
  
  return response.data;
};

const useArticels = () => {
  return useQuery('articles', fetchArticles);
};

export default useArticels;