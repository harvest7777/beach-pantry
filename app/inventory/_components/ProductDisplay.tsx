import { Product } from "../_data/products"
import { BsInfoCircle } from "react-icons/bs";
import ProductInfoModal from "./ProductInfoModal";
import { useState } from "react";

interface ProductDisplayProps {
  product: Product;
}
const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className="w-60 overflow-hidden rounded-xl outline-1 outline-muted p-2">
      <ProductInfoModal product={product} visible={visible} setVisible={setVisible} />
      <div className="h-40 bg-gray-500">
        image would go here
      </div>
      <h1 className="font-bold">{product.name}</h1>
      <h2>Quantity: {product.quantity}</h2>
      <span onClick={() => setVisible(true)} className="flex gap-x-2 items-center ">
        <BsInfoCircle />
        More info
      </span>
    </div>
  )
}

export default ProductDisplay;
