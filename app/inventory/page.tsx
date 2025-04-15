"use client";
import { useState, useEffect, useRef } from 'react';
import { Product } from './_data/products';
import { products } from './_data/products';
import { TFilter } from './_data/filters';
import { prettyFilters } from './_data/filters';
import ProductDisplay from './_components/ProductDisplay';
import FilterButton from './_components/Filter';

export default function InventoryPage() {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if Ctrl + K is pressed
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      {/* search */}
      <section className="mt-5 flex justify-between gap-x-2">
        <input
          type="text"
          ref={inputRef}
          placeholder="ex: watermelon   ⌘ K"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
          className='w-full'
        />
        <div className="flex gap-x-2">
          <button onClick={handleSearch}>Search</button>
          <FilterButton filters={filters} setFilters={setFilters} />
        </div>
      </section >

      {/* filter display */}
      < ul className='flex gap-x-2 mt-2 mb-5' >
        <p>applied filters: </p>
        {Object.values(filters).filter(Boolean).length === 0 && <li>None</li>}
        {
          Object.entries(filters).map(([key, enabled]) => (
            enabled &&
            <li key={key}>
              {prettyFilters[key as keyof TFilter]}
            </li>
          ))
        }
      </ul >

      <div className="flex gap-x-10 flex-wrap justify-center gap-y-8">
        {searchTerm && filteredProducts.length === 0 && (
          <p>No results found.</p>
        )}

        {filteredProducts.map(product => (
          <ProductDisplay key={product.id} product={product} />
        ))}
      </div>
    </div >
  );
};
