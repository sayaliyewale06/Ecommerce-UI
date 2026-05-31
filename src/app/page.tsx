import { HeroSection } from '@/components/sections/HeroSection';
import { CategorySection } from '@/components/sections/CategorySection';
import { ProductGrid } from '@/components/product/ProductGrid';
import { getProducts } from '@/services/api';
import Link from 'next/link';

export default async function HomePage() {
  const featured = await getProducts(8, 0);
  const newArrivals = await getProducts(4, 20);

  return (
    <div className="flex flex-col min-h-screen pb-12 bg-[#fafafa]">
      <HeroSection />
      
      <section className="container py-16 mx-auto px-4 mt-12 bg-white rounded-3xl shadow-sm border border-pink-50">
        <CategorySection />
      </section>

      <section className="container py-16 mx-auto px-8 mt-12 bg-[#fff0f5] rounded-3xl mb-12 shadow-sm border border-pink-100">
        <div className="flex justify-between items-end mb-10 border-b border-pink-200 pb-4">
          <div>
            <h2 className="text-3xl font-serif text-zinc-900">Our Featured <span className="text-[#d81b60] font-bold">Collection</span></h2>
          </div>
          <Link href="/products" className="text-sm font-bold text-[#d81b60] hover:text-[#b0134d] uppercase underline underline-offset-4">
            View Details
          </Link>
        </div>
        <ProductGrid products={featured.products} />
      </section>

      {/* Colorful Promotional Widget */}
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-gradient-to-r from-[#d81b60] to-[#ff4081] rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between shadow-xl">
          <div className="max-w-xl text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-bold font-serif mb-3 drop-shadow-md">Huge Festive Sale!</h2>
            <p className="text-pink-100 text-lg">Get up to 50% off on all Premium Ethnic Wear. Offer ends this weekend.</p>
          </div>
          <Link href="/products?sort=price-asc" className="bg-white text-[#d81b60] px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-pink-50 transition-colors shadow-lg">
            Shop The Sale
          </Link>
        </div>
      </section>

      <section className="container py-16 mx-auto px-8 mt-4 bg-white rounded-3xl shadow-sm border border-zinc-100">
        <div className="flex justify-between items-end mb-10 border-b pb-4">
          <div>
            <h2 className="text-3xl font-serif text-zinc-900">New <span className="text-[#d81b60] font-bold">Arrivals</span></h2>
          </div>
          <Link href="/products?sort=new" className="text-sm font-bold text-[#d81b60] hover:text-[#b0134d] uppercase underline underline-offset-4">
            View Details
          </Link>
        </div>
        <ProductGrid products={newArrivals.products} />
      </section>
    </div>
  );
}
