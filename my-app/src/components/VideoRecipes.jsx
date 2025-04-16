import React from 'react';

const videoRecipes = [
  { title: 'Salad with cabbage and shrimp', time: '30 minutes', img: '/img6.png' },
  { title: 'Salad of cove beans, shrimp and potatoes', time: '20 minutes', img: '/img7.png' },
  { title: 'Sunny-side up fried egg', time: '10 minutes', img: '/img8.png' },
  { title: 'Lotus delight salad', time: '20 minutes', img: '/img4.png' }
];

export default function VideoRecipes() {
  return (
    <section className="px-8 py-10 bg-gray-50">
      <h2 className="text-2xl font-bold text-center text-pink-600 mb-4">Recipes With Videos</h2>
      <p className="text-center text-gray-500 mb-8">Cooking Up Culinary Creations with Step-by-Step Videos</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {videoRecipes.map((item, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow hover:shadow-lg">
            <img src={item.img} alt={item.title} className="h-40 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-md mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
