
import React from 'react';
import { Button } from '@/components/ui/button';
import { PillarContent } from '@/data/pillarContent';

interface QuizSectionProps {
  content: PillarContent;
}

const QuizSection: React.FC<QuizSectionProps> = ({ content }) => {
  return (
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
  );
};

export default QuizSection;
