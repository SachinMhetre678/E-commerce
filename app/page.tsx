"use client";

import Link from 'next/link';
import { useState } from 'react';
import { 
  ArrowRight, 
  Laptop, 
  Shirt, 
  Home as HomeIcon, 
  Sparkles, 
  Dumbbell, 
  Book,
  ShoppingBag,
  Timer,
  Heart,
  Zap
} from 'lucide-react';
import Header from '../components/Header';

interface Category {
  name: string;
  icon: React.ReactNode;
  color: string;
  itemCount: number;
  gradient: string;
}

const categories: Category[] = [
  {
    name: 'Electronics',
    icon: <Laptop className="w-6 h-6" />,
    color: 'text-blue-500',
    itemCount: 1200,
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    name: 'Fashion',
    icon: <Shirt className="w-6 h-6" />,
    color: 'text-purple-500',
    itemCount: 850,
    gradient: 'from-purple-500 to-pink-400'
  },
  {
    name: 'Home',
    icon: <HomeIcon className="w-6 h-6" />,
    color: 'text-green-500',
    itemCount: 650,
    gradient: 'from-green-500 to-emerald-400'
  },
  {
    name: 'Beauty',
    icon: <Sparkles className="w-6 h-6" />,
    color: 'text-pink-500',
    itemCount: 450,
    gradient: 'from-pink-500 to-rose-400'
  },
  {
    name: 'Sports',
    icon: <Dumbbell className="w-6 h-6" />,
    color: 'text-orange-500',
    itemCount: 320,
    gradient: 'from-orange-500 to-amber-400'
  },
  {
    name: 'Books',
    icon: <Book className="w-6 h-6" />,
    color: 'text-indigo-500',
    itemCount: 980,
    gradient: 'from-indigo-500 to-violet-400'
  }
];

const HomePage = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Discover Your Perfect
                <span className="block text-indigo-600">Shopping Categories</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                Join our platform to get personalized recommendations and never miss out on the latest trends in your favorite categories.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/auth/register/step1"
                  className="inline-flex items-center justify-center px-6 py-3 
                           border border-transparent text-base font-medium rounded-lg
                           text-white bg-indigo-600 hover:bg-indigo-700 
                           transition-colors duration-200"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/auth/login"
                  className="inline-flex items-center justify-center px-6 py-3 
                           border border-gray-300 text-base font-medium rounded-lg
                           text-gray-700 bg-white hover:bg-gray-50 
                           transition-colors duration-200"
                >
                  Sign In
                </Link>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-indigo-600">100+</div>
                <div className="text-gray-600 mt-2">Categories Available</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-indigo-600">10k+</div>
                <div className="text-gray-600 mt-2">Active Users</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-indigo-600">24/7</div>
                <div className="text-gray-600 mt-2">Support Available</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-indigo-600">99%</div>
                <div className="text-gray-600 mt-2">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Popular Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular shopping categories, curated for your convenience and shopping pleasure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative group"
                onMouseEnter={() => setHoveredCategory(category.name)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="relative overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="p-8">
                    {/* Icon Container */}
                    <div className="mb-6">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} text-white transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        {category.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className={`text-xl font-semibold ${category.color} transition-colors duration-300`}>
                        {category.name}
                      </h3>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{category.itemCount.toLocaleString()} items</span>
                        <div className="flex items-center space-x-1">
                          <span className="text-sm font-medium">Explore</span>
                          <ArrowRight className={`w-4 h-4 transform transition-transform duration-300 ${
                            hoveredCategory === category.name ? 'translate-x-1' : ''
                          }`} />
                        </div>
                      </div>
                    </div>

                    {/* Interactive Elements */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      {hoveredCategory === category.name && (
                        <div className="flex space-x-2 animate-fadeIn">
                          <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
                            <Heart className="w-4 h-4 text-gray-400" />
                          </button>
                          <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
                            <ShoppingBag className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Border Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100`} />
                </div>

                {/* Quick Stats - Appears on Hover */}
                {hoveredCategory === category.name && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 animate-fadeIn">
                    <div className="bg-white rounded-full px-3 py-1 text-xs font-medium shadow-lg flex items-center space-x-1">
                      <Timer className="w-3 h-3 text-gray-400" />
                      <span>24h delivery</span>
                    </div>
                    <div className="bg-white rounded-full px-3 py-1 text-xs font-medium shadow-lg flex items-center space-x-1">
                      <Zap className="w-3 h-3 text-gray-400" />
                      <span>Trending</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="bg-indigo-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to start your journey?
          </h2>
          <p className="text-indigo-100 mb-8">
            Join thousands of satisfied users and discover your perfect categories today.
          </p>
          <Link 
            href="/auth/register/step1"
            className="inline-flex items-center justify-center px-6 py-3 
                     border border-transparent text-base font-medium rounded-lg
                     text-indigo-600 bg-white hover:bg-indigo-50 
                     transition-colors duration-200"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};



export default HomePage;