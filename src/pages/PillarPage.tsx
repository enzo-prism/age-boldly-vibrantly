import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PillarContent {
  title: string;
  description: string;
  quizTitle: string;
  quizDescription: string;
  checklistTitle: string;
  galleryImages: string[];
}

const pillarContent: Record<string, PillarContent> = {
  confidence: {
    title: "Confidence - A Rebel's Superpower",
    description: "Rebels don't shrink back, they rise up. Confidence in your 50's, 60's, 70's, 80's, and beyond is about knowing your worth, owning your story, and most importantly embracing the power of your wisdom. At Rebellious Aging we are here to help you silence the inner critic, shake off limiting, and outdated beliefs and reignite your self-assurance. This is your time to show up boldly, speak your truth, and radiate the kind of confidence that does NOT ask permission.",
    quizTitle: "The Confidence Self-Assessment",
    quizDescription: "Discover your current confidence level and receive personalized recommendations to build unshakeable self-assurance.",
    checklistTitle: "7-Day Confidence Boosting Checklist",
    galleryImages: [
      "/lovable-uploads/b03d839e-90f3-410b-83ed-728958a1c2a7.png",
      "/lovable-uploads/de04437d-18b0-4eca-86c4-53077d082060.png",
      "/lovable-uploads/80d36c2d-c6e2-4381-b9a9-60b9a000b58f.png"
    ],
  },
  style: {
    title: "Style - Dazzle",
    description: "Style is not superficial—it is soulful, it is how you tell the world who you are without saying a word. Whether it is bright red lips, a daring scarf, or the perfect pair of vintage shoes and matching purse, style at Rebellious Aging is about expressing your true self—-bold, bright and unapologetically you. The time is now, so sparkle and shine with personality, play, panache and let your style dreams emerge.",
    quizTitle: "Discover Your Authentic Style Personality",
    quizDescription: "Take this quiz to uncover your unique style personality and learn how to express yourself authentically through fashion.",
    checklistTitle: "The Rebellious Style Essentials Checklist",
    galleryImages: [
      "/lovable-uploads/c520ecf2-2d39-4f88-aada-5c65c62e7081.png",
      "/lovable-uploads/94ed8310-7c9b-41fe-8292-33065ffa56eb.png",
      "/lovable-uploads/a624ace1-6dc9-4ab4-846c-176e441f514f.png"
    ],
  },
  health: {
    title: "Health - Nourish to Flourish",
    description: "You were not meant to slow down. You were meant to thrive. At Rebellious Aging, we encourage and embrace a Whole- Food, Plant- Based Lifestyle, as a delicious, empowering way to add healthy years to your life AND at the same time easily settle into your best weight and add life to your years. With every healthy bite you are fueling your body with vitality, managing weight naturally (no calorie counting and eating as much as you like) and taking care of your health in the most delicious way. Health isn't about living longer—-it is about living better, with purpose, authenticity, and sparkle",
    quizTitle: "The Health Lifestyle Assessment",
    quizDescription: "Evaluate your current lifestyle habits and receive a personalized roadmap to optimize your health span.",
    checklistTitle: "Daily Health Practices Checklist",
    galleryImages: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
    ],
  },
};

