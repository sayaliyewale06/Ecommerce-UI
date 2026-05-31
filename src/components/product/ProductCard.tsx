import { Product } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // Calculate original price based on discount percentage
  const originalPrice = (product.price / (1 - product.discountPercentage / 100)).toFixed(2);

  return (
    <Card className="overflow-hidden group flex flex-col transition-all hover:shadow-xl border-zinc-100 bg-white shadow-sm rounded-none">
      <div className="relative aspect-[3/4] bg-zinc-100 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-4 flex-1">
        <h3 className="font-semibold text-sm line-clamp-2 min-h-[40px] leading-tight text-zinc-800">{product.title}</h3>
        <p className="text-xs text-zinc-500 mt-1 capitalize">{product.brand || product.category}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col items-start gap-3">
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-zinc-900">${product.price.toFixed(2)}</span>
          <span className="text-sm text-zinc-400 line-through">${originalPrice}</span>
        </div>
        <Button className="w-full bg-white hover:bg-[#d81b60] text-zinc-900 hover:text-white border border-zinc-200 hover:border-[#d81b60] transition-colors rounded-sm uppercase text-xs font-bold tracking-wider py-5">
          Add To Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
