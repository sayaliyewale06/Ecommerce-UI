'use client';

import Link from 'next/link';
import { Search, Heart, ShoppingBag, User, Menu } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 md:h-20 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
        
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Mobile Menu Icon */}
          <button className="md:hidden text-zinc-600 hover:text-[#d81b60]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-[#d81b60] shrink-0 mx-auto md:mx-0">
            <ShoppingBag className="w-8 h-8" />
            <span className="font-serif">GG Fashion</span>
          </Link>

          {/* Mobile Cart (Right aligned) */}
          <button className="md:hidden text-zinc-600 hover:text-[#d81b60]">
            <ShoppingBag className="w-6 h-6" />
          </button>
        </div>

        {/* Search Bar - Visible on both mobile and desktop */}
        <form onSubmit={handleSearch} className="flex-1 w-full max-w-2xl relative order-last md:order-none">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products, brands and more..." 
            className="w-full bg-zinc-100 rounded-full py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-[#d81b60]/20 transition-all border border-transparent focus:border-[#d81b60]/30 shadow-inner"
          />
          <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </form>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6 shrink-0 text-zinc-600">
          <button className="hover:text-[#d81b60] transition-colors flex flex-col items-center gap-1 group">
            <Heart className="w-6 h-6 group-hover:fill-[#d81b60]/20" />
            <span className="text-[10px] uppercase font-semibold hidden sm:block">Wishlist</span>
          </button>
          <button className="hover:text-[#d81b60] transition-colors flex flex-col items-center gap-1 group">
            <ShoppingBag className="w-6 h-6 group-hover:fill-[#d81b60]/20" />
            <span className="text-[10px] uppercase font-semibold hidden sm:block">Cart</span>
          </button>
          <button className="hover:text-[#d81b60] transition-colors flex flex-col items-center gap-1 group">
            <User className="w-6 h-6 group-hover:fill-[#d81b60]/20" />
            <span className="text-[10px] uppercase font-semibold hidden sm:block">Profile</span>
          </button>
        </div>
      </div>
    </header>
  );
}
