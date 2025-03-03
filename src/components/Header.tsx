import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-pink-500 p-2 rounded-full mr-2">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">Bloom Fitness</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors duration-300">ホーム</a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors duration-300">特徴</a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors duration-300">料金</a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors duration-300">実績</a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors duration-300">よくある質問</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300">
              無料カウンセリング
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-pink-500 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors duration-300">ホーム</a>
              <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors duration-300">特徴</a>
              <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors duration-300">料金</a>
              <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors duration-300">実績</a>
              <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors duration-300">よくある質問</a>
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300 w-full">
                無料カウンセリング
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;