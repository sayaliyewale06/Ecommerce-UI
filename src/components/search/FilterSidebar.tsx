'use client';

import { useCategories } from '@/hooks/useProducts';
import { useRouter, useSearchParams } from 'next/navigation';

export function FilterSidebar({ currentCategory }: { currentCategory: string }) {
  const { data: categories, isLoading } = useCategories();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategorySelect = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug === currentCategory) {
      params.delete('category'); // Deselect
    } else {
      params.set('category', slug);
    }
    // Reset pagination when filter changes
    params.delete('skip');
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold uppercase tracking-wider text-zinc-900">Filters</h2>
        <button 
          onClick={() => router.push('/products')}
          className="text-xs text-zinc-500 hover:text-[#d81b60] underline"
        >
          Clear All
        </button>
      </div>

      <div className="mb-8">
        <h3 className="font-bold mb-4 pb-2 border-b text-sm">CATEGORY</h3>
        {isLoading ? (
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-4 bg-zinc-100 rounded w-full animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
            {categories?.map((cat) => (
              <label key={cat.slug} className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors
                  ${currentCategory === cat.slug ? 'border-[#d81b60]' : 'border-zinc-300 group-hover:border-[#d81b60]'}`}
                >
                  {currentCategory === cat.slug && <div className="w-2 h-2 rounded-full bg-[#d81b60]" />}
                </div>
                <span className={`text-sm capitalize transition-colors ${currentCategory === cat.slug ? 'text-[#d81b60] font-medium' : 'text-zinc-600 group-hover:text-zinc-900'}`}>
                  {cat.name}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="mb-8">
        <h3 className="font-bold mb-4 pb-2 border-b text-sm">PRICE RANGE</h3>
        <div className="flex flex-col gap-3">
          {['Under $50', '$50 - $100', '$100 - $200', 'Over $200'].map((range, i) => (
            <label key={i} className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-zinc-300 text-[#d81b60] focus:ring-[#d81b60]" />
              <span className="text-sm text-zinc-600 group-hover:text-zinc-900">{range}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
