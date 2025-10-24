import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const ProductList = ({ plants, addToCart, cartItemCount }) => {
  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header cartItemCount={cartItemCount} />
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Nos Plantes</h2>
        {categories.map((category) => (
          <div key={category} className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div
                    key={plant.id}
                    className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
                  >
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h4 className="text-lg font-semibold">{plant.name}</h4>
                    <p className="text-gray-600 mb-2">{plant.price.toFixed(2)} €</p>
                    <button
                      onClick={() => addToCart(plant)}
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
                    >
                      Ajouter au panier
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;