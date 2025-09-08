
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, ChefHat, Snowflake, Users } from 'lucide-react';

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const recipeTags = [
    'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert', 
    'Budget-Friendly', 'No-Bake', 'Make-Ahead', 'Special Occasion', 
    'Raw', 'Oil-Free', 'Quick', 'High-Protein', 'Gluten-Free'
  ];
  
  const recipes = [
    {
      id: 1,
      title: 'Orange Mango Bean Salad',
      description: 'A refreshing and nutritious salad combining cannellini beans with tropical fruits and fresh mint.',
      servings: '4',
      source: 'Plant-Based Women Warriors Cookbook P. 157',
      tags: ['Lunch', 'Oil-Free', 'Quick'],
      prepTime: '15 minutes',
      difficulty: 'Beginner',
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
      author: 'Dr. Joel Fuhrman',
      tags: ['Lunch', 'Oil-Free', 'High-Protein'],
      prepTime: '10 minutes',
      difficulty: 'Beginner',
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
      prepTime: '15 minutes',
      totalTime: '45 minutes',
      difficulty: 'Intermediate',
      notes: 'I am addicted to this soup. Deelish! Company worthy.',
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
      prepTime: '10 minutes',
      totalTime: '35 minutes',
      difficulty: 'Beginner',
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
      author: 'Jane and Anne Esselstyn',
      tags: ['Quick', 'Oil-Free'],
      prepTime: '2 minutes',
      difficulty: 'Beginner',
      ingredients: [
        '3 tablespoons balsamic vinegar',
        '2 tablespoons of Dijon mustard',
        '1 tablespoon of maple syrup'
      ],
      instructions: [
        'Whisk the ingredients in a bowl or place in a jar and shake until smooth.',
        'Makes several servings.'
      ]
    },
    {
      id: 6,
      title: 'Mint Chocolate Mousse Torte',
      description: 'A healthier version of the Frango Mint Pie - elegant, dense, rich, and absolutely delicious. Perfect for entertaining.',
      author: 'Chef AJ',
      servings: '12+',
      source: '"unprocessed" Revitalize Your Health With Whole Foods by Chef AJ, page 132',
      prepTime: '30 minutes',
      freezeTime: '4+ hours',
      totalTime: '4+ hours 30 minutes',
      difficulty: 'Intermediate',
      tags: ['Dessert', 'No-Bake', 'Make-Ahead', 'Special Occasion', 'Raw', 'Oil-Free', 'Gluten-Free'],
      storageInstructions: 'Keeps well in the freezer. Can be made several days before an event.',
      notes: 'This is my "go to" recipe when I entertain. It always turns out great and is deelish, elegant, dense and rich. I have served 12 and still had leftovers.',
      components: {
        filling: {
          ingredients: [
            '16 ounces of pitted dried dates',
            '2 cups unsweetened nondairy milk',
            '1 tablespoon alcohol-free vanilla extract, or 1 teaspoon vanilla powder',
            '1-2 teaspoons peppermint extract (depending on how minty you like it)',
            '½ cup of cocoa powder or carob powder',
            '12 ounces of walnuts',
            '½ cup unsweetened coconut'
          ],
          instructions: [
            'Soak the dates in the nondairy milk.',
            'Process the soaked dates with the vanilla and peppermint extract in a food processor, fitted with an "S" blade until very smooth.',
            'Add the cocoa powder and process again until smooth, then place the entire mixture in a bowl.',
            'In the same processor bowl, process the 12 ounces of walnuts until like nut butter.',
            'Add the coconut and process again.',
            'Add to the date mixture and combine the ingredients by hand until completely incorporated.'
          ]
        },
        crust: {
          ingredients: [
            '2 cups raw walnuts',
            '¼ cup cocoa powder or carob powder',
            '2 cups pitted dates',
            '1 tablespoon alcohol-free vanilla or 1 teaspoon vanilla powder',
            '1 teaspoon peppermint extract'
          ],
          instructions: [
            'Process the 2 cups of walnuts with the cocoa or carob powder in a food processor fitted with an "S" blade. Do NOT over process or you will have nut butter.',
            'Add the two cups of dates, a few at a time, until the mixture holds together and you can easily roll it into a ball.',
            'Add the vanilla and peppermint extracts and process again briefly.',
            'Press the crust into an 8 or 9 inch springform pan.'
          ]
        },
        garnish: {
          ingredients: [
            '½ cup cacao nibs (optional)',
            'Fresh mint leaves',
            'Fresh raspberries'
          ],
          instructions: [
            'Spread the filling over the crust.',
            'Garnish with cacao nibs if desired.',
            'Freeze until solid.',
            'Serve with a beautiful mint leaf and fresh raspberries.'
          ]
        }
      }
    }
  ];
  
  const filteredRecipes = recipes.filter(recipe => {
    // Filter by search query
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (recipe.author && recipe.author.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Filter by tag if one is selected
    const matchesTag = activeFilter ? recipe.tags.includes(activeFilter) : true;
    
    return matchesSearch && matchesTag;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
              <Card key={recipe.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{recipe.title}</CardTitle>
                      {recipe.author && (
                        <p className="text-sm text-muted-foreground mb-2">by {recipe.author}</p>
                      )}
                      <CardDescription>{recipe.description}</CardDescription>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>Serves {recipe.servings}</span>
                    </div>
                    {recipe.prepTime && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{recipe.prepTime}</span>
                      </div>
                    )}
                    {recipe.freezeTime && (
                      <div className="flex items-center gap-1">
                        <Snowflake className="w-4 h-4" />
                        <span>{recipe.freezeTime}</span>
                      </div>
                    )}
                    {recipe.difficulty && (
                      <div className="flex items-center gap-1">
                        <ChefHat className="w-4 h-4" />
                        <Badge className={`${getDifficultyColor(recipe.difficulty)} text-xs`}>
                          {recipe.difficulty}
                        </Badge>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-2">Source: {recipe.source}</p>
                  
                  <div className="flex flex-wrap gap-1 mt-3">
                    {recipe.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent>
                  {recipe.components ? (
                    <Tabs defaultValue="crust" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="crust">Crust</TabsTrigger>
                        <TabsTrigger value="filling">Filling</TabsTrigger>
                        <TabsTrigger value="garnish">Assembly</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="crust" className="mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Crust Ingredients:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              {recipe.components.crust.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Crust Instructions:</h4>
                            <ol className="space-y-2 text-sm">
                              {recipe.components.crust.instructions.map((step, index) => (
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
                      </TabsContent>
                      
                      <TabsContent value="filling" className="mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Filling Ingredients:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              {recipe.components.filling.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Filling Instructions:</h4>
                            <ol className="space-y-2 text-sm">
                              {recipe.components.filling.instructions.map((step, index) => (
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
                      </TabsContent>
                      
                      <TabsContent value="garnish" className="mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Garnish & Assembly:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              {recipe.components.garnish.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Final Assembly:</h4>
                            <ol className="space-y-2 text-sm">
                              {recipe.components.garnish.instructions.map((step, index) => (
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
                      </TabsContent>
                    </Tabs>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Ingredients:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          {recipe.ingredients?.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Instructions:</h4>
                        <ol className="space-y-2 text-sm">
                          {recipe.instructions?.map((step, index) => (
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
                  )}
                  
                  {(recipe.notes || recipe.storageInstructions) && (
                    <div className="mt-6 pt-4 border-t">
                      {recipe.notes && (
                        <div className="mb-3">
                          <h4 className="font-semibold text-sm mb-2">Chef's Notes:</h4>
                          <p className="text-sm text-muted-foreground italic">{recipe.notes}</p>
                        </div>
                      )}
                      {recipe.storageInstructions && (
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Storage:</h4>
                          <p className="text-sm text-muted-foreground">{recipe.storageInstructions}</p>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
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
