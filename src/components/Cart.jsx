import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Cart = ({ cart, updateQuantity, removeFromCart, cartItemCount }) => {
  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header cartItemCount={cartItemCount} />
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Votre Panier</h2>
        <div className="mb-4">
          <p className="text-lg font-semibold">
            Total des articles : {cartItemCount}
          </p>
          <p className="text-lg font-semibold">
            Coût total : {totalCost.toFixed(2)} €
          </p>
        </div>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Votre panier est vide.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-4 flex items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md mr-4"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-gray-600">Prix unitaire : {item.price.toFixed(2)} €</p>
                  <p className="text-gray-600">Total : {(item.price * item.quantity).toFixed(2)} €</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-2 rounded mr-2"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-2 rounded mr-2"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-600 hover:bg-red-700 text-white py-1 px-2 rounded"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-6 flex justify-between">
          <Link to="/products">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              Continuer les achats
            </button>
          </Link>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
            Passer à la caisse
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;