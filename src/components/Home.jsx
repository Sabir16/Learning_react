import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: 'url(https://source.unsplash.com/1600x900/?nature,plants)',
      }}
    >
      <h1 className="text-5xl font-bold mb-4">Paradise Nursery</h1>
      <p className="text-lg max-w-md text-center mb-6">
        Bienvenue chez Paradise Nursery, votre destination pour les plus belles plantes d’intérieur.
        Explorez notre collection soigneusement sélectionnée pour apporter la nature chez vous.
      </p>
      <Link to="/products">
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
          Commencer
        </button>
      </Link>
    </div>
  );
};

export default Home;