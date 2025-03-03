import { useState } from 'react';
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
            <span className="text-xl font-bold text-gray-800">遺伝子検査付ダイエットコース</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-500 transition-colors duration-300">ホーム</a>
            <a href="#" className="text-gray-700 hover:text-green-500 transition-colors duration-300">遺伝子検査</a>
            <a href="#" className="text-gray-700 hover:text-green-500 transition-colors duration-300">コース内容</a>
            <a href="#" className="text-gray-700 hover:text-green-500 transition-colors duration-300">料金</a>
            <a href="#" className="text-gray-700 hover:text-green-500 transition-colors duration-300">よくある質問</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300">
              お申し込み
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-500 focus:outline-none"
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
              <a href="#" className="text-gray-700 hover:text-green-500 transition-colors duration-300">ホーム</a>
              <a href="#" className="text-gray-700 hover:text-green-500 transition-colors duration-300">遺伝子検査</a>
              <a href="#" className="text-gray-700 hover:text-green-500 transition-colors duration-300">コース内容</a>
              <a href="#" className="text-gray-700 hover:text-green-500 transition-colors duration-300">料金</a>
              <a href="#" className="text-gray-700 hover:text-green-500 transition-colors duration-300">よくある質問</a>
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300 w-full">
                お申し込み
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
