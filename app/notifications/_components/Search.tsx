"use client";
import { useState, useEffect } from "react";
import { products } from "@/app/inventory/_data/products";
import { FaRegTrashCan } from "react-icons/fa6";

export default function Search() {
  const [selectedId, setSelectedId] = useState<number>(-1);
  const [idList, setIdList] = useState<number[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("selectedProductIds") || "[]");
    const parsed = stored.map((id: string) => Number(id)); // convert string IDs to numbers
    setIdList(parsed);
    console.log(parsed);
  }, []);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = Number(e.target.value);
    setSelectedId(id);

  };

  const handleSave = () => {
    const product = products.find((p) => p.id === selectedId);
    if (product) {
      const existing = JSON.parse(localStorage.getItem("selectedProductIds") || "[]");
      if (!existing.includes(String(selectedId))) {
        const updated = [...existing, String(selectedId)];
        localStorage.setItem("selectedProductIds", JSON.stringify(updated));
        setIdList((prev) => [...prev, selectedId])
        console.log("Updated product IDs in localStorage:", updated);
      }
    }
  }

  const handleRemove = (id: number) => {
    const existing = JSON.parse(localStorage.getItem("selectedProductIds") || "[]");
    const updatedStorage = existing.filter((storedId: string) => Number(storedId) !== id);
    localStorage.setItem("selectedProductIds", JSON.stringify(updatedStorage));

    setIdList((prev) => prev.filter((pid) => pid !== id));
  }

  const selectedProducts = products.filter((product) => idList.includes(product.id));
  return (
    <div>
      {/* users selected products */}
      <section>
        <h2>You will be notified when we restock...</h2>
        <ul className="flex gap-x-2">
          {selectedProducts.map((product) => (
            <li key={product.id} className="flex gap-x-2">
              {product.name}
              <button onClick={() => handleRemove(product.id)}><FaRegTrashCan /></button>
            </li>
          ))}
        </ul>
      </section>
      <label>Select a product: </label>
      <select value={selectedId} onChange={handleSelect}>
        <option value="">-- Choose a product --</option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select>
      <button onClick={() => handleSave()}>save</button>
    </div>
  );
}

