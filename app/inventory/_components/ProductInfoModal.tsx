"use client";
import { SetStateAction } from "react";
import { Product } from "../_data/products";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-50">
          <div
            className="absolute top-0 left-0 w-full h-full bg-muted opacity-50"
            onClick={() => setVisible(false)}
          />

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="z-50 rounded-xl p-4 w-92 bg-white flex flex-col items-center"
          >
            <h2 className="text-xl font-bold mb-4 text-center">{product.name}</h2>
            <ul className="w-full space-y-2 divide-y-1 divide-muted outline-muted outline-2 pt-1 px-2 rounded-xl">
              {nutritionInfo.map((info) => (
                <li key={info.label}>
                  <strong>{info.label}:</strong> {info.value}
                </li>
              ))}
            </ul>
            <button className="mt-5 bg-red-400" onClick={() => setVisible(false)}>
              Close
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductInfoModal;

