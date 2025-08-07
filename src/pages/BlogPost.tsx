

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const BlogPost = () => {
  const { postId } = useParams();
  
  // Handle the success blog post (Blog 1)
  if (postId === 'the-road-to-success-8-thoughts') {
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
                  4/4/2025
                </div>
                <span>•</span>
                <span>Blog 2</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  3 min read
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                The Road to Success: 8 Thoughts
              </h1>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <div className="space-y-8">
                <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
                  <h3 className="font-semibold text-teal-800 mb-3 text-xl">Hard Work</h3>
                  <p className="text-teal-700">Forget about luck, it is hard work.</p>
                </div>

                <div className="bg-coral-50 p-6 rounded-lg border-l-4 border-coral-400">
                  <h3 className="font-semibold text-coral-800 mb-3 text-xl">Patience</h3>
                  <p className="text-coral-700">If you lose patience you lose the battle.</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                  <h3 className="font-semibold text-green-800 mb-3 text-xl">Sacrifice</h3>
                  <p className="text-green-700">If you do not sacrifice for what you want, what you want becomes the sacrifice.</p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <h3 className="font-semibold text-blue-800 mb-3 text-xl">Consistency</h3>
                  <p className="text-blue-700">Transforms average to extraordinary.</p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                  <h3 className="font-semibold text-purple-800 mb-3 text-xl">Discipline</h3>
                  <p className="text-purple-700">Motivation gets you going but discipline keeps you going.</p>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                  <h3 className="font-semibold text-amber-800 mb-3 text-xl">Self Confidence</h3>
                  <p className="text-amber-700">It is not about whether others like you, it is that you know you will be fine if they do not like you.</p>
                </div>

                <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-400">
                  <h3 className="font-semibold text-rose-800 mb-3 text-xl">Positive Attitude</h3>
                  <p className="text-rose-700">You will not solve every problem, but you will irritate the naysayers.</p>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-400">
                  <h3 className="font-semibold text-emerald-800 mb-3 text-xl">Focus</h3>
                  <p className="text-emerald-700">Keep your eyes on your goals not on your obstacles.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mt-12 text-center">
                <p className="text-lg font-medium text-teal-600 mb-4">
                  Success isn't just about reaching the destination—it's about who you become on the journey.
                </p>
                <p className="text-lg font-medium text-coral">
                  Sparkle on, Rebels. Your success story is waiting to be written.
                </p>
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
  }
  
  // Handle the new WFPB lifestyle guide (Blog 2)
  if (postId === 'wfpb-lifestyle-guide') {
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
                  1/29/2025
                </div>
                <span>•</span>
                <span>Blog 3</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  12 min read
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-4 italic">[A work in progress. Revised 1/29/2025]</div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                A Quick Introduction and Guide to a Whole-Food Plant-Based (WFPB) Lifestyle
              </h1>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl text-teal-600 font-medium mb-6">
                The WFPB lifestyle is NOT a diet. It is a lifestyle which promotes better health, greater energy, and a deeper connection with the way humans chose to nourish themselves.
              </p>
              
              <p className="mb-6">It has been proven to be better for humans, the animals and the planet.</p>

              <p className="mb-6">Studies show that a WFPB diet can help prevent or manage or reverse chronic conditions like heart disease, type 2 diabetes, hypertension, autoimmune diseases, obesity, adult on-set diabetes, certain types of cancer, dementia and a host of other ailments linked to diet including impotence.</p>

              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400 mb-8">
                <p className="text-teal-800 font-medium">
                  <strong>Side Benefit:</strong> "If adopted and fully and completely adhered to you will never again have to count calories or worry about your weight". 
                  <span className="block mt-2 text-sm">- Dr Esselstyn</span>
                </p>
              </div>

              <h2 className="text-2xl font-bold text-teal-600 mt-12 mb-6">Whole Food Plant Based Defined</h2>
              <p className="text-lg font-medium text-coral mb-4">Think from the garden not the farm or factory.</p>

              <ul className="space-y-2 mb-6">
                <li>• No animals (nothing with a momma), including sea animals</li>
                <li>• No animal by products</li>
                <li>• No processed foods</li>
                <li>• Limit sugar, oil and salt</li>
              </ul>

              <p className="mb-6">WFPB focuses on optimal health and whole nutrient dense foods. It emphasizes eating minimally processed, whole plant foods such as fruits and vegetables, whole grains, nuts and seeds.</p>

              <p className="mb-8">Embrace the delight of all fruits and veggies, grains, nuts and seeds in as close to their original state as possible. <strong>Note:</strong> Calorie Density is important to consider if weight is an issue. Think nuts and avocados vs kale and lettuce.</p>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Insights from Professionals</h3>
              <p className="mb-6">A few quick comments from professionals who have influenced me along the way.</p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-blue-800 mb-3">Dr. Caldwell Esselstyn</h4>
                <p className="text-blue-700 mb-3">A surgeon, clinician and researcher at the Cleveland Clinic.</p>
                <blockquote className="text-blue-800 italic mb-3">
                  "My message is clear and absolute: coronary artery disease does not have to exist, and if it does. it need not progress"
                </blockquote>
                <p className="text-sm text-blue-600">- "Prevent and Reverse Heart Disease"</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-green-800 mb-3">Dr T Colin Campbell</h4>
                <p className="text-green-700 mb-3">A biochemist and a pioneering nutrition scientist and professor emeritus at Cornell University. Recently retired and founder of the global community, T Colin Campbell Center for Nutrition Studies.</p>
                <blockquote className="text-green-800 italic mb-3">
                  "I propose to do nothing less than redefine what we think of as good nutrition. The provocative results of my four decades of experimental research, including the findings from a 27 year laboratory program, prove that eating right can save your life"
                </blockquote>
                <p className="text-sm text-green-600">- "The China Study"</p>
              </div>

              <p className="font-medium text-teal-600 mb-8">These two gents are now 90+. They and their families have chosen to follow their research for 40+ years. Their personal results are astounding and the good news, achievable. They are my inspiration.</p>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Recommended Books</h3>
              <ul className="space-y-2 mb-6">
                <li>• Prevent And Reverse Heart Disease: The Revolutionary, Scientifically Proven, Nutrition-Based Cure</li>
                <li>• The China Study Revised Expanded Edition</li>
                <li>• How Not to Die: Discover the Foods Scientifically Proven to Prevent and Reverse Disease</li>
                <li>• For Fork's Sake: A Quick Guide to Healing Yourself and the Planet Through a Plant-Based Diet</li>
              </ul>

              <div className="bg-amber-50 p-4 rounded-lg mb-8">
                <p className="text-amber-800">
                  <strong>Note:</strong> The book "For Forks Sake" is a wonderful, user-friendly, practical step by step guide to embracing the WFPB lifestyle.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Documentaries to Inspire Your Journey (WATCH THESE)</h3>
              <ul className="space-y-2 mb-8">
                <li>• Forks over Knives</li>
                <li>• The Game Changers</li>
                <li>• What the Health</li>
                <li>• You are What You Eat: A Twin Experiment (Stanford University)</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Where Do You Get Your Protein?</h3>
              <p className="mb-4">The same place many animals do including but not limited to cows, chickens and pigs. These animals consume plants and synthesize the amino acids from the proteins in those plants. When humans eat meat, they are indirectly consuming the protein that originally came from the plants that the animals ate.</p>

              <p className="mb-6">So by eating plant foods directly one can "cut out the middleman" and still meet protein requirements efficiently. There are 40+ animals that go directly to the source, elephants, gorillas, hippos, etc.</p>

              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <p className="text-green-800 mb-3">
                  <strong>Note:</strong> All plants contain protein, in varying amounts. Legumes, soy, whole grains, nuts and seeds are rich sources, while even vegetables provide some.
                </p>
                <p className="text-green-700">
                  Here is a short list: spinach, broccoli, kale, brussel sprouts, asparagus, artichokes, mushrooms, collard greens, mustard greens, watercress.
                </p>
              </div>

              <p className="mb-8">Eating a variety of plant foods ensures all essential amino acids, making plant-based diets fully capable of meeting protein needs.</p>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400 mb-8">
                <p className="text-red-800 font-medium">
                  <strong>Red Flag:</strong> BEWARE OF PROCESSED FOODS and products labeled VEGAN. Best to stick to foods without labels.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Closing Thoughts from Dr. Dean Ornish</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-gray-700 mb-4 italic">
                  "One of the surprising findings in our study is that, for many people, it is easier to make BIG changes in diet and lifestyle than to make only moderate ones. Although this goes against conventional wisdom, we found it to be true."
                </p>
                <p className="text-gray-700 mb-4 italic">
                  "When people make only moderate changes in diet and lifestyle, they have the worst of both worlds. They have the sense of deprivation because they are not able to eat and do everything they want, but they are not making changes big enough to make them feel much better or to have much effect on their weight, their cholesterol, or their health."
                </p>
                <p className="text-gray-700 italic">
                  "On the other hand, when people make comprehensive changes in their diet and lifestyle, they begin to feel so much better, so quickly that the choices become clear, and for many people, worth making."
                </p>
                <p className="text-sm text-gray-600 mt-4">- Dean Ornish, M.D., President and Director, Preventive Medicine Research Institute, University of California, San Francisco</p>
              </div>

              <div className="bg-coral-50 p-6 rounded-lg mb-8">
                <p className="text-coral-800 font-medium mb-4">
                  However: If all you can do today is take one step, then take one step. The biggest wins are made up of the smallest steps.
                </p>
                <p className="text-coral-800 font-bold">
                  THE KEY IS CONSISTENCY AND PERSEVERANCE.
                </p>
              </div>

              <div className="text-center bg-teal-50 p-8 rounded-lg">
                <h4 className="font-bold text-teal-800 mb-4">Let's Continue the Conversation at Your Convenience.</h4>
                <p className="text-teal-700 mb-2"><strong>Suzanne Meinhardt</strong></p>
                <p className="text-teal-700 mb-2">beachmom@gmail.com</p>
                <p className="text-teal-700">408-406-8322 TEXT ONLY</p>
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
  }
  
  // Handle the closet blog post (Blog 4)
  if (postId === 'a-love-letter-to-my-closet') {
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
                  10 min read
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                A Love Letter to My Closet
              </h1>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl text-coral font-medium mb-6">
                There was a time I dressed to impress. Now? I dress to express.
              </p>
              
              <p className="mb-6">My closet is no longer a holding pen for solid black. (A guy I worked for once told me, if you want to be taken seriously in this biz, wear black, to say that had an impression on me is an understatement). But truth be known I expect black is the "little black power move of the color world". I drank the Kool Aid and for many years wore black, ONLY. My philosophy has always included, "if a little is good, a lot is better."</p>

              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400 mb-8">
                <p className="text-teal-800 font-medium">
                  My closet is no longer a holding pen for black. It is my personal gallery of courage, mood and sometimes sequins.
                </p>
              </div>

              <p className="mb-6">You will spot bright scarves, leopard and zebra prints, bright pink heels, my favorite red party skirt, shirts of many colors, some of which sparkle bright. A shelf of colorful hats, crazy socks, bright purses and chunky colorful jewelry. I am working toward breaking up with black, one step at a time. However, it is a slow agonizing break up because black has so much to give: check this out, after much pondering and thoughtfulness and questioning friends, I came up with a Pro Black List.</p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-semibold text-gray-800 mb-3">Pro Black List</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• I am in charge.</li>
                  <li>• I've got mystery - and I am keeping some for myself</li>
                  <li>• I am deliberate</li>
                  <li>• I am here to focus</li>
                  <li>• I know my power and I do not need to shout.</li>
                </ul>
                <p className="mt-4 text-gray-600 italic">Hmmmmmmmm?</p>
              </div>

              <p className="mb-6">This post is a letter to that space, a different time, the jackets that carry memories, the scarves that still smell faintly of old adventures, the shoes that remind me who I was (and still am, just a newer version). It's about the joy of reaching for a piece that makes me feel like me, and the quiet confidence that comes from showing up in something that whispers, "I've still got it but in a sassy classy way."</p>

              <div className="bg-coral-50 p-6 rounded-lg border-l-4 border-coral-400 mb-8">
                <p className="text-coral-800 font-medium">
                  I have lived long enough to know the fashion rules, and to BREAK them all. White after Labor Day, of course. Florals and stripes, so good. Red lipstick, a favorite silk blouse with jeans, sneakers and a baseball cap, classy redefined. Why not? Rebels radiate.
                </p>
              </div>

              <p className="mb-6">At 83, I no longer wonder, "Can I pull this off?" Instead I wonder? "Do I feel like myself in this and especially spectacular"? If the answer is yes, on, it goes.</p>

              <p className="mb-6">But here's the thing, I didn't just stumble into enjoying fashion. I have been intrigued since I was a little girl. There is a difference, you already know this, between FASHION and STYLE. I think unknowingly I chased the latter.</p>

              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-green-800 mb-3">The Red Plaid Belt Story</h4>
                <p className="text-green-700">
                  I recall being in 7th grade. I only had a few clothing items. I loved creating new outfits from what I had. I enjoyed reinventing what hung in my closet. I would find ways to tweak, change, and reinvent each piece to feel new. The day I used my dad's bright red plaid robe belt and proudly tied it around my waist to change the look of the "same old" was a day I will always remember. The compliments flew and I became unstoppable. It wasn't about labels or trends, it was about attitude, imagination and sass.
                </p>
              </div>

              <p className="mb-6">A few months ago, someone dear to me said, in conversation, "Well, you have your own unique style, it's easy for you." I was shocked. At 83, it had never dawned on me that what I'd been doing all of these years, tweaking, layering, adding robe belts like runway sashes, was style. It was not about effortlessness. It was about love.</p>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400 mb-8">
                <h4 className="font-semibold text-amber-800 mb-3">Rebellious Whisper</h4>
                <p className="text-amber-700 mb-4">
                  So here's my rebellious whisper to you. Don't fade. Don't apologize. Don't tuck yourself into black. Wear the thing you always wanted to wear, the way you want to wear it. The vintage purple hat, the red lipstick, the statement jacket you thought might be "too much". This is your time to SPARKLE, and to radiate unapologetic style.
                </p>
                <p className="text-amber-700 font-medium">
                  Refuse to become invisible. Your closet is a mirror. Let it reflect your energy, your evolution, your essence. Try something unexpected. Let your closet be the playground it was always meant to be.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-8 text-center">
                <p className="text-purple-800 text-lg font-medium italic">
                  What's hanging in your closet that is begging to dance again?
                </p>
              </div>

              <div className="text-center bg-coral-50 p-8 rounded-lg">
                <p className="text-coral-800 font-medium text-lg mb-2">With Love, Laughter and Leafy Greens,</p>
                <p className="text-coral-600 text-xl font-bold">Suz</p>
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
  }
  
  // Handle the nutrition blog post (now Blog 3)
  if (postId === 'rebellious-guide-what-is-on-your-plate') {
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
                <span>Blog 1</span>
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
  }

  // "Gratitude and the Rebellious Soul" blog post
  if (postId === 'gratitude-rebellious-soul') {
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
                  4/1/2025
                </div>
                <span>•</span>
                <span>Blog 6</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  15 min read
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Gratitude and the Rebellious Soul
              </h1>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl text-teal-600 font-medium mb-8 text-center italic">
                Gratitude is a powerful tool, not just for joy, but for health, confidence, and longevity.
              </p>

              <div className="space-y-6">
                <p>
                  Yesterday when Enzo and I were recording a video about the three pillars of Rebellious Aging, I blurted out, I must include a fourth pillar, gratitude. Enzo agreed and so of course a blog about gratitude must follow my outburst.
                </p>

                <p>
                  Gratitude is a powerful tool, not just for joy, but for health, confidence, and longevity. It's not just about saying thank you. It is about the way we see the world, and the way we show up in it.
                </p>

                <p>
                  Gratitude is not passive. It is not just being polite or listing what you are thankful for at Thanksgiving dinner (although that does matter). It is more of a mindset, a way of paying attention to what is good and worthy, even in the midst of chaos, change, or aging knees that creak a little louder each year.
                </p>

                <p>
                  Real gratitude acknowledges life as it is, while also celebrating what's still possible. It turns "why me?" into "what now?" and "I used to" into "I get to."
                </p>

                <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400 my-8">
                  <p className="text-teal-800 font-medium">
                    Here is where the sparkle meets the science: practicing gratitude actually rewires your brain.
                  </p>
                </div>

                <p>
                  Neuroscientists have found that regularly reflecting on what you are grateful for boosts levels of dopamine and serotonin, the brain's "feel good" chemicals. It even strengthens neural pathways associated with emotional regulation and empathy. In other words: the more you practice gratitude, the more natural it becomes to feel joy and connection and peace.
                </p>

                <p>
                  A fascinating study from UC Davis found that people who kept a gratitude journal for just ten weeks reported feeling more optimistic, exercising more, and visiting doctors less than those who focused on daily hassles. Yup, that's right, thankfulness might actually be better than a pharmaceutical supplement.
                </p>

                <p>
                  Gratitude matters, especially as we age. When we are younger, gratitude often feels like a luxury or is ignored completely. As we age? It becomes a necessity.
                </p>

                <p>
                  Gratitude anchors us. It softens the sting of loss and aging. It brings perspective to change. It helps us remember we are still here, still learning, still capable, still able to make an impact. Gratitude is an act of rebellion in a world that tells us aging is declining. No way, we are rising with great health, confidence, grace, style and gumption.
                </p>

                <section className="my-10">
                  <h2 className="text-2xl font-bold mb-6 text-teal-600">Here are a few ways to infuse more gratitude into your life.</h2>
                  <p className="text-lg mb-6 italic">(Without Making It a Chore)</p>

                  <div className="space-y-4">
                    <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-400">
                      <p className="text-blue-800">
                        Before your feet hit the floor, name one thing you are grateful for. A soft pillow counts. So does waking up.
                      </p>
                    </div>

                    <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-400">
                      <p className="text-green-800">
                        Take a 10 minute stroll and silently thank your body, the trees, the sky or whatever catches your eye.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-400">
                      <p className="text-purple-800">
                        Keep a small notebook by your bed and jot down three things each night that made your day better.
                      </p>
                    </div>

                    <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-400">
                      <p className="text-amber-800">
                        Call or text someone and tell them exactly what you appreciate about them. Don't wait.
                      </p>
                    </div>

                    <div className="bg-rose-50 p-5 rounded-lg border-l-4 border-rose-400">
                      <p className="text-rose-800">
                        Annoyed that your joints ache after gardening? Flip it to "I am grateful, I am strong enough to dig in the dirt and grow beautiful things."
                      </p>
                    </div>
                  </div>
                </section>

                <p className="text-lg">I think you get the point, right?</p>

                <p>
                  Gratitude is not a trend. It's a transformation. For the rebellious ager, it is one of the most powerful tools in your kit. Not because it is easy, but because it is real. Gratitude grounds you, heals you, and helps you rise.
                </p>

                <p>
                  So go ahead and make gratitude your daily rebellion. Not just because it is good for your brain (which it is), but because it reminds you how rich your life truly is.
                </p>

                <div className="bg-coral-50 p-8 rounded-lg my-8 text-center border-l-4 border-coral-400">
                  <p className="text-coral-800 font-bold text-lg mb-4">
                    Sparkle on,
                  </p>
                  <p className="text-coral-700 font-semibold text-xl">Suz</p>
                </div>
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
    }

    if (postId === 'blueberries-and-wrinkles') {
      return (
        <div className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    May 15, 2025
                  </div>
                  <span>•</span>
                  <span>Blog 5</span>
                  <span>•</span>
                  <span>6 min read</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Blueberries and Wrinkles
                </h1>
              </div>
              
              <article className="prose prose-lg max-w-none">
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mb-8">
                  <p className="text-lg font-medium text-amber-800 mb-0">
                    This exciting blog post is coming soon! We're busy preparing amazing content about the powerful connection between antioxidant-rich foods and healthy aging.
                  </p>
                </div>
                
                <p className="text-gray-600 text-center py-8">
                  Stay tuned for insights on how the right foods can help you age rebelliously with confidence and vitality.
                </p>
              </article>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link 
                  to="/blog" 
                  className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Post not found
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
};

export default BlogPost;

