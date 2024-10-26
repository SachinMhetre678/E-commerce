// components/Categories.tsx
import { useState } from 'react';

const categories = [
  'Sports',
  'Music',
  'Technology',
  'Art',
  'Science',
  'Travel',
  // Add more categories as needed
];

const Categories = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  return (
    <div>
      <h2>Select Your Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <label>
              <input 
                type="checkbox" 
                checked={selectedCategories.includes(category)} 
                onChange={() => toggleCategory(category)} 
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
      <h3>Selected Categories: {selectedCategories.join(', ')}</h3>
    </div>
  );
};

export default Categories;
