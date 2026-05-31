import { MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t mt-12 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#d81b60]">GG Fashion</h4>
            <p className="text-zinc-500 text-sm mb-6 max-w-xs">
              Your ultimate destination for traditional and modern ethnic wear. Elevating your style quotient effortlessly.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-[#d81b60] hover:text-white transition-colors text-xs font-bold">fb</a>
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-[#d81b60] hover:text-white transition-colors text-xs font-bold">tw</a>
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-[#d81b60] hover:text-white transition-colors text-xs font-bold">ig</a>
              <a href="#" className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center hover:bg-[#d81b60] hover:text-white transition-colors text-xs font-bold">yt</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-[#d81b60]">About Us</a></li>
              <li><a href="#" className="hover:text-[#d81b60]">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#d81b60]">Track Order</a></li>
              <li><a href="#" className="hover:text-[#d81b60]">Return Policy</a></li>
              <li><a href="#" className="hover:text-[#d81b60]">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-sm">Top Categories</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li><a href="/products?category=womens-dresses" className="hover:text-[#d81b60]">Women's Dresses</a></li>
              <li><a href="/products?category=womens-shoes" className="hover:text-[#d81b60]">Women's Shoes</a></li>
              <li><a href="/products?category=mens-shirts" className="hover:text-[#d81b60]">Men's Shirts</a></li>
              <li><a href="/products?category=mens-shoes" className="hover:text-[#d81b60]">Men's Shoes</a></li>
              <li><a href="/products?category=womens-watches" className="hover:text-[#d81b60]">Watches</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-sm">Contact Info</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-[#d81b60]" />
                <span>123 Fashion Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-[#d81b60]" />
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-[#d81b60]" />
                <span>support@ggfashion.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© 2026 GG Fashion. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="font-bold text-lg">VISA</span>
            <span className="font-bold text-lg">MasterCard</span>
            <span className="font-bold text-lg">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
