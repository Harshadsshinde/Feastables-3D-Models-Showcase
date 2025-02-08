import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Checkout({ cartOpen, setCartOpen }) {
  const { cartItems, removeFromCart } = useCart();
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (!cartOpen) return null;

  const handleCheckout = () => {
    // Implement your checkout logic here
    // For example, redirect to a payment gateway or process payment
    alert('Proceeding to checkout!');
  };

  return (
    <div className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg z-50 flex flex-col p-6">
      <button
        className="absolute top-4 right-6 text-gray-600"
        onClick={() => setCartOpen(false)}
      >
        <X size={24} />
      </button>

      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      <div className="flex-1 overflow-y-auto">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4 border-b pb-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <p>
                {item.name} - ${item.price.toFixed(2)} x {item.quantity}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))
        )}
      </div>

      <p className="text-xl font-bold">
        Subtotal: ${subtotal.toFixed(2)}
      </p>

      {cartItems.length > 0 && (
        <button
          onClick={handleCheckout}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Checkout
        </button>
      )}
    </div>
  );
}
