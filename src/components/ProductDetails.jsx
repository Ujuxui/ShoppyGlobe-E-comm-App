import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem, modifyQuantity } from "../utils/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

    /* Fetching Product Data */
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  if (!product) return <p className="text-center">Loading...</p>;

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 p-6 max-w-6xl mx-auto">
        <div className="flex flex-col gap-4">
          {/* Product Image */}
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full max-w-[600px] h-[300px] sm:h-[250px] md:h-[300px] lg:h-[550px] rounded bg-gray-300 object-contain"
          />

          {/* Barcode & QR Code */}
          <div className="mt-4 flex justify-center gap-16">
            <div>
              <h3 className="text-md font-semibold mb-2">Product Barcode</h3>
              <p className="text-sm text-gray-700">
                Barcode: {product.meta.barcode}
              </p>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-2">Scan QR Code</h3>
              <img
                src={product.meta.qrCode}
                alt="QR Code"
                className="h-32 w-32 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 mt-4">
          <h2 className="text-3xl font-medium mb-2">{product.title}</h2>
          <span className="text-gray-500 mr-4">{product.brand}</span>
          <span className="font-light bg-gray-300 rounded px-2">
            {product.category}
          </span>
          <p className="text-4xl mt-8 mb-8">${product.price}</p>
          <p>{product.description}</p>

          {/* Product Specifications */}
          <div className="mt-4">
            <p className="text-sm text-gray-700 mt-4">SKU: {product.sku}</p>
            <p className="text-sm text-gray-700">Weight: {product.weight}g</p>
            <p className="text-sm text-gray-700">
              Dimensions: {product.dimensions.width}cm x{" "}
              {product.dimensions.height}cm x {product.dimensions.depth}cm
            </p>
            <p className="mt-4 text-sm text-gray-700">
              <strong>
                Minimum Order: {product.minimumOrderQuantity} units
              </strong>
            </p>
            <p className="mt-4 text-sm text-gray-700">
              Warranty: {product.warrantyInformation}
            </p>
            <p className="text-sm text-gray-700">
              Shipping: {product.shippingInformation}
            </p>

            {/* Return Policy */}
            <p className="mt-4 text-sm text-gray-700">
              <strong>Return Policy: {product.returnPolicy}</strong>
            </p>
          </div>

          {/* Add To Cart Button */}
          <button
            className="mt-8 text-white bg-blue-600 py-2 px-6 md:w-xl xl:w-2xl rounded shadow scale-100 hover:scale-105 cursor-pointer"
            onClick={() => {
              dispatch(addItem(product));
            }}
          >
            Add to Cart
          </button>

          {/* Reviews Section */}
          <div className="mt-12 mb-12">
            <h3 className="text-xl font-semibold mb-2">Customer Reviews</h3>
            {product.reviews.length > 0 ? (
              <ul className="space-y-4">
                {product.reviews.map((review, index) => (
                  <li
                    key={index}
                    className="p-4 shadow shadow-blue-200 rounded"
                  >
                    <p className="text-sm text-gray-700">
                      <strong>{review.reviewerName}:</strong> {review.comment}
                    </p>
                    <p className="text-sm text-gray-500">
                      ⭐ {review.rating} / 5 |{" "}
                      {new Date(review.date).toDateString()}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No reviews yet.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
