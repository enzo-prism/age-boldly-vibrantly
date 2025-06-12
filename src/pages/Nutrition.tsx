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
      title: 'Hearty Oatmeal Bowl',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=400&h=300',
      tags: ['Breakfast', 'Quick', 'Budget-Friendly'],
      time: '10 min',
    },
    {
      id: 2,
      title: 'Mediterranean Chickpea Salad',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=400&h=300',
      tags: ['Lunch', 'High-Protein', 'Oil-Free'],
      time: '15 min',
    },
    {
      id: 3,
      title: 'Black Bean & Sweet Potato Chili',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=400&h=300',
      tags: ['Dinner', 'Budget-Friendly', 'High-Protein'],
      time: '45 min',
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredRecipes.map(recipe => (
                      <div key={recipe.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <img 
                          src={recipe.image} 
                          alt={recipe.title} 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="font-bold text-lg">{recipe.title}</h3>
                            <span className="text-sm text-gray-500">{recipe.time}</span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
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