const PillarPage = () => {
  const { pillarId } = useParams<{ pillarId: string }>();
  
  if (!pillarId || !pillarContent[pillarId]) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-6">Pillar Not Found</h1>
        <p>The pillar you're looking for doesn't exist.</p>
      </div>
    );
  }

  const content = pillarContent[pillarId];

  const suzChoiceContent = {
    recipes: [
      {
        title: "Rainbow Buddha Bowl",
        description: "A vibrant, nutrient-packed bowl with quinoa, roasted vegetables, and tahini dressing.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        category: "Main Dish"
      },
      {
        title: "Green Goddess Smoothie",
        description: "Energizing blend of spinach, banana, mango, and coconut water.",
        image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=300&fit=crop",
        category: "Smoothie"
      },
      {
        title: "Lentil Power Salad",
        description: "Protein-rich lentils with fresh herbs, vegetables, and lemon vinaigrette.",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
        category: "Salad"
      }
    ],
    books: [
      {
        title: "How Not to Die",
        author: "Dr. Michael Greger",
        description: "The revolutionary guide to the foods that prevent and reverse disease.",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop"
      },
      {
        title: "The Blue Zones",
        author: "Dan Buettner",
        description: "Lessons for living longer from the people who've lived the longest.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
      },
      {
        title: "Eat to Live",
        author: "Dr. Joel Fuhrman",
        description: "The amazing nutrient-rich program for fast and sustained weight loss.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"
      }
    ],
    videos: [
      {
        title: "Forks Over Knives",
        description: "Documentary examining the claim that most diseases can be controlled by rejecting animal-based foods.",
        image: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=400&h=300&fit=crop",
        type: "Documentary"
      },
      {
        title: "Game Changers",
        description: "Revolutionary documentary about plant-based eating and athletic performance.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        type: "Documentary"
      },
      {
        title: "What the Health",
        description: "Uncovers the secret to preventing and even reversing chronic diseases.",
        image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=300&fit=crop",
        type: "Documentary"
      }
    ]
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-teal/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.title}</h1>
            <p className="text-lg text-gray-700">
              {content.description}
            </p>
          </div>
        </div>
      </section>

      {/* Suz's Choice Section - Only for Health */}
      {pillarId === 'health' ? (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Suz's Choice for Health</h2>
              
              <Tabs defaultValue="recipes" className="w-full">
                <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
                  <TabsTrigger value="recipes">Recipes</TabsTrigger>
                  <TabsTrigger value="books">Books</TabsTrigger>
                  <TabsTrigger value="videos">Videos</TabsTrigger>
                </TabsList>
                
                <TabsContent value="recipes">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {suzChoiceContent.recipes.map((recipe, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-48 overflow-hidden">
                          <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">{recipe.title}</CardTitle>
                            <span className="bg-teal/10 text-teal text-xs px-2 py-1 rounded">
                              {recipe.category}
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm mb-4">{recipe.description}</p>
                          <Button variant="outline" className="w-full text-teal border-teal hover:bg-teal hover:text-white">
                            Get Recipe
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="books">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {suzChoiceContent.books.map((book, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-48 overflow-hidden">
                          <img
                            src={book.image}
                            alt={book.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg">{book.title}</CardTitle>
                          <CardDescription>{book.author}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm mb-4">{book.description}</p>
                          <Button variant="outline" className="w-full text-teal border-teal hover:bg-teal hover:text-white">
                            Learn More
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="videos">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {suzChoiceContent.videos.map((video, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-48 overflow-hidden relative">
                          <img
                            src={video.image}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                              <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">{video.title}</CardTitle>
                            <span className="bg-coral/10 text-coral text-xs px-2 py-1 rounded">
                              {video.type}
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                          <Button variant="outline" className="w-full text-teal border-teal hover:bg-teal hover:text-white">
                            Watch Now
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      ) : (
        // Gallery Section for other pillars
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                gallery
              </h2>
              <Carousel className="w-full">
                <CarouselContent>
                  {content.galleryImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <AspectRatio ratio={4 / 3}>
                          <img
                            src={image}
                            alt={`${content.title} inspiration ${index + 1}`}
                            className="rounded-lg object-cover w-full h-full"
                          />
                        </AspectRatio>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
      )}

      {/* Nutrition CTA - Only for Health */}
      {pillarId === 'health' && (
        <section className="py-16 bg-coral/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Fuel Your Health Journey</h2>
              <p className="text-lg text-gray-700 mb-8">
                Discover how proper nutrition supports your health goals. Learn about foods that promote vitality, brain health, and overall wellness as you age rebelliously.
              </p>
              <Link to="/nutrition">
                <Button className="bg-coral hover:bg-coral-dark text-white">
                  Explore Nutrition for Health
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Quiz Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{content.quizTitle}</h2>
            <p className="text-lg text-gray-700 mb-8">
              {content.quizDescription}
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <form>
                <div className="space-y-6">
                  <div>
                    <label className="block font-medium mb-2">
                      1. How would you rate your current level of {content.title.toLowerCase()}?
                    </label>
                    <div className="space-y-2">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <div key={value} className="flex items-center">
                          <input 
                            type="radio" 
                            id={`q1-${value}`} 
                            name="question1" 
                            value={value}
                            className="mr-3 h-4 w-4 text-teal focus:ring-teal"
                          />
                          <label htmlFor={`q1-${value}`}>
                            {value} - {value === 1 ? 'Very Low' : value === 5 ? 'Very High' : ''}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block font-medium mb-2">
                      2. What is your biggest challenge related to {content.title.toLowerCase()}?
                    </label>
                    <textarea 
                      className="w-full p-3 border border-gray-300 rounded-md"
                      rows={4}
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block font-medium mb-2">
                      3. What would improving your {content.title.toLowerCase()} allow you to do or experience?
                    </label>
                    <textarea 
                      className="w-full p-3 border border-gray-300 rounded-md"
                      rows={4}
                    ></textarea>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-teal hover:bg-teal-dark text-white w-full md:w-auto">
                    Submit & Get Your Results
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Checklist CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-teal/10 p-8 md:p-12 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{content.checklistTitle}</h2>
              <p className="text-lg text-gray-700 mb-8">
                Download our practical checklist with daily actions you can take to build your {content.title.toLowerCase()} and transform your experience of aging.
              </p>
              <Button className="bg-coral hover:bg-coral-dark text-white">
                Download Free PDF
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PillarPage;
