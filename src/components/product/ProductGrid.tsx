import { Product } from '@/types';
import { ProductCard } from './ProductCard';

export function ProductGrid({ products }: { products: Product[] }) {
  if (!products || products.length === 0) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
