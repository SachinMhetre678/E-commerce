"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Laptop, Heart, Beaker, Palette, DollarSign, GraduationCap,
  Sword, Music, Film, Book, Shirt, Utensils, Plane, Car,
  Camera, Gamepad, Coffee, Home, Clock, Dumbbell, Baby,
  Hammer, Flower, Dog, Church, Vote, Brain, Newspaper, Share2,
  Bitcoin, Database, Bot, Shield, Blocks, Smartphone, Code, 
  Monitor, Cloud, Terminal, Glasses, ChevronRight
} from "lucide-react";

interface Category {
  id: number;
  name: string;
  description?: string;
  itemCount?: number;
}

// Enhanced mock data with descriptions and item counts
const mockCategories: Category[] = [
    { 
      id: 1, 
      name: "Technology", 
      description: "Latest tech trends and innovations", 
      itemCount: 156 
    },
    { 
      id: 2, 
      name: "Health", 
      description: "Wellness and medical insights", 
      itemCount: 98 
    },
    { 
      id: 3, 
      name: "Science", 
      description: "Exploring scientific discoveries and theories", 
      itemCount: 120 
    },
    { 
      id: 4, 
      name: "Art", 
      description: "Creative expressions and art movements", 
      itemCount: 75 
    },
    { 
      id: 5, 
      name: "Finance", 
      description: "Financial advice and market trends", 
      itemCount: 60 
    },
    { 
      id: 6, 
      name: "Education", 
      description: "Learning resources and educational insights", 
      itemCount: 45 
    },
    { 
      id: 7, 
      name: "Sports", 
      description: "Latest sports news and events", 
      itemCount: 85 
    },
    { 
      id: 8, 
      name: "Music", 
      description: "Genres, artists, and music trends", 
      itemCount: 40 
    },
    { 
      id: 9, 
      name: "Movies", 
      description: "Film reviews and industry news", 
      itemCount: 70 
    },
    { 
      id: 10, 
      name: "Books", 
      description: "Literature reviews and author interviews", 
      itemCount: 50 
    },
    { 
      id: 11, 
      name: "Fashion", 
      description: "Trends and tips in fashion", 
      itemCount: 30 
    },
    { 
      id: 12, 
      name: "Food", 
      description: "Recipes and culinary trends", 
      itemCount: 90 
    },
    { 
      id: 13, 
      name: "Travel", 
      description: "Travel guides and destination tips", 
      itemCount: 80 
    },
    { 
      id: 14, 
      name: "Automotive", 
      description: "Car reviews and automotive news", 
      itemCount: 35 
    },
    { 
      id: 15, 
      name: "Photography", 
      description: "Photography tips and techniques", 
      itemCount: 55 
    },
    { 
      id: 16, 
      name: "Gaming", 
      description: "Video game news and reviews", 
      itemCount: 65 
    },
    { 
      id: 17, 
      name: "Lifestyle", 
      description: "Lifestyle tips and personal stories", 
      itemCount: 100 
    },
    { 
      id: 18, 
      name: "Real Estate", 
      description: "Market insights and property advice", 
      itemCount: 25 
    },
    { 
      id: 19, 
      name: "History", 
      description: "Historical events and analysis", 
      itemCount: 40 
    },
    { 
      id: 20, 
      name: "Fitness", 
      description: "Fitness tips and workout routines", 
      itemCount: 95 
    },
    { 
      id: 21, 
      name: "Parenting", 
      description: "Advice and tips for parents", 
      itemCount: 50 
    },
    { 
      id: 22, 
      name: "Personal Development", 
      description: "Self-improvement strategies and resources", 
      itemCount: 70 
    },
    { 
      id: 23, 
      name: "Home Improvement", 
      description: "DIY tips and home renovation ideas", 
      itemCount: 30 
    },
    { 
      id: 24, 
      name: "Gardening", 
      description: "Gardening tips and plant care", 
      itemCount: 20 
    },
    { 
      id: 25, 
      name: "Pets", 
      description: "Pet care tips and pet-related news", 
      itemCount: 65 
    },
    { 
      id: 26, 
      name: "Religion", 
      description: "Religious insights and discussions", 
      itemCount: 15 
    },
    { 
      id: 27, 
      name: "Politics", 
      description: "Political news and analysis", 
      itemCount: 55 
    },
    { 
      id: 28, 
      name: "Philosophy", 
      description: "Philosophical discussions and theories", 
      itemCount: 25 
    },
    { 
      id: 29, 
      name: "Technology News", 
      description: "Latest news in the tech industry", 
      itemCount: 40 
    },
    { 
      id: 30, 
      name: "Social Media", 
      description: "Trends and insights in social media", 
      itemCount: 60 
    },
    { 
      id: 31, 
      name: "Cryptocurrency", 
      description: "News and updates on cryptocurrencies", 
      itemCount: 35 
    },
    { 
      id: 32, 
      name: "Data Science", 
      description: "Data analysis and visualization techniques", 
      itemCount: 45 
    },
    { 
      id: 33, 
      name: "Machine Learning", 
      description: "Insights and applications of machine learning", 
      itemCount: 50 
    },
    { 
      id: 34, 
      name: "Artificial Intelligence", 
      description: "AI developments and research", 
      itemCount: 55 
    },
    { 
      id: 35, 
      name: "Cybersecurity", 
      description: "Tips and news on cybersecurity", 
      itemCount: 30 
    },
    { 
      id: 36, 
      name: "Blockchain", 
      description: "Blockchain technology and applications", 
      itemCount: 25 
    },
    { 
      id: 37, 
      name: "Mobile Development", 
      description: "Mobile app development insights", 
      itemCount: 40 
    },
    { 
      id: 38, 
      name: "Web Development", 
      description: "Web design and development techniques", 
      itemCount: 60 
    },
    { 
      id: 39, 
      name: "Software Engineering", 
      description: "Software development practices and trends", 
      itemCount: 55 
    },
    { 
      id: 40, 
      name: "Cloud Computing", 
      description: "Cloud technology insights and services", 
      itemCount: 45 
    },
    { 
      id: 41, 
      name: "DevOps", 
      description: "DevOps practices and tools", 
      itemCount: 35 
    },
    { 
      id: 42, 
      name: "Augmented Reality", 
      description: "AR technology and applications", 
      itemCount: 20 
    },
    { 
      id: 43, 
      name: "Virtual Reality", 
      description: "VR developments and experiences", 
      itemCount: 25 
    },
    { 
      id: 44, 
      name: "Digital Marketing", 
      description: "Online marketing strategies and tips", 
      itemCount: 60 
    },
    { 
      id: 45, 
      name: "Content Creation", 
      description: "Tips for creating engaging content", 
      itemCount: 50 
    },
    { 
      id: 46, 
      name: "Influencer Marketing", 
      description: "Strategies for influencer collaborations", 
      itemCount: 40 
    },
    { 
      id: 47, 
      name: "SEO", 
      description: "Search engine optimization techniques", 
      itemCount: 30 
    },
    { 
      id: 48, 
      name: "Affiliate Marketing", 
      description: "Affiliate marketing strategies and tips", 
      itemCount: 25 
    },
    { 
      id: 49, 
      name: "E-commerce", 
      description: "Online shopping trends and strategies", 
      itemCount: 55 
    },
    { 
      id: 50, 
      name: "Travel Tips", 
      description: "Tips for planning your travels", 
      itemCount: 65 
    },
    { 
      id: 51, 
      name: "Adventure Travel", 
      description: "Destinations for adventurous travelers", 
      itemCount: 35 
    },
    { 
      id: 52, 
      name: "Culinary Arts", 
      description: "Art of cooking and food presentation", 
      itemCount: 30 
    },
    { 
      id: 53, 
      name: "Baking", 
      description: "Baking tips and recipes", 
      itemCount: 40 
    },
    { 
        id: 54, 
        name: "Cooking", 
        description: "Techniques and recipes for everyday cooking", 
        itemCount: 50 
      },
      { 
        id: 55, 
        name: "Wine", 
        description: "Wine reviews and pairing tips", 
        itemCount: 20 
      },
      { 
        id: 56, 
        name: "Crafting", 
        description: "DIY projects and crafting ideas", 
        itemCount: 45 
      },
      { 
        id: 57, 
        name: "Knitting", 
        description: "Knitting patterns and techniques", 
        itemCount: 25 
      },
      { 
        id: 58, 
        name: "Sewing", 
        description: "Sewing projects and tutorials", 
        itemCount: 30 
      },
      { 
        id: 59, 
        name: "DIY Projects", 
        description: "Creative DIY project ideas", 
        itemCount: 60 
      },
      { 
        id: 60, 
        name: "Music Production", 
        description: "Tips and tools for music production", 
        itemCount: 35 
      },
      { 
        id: 61, 
        name: "Film Making", 
        description: "Insights into the film production process", 
        itemCount: 50 
      },
      { 
        id: 62, 
        name: "Theater", 
        description: "Theater reviews and performance tips", 
        itemCount: 20 
      },
      { 
        id: 63, 
        name: "Dance", 
        description: "Dance styles and choreography tips", 
        itemCount: 30 
      },
      { 
        id: 64, 
        name: "Writing", 
        description: "Writing tips and resources for authors", 
        itemCount: 70 
      },
      { 
        id: 65, 
        name: "Poetry", 
        description: "Poetry analysis and writing prompts", 
        itemCount: 25 
      },
      { 
        id: 66, 
        name: "Short Stories", 
        description: "Short story writing and analysis", 
        itemCount: 40 
      },
      { 
        id: 67, 
        name: "Novel Writing", 
        description: "Tips for writing and publishing novels", 
        itemCount: 50 
      },
      { 
        id: 68, 
        name: "Children's Literature", 
        description: "Books and writing for children", 
        itemCount: 30 
      },
      { 
        id: 69, 
        name: "Travel Photography", 
        description: "Tips for capturing stunning travel photos", 
        itemCount: 45 
      },
      { 
        id: 70, 
        name: "Portrait Photography", 
        description: "Techniques for portrait photography", 
        itemCount: 35 
      },
      { 
        id: 71, 
        name: "Nature Photography", 
        description: "Capturing the beauty of nature through photography", 
        itemCount: 40 
      },
      { 
        id: 72, 
        name: "Wildlife Photography", 
        description: "Techniques for photographing wildlife", 
        itemCount: 25 
      },
      { 
        id: 73, 
        name: "Sports Photography", 
        description: "Capturing action in sports photography", 
        itemCount: 30 
      },
      { 
        id: 74, 
        name: "Fitness Training", 
        description: "Effective training programs and exercises", 
        itemCount: 60 
      },
      { 
        id: 75, 
        name: "Yoga", 
        description: "Yoga practices and wellness tips", 
        itemCount: 45 
      },
      { 
        id: 76, 
        name: "Meditation", 
        description: "Techniques and benefits of meditation", 
        itemCount: 40 
      },
      { 
        id: 77, 
        name: "Nutrition", 
        description: "Nutrition tips for a healthy lifestyle", 
        itemCount: 55 
      },
      { 
        id: 78, 
        name: "Mental Health", 
        description: "Resources and tips for mental wellness", 
        itemCount: 60 
      },
      { 
        id: 79, 
        name: "Self-Care", 
        description: "Practices to improve self-care and wellbeing", 
        itemCount: 50 
      },
      { 
        id: 80, 
        name: "Stress Management", 
        description: "Techniques to manage and reduce stress", 
        itemCount: 35 
      },
      { 
        id: 81, 
        name: "Mindfulness", 
        description: "Practices to cultivate mindfulness", 
        itemCount: 30 
      },
      { 
        id: 82, 
        name: "Meditation Techniques", 
        description: "Different techniques for effective meditation", 
        itemCount: 25 
      },
      { 
        id: 83, 
        name: "Public Speaking", 
        description: "Tips for effective public speaking", 
        itemCount: 40 
      },
      { 
        id: 84, 
        name: "Networking", 
        description: "Strategies for effective networking", 
        itemCount: 30 
      },
      { 
        id: 85, 
        name: "Career Development", 
        description: "Tips for advancing your career", 
        itemCount: 45 
      },
      { 
        id: 86, 
        name: "Job Searching", 
        description: "Advice for successful job hunting", 
        itemCount: 50 
      },
      { 
        id: 87, 
        name: "Resume Writing", 
        description: "Tips for writing a compelling resume", 
        itemCount: 30 
      },
      { 
        id: 88, 
        name: "Interview Preparation", 
        description: "Preparation tips for job interviews", 
        itemCount: 40 
      },
      { 
        id: 89, 
        name: "Time Management", 
        description: "Strategies for effective time management", 
        itemCount: 50 
      },
      { 
        id: 90, 
        name: "Productivity", 
        description: "Tips to boost your productivity", 
        itemCount: 60 
      },
      { 
        id: 91, 
        name: "Work-Life Balance", 
        description: "Strategies for balancing work and life", 
        itemCount: 45 
      },
      { 
        id: 92, 
        name: "Sales Techniques", 
        description: "Effective sales strategies and techniques", 
        itemCount: 40 
      },
      { 
        id: 93, 
        name: "Negotiation Skills", 
        description: "Techniques for effective negotiation", 
        itemCount: 35 
      },
      { 
        id: 94, 
        name: "Customer Service", 
        description: "Best practices for customer service", 
        itemCount: 50 
      },
      { 
        id: 95, 
        name: "Marketing Strategies", 
        description: "Effective marketing strategies and tips", 
        itemCount: 55 
      },
      { 
        id: 96, 
        name: "Business Development", 
        description: "Strategies for growing your business", 
        itemCount: 30 
      },
      { 
        id: 97, 
        name: "Entrepreneurship", 
        description: "Insights and tips for entrepreneurs", 
        itemCount: 45 
      },
      { 
        id: 98, 
        name: "Startups", 
        description: "Tips and trends in the startup ecosystem", 
        itemCount: 50 
      },
      { 
        id: 99, 
        name: "Venture Capital", 
        description: "Understanding venture capital and investments", 
        itemCount: 25 
      },
      { 
        id: 100, 
        name: "Nonprofit Organizations", 
        description: "Insights and strategies for nonprofits", 
        itemCount: 20 
      },
    ];
    

