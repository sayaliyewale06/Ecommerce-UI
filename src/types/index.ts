export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Array<{
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }>;
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

export interface Category {
  slug: string;
  name: string;
  url: string;
}

export interface ApiResponse<T> {
  products: T[];
  total: number;
  skip: number;
  limit: number;
}

export interface FilterState {
  search: string;
  category: string;
  sort: SortOption;
}

export type SortOption = 'default' | 'price-asc' | 'price-desc' | 'rating-desc';

export interface PaginationState {
  page: number;
  limit: number;
}
