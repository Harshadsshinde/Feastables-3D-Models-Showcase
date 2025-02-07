import React from "react";
import { X, Trash2 } from "lucide-react";

export default function Checkout({ cartOpen, setCartOpen }) {
  const cartItems = []; // Dummy cart items for now
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (!cartOpen) return null; // Hide cart when not open

  return (
    <div className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg z-50 flex flex-col p-6">
      {/* Close Button */}
      <button className="absolute top-4 right-6 text-gray-600" onClick={() => setCartOpen(false)}>
        <X size={24} />
      </button>

      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4 border-b pb-2">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600">${item.price} x {item.quantity}</p>
                </div>
              </div>
              <button className="text-red-500">
                <Trash2 size={20} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Subtotal and Checkout */}
      <div className="border-t pt-4">
        <p className="text-xl font-bold">Subtotal: ${subtotal.toFixed(2)}</p>
        <button className="block mt-4 bg-blue-500 text-white py-3 text-center rounded-lg font-bold w-full">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