type IconComponent = typeof Laptop;

const iconMap: Record<string, IconComponent> = {
    Technology: Laptop,
    Health: Heart,
    Science: Beaker,
    Art: Palette,
    Finance: DollarSign,
    Education: GraduationCap,
    Sports: Sword,
    Music: Music,
    Movies: Film,
    Books: Book,
    Fashion: Shirt,
    Food: Utensils,
    Travel: Plane,
    Automotive: Car,
    Photography: Camera,
    Gaming: Gamepad,
    Lifestyle: Coffee,
    "Real Estate": Home,
    History: Clock,
    Fitness: Dumbbell,
    Parenting: Baby,
    "Home Improvement": Hammer,
    Gardening: Flower,
    Pets: Dog,
    Religion: Church,
    Politics: Vote,
    Philosophy: Brain,
    "Technology News": Newspaper,
    "Social Media": Share2,
    Cryptocurrency: Bitcoin,
    "Data Science": Database,
    "Machine Learning": Bot,
    "Artificial Intelligence": Brain,
    Cybersecurity: Shield,
    Blockchain: Blocks,
    "Mobile Development": Smartphone,
    "Web Development": Code,
    "Software Engineering": Code,
    "Cloud Computing": Cloud,
    DevOps: Terminal,
    "Augmented Reality": Glasses,
    "Virtual Reality": Monitor
  };

