import { useQuery } from '@tanstack/react-query';
import { apiService, Product } from '@/services/api';

export const useProducts = (limit?: number) => {
  return useQuery({
    queryKey: ['products', limit],
    queryFn: () => apiService.getProducts(limit),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
  });
};

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => apiService.getProductById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    retry: 3,
  });
};

export const useProductsByCategory = (category: string, limit?: number) => {
  return useQuery({
    queryKey: ['products', 'category', category, limit],
    queryFn: () => apiService.getProductsByCategory(category, limit),
    enabled: !!category,
    staleTime: 5 * 60 * 1000,
    retry: 3,
  });
};

export const useAllProducts = () => {
  return useQuery({
    queryKey: ['products', 'all'],
    queryFn: () => apiService.getAllProducts(),
    staleTime: 5 * 60 * 1000,
    retry: 3,
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => apiService.getCategories(),
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 3,
  });
};
