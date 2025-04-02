import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  /* Fetching API */
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      {/* Search Functionality */}
      <input
        type="text"
        placeholder="Search Products"
        className="mt-12 border text-blue-600 p-2 rounded w-[40%] mb-4 mx-auto block scale-100 hover:scale-105"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {/* Product List */}
      <h1 className="text-3xl font-bold mt-12 ml-12">Popular Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-8 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-5 text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
