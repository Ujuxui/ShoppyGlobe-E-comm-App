import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, modifyQuantity } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="px-4 sm:px-8 lg:px-28">
      <h1 className="text-xl sm:text-3xl font-bold mt-16">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-xl sm:text-3xl font-bold mt-20 mb-32">
          ... is empty. Start Shopping!
        </p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 sm:grid-cols-5 gap-4 mt-8 ml-8 mr-28 items-center sm:shadow rounded shadow-blue-200"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-32 h-28 mx-auto bg-gray-200"
            />
            <h4>{item.title}</h4>
            <div>
              {/* Quantity Modifier */}
              <label className="mr-2">Qty:</label>
              <input
                type="number"
                value={item.quantity}
                min="1"
                className="border rounded w-10 text-end"
                onChange={(e) =>
                  dispatch(
                    modifyQuantity({
                      id: item.id,
                      quantity: Number(e.target.value),
                    })
                  )
                }
              />
            </div>
            <div>
              <p>
                ${item.price} x {item.quantity}
              </p>
            </div>
            {/* Remove Button */}
            <button
              className="text-xs font-light ml-8 p-1 bg-gray-200 w-12 rounded"
              onClick={() => dispatch(removeItem(item.id))}
            >
              Remove
            </button>
          </div>
        ))
      )}
      {/* Total Price */}
      <div className="mt-8 text-xl sm:text-2xl font-bold flex justify-center">
        Total: ${totalPrice.toFixed(2)}
      </div>
      {/* Nav Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 justify-between mr-28 mb-16 mt-16">
        <button className="bg-blue-600 p-3 rounded text-white scale-100 hover:sclae-110">
          <Link to="/products">&#x2190; Back to Shop</Link>
        </button>
        <button className="bg-blue-600 p-3 rounded text-white scale-100 hover:sclae-110">
          <Link to="/checkout">Checkout &#x2192;</Link>
        </button>
      </div>
    </div>
  );
};

export default Cart;
