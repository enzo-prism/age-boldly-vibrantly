
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const recipeTags = [
    'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert', 
    'Budget-Friendly'
  ];
  
  const recipes = [
    {
      id: 1,
      title: 'Orange Mango Bean Salad',
      description: 'A refreshing and nutritious salad combining cannellini beans with tropical fruits and fresh mint.',
      servings: '4',
      source: 'Plant-Based Women Warriors Cookbook P. 157',
      tags: ['Lunch', 'Oil-Free', 'Quick'],
      ingredients: [
        '15 ounces canned cannellini beans (about 1½ cups), canned navy beans, or cooked large lima beans drained and rinsed',
        '1-2 mangoes (about 1½ cups), peeled and diced',
        '2 navel oranges (about 1½ cups), peeled, sectioned, and cubed',
        '1-2 teaspoons minced jalapeño pepper',
        '2 teaspoons lime zest (from 1½ to 2 limes)',
        '¼ cup lime juice or more to taste',
        '2 tablespoons fresh mint, chopped',
        '5-6 cups of arugula or greens of choice'
      ],
      instructions: [
        'In a large bowl, combine the beans, mangoes, oranges, jalapeño, lime zest and juice, and mint.',
        'Taste to see if you need more lime juice.',
        'Arrange the arugula or greens of choice in the bottom of a wide bowl, add the bean mixture, and feast on a combination of such good taste.'
      ]
    },
    {
      id: 2,
      title: 'Kale and Red Cabbage Salad with Apples and Dried Cherries',
      description: 'A nutrient-dense salad by Dr. Joel Fuhrman featuring massaged kale and fresh fruits.',
      servings: '2+',
      source: 'By Dr. Joel Fuhrman',
      tags: ['Lunch', 'Oil-Free', 'High-Protein'],
      ingredients: [
        '1 bunch kale, tough stems and center ribs removed',
        '1 avocado, peeled and chopped',
        '2 tablespoons lemon juice',
        '1 tablespoon of white balsamic vinegar',
        '1 cup thinly sliced red cabbage',
        '1 large apple, cored and chopped',
        '2 tablespoons chopped unsweetened, unsulfured dried cherries, blueberries or currants',
        '½ medium red onion, minced',
        '2 tablespoons chives, chopped'
      ],
      instructions: [
        'Roll up each kale leaf and slice thinly. Add to a large salad bowl with avocado, lemon juice and vinegar.',
        'Using your hands massage the avocado, lemon juice, and vinegar into the kale leaves until the kale starts to soften and wilt and each leaf is coated, about 2-3 minutes.',
        'Mix in red cabbage, apple, dried cherries, onion and chives.',
        'Note: If you have problems finding unsweetened, unsulfured cherries or blueberries, they can be ordered on-line.'
      ]
    },
    {
      id: 3,
      title: 'Big Bean Barley and Sweet Potato Soup',
      description: 'A hearty, company-worthy soup that\'s absolutely delicious and nutritious.',
      servings: '6',
      source: 'Plant-Based Woman Warrior Cookbook P. 143',
      tags: ['Dinner', 'Budget-Friendly', 'High-Protein'],
      ingredients: [
        '1 cup sliced shallots (about 2 large) or one onion sliced',
        '4 cloves chopped garlic',
        '1 tablespoon minced fresh ginger',
        '1 teaspoon dried rosemary',
        '6 cups vegetable broth (low or no salt)',
        '1 large skin on sweet potato cubed into about ¾ inch pieces',
        '½ cup barley or farro',
        '⅛ teaspoon cayenne pepper',
        '2 cups cooked large lima beans or 15 ounces canned kidney beans drained and rinsed',
        '1 bunch greens of your choice, swiss chard, spinach, kale',
        '1 tablespoon maple syrup optional',
        '1 tablespoon white miso',
        '1 tablespoon balsamic vinegar'
      ],
      instructions: [
        'In a large pot over medium-high heat, add 2 tablespoons of water. Add the shallots or onion and cook until translucent, about 3 minutes, adding more water as needed.',
        'Stir in the garlic, ginger and rosemary and continue cooking for about 30 seconds.',
        'Add the vegetable broth, sweet potato, barley, and cayenne pepper and bring just to a boil.',
        'Reduce the heat to a simmer and cook partially covered, 15-20 minutes, until the sweet potato is tender.',
        'Add the lima beans, swiss chard or greens of choice, maple syrup (if using) and cook for about 3 minutes, until the greens begin to soften.',
        'In a small bowl, place some of the soup liquid and stir in the miso. Add this mix to the pot and also stir in the balsamic vinegar.',
        'I am addicted to this soup. Deelish! Company worthy.'
      ]
    },
    {
      id: 4,
      title: 'Blueberry Muffins',
      description: 'Heart-healthy muffins from "Prevent and Reverse Heart Disease" - perfect for breakfast or snacks.',
      servings: '8-10 muffins',
      source: '"Prevent and Reverse Heart Disease" P. 133',
      tags: ['Breakfast', 'Dessert', 'Oil-Free'],
      ingredients: [
        '1 cup whole wheat flour',
        '1 cup oat flour',
        '½ teaspoon baking powder',
        '½ teaspoon baking soda',
        '1 teaspoon ground cinnamon',
        '½ ground nutmeg',
        '¼ or less cup of maple syrup',
        '½ cup unsweetened applesauce',
        '2 teaspoons vanilla extract',
        '1 cup oat milk',
        '1 cup blueberries, fresh or frozen (If you can find them wild blueberries are wonderful)'
      ],
      instructions: [
        'Preheat oven to 400 degrees.',
        'Mix the first 6 ingredients in a large bowl.',
        'Place remaining ingredients in the center.',
        'Carefully fold from center to outside until all ingredients are blended. DO NOT OVER STIR.',
        'Spoon batter into a nonstick muffin pan. Makes 8-10 muffins.',
        'Bake for 25 minutes, or until the tops are brown and the toothpick is clean. Do not overbake.'
      ]
    },
    {
      id: 5,
      title: '3-2-1 Salad Dressing',
      description: 'A simple and delicious oil-free salad dressing by Jane and Anne Esselstyn.',
      servings: 'Several servings',
      source: 'Jane and Anne Esselstyn',
      tags: ['Quick', 'Oil-Free'],
      ingredients: [
        '3 tablespoons balsamic vinegar',
        '2 tablespoons of Dijon mustard',
        '1 tablespoon of maple syrup'
      ],
      instructions: [
        'Whisk the ingredients in a bowl or place in a jar and shake until smooth.',
        'Makes several servings.'
      ]
    }
  ];
  
  const filteredRecipes = recipes.filter(recipe => {
    // Filter by search query
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by tag if one is selected
    const matchesTag = activeFilter ? recipe.tags.includes(activeFilter) : true;
    
    return matchesSearch && matchesTag;
  });

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Recipes</h2>
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Introduction to Recipes</h3>
        <h4 className="text-xl font-semibold mb-4 text-teal">Whipping Up a Little Plant Powered Magic</h4>
        <div className="prose max-w-none mb-8">
          <p className="mb-4">
            Let's be honest—food should make you feel something. Joy. Energy. Comfort. This lifestyle isn't about counting calories or chasing trends—it's about falling in love with real food that nourishes you from the inside out.
          </p>
          <p className="mb-6">
            Here you will find a few of my favorite recipes—dishes I return to because they are nutritious and delicious and 100% plant-powered.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <Input
            type="search"
            placeholder="Search recipes..."
            className="max-w-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          <div>
            <span className="mr-2 text-sm text-gray-500">Filter by:</span>
            <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
              {recipeTags.map(tag => (
                <Badge 
                  key={tag}
                  className={`cursor-pointer ${activeFilter === tag ? 'bg-teal hover:bg-teal-dark' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
                  onClick={() => setActiveFilter(activeFilter === tag ? null : tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        {filteredRecipes.length > 0 ? (
          <div className="space-y-6">
            {filteredRecipes.map(recipe => (
              <div key={recipe.id} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-xl mb-2">{recipe.title}</h3>
                    <p className="text-gray-600 mb-2">{recipe.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span>Serves: {recipe.servings}</span>
                      <span>Source: {recipe.source}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {recipe.tags.map(tag => (
                    <Badge 
                      key={tag} 
                      variant="outline"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Ingredients:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Instructions:</h4>
                    <ol className="space-y-2 text-sm">
                      {recipe.instructions.map((step, index) => (
                        <li key={index} className="flex">
                          <span className="flex-shrink-0 w-6 h-6 bg-teal text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No recipes match your search criteria.</p>
            <Button 
              variant="ghost" 
              onClick={() => {
                setSearchQuery('');
                setActiveFilter(null);
              }}
              className="mt-4"
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
