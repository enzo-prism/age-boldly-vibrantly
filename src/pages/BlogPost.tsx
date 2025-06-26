
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const BlogPost = () => {
  const { postId } = useParams();
  
  // For now, we'll handle just the first blog post
  if (postId !== 'rebellious-guide-what-is-on-your-plate') {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button className="bg-teal hover:bg-teal-dark text-white">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back to Blog */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-teal hover:text-teal-dark mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                6/25/2025
              </div>
              <span>•</span>
              <span>Blog 4</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                8 min read
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              The Rebellious Guide (What is on Your Plate)
            </h1>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl text-teal-600 font-medium mb-6">
              Let's set the table for something deliciously different.
            </p>
            
            <p>I am excited to talk with you about something that has transformed my life. It is the Whole Food Plant Based (WFPB) lifestyle. Yup, not a diet but a lifestyle, for health and vitality with the added bonus of your body automatically regulating your weight if you follow the science.</p>

            <p>My goal is not to preach or persuade, but to create awareness that this powerful, evidence based way of eating exists. Hey, it might just be the missing piece that you have been looking for.</p>

            <p>No judgement here, just a big open heart and a sincere desire to share what I have learned, offer you clear, accurate information, and point you toward the science so you can explore for yourself. This is your invitation to pull up a chair and dig into the facts, rebelliously, of course.</p>

            <p>So whether you're just nibbling at the idea or ready to dive fork first into this lifestyle, remember, knowledge is power.</p>

            <p>Let's rebel against confusion. Let's begin with a list of definitions before we dig deep, so that we are all on the same page. Clarity is power.</p>

            <p>When you understand what is really on your plate, you can make choices that fuel your vitality, confidence, and health.</p>

            <p>Let's rebel against confusion, reclaim our health, and rediscover joy in eating.</p>

            <p className="font-medium text-coral">Sparkle on, Rebels. The revolution is deeeelish.</p>

            <h2 className="text-2xl font-bold text-teal-600 mt-12 mb-6">The Rebellious Guide to What is on Your Plate</h2>

            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400 mb-8">
              <h3 className="font-semibold text-teal-800 mb-3">Simple Carbohydrates</h3>
              <p className="text-teal-700 mb-3">These are fast-burning carbs made of just one or two sugar molecules. They digest quickly, give you a quick spike of energy, and soon after comes the CRASH!</p>
              <p className="text-teal-700 mb-3"><strong>Think:</strong> Candy, sodas, pastries, white bread, sugary cereals and much more.</p>
              <p className="text-teal-700 italic">They are like fireworks. They are bright and sparkly and exciting. They are over in a flash.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 mb-8">
              <h3 className="font-semibold text-green-800 mb-3">Complex Carbohydrates</h3>
              <p className="text-green-700 mb-3">These take longer to digest because they're made of longer sugar chains. That means more stable blood sugar, lasting energy and a happier digestive system.</p>
              <p className="text-green-700 mb-3"><strong>Think:</strong> sweet potatoes, oats, brown rice, lentils, quinoa, veggies beans and much more.</p>
              <p className="text-green-700 italic">They are like a slow burning candle, steady, warm, filling and reliable.</p>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Diet Types Explained</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Vegetarian</h4>
                <p>No meat, poultry or fish. You can include eggs, dairy, cheese and processed foods.</p>
                <p className="text-sm text-gray-600 italic">Think: cheese pizza, veggie lasagna, yogurt parfaits.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Vegan</h4>
                <p>No animal products at all. No meat, no dairy, no eggs, no honey.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Whole Food Plant Based (WFPB)</h4>
                <p>Focuses on whole, minimally processed plant foods. Fruits, veggies, grains, beans, legumes, nuts, seeds. No meat, dairy, eggs, oils, sugar or heavily processed products.</p>
                <p className="text-sm text-gray-600 italic">Think of nourishing your body for health, vitality and sparkle.</p>
              </div>
            </div>

            <div className="bg-coral-50 p-6 rounded-lg mt-8 mb-8">
              <h4 className="font-semibold text-coral-800 mb-3">Quick Recap</h4>
              <ul className="text-coral-700 space-y-1">
                <li>Vegetarian = no meat</li>
                <li>Vegan = no meat, no animal products</li>
                <li>WFPB = Plants</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Macronutrients vs Micronutrients</h3>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Macronutrients</h4>
                <p className="text-sm mb-2">The big three your body needs in large amounts</p>
                <p>Carbohydrates, Proteins, Fats</p>
                <p className="text-sm text-gray-600 italic">Think: the main event on your plate.</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Micronutrients</h4>
                <p className="text-sm mb-2">Vitamins and minerals your body needs in tiny amounts to function well.</p>
                <p className="text-sm text-gray-600 italic">Think: the behind the scenes crew making the show run smoothly.</p>
              </div>
            </div>

            <p className="font-medium text-center text-teal-600">You need both to sparkle inside and out!</p>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Different Types of Fasting</h3>

            <ul className="space-y-3">
              <li><strong>Intermittent Fasting (IF):</strong> Eat during a set window (e.g., 16:8, 14:10, 12:12).</li>
              <li><strong>5:2 Fasting:</strong> Eat normally for 5 days, restrict calories for two non consecutive days.</li>
              <li><strong>Time Restricted Eating:</strong> Eat in the daylight. Early dinner, no late snacks.</li>
              <li><strong>Prolonged Fasting:</strong> Fast 24 hours or longer. Only under medical guidance.</li>
              <li><strong>Modified Fasts:</strong> Eat very small amounts to mimic fasting benefits (usually Therapeutic).</li>
            </ul>

            <p className="font-medium text-teal-600 mt-4">NOTE: Fasting is not about punishment. It is about pause and purpose.</p>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">WFPB vs Top Diet Trends</h3>

            <div className="space-y-4">
              <div><strong>Keto:</strong> High fat, low carb, heavy on meat and oils. Quick weight loss results, but lacks fiber and long term benefits.</div>
              <div><strong>Paleo:</strong> Whole foods, but excludes legumes and grains. Leans on animal products.</div>
              <div><strong>Mediterranean:</strong> Balanced, plant leaning, includes fish and oils.</div>
              <div><strong>WFPB:</strong> All plants, no oil, no sugar, no salt, no processed foods. Based on science built for longevity and healing.</div>
            </div>

            <p className="font-medium text-coral mt-4">Note: Fad diets chase results. WFPB builds a healthy, confident life.</p>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Gut Health: Your Secret Garden</h3>
            <p>Support it with fiber, fermented foods, and plant variety. Avoid processed foods, sugars, oils and animal fats. Think of your gut like a garden, nurture it with whole plants.</p>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Label Reading for Rebels</h3>
            <p>Watch for added sugars, oils, sodium, artificial ingredients. Choose short clean ingredient lists you recognize.</p>
            <p className="font-medium text-teal-600 mt-2">Note: If it reads like a science project, maybe it belongs in the lab, not your kitchen.</p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12 text-center">
              <p className="text-lg mb-4">I hope this helps to clarify misconceptions.</p>
              <p className="text-lg mb-4">Let's rebel against confusion, reclaim our health, and rediscover joy in eating one bite at a time.</p>
              <p className="text-lg font-medium text-coral mb-4">Sparkle on Rebels. The Revolution is delicious.</p>
              <p className="text-lg font-medium text-teal-600">With Love, Laughter and Leafy Greens,<br />Suz</p>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-12 text-center">
          <Link to="/blog">
            <Button className="bg-teal hover:bg-teal-dark text-white">
              Back to All Posts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
