import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="text-sm rounded-md shadow mx-auto bg-gray-200 p-8 scale-100 hover:scale-105">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-44 h-40 mx-auto rounded bg-white"
        />
        <h2 className="mt-2">{product.title}</h2>
        <p className="font-medium">${product.price}</p>
      </Link>

      {/* Add to Cart Button */}
      <button
        className="text-white bg-blue-600 p-1 w-44 mt-3 rounded shadow scale-100 hover:scale-110 mx-auto block cursor-pointer"
        onClick={() => {
          dispatch(addItem(product));
        }}
      >
        Add to Cart
      </button>
      
    </div>
  );
};

export default ProductItem;
