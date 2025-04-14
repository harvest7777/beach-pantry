"use client";
import { useState } from 'react';
import { Product } from './_data/products';
import { products } from './_data/products';
import { TFilter } from './_data/filters';
import { prettyFilters } from './_data/filters';
import ProductDisplay from './_components/ProductDisplay';
import FilterButton from './_components/Filter';

export default function InventoryPage() {
  const [input, setInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<TFilter>({
    isVegan: false,
    isDairyFree: false,
    isHighProtein: false,
    isGlutenFree: false,
  });

  const handleSearch = () => {
    setSearchTerm(input);
  };

  const filteredProducts: Product[] = products.filter(product => {
    try {
      const regex = new RegExp(searchTerm, 'i');

      const matchesSearch = regex.test(product.name);

      const matchesFilters =
        (!filters.isVegan || product.isVegan) &&
        (!filters.isDairyFree || product.isDairyFree) &&
        (!filters.isHighProtein || product.isHighProtein) &&
        (!filters.isGlutenFree || product.isGlutenFree);

      return matchesSearch && matchesFilters;
    } catch {
      return [];
    }
  });

  return (
    <div>
      {/* search */}
      <section className="mt-5 flex justify-between gap-x-2">
        <input
          type="text"
          placeholder="ex: eggs"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <div className="flex gap-x-2">
          <button onClick={handleSearch}>Search</button>
          <FilterButton filters={filters} setFilters={setFilters} />
        </div>
      </section>

      {/* filter display */}
      <ul className='flex gap-x-2 mt-2 mb-5'>
        <p>applied filters: </p>
        {Object.entries(filters).map(([key, enabled]) => (
          enabled &&
          <li key={key}>
            {prettyFilters[key as keyof TFilter]}
          </li>
        ))}
      </ul>

      <div className="flex gap-x-10 flex-wrap justify-center gap-y-8">
        {searchTerm && filteredProducts.length === 0 && (
          <p>No results found.</p>
        )}

        {filteredProducts.map(product => (
          <ProductDisplay key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
