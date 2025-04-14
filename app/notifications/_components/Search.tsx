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
    <div className="w-full">
      {/* users selected products */}
      <section>
        <h2 className="italic">You will be notified when we restock...</h2>
        <ul className="flex flex-wrap gap-y-2 gap-x-2 outline-1 outline-muted p-2 rounded-xl">
          {selectedProducts.length === 0 && <p>Nothing selected, add products below!</p>}
          {selectedProducts.map((product) => (
            <li key={product.id} className="bg-gray-300 rounded-xl pl-2 p-1 flex gap-x-2">
              {product.name}
              <button className="!outline-0" onClick={() => handleRemove(product.id)}><FaRegTrashCan /></button>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-5 italic">Add products to notification list</p>
      <div className="flex gap-x-5 itens-center align-middle">
        <select className="bg-gray-300 rounded-xl px-2" value={selectedId} onChange={handleSelect}>
          <option value="">-- Choose a product --</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
        <button onClick={() => handleSave()}>Add</button>
      </div>
    </div>
  );
}

