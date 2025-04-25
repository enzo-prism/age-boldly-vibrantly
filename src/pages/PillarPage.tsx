
import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface PillarContent {
  title: string;
  description: string;
  videoUrl: string;
  quizTitle: string;
  quizDescription: string;
  checklistTitle: string;
}

const pillarContent: Record<string, PillarContent> = {
  confidence: {
    title: "Confidence",
    description: "Confidence is the cornerstone of rebellious aging. It's about embracing your unique voice, standing firmly in your truth, and expressing yourself authentically without apology or permission. Our approach to confidence building combines mindset work, practical techniques, and community support.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quizTitle: "The Confidence Self-Assessment",
    quizDescription: "Discover your current confidence level and receive personalized recommendations to build unshakeable self-assurance.",
    checklistTitle: "7-Day Confidence Boosting Checklist",
  },
  style: {
    title: "Style",
    description: "Style is self-expression, not rule-following. Our approach to rebellious style focuses on discovering what makes you feel authentic and vibrant, regardless of conventional 'age-appropriate' fashion rules. We believe that personal style evolves throughout life and should be a source of joy and creativity.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quizTitle: "Discover Your Authentic Style Personality",
    quizDescription: "Take this quiz to uncover your unique style personality and learn how to express yourself authentically through fashion.",
    checklistTitle: "The Rebellious Style Essentials Checklist",
  },
  longevity: {
    title: "Longevity",
    description: "Longevity isn't just about adding years to your life—it's about adding life to your years. Our evidence-based approach focuses on physical vitality, cognitive sharpness, and emotional resilience through sustainable lifestyle practices that support vibrant aging.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quizTitle: "The Longevity Lifestyle Assessment",
    quizDescription: "Evaluate your current lifestyle habits and receive a personalized roadmap to optimize your health span.",
    checklistTitle: "Daily Longevity Practices Checklist",
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

      {/* Video Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Watch the {content.title} Explainer</h2>
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <div className="w-full h-0 pb-[56.25%] relative bg-gray-200">
                <iframe 
                  src={content.videoUrl}
                  title={`${content.title} explainer video`}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <p className="text-gray-600">
              This 45-second video introduces the concept of {content.title.toLowerCase()} as a pillar of rebellious aging and how it contributes to living a vibrant, fulfilling life.
            </p>
          </div>
        </div>
      </section>

      <Separator />

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
