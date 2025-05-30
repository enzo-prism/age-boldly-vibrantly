
import React from 'react';
import { Button } from '@/components/ui/button';

const Movement = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-teal/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Rebellious Aging</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Rebellious Aging is more than a lifestyle—it's a movement challenging outdated notions of what it means to grow older in today's world.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Hi, I'm Suz — a passionate advocate for Rebellious Aging. My journey began in my 50s when I faced a health challenge — a high cholesterol diagnosis. Like many, I was presented with the typical path: medication. But something inside me said there had to be a better way. I wasn't interested in a lifetime of prescriptions; I wanted to heal my body naturally.
              </p>
              <p className="text-gray-700 mb-4">
                Through extensive research, I discovered the incredible power of a whole-food, plant-based diet. I immersed myself in the works of pioneers like Dr. Caldwell Esselstyn and Dr. T. Colin Campbell, whose groundbreaking studies showed how food can prevent and even reverse chronic disease.
              </p>
              <p className="text-gray-700 mb-6">
                What started as a personal experiment quickly became a transformative experience — for my body, mind, and outlook on life. This powerful shift from a conventional diet to a plant-based lifestyle is central to my story. I went from accepting the status quo to challenging it, which is the essence of Rebellious Aging.
              </p>
              <p className="text-gray-700">
                Suz is not here to fade quietly into the background——and she doesn't want you to either. A lifelong lover of fashion (her first outfit obsession began at age 4) she believes personal style is a powerful expression of self, your calling card, your identity, it is letting the inner you shine through without apology. As a certified Whole-Food, Plant-Based lifestyle advocate, Suz has experienced firsthand the vibrant health, easy weight management, and renewed energy that come from living in alignment with your body. But Rebellious Aging is more than good health and great outfits——it is a call to rewrite the narrative. After 83 years of personal growth and learning to silence her own limiting beliefs and excel, she is now helping women 55+ to rebel against outdated expectations, reclaim their health, confidence, and style to become the bold, brilliant version of themselves they were always meant to be.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://i.imgur.com/p1YPvQo.jpg" 
                alt="Suz smiling confidently, embodying the Rebellious Aging lifestyle" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movement;