const getIconForCategory = (categoryName: string): IconComponent => {
  return iconMap[categoryName] || Brain;
};

// Generate gradient classes for different categories
const gradientClasses = [
  'from-blue-500 to-purple-500',
  'from-green-500 to-teal-500',
  'from-orange-500 to-pink-500',
  'from-red-500 to-yellow-500',
  'from-indigo-500 to-cyan-500',
  'from-pink-500 to-rose-500'
];

const Dashboard = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 6;
  const [categories, setCategories] = useState<Category[]>([]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
      router.push("/auth/login");
    } else {
      setCategories(mockCategories);
    }
  }, [router]);

  // Filter categories based on search term
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCategories = filteredCategories.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

  const getGradientClass = (index: number) => {
    return gradientClasses[index % gradientClasses.length];
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <h1 className="text-4xl font-bold text-gray-900">
            Categories
            <span className="text-sm font-normal text-gray-500 ml-4">
              {filteredCategories.length} total
            </span>
          </h1>
          
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedCategories.map((category, index) => {
            const IconComponent = getIconForCategory(category.name);
            const isHovered = hoveredId === category.id;
            
            return (
              <div 
                key={category.id}
                className="group relative overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredId(category.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Gradient Background Accent */}
                <div 
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${getGradientClass(index)} opacity-10 rounded-bl-full transform transition-transform duration-500 group-hover:scale-150`}
                />
                
                <div className="p-6 relative">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${getGradientClass(index)} transform transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {category.name}
                        </h3>
                        <span className="text-sm font-medium text-gray-500">
                          #{category.id.toString().padStart(3, '0')}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-500 mb-3">
                        {category.description || `Explore ${category.name.toLowerCase()} related content`}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-400">
                          {category.itemCount || Math.floor(Math.random() * 200 + 50)} items
                        </span>
                        <button className="flex items-center text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors duration-200">
                          Explore
                          <ChevronRight className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''}`} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Border Accent */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${getGradientClass(index)} transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100`} />
              </div>
            );
          })}
        </div>

        {/* Enhanced Pagination */}
        <div className="flex justify-center items-center space-x-2 bg-white rounded-lg shadow-sm p-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-md bg-gray-50 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Previous
          </button>
          
          <div className="flex items-center">
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(page => {
                if (totalPages <= 7) return true;
                if (page === 1 || page === totalPages) return true;
                if (Math.abs(page - currentPage) <= 1) return true;
                return false;
              })
              .map((page, index, array) => {
                if (index > 0 && array[index - 1] !== page - 1) {
                  return [
                    <span key={`ellipsis-${page}`} className="px-2 text-gray-400">...</span>,
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg mx-1 ${
                        currentPage === page
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      } transition-colors duration-200`}
                    >
                      {page}
                    </button>
                  ];
                }
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg mx-1 ${
                      currentPage === page
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    } transition-colors duration-200`}
                  >
                    {page}
                  </button>
                );
              })}
          </div>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-md bg-gray-50 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;