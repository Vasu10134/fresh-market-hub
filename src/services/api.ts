export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
}

class ApiService {
  private baseUrl = 'https://fakestoreapi.com';

  async getProducts(limit: number = 6): Promise<ApiResponse<Product[]>> {
    try {
      const response = await fetch(`${this.baseUrl}/products?limit=${limit}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return { data };
    } catch (error) {
      console.error('Error fetching products:', error);
      return { 
        data: [], 
        error: error instanceof Error ? error.message : 'Failed to fetch products' 
      };
    }
  }

  async getProductById(id: number): Promise<ApiResponse<Product>> {
    try {
      const response = await fetch(`${this.baseUrl}/products/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return { data };
    } catch (error) {
      console.error('Error fetching product:', error);
      return { 
        data: {} as Product, 
        error: error instanceof Error ? error.message : 'Failed to fetch product' 
      };
    }
  }

  async getProductsByCategory(category: string, limit: number = 6): Promise<ApiResponse<Product[]>> {
    try {
      const response = await fetch(`${this.baseUrl}/products/category/${category}?limit=${limit}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return { data };
    } catch (error) {
      console.error('Error fetching products by category:', error);
      return { 
        data: [], 
        error: error instanceof Error ? error.message : 'Failed to fetch products' 
      };
    }
  }

  async getAllProducts(): Promise<ApiResponse<Product[]>> {
    try {
      const response = await fetch(`${this.baseUrl}/products`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return { data };
    } catch (error) {
      console.error('Error fetching all products:', error);
      return { 
        data: [], 
        error: error instanceof Error ? error.message : 'Failed to fetch products' 
      };
    }
  }

  async getCategories(): Promise<ApiResponse<string[]>> {
    try {
      const response = await fetch(`${this.baseUrl}/products/categories`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return { data };
    } catch (error) {
      console.error('Error fetching categories:', error);
      return { 
        data: [], 
        error: error instanceof Error ? error.message : 'Failed to fetch categories' 
      };
    }
  }
}

export const apiService = new ApiService();
