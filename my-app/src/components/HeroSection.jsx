import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative h-[600px]">
      <img
        src="/img1.png"
        alt="Hero"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 bg-white p-6 rounded-xl shadow-xl max-w-md">
        <div className="text-sm bg-yellow-300 inline-block px-3 py-1 rounded-full mb-2">Recipe of the day</div>
        <h2 className="text-xl font-bold text-pink-600 mb-2">Salad Caprese</h2>
        <p className="text-sm text-gray-600 mb-4">
          Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
        </p>
        <div className="flex items-center gap-2 text-sm mb-4">
          <img src="/avatar.jpg" alt="Chef" className="w-6 h-6 rounded-full" />
          <span>Salad Caprese</span>
        </div>
        <button className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 text-sm">View now</button>
      </div>
    </section>
  );
}
