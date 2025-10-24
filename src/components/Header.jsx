import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ cartItemCount }) => {
  const location = useLocation();
  const isProductPage = location.pathname === '/products';
  const isCartPage = location.pathname === '/cart';

  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Paradise Nursery</h1>
        <nav className="flex items-center">
          {isProductPage && (
            <Link to="/cart" className="mr-4 hover:underline">
              Panier
            </Link>
          )}
          {isCartPage && (
            <Link to="/products" className="mr-4 hover:underline">
              Produits
            </Link>
          )}
          <Link to="/cart" className="relative">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;