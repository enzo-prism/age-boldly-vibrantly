
import React from 'react';
import { Button } from '@/components/ui/button';

const Movement = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal/10 to-coral/5 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              About Rebellious Aging
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed px-2">
              Rebellious Aging is more than a lifestyle—it's a movement challenging outdated notions of what it means to grow older in today's world.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
                  Our Story
                </h2>
                <div className="space-y-4 sm:space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Hi, I'm Suz — a passionate advocate for Rebellious Aging. My journey began in my 50s when I faced a health challenge — a high cholesterol diagnosis. Like many, I was presented with the typical path: medication. But something inside me said there had to be a better way. I wasn't interested in a lifetime of prescriptions; I wanted to heal my body naturally.
                  </p>
                  <p>
                    Through extensive research, I discovered the incredible power of a whole-food, plant-based diet. I immersed myself in the works of pioneers like Dr. Caldwell Esselstyn and Dr. T. Colin Campbell, whose groundbreaking studies showed how food can prevent and even reverse chronic disease.
                  </p>
                  <p>
                    What started as a personal experiment quickly became a transformative experience — for my body, mind, and outlook on life. This powerful shift from a conventional diet to a plant-based lifestyle is central to my story. I went from accepting the status quo to challenging it, which is the essence of Rebellious Aging.
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-teal">
                    Rebellious Aging
                  </h2>
                  <p>
                    Suz is not here to fade quietly into the background——and she doesn't want you to either. A lifelong lover of fashion (her first outfit obsession began at age 4) she believes personal style is a powerful expression of self, your calling card, your identity, it is letting the inner you shine through without apology. As a certified Whole-Food, Plant-Based lifestyle advocate, Suz has experienced firsthand the vibrant health, easy weight management, and renewed energy that come from living in alignment with your body. But Rebellious Aging is more than good health and great outfits——it is a call to rewrite the narrative. After 83 years of personal growth and learning to silence her own limiting beliefs and excel, she is now helping women 55+ to rebel against outdated expectations, reclaim their health, confidence, and style to become the bold, brilliant version of themselves they were always meant to be.
                  </p>
                </div>
              </div>
              
              {/* Image */}
              <div className="order-1 lg:order-2 w-full">
                <div className="rounded-xl overflow-hidden shadow-lg mx-auto max-w-md lg:max-w-none">
                  <img 
                    src="https://i.imgur.com/p1YPvQo.jpg" 
                    alt="Suz smiling confidently, embodying the Rebellious Aging lifestyle" 
                    className="w-full h-auto object-cover aspect-square sm:aspect-[4/5] lg:aspect-auto lg:h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Rebellious Introduction to Aging */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-teal/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center lg:text-left leading-tight">
              A Rebellious Introduction to Aging/<br className="hidden sm:block" />
              <span className="text-teal">Living Boldly Outside the Box</span>
            </h2>
            
            <div className="space-y-5 sm:space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                Maybe up until now, you've lived neatly inside the lines—checking the boxes, doing what is expected, following the rules. But that box? It's getting cramped. And guess what? It was never really yours to begin with.
              </p>
              
              <p>
                Now is the time to break out, break free, and become the woman you were always meant to be.
              </p>
              
              <div className="bg-white rounded-lg p-6 sm:p-8 text-center my-8 shadow-sm border border-teal/10">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-teal leading-relaxed">
                  Rebel. Reinvent. Reignite.<br />
                  <span className="text-coral">Sparkle fiercely, vibrantly, loudly and boldly.</span>
                </p>
              </div>
              
              <p>
                Aging sneaks up in unexpected ways. One day you are just living your life…and suddenly the mailbox is filled with AARP invitations. Medicare enrollment packets appear like clockwork. Social Security whispers. Senior discounts pop up at the movies, the bus, the train, in grocery stores and restaurants. People offer you their seat on the bus or subway. Friends pass away. You are told you "look good for your age." And during a global pandemic? You found yourself classified as high risk, just for existing.
              </p>
              
              <p className="text-center font-medium text-base sm:text-lg italic text-gray-600">
                Creepy, right?
              </p>
              
              <div className="bg-teal/5 rounded-lg p-4 sm:p-6 border-l-4 border-teal">
                <p className="font-bold text-base sm:text-lg text-teal">
                  But here is the truth: None of that defines YOU.
                </p>
              </div>
              
              <p>
                You are not a number. Not a statistic. Not a stereotype.
              </p>
              
              <p>
                If you are reading this, you already feel it. That quiet fire. That gentle nudge. That rebellious urge to say: <span className="font-bold text-coral">WTF</span>.
              </p>
              
              <p className="font-medium">
                At Rebellious Aging, we are not slowing down—we are showing up.
              </p>
              
              <p>
                We defy the narrative that aging is about DECLINE. We embrace the idea that these are our glory years—our time to glow brighter, live louder and love harder. We say yes to vibrant health, bold confidence and unapologetic style.
              </p>
              
              <p>
                So if you ever felt dismissed, overlooked, or boxed in, consider this your permission to rise.
              </p>
              
              <div className="bg-coral/10 rounded-lg p-6 sm:p-8 text-center my-8 border border-coral/20">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-coral">
                  DO NOT LET THE OLD LADY IN.
                </p>
              </div>
              
              <p>
                Instead, let these so-called reminders of age ignite your determination. Let them fuel your curiosity, your wisdom and your spark. Let's reinvent what it means to grow older. Let's reignite our passion for living healthy, confident and authentic lives—on our own terms.
              </p>
              
              <div className="bg-gradient-to-r from-teal to-coral text-white rounded-lg p-6 sm:p-8 text-center mt-8">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold leading-relaxed">
                  Because Rebels do not retire.<br />
                  <span className="text-yellow-200">They reignite.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movement;
