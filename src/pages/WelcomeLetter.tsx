
import React from 'react';
import { Link } from 'react-router-dom';
import ConnectCTA from '@/components/common/ConnectCTA';

const WelcomeLetter = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">💚</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Welcome Letter from Suz
            </h1>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <h2 className="text-2xl font-bold text-teal-600 mb-4">Hey Rebel,</h2>
            
            <p>This is not your grandma's aging club. (Well, unless your grannie is fabulous, feisty and rocking life at 85.) But it IS a safe, supportive space for women 55-105 who want to age in the best possible way, healthy, confident, unapologetic, joyful and grateful.</p>
            
            <p>Here we will share wisdom, encourage one another, laugh out loud, and learn side by side. This is a community where your voice matters, your story is honored, and your sparkle shines without apology.</p>
            
            <p>Because this is just the beginning of creating a rebellious aging community, I want you in on the shaping. Leave your email to stay in the loop, (I will send out a weekly update, and never share your email). Please email me directly with questions, suggestions, and ideas for what you would like to see in this growing community.</p>
            
            <div className="text-center my-6">
              <a 
                href="mailto:suz@rebelwithsuz.com" 
                className="text-teal-600 font-semibold text-lg hover:text-teal-700 underline decoration-2 underline-offset-4"
              >
                suz@rebelwithsuz.com
              </a>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
              <h3 className="text-xl font-bold text-teal-800 mb-4">MY Vision / All Input Welcome</h3>
              <ul className="space-y-2 text-teal-700">
                <li>• Monthly Zoom "Meet & Greets"</li>
                <li>• ZOOM teaching moments on eating Whole Food Plant Based, authentic style and extreme confidence.</li>
                <li>• Guest speakers and member interviews</li>
                <li>• A member column where YOU can showcase your art, books, fashion, inspirations, or happy moments.</li>
              </ul>
            </div>
            
            <p>Check it out, (already up and running) <Link to="/blog" className="text-teal-600 font-semibold hover:text-teal-700 underline decoration-2 underline-offset-4">The Rebel Icon's Blog: Where aging gets reimagined.</Link> Click the link to explore all the latest posts!</p>
            
            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
              <h3 className="font-semibold text-teal-800 mb-2">A Note from MY Heart</h3>
              <p className="text-teal-700">I know that not everyone is blessed with perfect health, resources, or support as they age. Every one of us carries a different story, a different challenge. But I believe deeply, that it is never too late or too soon to begin making choices that nourish your body, lift your spirit and bring you joy. Please know that wherever you are on your aging life path you are welcome here.</p>
            </div>
            
            <p>So whenever you are ready to take the next step, share a dream or simply sit with someone who understands….this is your <strong>"SPOT"</strong>.</p>
            
            <p><strong>Rebellious Aging is not about fading. It's about flipping the script, embracing our power, and sparkling brighter than ever, TOGETHER.</strong></p>
            <p><strong>We are always better together.</strong></p>
            
            <div className="text-center mt-6">
              <p className="text-xl font-medium text-teal-600 italic">With love, laughter and leafy greens,<br />Suz</p>
              <div className="mt-4">
                <a 
                  href="mailto:suz@rebelwithsuz.com" 
                  className="text-teal-600 font-semibold text-lg hover:text-teal-700 underline decoration-2 underline-offset-4"
                >
                  suz@rebelwithsuz.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ConnectCTA />
    </div>
  );
};

export default WelcomeLetter;
