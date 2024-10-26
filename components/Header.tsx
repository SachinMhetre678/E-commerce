"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Bell, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 text-transparent bg-clip-text">
              ECOMMERCE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/categories" 
                  className="text-gray-700 hover:text-indigo-600 transition-colors">
              Categories
            </Link>
            <Link href="/sale" 
                  className="text-gray-700 hover:text-indigo-600 transition-colors">
              Sale
            </Link>
            <Link href="/clearance" 
                  className="text-gray-700 hover:text-indigo-600 transition-colors">
              Clearance
            </Link>
            <Link href="/new" 
                  className="text-gray-700 hover:text-indigo-600 transition-colors">
              New stock
            </Link>
            <Link href="/trending" 
                  className="text-gray-700 hover:text-indigo-600 transition-colors">
              Trending
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/categories" 
                    className="text-gray-700 hover:text-indigo-600 transition-colors">
                Categories
              </Link>
              <Link href="/sale" 
                    className="text-gray-700 hover:text-indigo-600 transition-colors">
                Sale
              </Link>
              <Link href="/clearance" 
                    className="text-gray-700 hover:text-indigo-600 transition-colors">
                Clearance
              </Link>
              <Link href="/new" 
                    className="text-gray-700 hover:text-indigo-600 transition-colors">
                New stock
              </Link>
              <Link href="/trending" 
                    className="text-gray-700 hover:text-indigo-600 transition-colors">
                Trending
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;