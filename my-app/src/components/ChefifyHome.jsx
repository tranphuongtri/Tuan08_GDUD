import React from 'react';
import Header from './HeaderMenu';
import HeroSection from './HeroSection';
import SummerRecipes from './SummerRecipes';
import VideoRecipes from './VideoRecipes';
import EditorsPick from './EditorsPick';
import Footer from './Footer';
export default function ChefifyHome() {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <HeroSection />
      <SummerRecipes />
      <VideoRecipes />
      <EditorsPick />
      <Footer />
    </div>
  );
}
