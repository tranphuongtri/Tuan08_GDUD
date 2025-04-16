import React from 'react';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md">
      <div className="text-pink-600 font-bold text-xl">🍴 Chefify</div>
      <input
        type="text"
        placeholder="What would you like to cook?"
        className="border px-4 py-2 rounded-md w-1/3"
      />
      <nav className="flex gap-6 text-sm font-medium">
        <a href="#" className="hover:text-pink-600">What to cook</a>
        <a href="#" className="hover:text-pink-600">Recipes</a>
        <a href="#" className="hover:text-pink-600">Ingredients</a>
        <a href="#" className="hover:text-pink-600">Occasions</a>
        <a href="#" className="hover:text-pink-600">About Us</a>
        <button className="text-pink-600 font-bold">Login</button>
        <button className="bg-pink-500 text-white px-4 py-1 rounded-full hover:bg-pink-600">Subscribe</button>
      </nav>
    </header>
  );
}
