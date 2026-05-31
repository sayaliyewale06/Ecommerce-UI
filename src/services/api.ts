import axios from 'axios';
import { Product, Category, ApiResponse } from '@/types';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
});

export const getProducts = async (limit = 20, skip = 0): Promise<ApiResponse<Product>> => {
  const response = await api.get<ApiResponse<Product>>(`/products?limit=${limit}&skip=${skip}`);
  return response.data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const response = await api.get<Product>(`/products/${id}`);
  return response.data;
};

export const getCategories = async (): Promise<Category[]> => {
  const response = await api.get<Category[]>('/products/categories');
  return response.data;
};

export const getProductsByCategory = async (category: string, limit = 20, skip = 0): Promise<ApiResponse<Product>> => {
  const response = await api.get<ApiResponse<Product>>(`/products/category/${category}?limit=${limit}&skip=${skip}`);
  return response.data;
};

export const searchProducts = async (query: string, limit = 20, skip = 0): Promise<ApiResponse<Product>> => {
  const response = await api.get<ApiResponse<Product>>(`/products/search?q=${query}&limit=${limit}&skip=${skip}`);
  return response.data;
};
