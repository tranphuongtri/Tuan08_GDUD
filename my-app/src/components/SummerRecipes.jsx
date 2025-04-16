import React from 'react';

const recipes = [
  {
    title: 'Italian-style tomato',
    time: '10 minutes',
    img: '/img2.png'
  },
  {
    title: 'Spaghetti with vegetables and shrimp',
    time: '15 minutes',
    img: '/img3.png'
  },
  {
    title: 'Lotus delight salad',
    time: '20 minutes',
    img: '/img4.png'
  },
  {
    title: 'Snack cakes',
    time: '25 minutes',
    img: '/img5.png'
  }
];

export default function SummerRecipes() {
  return (
    <section className="px-8 py-10">
      <h2 className="text-2xl font-bold text-center text-pink-600 mb-4">This Summer Recipes</h2>
      <p className="text-center text-gray-500 mb-8">We have all your Independence Day sweets covered.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {recipes.map((item, index) => (
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
