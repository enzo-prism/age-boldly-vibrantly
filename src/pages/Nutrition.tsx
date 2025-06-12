import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Nutrition = () => {
  const [activeTab, setActiveTab] = useState('what-is-wfpb');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const recipeTags = [
    'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert', 
    'Quick', 'Budget-Friendly', 'High-Protein', 'Oil-Free'
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
      instructions: 'In a large bowl, combine the beans, mangoes, oranges, jalapeño, lime zest and juice, and mint. Taste to see if you need more lime juice. Arrange the arugula or greens of choice in the bottom of a wide bowl, add the bean mixture, and feast on a combination of such good taste.'
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
      instructions: 'Roll up each kale leaf and slice thinly. Add to a large salad bowl with avocado, lemon juice and vinegar. Using your hands massage the avocado, lemon juice, and vinegar into the kale leaves until the kale starts to soften and wilt and each leaf is coated, about 2-3 minutes. Mix in red cabbage, apple, dried cherries, onion and chives. Note: If you have problems finding unsweetened, unsulfured cherries or blueberries, they can be ordered on-line.'
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
      instructions: 'In a large pot over medium-high heat, add 2 tablespoons of water. Add the shallots or onion and cook until translucent, about 3 minutes, adding more water as needed. Stir in the garlic, ginger and rosemary and continue cooking for about 30 seconds. Add the vegetable broth, sweet potato, barley, and cayenne pepper and bring just to a boil. Reduce the heat to a simmer and cook partially covered, 15-20 minutes, until the sweet potato is tender. Add the lima beans, swiss chard or greens of choice, maple syrup (if using) and cook for about 3 minutes, until the greens begin to soften. In a small bowl, place some of the soup liquid and stir in the miso. Add this mix to the pot and also stir in the balsamic vinegar. I am addicted to this soup. Deelish! Company worthy.'
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
      instructions: 'Preheat oven to 400 degrees. Mix the first 6 ingredients in a large bowl. Place remaining ingredients in the center. Carefully fold from center to outside until all ingredients are blended. DO NOT OVER STIR. Spoon batter into a nonstick muffin pan. Makes 8-10 muffins. Bake for 25 minutes, or until the tops are brown and the toothpick is clean. Do not overbake.'
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
      {/* Hero Section */}
      <section className="bg-teal/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Whole-Food, Plant-Based Nutrition</h1>
            <p className="text-lg text-gray-700">
              Discover the science-backed nutrition approach that can help prevent and reverse chronic diseases, 
              increase your energy, and support vibrant longevity.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="what-is-wfpb" className="max-w-4xl mx-auto" onValueChange={setActiveTab}>
            <div className="border-b mb-6">
              <TabsList className="w-full justify-start bg-transparent h-auto mb-0 p-0">
                <TabsTrigger 
                  value="what-is-wfpb" 
                  className={`px-4 py-2 border-b-2 rounded-none ${activeTab === 'what-is-wfpb' ? 'border-teal text-teal' : 'border-transparent'}`}
                >
                  What is WFPB?
                </TabsTrigger>
                <TabsTrigger 
                  value="benefits" 
                  className={`px-4 py-2 border-b-2 rounded-none ${activeTab === 'benefits' ? 'border-teal text-teal' : 'border-transparent'}`}
                >
                  Benefits
                </TabsTrigger>
                <TabsTrigger 
                  value="protocol" 
                  className={`px-4 py-2 border-b-2 rounded-none ${activeTab === 'protocol' ? 'border-teal text-teal' : 'border-transparent'}`}
                >
                  Dr. Caldwell Esselstyn's Protocol
                </TabsTrigger>
                <TabsTrigger 
                  value="foods" 
                  className={`px-4 py-2 border-b-2 rounded-none ${activeTab === 'foods' ? 'border-teal text-teal' : 'border-transparent'}`}
                >
                  Foods
                </TabsTrigger>
                <TabsTrigger 
                  value="recipes" 
                  className={`px-4 py-2 border-b-2 rounded-none ${activeTab === 'recipes' ? 'border-teal text-teal' : 'border-transparent'}`}
                >
                  Recipes
                </TabsTrigger>
                <TabsTrigger 
                  value="supplements" 
                  className={`px-4 py-2 border-b-2 rounded-none ${activeTab === 'supplements' ? 'border-teal text-teal' : 'border-transparent'}`}
                >
                  Supplements
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="what-is-wfpb" className="mt-6">
              <h2 className="text-3xl font-bold mb-6">What is Whole-Food, Plant-Based Nutrition?</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  A whole-food, plant-based (WFPB) diet focuses on eating whole plant foods in their natural or minimally processed forms. Unlike typical vegetarian or vegan diets, WFPB emphasizes the quality and wholeness of foods rather than simply avoiding animal products.
                </p>
                
                <h3 className="text-xl font-bold mt-6 mb-3">Key Components of WFPB Nutrition:</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Whole foods:</strong> Foods that are unprocessed or minimally processed</li>
                  <li><strong>Plant-based:</strong> Derived from plants, including vegetables, fruits, whole grains, legumes, nuts, and seeds</li>
                  <li><strong>Minimally processed:</strong> Foods that retain their natural nutritional integrity</li>
                  <li><strong>Avoids:</strong> Animal products, refined foods, added oils, and most packaged foods</li>
                </ul>
                
                <p className="mb-4">
                  The WFPB approach is distinct from simply being vegetarian or vegan, as it emphasizes eating whole, unprocessed foods. A person can be vegan but still consume heavily processed foods with minimal nutritional value.
                </p>
                
                <p>
                  This nutritional approach is supported by extensive scientific research showing its effectiveness in preventing and even reversing chronic diseases, particularly heart disease, type 2 diabetes, and certain cancers.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="benefits">
              <h2 className="text-3xl font-bold mb-6">Benefits of Whole-Food, Plant-Based Nutrition</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Heart Health</h3>
                  <p className="text-gray-700">
                    Studies show WFPB diets can prevent and even reverse coronary artery disease by reducing cholesterol, blood pressure, and inflammation while improving blood vessel function.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Diabetes Management</h3>
                  <p className="text-gray-700">
                    A WFPB diet improves insulin sensitivity, lowers blood sugar levels, and can reduce or eliminate the need for diabetes medication in many people with type 2 diabetes.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Weight Management</h3>
                  <p className="text-gray-700">
                    High in fiber and naturally lower in calories, WFPB eating supports healthy weight loss and maintenance without calorie counting or portion control.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Cancer Prevention</h3>
                  <p className="text-gray-700">
                    Plant foods are rich in antioxidants and phytonutrients that help protect cells from damage that can lead to cancer, while avoiding processed meats and other animal products linked to increased cancer risk.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Cognitive Function</h3>
                  <p className="text-gray-700">
                    The antioxidants, healthy fats, and nutrients in plant foods support brain health and may help reduce the risk of cognitive decline and dementia.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">Gut Health</h3>
                  <p className="text-gray-700">
                    High-fiber plant foods promote a healthy microbiome, supporting your immune system, hormone balance, and mental health through the gut-brain connection.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="protocol">
              <h2 className="text-3xl font-bold mb-6">Dr. Caldwell Esselstyn's Protocol</h2>
              
              <div className="prose max-w-none space-y-6">
                <p className="text-lg leading-relaxed">
                  Dr. Caldwell Esselstyn's work has transformed our understanding of heart disease. A distinguished surgeon and researcher at the Cleveland Clinic, he has conducted a long running study on the effects of nutrition on heart health. His findings are remarkable: a Whole Food, Plant-Based, oil free diet not only can prevent the progression of coronary heart disease —it can actually reverse it.
                </p>
                
                <p className="leading-relaxed">
                  By eliminating meat, dairy, oils, and highly processed foods, and focusing instead on nutrient-dense plant foods–especially leafy greens—-Dr. Esselstyn's patients have restored blood flow, reduced inflammation, and, in many cases avoided the need for surgery or medication. His message is clear and compelling: the most powerful tool for protecting your heart is your daily food choices. It is not a quick fix—-it is a lifestyle, and one that offers the potential for profound healing and vitality.
                </p>
                
                <div className="bg-teal/10 p-6 rounded-lg border-l-4 border-teal">
                  <p className="leading-relaxed">
                    At Rebellious Aging, I deeply honor Dr Esselstyn's evidence– -based approach and incorporate his principles and guidance into my lifestyle. While each of us has unique needs, I believe his work offers a powerful foundation for anyone seeking long term health and vitality—especially as we age. Embracing a WFPB lifestyle is not about restriction—it is about liberation.
                  </p>
                </div>
                
                <p className="leading-relaxed">
                  It is about reclaiming our health, protecting our clarity and purpose. Whether you are taking your first step or fine tuning your path, this way of eating can help you thrive from the inside out.
                </p>
                
                <div className="bg-coral/10 p-6 rounded-lg border-l-4 border-coral">
                  <p className="font-medium leading-relaxed">
                    I follow his protocol myself and it has been life changing. This way of eating has brought my cholesterol levels down without meds, vanished the arthritis in my hands and fingers, stabilized my weight, re-energized me and gives me the peace of mind knowing I am supporting my heart and a peaceful life with every bite.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-teal/20 to-coral/20 p-6 rounded-lg text-center">
                  <p className="text-lg font-bold leading-relaxed">
                    This lifestyle is not about DEPRIVATION. It is about freedom: freedom from chronic illness, from fear, from food confusion. It is never too late to nourish your body, protect your health, and feel truly alive again.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="foods">
              <h2 className="text-3xl font-bold mb-6">Foods to Eat & Avoid</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-teal mb-4">Foods to Embrace</h3>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-teal mr-2">✓</span>
                        <div>
                          <strong>Vegetables:</strong> All varieties, especially leafy greens (kale, spinach, collards), cruciferous vegetables (broccoli, cauliflower), root vegetables (carrots, beets, sweet potatoes)
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2">✓</span>
                        <div>
                          <strong>Fruits:</strong> All varieties, particularly berries, apples, oranges, pears, and other high-fiber fruits
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2">✓</span>
                        <div>
                          <strong>Whole Grains:</strong> Brown rice, quinoa, oats, barley, whole grain pasta, whole grain bread (without added oils)
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2">✓</span>
                        <div>
                          <strong>Legumes:</strong> All beans, lentils, peas, and bean-based products (tofu, tempeh, without added oils)
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2">✓</span>
                        <div>
                          <strong>Mushrooms:</strong> All varieties, excellent meat substitute and immune boosters
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2">✓</span>
                        <div>
                          <strong>Herbs & Spices:</strong> All varieties, use liberally for flavor
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2">✓</span>
                        <div>
                          <strong>Seeds (in moderation):</strong> Flax, chia, hemp (particularly for those without heart disease)
                        </div>
                      </li>
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="text-lg font-bold text-teal mb-3">Dr. Esselstyn's "Greens Jingle"</h4>
                      <p className="text-gray-700 mb-3">
                        Dr. Esselstyn is well known for his "Greens Jingle" that he uses to emphasize the importance of incorporating a variety of leafy greens into one's diet. In the jingle he mentions bok choy, collard greens, mustard greens, turnip greens, napa cabbage, Brussels sprouts, broccoli, cauliflower, cilantro, parsley, and asparagus.
                      </p>
                      <p className="text-gray-700">
                        These 11 vegetables are rich in nitrates which the body converts into nitric oxide—a compound that helps dilate blood vessels to keep things moving and improve cardiovascular health.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-coral mb-4">Foods to Avoid</h3>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-coral mr-2">✗</span>
                        <div>
                          <strong>All Animal Products:</strong> Meat, poultry, fish, dairy (milk, cheese, yogurt, butter), eggs
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-coral mr-2">✗</span>
                        <div>
                          <strong>Oils:</strong> All extracted oils, including olive, coconut, canola, and other vegetable oils
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-coral mr-2">✗</span>
                        <div>
                          <strong>Processed Foods:</strong> Packaged snacks, cookies, crackers, chips, most bread products
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-coral mr-2">✗</span>
                        <div>
                          <strong>Refined Grains:</strong> White flour products, white rice, refined pasta
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-coral mr-2">✗</span>
                        <div>
                          <strong>Added Sugars:</strong> Table sugar, high-fructose corn syrup, and products containing them
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-coral mr-2">✗</span>
                        <div>
                          <strong>Nuts (for those with heart disease):</strong> All nuts, including walnuts, almonds, cashews
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-coral mr-2">✗</span>
                        <div>
                          <strong>Avocados (for those with heart disease):</strong> Due to high fat content
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="recipes">
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
                            <p className="text-sm leading-relaxed">{recipe.instructions}</p>
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
            </TabsContent>
            
            <TabsContent value="supplements">
              <h2 className="text-3xl font-bold mb-6">Supplements</h2>
              
              <div className="prose max-w-none">
                <p className="mb-6">
                  While a whole-food, plant-based diet provides most of the nutrients your body needs, there are a few supplements that may be beneficial, especially as you age. Always consult with a healthcare professional before starting any supplement regimen.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal">
                    <h3 className="text-xl font-bold mb-2">Vitamin B12</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Recommended for:</strong> All people following a plant-based diet
                    </p>
                    <p className="text-gray-700">
                      B12 is essential for nerve function and DNA synthesis. It's primarily found in animal products, making supplementation necessary for those on a plant-based diet.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal">
                    <h3 className="text-xl font-bold mb-2">Vitamin D3</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Recommended for:</strong> Those with limited sun exposure, older adults, or those with darker skin
                    </p>
                    <p className="text-gray-700">
                      Essential for bone health, immune function, and mood regulation. While your body produces vitamin D from sun exposure, many factors can limit this natural production.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Quality Matters</h3>
                <p className="mb-6">
                  When choosing supplements, look for:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Third-party testing (USP, NSF, or ConsumerLab verification)</li>
                  <li>Clean ingredient lists without unnecessary fillers or additives</li>
                  <li>Appropriate dosages based on your age, sex, and health status</li>
                  <li>Plant-derived sources when possible</li>
                </ul>
                
                <div className="bg-teal/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Important Note</h3>
                  <p className="text-gray-700">
                    Supplements should complement, not replace, a whole-food, plant-based diet. Regular blood testing can help identify specific deficiencies that may require targeted supplementation. Always consult with a healthcare provider knowledgeable about plant-based nutrition before starting any supplement regimen.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Nutrition;
