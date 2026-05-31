import { useQuery } from '@tanstack/react-query';
import { getProducts, getProductsByCategory, searchProducts, getCategories, getProductById } from '@/services/api';

export const useProducts = (limit = 20, skip = 0) => {
  return useQuery({
    queryKey: ['products', limit, skip],
    queryFn: () => getProducts(limit, skip),
  });
};

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
};

export const useProductsByCategory = (category: string, limit = 20, skip = 0) => {
  return useQuery({
    queryKey: ['products', 'category', category, limit, skip],
    queryFn: () => getProductsByCategory(category, limit, skip),
    enabled: !!category,
  });
};

export const useSearchProducts = (query: string, limit = 20, skip = 0) => {
  return useQuery({
    queryKey: ['products', 'search', query, limit, skip],
    queryFn: () => searchProducts(query, limit, skip),
    enabled: !!query,
  });
};
