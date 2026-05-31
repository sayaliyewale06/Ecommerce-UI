import { getCategories } from '@/services/api';
import Link from 'next/link';

export async function CategorySection() {
  const categories = await getCategories();
  // DummyJSON returns category objects now: { slug, name, url }
  const topCategories = categories.slice(0, 6);

  const placeholders = [
    'https://picsum.photos/seed/fashion1/200/200',
    'https://picsum.photos/seed/fashion2/200/200',
    'https://picsum.photos/seed/fashion3/200/200',
    'https://picsum.photos/seed/fashion4/200/200',
    'https://picsum.photos/seed/fashion5/200/200',
    'https://picsum.photos/seed/fashion6/200/200'
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-2">Celebrate Every Occasion In Style</h2>
      <h3 className="text-3xl font-serif mb-12">Shop by <span className="text-[#d81b60] font-bold">Category</span></h3>

      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {topCategories.map((categoryItem, index) => {
          // DummyJSON API changed recently; this handles both old (string array) and new (object array) formats.
          const catSlug = typeof categoryItem === 'string' ? categoryItem : categoryItem.slug;
          const catName = typeof categoryItem === 'string' ? categoryItem : categoryItem.name;

          return (
            <Link
              key={catSlug}
              href={`/products?category=${catSlug}`}
              className="group flex flex-col items-center gap-4 w-28"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#d81b60] group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 p-1">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={placeholders[index % placeholders.length]} 
                    alt={catName} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <span className="text-sm font-bold text-zinc-800 group-hover:text-[#d81b60] text-center capitalize transition-colors">
                {catName.replace('-', ' ')}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
