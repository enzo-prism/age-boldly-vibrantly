
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, ChefHat, Snowflake, Users } from 'lucide-react';
import { recipes, slugifyRecipeTitle } from '@/data/recipes';

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const location = useLocation();
  
  const recipeTags = [
    'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert', 
    'Budget-Friendly', 'No-Bake', 'Make-Ahead', 'Special Occasion', 
    'Raw', 'Oil-Free', 'Quick', 'High-Protein', 'Gluten-Free'
  ];

  const categories = [
    { id: 'all', name: 'All Recipes', icon: '🍽️' },
    { id: 'dressings', name: 'Salad Dressings', icon: '🥗' },
    { id: 'appetizers', name: 'Appetizers/Snacks', icon: '🥜' },
    { id: 'salads', name: 'Salads', icon: '🥬' },
    { id: 'soups', name: 'Soups', icon: '🍲' },
    { id: 'mains', name: 'Main Dishes', icon: '🍽️' },
    { id: 'baked', name: 'Muffins/Breads', icon: '🧁' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' }
  ];
  
  
  const filteredRecipes = recipes.filter(recipe => {
    // Filter by search query
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (recipe.author && recipe.author.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Filter by tag if one is selected
    const matchesTag = activeFilter ? recipe.tags.includes(activeFilter) : true;
    
    // Filter by category if one is selected
    const matchesCategory = activeCategory === 'all' ? true : recipe.category === activeCategory;
    
    return matchesSearch && matchesTag && matchesCategory;
  }).sort((a, b) => b.id - a.id);

  useEffect(() => {
    if (!location.hash) {
      return;
    }
    const id = location.hash.replace(/^#/, '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);


  const getRecipeCountForCategory = (categoryId: string) => {
    if (categoryId === 'all') return recipes.length;
    return recipes.filter(recipe => recipe.category === categoryId).length;
  };

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
        
        {/* Category Tabs */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Browse by Category</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className="flex items-center gap-2"
                onClick={() => setActiveCategory(category.id)}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
                <span className="ml-1 text-xs bg-white/20 px-1.5 py-0.5 rounded-full">
                  {getRecipeCountForCategory(category.id)}
                </span>
              </Button>
            ))}
          </div>
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
              <Card id={`recipe-${slugifyRecipeTitle(recipe.title)}`} key={recipe.id} className="overflow-hidden">
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
                  {recipe.components && recipe.components.crust && recipe.components.filling && recipe.components.garnish ? (
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
                              {recipe.components.crust.instructions?.map((step, index) => (
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
                              {recipe.components.filling.instructions?.map((step, index) => (
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
                            <h4 className="font-semibold mb-3">Assembly Ingredients:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              {recipe.components.garnish.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Assembly Instructions:</h4>
                            <ol className="space-y-2 text-sm">
                              {recipe.components.garnish.instructions?.map((step, index) => (
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
                      
                      {recipe.storageInstructions && (
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-semibold mb-2 text-blue-800">Storage Instructions:</h4>
                          <p className="text-sm text-blue-700">{recipe.storageInstructions}</p>
                        </div>
                      )}
                      
                      {recipe.notes && (
                        <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                          <h4 className="font-semibold mb-2 text-amber-800">Chef's Notes:</h4>
                          <p className="text-sm text-amber-700">{recipe.notes}</p>
                        </div>
                      )}
                     </Tabs>
                  ) : recipe.components && recipe.components.crumbles && recipe.components.niceCream && recipe.components.assembly ? (
                    <Tabs defaultValue="crumbles" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="crumbles">Crumbles</TabsTrigger>
                        <TabsTrigger value="niceCream">Nice Cream</TabsTrigger>
                        <TabsTrigger value="assembly">Assembly</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="crumbles" className="mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Crumbles Ingredients:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              {recipe.components.crumbles.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Crumbles Instructions:</h4>
                            <ol className="space-y-2 text-sm">
                              {recipe.components.crumbles.instructions?.map((step, index) => (
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
                      
                      <TabsContent value="niceCream" className="mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Nice Cream Ingredients:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              {recipe.components.niceCream.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Nice Cream Instructions:</h4>
                            <ol className="space-y-2 text-sm">
                              {recipe.components.niceCream.instructions?.map((step, index) => (
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
                      
                      <TabsContent value="assembly" className="mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Assembly Ingredients:</h4>
                            {recipe.components.assembly.ingredients.length > 0 ? (
                              <ul className="list-disc list-inside space-y-1 text-sm">
                                {recipe.components.assembly.ingredients.map((ingredient, index) => (
                                  <li key={index}>{ingredient}</li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-sm text-muted-foreground">No additional ingredients needed for assembly.</p>
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Assembly Instructions:</h4>
                            <ol className="space-y-2 text-sm">
                              {recipe.components.assembly.instructions?.map((step, index) => (
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
                      
                      {recipe.storageInstructions && (
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-semibold mb-2 text-blue-800">Storage Instructions:</h4>
                          <p className="text-sm text-blue-700">{recipe.storageInstructions}</p>
                        </div>
                      )}
                      
                      {recipe.notes && (
                        <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                          <h4 className="font-semibold mb-2 text-amber-800">Chef's Notes:</h4>
                          <p className="text-sm text-amber-700">{recipe.notes}</p>
                        </div>
                      )}
                    </Tabs>
                  ) : recipe.components && recipe.components.dressing ? (
                    <div>
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
                            {(recipe.instructions || []).map((step, index) => (
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
                      
                      <div className="mt-6 p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold mb-3 text-green-800">Jane's 3-2-1 Dressing:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-2 text-green-700">Ingredients:</h5>
                            <ul className="list-disc list-inside space-y-1 text-sm text-green-600">
                              {recipe.components.dressing.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                              ))}
                            </ul>
                          </div>
                          {recipe.components.dressing.instructions && (
                            <div>
                              <h5 className="font-medium mb-2 text-green-700">Instructions:</h5>
                              <ol className="space-y-1 text-sm text-green-600">
                                {recipe.components.dressing.instructions.map((step, index) => (
                                  <li key={index}>{step}</li>
                                ))}
                              </ol>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {recipe.notes && (
                        <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                          <h4 className="font-semibold mb-2 text-amber-800">Chef's Notes:</h4>
                          <p className="text-sm text-amber-700">{recipe.notes}</p>
                        </div>
                      )}
                    </div>
                  ) : recipe.components && recipe.components.suzAdjustments ? (
                    <div>
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
                             {(recipe.instructions || []).map((step, index) => (
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
                      
                      <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold mb-3 text-purple-800">Suz's Polish Babcia Adjustments:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-2 text-purple-700">Additional Ingredients:</h5>
                            <ul className="list-disc list-inside space-y-1 text-sm text-purple-600">
                              {recipe.components.suzAdjustments.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-2 text-purple-700">Suz's Modifications:</h5>
                            <ol className="space-y-1 text-sm text-purple-600">
                              {recipe.components.suzAdjustments.instructions?.map((step, index) => (
                                <li key={index}>{index + 1}. {step}</li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      </div>
                      
                      {recipe.notes && (
                        <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                          <h4 className="font-semibold mb-2 text-amber-800">Chef's Notes:</h4>
                          <p className="text-sm text-amber-700">{recipe.notes}</p>
                        </div>
                      )}
                    </div>
                  ) : recipe.components && recipe.components.crust && recipe.components.filling && !recipe.components.garnish ? (
                    <Tabs defaultValue="crust" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="crust">Crust</TabsTrigger>
                        <TabsTrigger value="filling">Filling</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="crust" className="mt-6">
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
                              {recipe.components.crust.instructions?.map((step, index) => (
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
                      
                      <TabsContent value="filling" className="mt-6">
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
                              {recipe.components.filling.instructions?.map((step, index) => (
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
                      
                      {/* Assembly instructions if they exist */}
                      {recipe.instructions && recipe.instructions.length > 0 && (
                        <div className="mt-6 p-4 bg-green-50 rounded-lg">
                          <h4 className="font-semibold mb-3 text-green-800">Assembly Instructions:</h4>
                          <ol className="space-y-2 text-sm">
                            {recipe.instructions.map((step, index) => (
                              <li key={index} className="flex text-green-700">
                                <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                                  {index + 1}
                                </span>
                                <span className="leading-relaxed">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </Tabs>
                  ) : recipe.components && recipe.components.tacoBar ? (
                    <Tabs defaultValue="tacoBar" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="tacoBar">Taco Bar Setup</TabsTrigger>
                        <TabsTrigger value="chorizo">Chorizo (Optional)</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="tacoBar" className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Ingredients:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              {recipe.components.tacoBar.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Assembly Instructions:</h4>
                            <ol className="space-y-2 text-sm">
                              {recipe.components.tacoBar.instructions.map((step, index) => (
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
                      
                      <TabsContent value="chorizo" className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Ingredients:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              {recipe.components.chorizo.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Instructions:</h4>
                            <ol className="space-y-2 text-sm">
                              {recipe.components.chorizo.instructions.map((step, index) => (
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
                  ) : recipe.ingredients ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Ingredients:</h4>
                        {/* Check if this is a guide-style recipe with section headers */}
                        {recipe.ingredients.some(ingredient => 
                          ingredient.includes(':') && ingredient === ingredient.toUpperCase()
                        ) ? (
                          /* Render guide-style recipe with section headers */
                          <div className="space-y-4">
                            {recipe.ingredients.map((ingredient, index) => {
                              if (!ingredient.trim()) return null; // Skip empty strings
                              
                              if (ingredient.includes(':') && ingredient === ingredient.toUpperCase()) {
                                // This is a section header
                                return (
                                  <div key={index} className="space-y-2">
                                    <h5 className="font-bold text-base text-coral bg-coral/10 px-3 py-2 rounded-lg">
                                      {ingredient}
                                    </h5>
                                  </div>
                                );
                              } else if (ingredient.includes('(choose')) {
                                // This is a subsection header
                                return (
                                  <div key={index} className="ml-2">
                                    <h6 className="font-semibold text-sm text-teal mb-1">
                                      {ingredient}
                                    </h6>
                                  </div>
                                );
                              } else if (ingredient.startsWith('•')) {
                                // Regular ingredient item
                                return (
                                  <div key={index} className="ml-4">
                                    <p className="text-sm text-muted-foreground">
                                      {ingredient}
                                    </p>
                                  </div>
                                );
                              }
                              return null;
                            })}
                          </div>
                        ) : (
                          /* Regular recipe ingredients */
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            {recipe.ingredients.map((ingredient, index) => (
                              <li key={index}>{ingredient}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Instructions:</h4>
                        <ol className="space-y-2 text-sm">
                          {(recipe.instructions || []).map((step, index) => (
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
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p>Recipe structure not supported</p>
                    </div>
                  )}
                  
                  {!recipe.components && recipe.storageInstructions && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-800">Storage Instructions:</h4>
                      <p className="text-sm text-blue-700">{recipe.storageInstructions}</p>
                    </div>
                  )}
                  
                  {!recipe.components && recipe.notes && (
                    <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                      <h4 className="font-semibold mb-2 text-amber-800">Chef's Notes:</h4>
                      <p className="text-sm text-amber-700">{recipe.notes}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No recipes match your search criteria.</p>
            <Button 
              onClick={() => {
                setSearchQuery('');
                setActiveFilter(null);
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
