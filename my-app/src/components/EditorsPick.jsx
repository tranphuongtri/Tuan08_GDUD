import React from 'react';

const picks = [
  {
    title: 'Stuffed sticky rice ball',
    time: '35 minutes',
    author: 'Jennifer King',
    description: 'Delightful Asian treat with chewy glutinous rice and flavorful surprise filling.',
    img: '/img9.png'
  },
  {
    title: 'Strawberry smoothie',
    time: '40 minutes',
    author: 'Matthew Martinez',
    description: 'Refreshing delight made with ripe strawberries.',
    img: '/img8.png'
  },
  {
    title: 'Latte Art',
    time: '15 minutes',
    author: 'Sarah Hill',
    description: 'Creating captivating designs on lattes.',
    img: '/img7.png'
  },
  {
    title: 'Butter fried noodles',
    time: '20 minutes',
    author: 'Julia Lopez',
    description: 'Savory noodles cooked in butter for a rich taste.',
    img: '/img8.png'
  }
];

export default function EditorsPick() {
  return (
    <section className="px-8 py-10">
      <h2 className="text-2xl font-bold text-center text-pink-600 mb-4">Editor's pick</h2>
      <p className="text-center text-gray-500 mb-8">Curated Culinary Delights - Handpicked Favorites by Our Expert Editors!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {picks.map((item, index) => (
          <div key={index} className="flex gap-4 bg-white shadow-md rounded-xl p-4 items-start">
            <img src={item.img} alt={item.title} className="w-24 h-24 object-cover rounded-xl" />
            <div>
              <h3 className="text-lg font-semibold text-pink-600">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-1">{item.time} - by {item.author}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
