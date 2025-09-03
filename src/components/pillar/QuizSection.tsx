
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { PillarContent } from '@/data/pillarContent';

interface QuizSectionProps {
  content: PillarContent;
}

const QuizSection: React.FC<QuizSectionProps> = ({ content }) => {
  const [formData, setFormData] = useState({
    rating: '',
    challenge: '',
    goals: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.rating) {
      toast({
        title: "Please complete the quiz",
        description: "Please select a rating for the first question.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Quiz Submitted Successfully!",
      description: "Thank you for completing the quiz. Suz will personally review your responses and get back to you with personalized advice via email within 24-48 hours.",
    });
    
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      rating: '',
      challenge: '',
      goals: ''
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{content.quizTitle}</h2>
          <p className="text-lg text-gray-700 mb-8">
            {content.quizDescription}
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit}>
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
                          checked={formData.rating === value.toString()}
                          onChange={(e) => setFormData(prev => ({ ...prev, rating: e.target.value }))}
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
                  <Textarea 
                    value={formData.challenge}
                    onChange={(e) => setFormData(prev => ({ ...prev, challenge: e.target.value }))}
                    rows={4}
                  />
                </div>
                
                <div>
                  <label className="block font-medium mb-2">
                    3. What would improving your {content.title.toLowerCase()} allow you to do or experience?
                  </label>
                  <Textarea 
                    value={formData.goals}
                    onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
                    rows={4}
                  />
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-teal hover:bg-teal-dark text-white w-full md:w-auto"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
                <p className="text-sm text-muted-foreground mt-3 text-center md:text-left">
                  Suz will personally review your results and get back to you with personalized advice via email
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
