'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSearchProducts, useProductsByCategory } from '@/hooks/useProducts';
import { ProductGrid } from '@/components/product/ProductGrid';
import { FilterSidebar } from '@/components/search/FilterSidebar';
import { Skeleton } from '@/components/ui/skeleton';
import { ShoppingBag, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

function ProductsContent() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || '';
  const sort = searchParams.get('sort') || 'default';

  // Determine which query to run based on URL params
  const { data: searchData, isLoading: searchLoading, isError: searchError, refetch: searchRefetch } = useSearchProducts(search, 20, 0);
  const { data: catData, isLoading: catLoading, isError: catError, refetch: catRefetch } = useProductsByCategory(category, 20, 0);

  const isLoading = searchLoading || catLoading;
  const isError = searchError || catError;
  let products = search ? searchData?.products : category ? catData?.products : [];

  // Client-side sorting
  if (products && sort !== 'default') {
    products = [...products].sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating-desc') return b.rating - a.rating;
      return 0;
    });
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
        
        {/* Sidebar */}
        <aside className="hidden md:block w-72 shrink-0 border-r pr-8">
          <FilterSidebar currentCategory={category} />
        </aside>
        
        {/* Main Content */}
        <main className="flex-1">
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-serif text-zinc-900">
                {search ? `Results for "${search}"` : category ? <span className="capitalize">{category}</span> : 'All Products'}
              </h1>
              <p className="text-zinc-500 text-sm mt-1">Showing {products?.length || 0} items</p>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <span className="text-zinc-500 font-semibold uppercase tracking-wider">Sort By</span>
              <select 
                className="border-b-2 border-zinc-200 py-1 pl-2 pr-6 outline-none bg-transparent font-medium"
                value={sort}
                onChange={(e) => {
                  const params = new URLSearchParams(searchParams.toString());
                  if(e.target.value === 'default') params.delete('sort');
                  else params.set('sort', e.target.value);
                  window.history.pushState(null, '', `?${params.toString()}`);
                }}
              >
                <option value="default">Relevance</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Highest Rated</option>
              </select>
            </div>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <Skeleton className="h-[350px] w-full rounded-none" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-8 w-full mt-2" />
                </div>
              ))}
            </div>
          ) : isError ? (
            <div className="py-24 flex flex-col items-center justify-center text-center bg-zinc-50 border border-zinc-100 p-8">
              <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Something went wrong!</h3>
              <p className="text-zinc-500 mb-6">We couldn't load the products. Please try again.</p>
              <Button onClick={() => search ? searchRefetch() : catRefetch()} className="bg-[#d81b60] hover:bg-[#b0134d] text-white px-8 rounded-full">
                Retry
              </Button>
            </div>
          ) : products?.length === 0 ? (
            <div className="py-32 flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-zinc-100 rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="w-12 h-12 text-zinc-300" />
              </div>
              <h3 className="text-2xl font-serif text-zinc-900 mb-2">No products found</h3>
              <p className="text-zinc-500 mb-8 max-w-sm">We couldn't find anything matching your current filters. Try removing some filters to see more results.</p>
              <Button 
                onClick={() => window.location.href = '/products'} 
                className="bg-white border-2 border-[#d81b60] text-[#d81b60] hover:bg-[#d81b60] hover:text-white px-8 py-6 rounded-full font-bold uppercase tracking-wider transition-colors"
              >
                Clear All Filters
              </Button>
            </div>
          ) : (
            <>
              <ProductGrid products={products || []} />
              
              {/* Simple Pagination Mock UI */}
              {products && products.length > 0 && (
                <div className="flex justify-center items-center gap-2 mt-16 pt-8 border-t">
                  <Button variant="outline" className="w-10 h-10 p-0 rounded-full bg-zinc-100 border-none opacity-50 cursor-not-allowed">{'<'}</Button>
                  <Button variant="outline" className="w-10 h-10 p-0 rounded-full bg-[#d81b60] text-white border-[#d81b60]">1</Button>
                  <Button variant="outline" className="w-10 h-10 p-0 rounded-full hover:bg-zinc-100 border-transparent">2</Button>
                  <Button variant="outline" className="w-10 h-10 p-0 rounded-full hover:bg-zinc-100 border-transparent">3</Button>
                  <span className="px-2 text-zinc-400">...</span>
                  <Button variant="outline" className="w-10 h-10 p-0 rounded-full hover:bg-zinc-100 border-transparent">10</Button>
                  <Button variant="outline" className="w-10 h-10 p-0 rounded-full bg-zinc-100 border-none hover:bg-zinc-200">{'>'}</Button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="bg-white min-h-screen py-32 flex justify-center">
        <Skeleton className="h-[400px] w-full max-w-5xl" />
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
