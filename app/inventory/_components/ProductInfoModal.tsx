"use client";
import { SetStateAction } from "react";
import { Product } from "../_data/products";

interface ProductInfoModalProps {
  product: Product;
  visible: boolean;
  setVisible: React.Dispatch<SetStateAction<boolean>>;
}

const ProductInfoModal: React.FC<ProductInfoModalProps> = ({ product, visible, setVisible }) => {
  const nutritionInfo = [
    { label: "Calories", value: product.calories },
    { label: "Sugar", value: `${product.sugarGrams}g` },
    { label: "Carbs", value: `${product.carbohydratesGrams}g` },
    { label: "Protein", value: `${product.proteinGrams}g` },
    { label: "Servings", value: product.servingsPer },
    ...(product.isVegan ? [{ label: "Vegan", value: "Yes" }] : []),
    ...(product.isHighProtein ? [{ label: "High Protein", value: "Yes" }] : []),
    ...(product.isDairyFree ? [{ label: "Dairy Free", value: "Yes" }] : []),
    ...(product.isGlutenFree ? [{ label: "Gluten Free", value: "Yes" }] : []),
  ];
  if (!visible) return;

  return (
    <div className="fixed top-0 left-0 w-full h-screen flex items-center align-middle justify-center z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-muted opacity-50"></div>

      <div className="z-50 rounded-xl p-4 w-92 bg-white flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4 text-center">{product.name}</h2>
        <ul className="w-full space-y-2 divide-y-1 divide-muted outline-muted outline-2 pt-1 px-2 rounded-xl">
          {nutritionInfo.map((info) => (
            <li key={info.label}>
              <strong>{info.label}:</strong> {info.value}
            </li>
          ))}
        </ul>
        <button className="mt-5 bg-red-400" onClick={() => setVisible(false)}>Close</button>
      </div>
    </div>
  )
}

export default ProductInfoModal;
