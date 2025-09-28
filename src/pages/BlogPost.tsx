

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ConnectCTA from '@/components/common/ConnectCTA';

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
              <div className="text-sm text-gray-500 mb-4">
                <span>Blog 2</span>
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

              <ConnectCTA />

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
            <Link to="/blog" className="inline-flex items-center gap-2 text-teal hover:text-teal-dark">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
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
              <div className="text-sm text-gray-500 mb-4">
                <span>Blog 3</span>
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

              <ConnectCTA />

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
            <Link to="/blog" className="inline-flex items-center gap-2 text-teal hover:text-teal-dark">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
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
              <div className="text-sm text-gray-500 mb-4">
                <span>Blog 4</span>
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
            <Link to="/blog" className="inline-flex items-center gap-2 text-teal hover:text-teal-dark">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
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
              <div className="text-sm text-gray-500 mb-4">
                <span>Blog 1</span>
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

              <ConnectCTA />

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
            <Link to="/blog" className="inline-flex items-center gap-2 text-teal hover:text-teal-dark">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
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
              <div className="text-sm text-gray-500 mb-4">
                <span>Blog 6</span>
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

                <ConnectCTA />

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


    // Blog #7: The Art of Thriving
    if (postId === 'art-of-thriving-aging-expert') {
      return (
        <div className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="text-sm text-gray-500 mb-4">
                  <span>Blog 7</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  The Art of Thriving. What an Ageing Expert Wants You to Know
                </h1>
              </div>
              
              <article className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  I came across an article in the Guardian this morning and I thought it was worthy of a share. 
                  It was written by Dr. Kerry Burnight. I am inspired by Dr. Kerry's wisdom as I feel it aligns 
                  with my message here at Rebellious Aging.
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Here is my Blog on her article.
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  What if ageing wasn't something to fear, fight, or fix. Rather something to expand into with joy, 
                  purpose, and rebellious spark? Dr. Kerry is one of America's leading gerontologists and believes 
                  exactly that and as a Rebel I could not agree more.
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  In the article, titled "I'm an Expert on Aging. Here is What I Know about Thriving in Later Life," 
                  Dr Burnight shares the kind of wisdom that deserves a drumroll, and maybe a dance break.
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Here is what she says we need to do to truly thrive.
                </p>

                <div className="bg-teal/10 p-6 rounded-lg mb-8">
                  <p className="text-gray-800 leading-relaxed mb-4">
                    Forget about just adding years to your life (lifespan) or even adding life to your years (healthspan). 
                    Dr. Kerry introduces the reader to a richer, deeper concept. <strong>Joyspan</strong>. Which is living 
                    with connection, purpose, and the kind of soul deep contentment that makes aging feel like a privilege, 
                    not a penalty.
                  </p>
                  <p className="text-gray-800 font-semibold">
                    Now that is rebellious.
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Here are her essentials, they are not optional.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-coral/10 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Keep learning. Stay curious. Try new things.</h3>
                    <p className="text-gray-600">
                      Yes, even if it scares you a little, or a lot.. That is the point. A curious mind keeps us alive, 
                      engaged, and fabulously unpredictable.
                    </p>
                  </div>

                  <div className="bg-coral/10 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Relationships are the elixir.</h3>
                    <p className="text-gray-600">
                      Whether it's rekindling old friendships, hugging tighter, or even starting new connections online, 
                      being seen and known matters.
                    </p>
                  </div>

                  <div className="bg-coral/10 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Change is a constant companion in later life.</h3>
                    <p className="text-gray-600">
                      The key? Flexibility. Grace. Maybe even a sense of humor, when gravity starts getting sassy.
                    </p>
                  </div>

                  <div className="bg-coral/10 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Your life experience has value. Share it.</h3>
                    <p className="text-gray-600">
                      Mentor, support, volunteer, or simply smile at someone who looks lost. Giving adds meaning and 
                      texture to our days.
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Dr. Burnright paints a vivid contrast between two women. One is resigned to decline, the other is 
                  lit up with curiosity and confidence. The difference was not luck or money. It was <strong>Mindset</strong>.
                </p>

                <div className="bg-teal/10 p-6 rounded-lg mb-8">
                  <p className="text-gray-800 leading-relaxed">
                    Reading this article reminded me that the work we are doing here, embracing radiant health, 
                    confidence and unapologetic style, is not superficial. It's survival. It's joy. It's rebellion.
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  To grow, connect, adapt, and give, that's what we Rebels do best.
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Not sure where to begin? Start with one tiny act of rebellion. Try something new. If you need a 
                  little nudge, I've got your back. Reach out and join our community.
                </p>

                <div className="bg-coral/10 p-6 rounded-lg mb-8">
                  <h3 className="font-semibold text-gray-800 mb-2">Feeling inspired?</h3>
                  <p className="text-gray-600">
                    For the next seven days, choose one small action to grow, connect, adapt or give. Keep a note, 
                    share your favorite moment. Let joy surprise you.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="font-semibold text-gray-800 mb-4">Read the Original Article</h3>
                  <p className="text-gray-600 mb-4">
                    Read Dr. Kerry Burnight's full article that inspired this blog post:
                  </p>
                  <a 
                    href="https://www.theguardian.com/commentisfree/ng-interactive/2025/jul/18/best-ageing-advice-expert-tips#:~:text=Thriving%20doesn't%20mean%20being,the%20quality%20of%20their%20lives."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-700 underline"
                  >
                    "I'm an Expert on Aging. Here is What I Know about Thriving in Later Life" - The Guardian
                  </a>
                </div>

                <ConnectCTA />

                <p className="text-gray-600 leading-relaxed text-center font-medium">
                  Sparkle on, Rebels
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

  if (postId === 'shop-window-aging-gracefully') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog Link */}
            <Link to="/blog" className="inline-flex items-center text-teal hover:text-teal-dark mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            {/* Article Header */}
            <header className="mb-12">
              <div className="text-sm text-gray-500 mb-4">
                <span>Blog 8</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                What a Shop Window Taught Me About Aging Gracefully
              </h1>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 font-medium">
                Who knew a shop window could deliver a life lesson? One early morning glance stopped me in my tracks and got me thinking about posture, presence, and how we carry ourselves through the years. A gentle nudge for all of us Rebels.
              </p>

              <p className="mb-6">
                It started as just another peaceful morning walk with my pup, Gabe.
              </p>

              <p className="mb-6">
                We took a different route today. One that wound us through the quiet charm of downtown. As the sun peeked over the buildings and Gabe sniffed his way through the sidewalk stories of the day, I caught a glimpse of myself in a shop window.
              </p>

              <p className="mb-6">
                I stopped, stunned. Shoulders slumped. Back rounded. My body was speaking, not in the way I wanted it to.
              </p>

              <p className="mb-8">
                I instantly thought of my mom. She had a thing about posture as I was growing up. "Stand tall", she'd say, tapping gently on my shoulders. "Good posture shows self respect."
              </p>

              <div className="bg-teal/10 p-6 rounded-lg mb-8">
                <p className="text-lg font-semibold text-teal-dark mb-2">She was right.</p>
                <p className="mb-0">
                  Posture is not just about looking elegant, it is about aging with confidence, strength, and even safety. It affects balance, energy, mood, digestion, and how the world sees us. And more importantly, how we see ourselves.
                </p>
              </div>

              <p className="mb-6">
                As we age, our bodies naturally change. Poor posture can speed up the process and steal joy from everyday moments.
              </p>

              <div className="bg-coral/10 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-coral-dark mb-4">Examples:</h3>
                <ul className="space-y-2 mb-0">
                  <li>• Rounded shoulders can tighten the chest and restrict breathing.</li>
                  <li>• Slouching weakens core and back muscles.</li>
                  <li>• Poor alignment increases fall risk and spinal compression.</li>
                  <li>• It can even lower confidence and mood because body language is a language.</li>
                </ul>
              </div>

              <div className="bg-sage/10 p-6 rounded-lg mb-8">
                <p className="text-lg font-semibold text-sage-dark mb-2">Here is the good news, it is never too late to straighten up.</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">Gentle Ways to Stand Tall</h2>

              <p className="mb-6">
                Here are a few simple things I am doing now (and you can too!)
              </p>

              <div className="bg-white border-l-4 border-teal p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">Sticky Note Reminders</h3>
                <p className="mb-4">I include the following in my morning stretch and workout routine.</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">A. The Wall Test</h4>
                  <p className="mb-2">Stand with your back against a wall. Heels, tailbone, shoulders, and the back of your head touching the wall. Hold for 30 seconds. Repeat several times.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">B. Daily Posture Reset Stretch</h4>
                  <p className="mb-3">Try this quick sequence:</p>
                  <ul className="space-y-2">
                    <li>• Roll shoulders up, back and down</li>
                    <li>• Tuck chin gently to lengthen the neck</li>
                    <li>• Lift your chest slightly and breathe deeply</li>
                    <li>• Engage your core like you are zipping up a snug coat</li>
                    <li>• Hold for 10 seconds. Repeat often.</li>
                  </ul>
                </div>
              </div>

              <p className="mb-6">
                So the shop window moment could have spiraled into self criticism. Instead, it became a nudge, a reminder that Rebellious Aging is not about perfection. It is about paying attention, making tweaks, and moving forward with self love and attention.
              </p>

              <div className="bg-gradient-to-r from-teal/20 to-coral/20 p-8 rounded-lg mb-8 text-center">
                <p className="text-lg font-semibold mb-2">We deserve to take up space.</p>
                <p className="text-lg font-semibold mb-2">To walk with pride.</p>
                <p className="text-lg font-semibold mb-0">To show the world we are not invisible but still rising.</p>
              </div>

              <div className="bg-sage/20 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-sage-dark mb-4">🌟 Rebel Homework</h3>
                <p className="mb-4">Stand before a mirror or a shop window, and do your own posture check and correct.</p>
                <p className="mb-0 font-medium">Leave a comment and let's straighten up together.</p>
              </div>

              <ConnectCTA />

              <div className="text-center mt-12">
                <p className="text-xl font-semibold text-coral">Sparkle on,</p>
                <p className="text-xl font-semibold text-coral">Suz</p>
              </div>
            </article>

            {/* Back to All Posts */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/blog">
                <Button className="bg-teal hover:bg-teal-dark text-white">
                  ← Back to All Posts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (postId === 'limiting-beliefs-not-boss') {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-teal hover:text-teal-dark mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <article className="prose prose-lg max-w-none">
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span>8/6/2025</span>
                <span>•</span>
                <span>Blog 10</span>
                <span>•</span>
                <span>9 min read</span>
              </div>
              <h1 className="text-4xl font-bold mb-6">Shhh…That Voice in Your Head is Not the Boss of You</h1>
            </div>

            <div className="space-y-6">
              <p>
                Let's get one thing straight. Those whispers in your head, ya know the ones saying you are too old, too late, not stylish enough, not smart enough, unhealthy, horribly out of shape, not ready, they are NOT the truth. (For those who are interested I will dive deeper into the science of who those sneaky voices belong to.) But for now let's go with this. They are old scripts. They are "hand me down" fears. Quite frankly, they are BORING! It is time to stop letting those outdated voices run the show.
              </p>

              <p>
                Limiting beliefs are sneaky. They wear disguises like "being realistic" or "just protecting from disappointment." But what they are really doing is shrinking YOU. They are keeping you from saying yes to that art class, trying a new hairstyle, hitting record on that video idea, or ditching making healthier food choices.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
                <p className="text-lg font-semibold">
                  Here is the TRUTH bomb. You do not have to believe every thought you think.
                </p>
              </div>

              <p>
                May I suggest you read, <em>"Don't Believe Everything You Think" (Why Your Thinking is the Beginning & End Of Suffering)</em> by Joseph Nguyen.
              </p>

              <p>
                That voice in your head? It may sound like you, but it is NOT you. It is a collage of old rules, other people's opinions, and moments when your confidence got a bit bruised. You, my friend, are much better than that.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6">3 Simple Ways to Start Busting Through Limiting Beliefs</h2>

              <div className="bg-teal/10 p-6 rounded-lg my-8">
                <h3 className="font-bold text-lg mb-4">1. Name it to Tame it.</h3>
                <p>
                  When a limiting thought pops up, ya know like "I am too old to begin something new", say it out loud. Hearing it with your real voice often will reveal just how silly or outdated that thought is.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg my-8">
                <h3 className="font-bold text-lg mb-4">2. Ask: Would I say this to a friend?</h3>
                <p>
                  If your best friend came to you at 55, 65, or 83 saying, "I want to try something new," would you ever say, "Nope, too late". Of course not. You must treat yourself with the same compassion.
                </p>
              </div>

              <div className="bg-teal/10 p-6 rounded-lg my-8">
                <h3 className="font-bold text-lg mb-4">3. Gather Evidence to the Contrary.</h3>
                <p className="mb-4">
                  Write down all the times you did try something new and it went superbly. Or at the least, taught you something important.
                </p>
                <p className="font-semibold">
                  You are not starting from scratch. You are starting from Experience.
                </p>
              </div>

              <p>
                Here's the thing. Confidence is definitely not about having all of the answers. It is more about trusting yourself enough to take the next step. If your knees are knocking and you are breaking out in a sweat, keep going. The great thing is you can be scared and still be powerful. How about this, "self doubt" can ride along for the journey, but it does not get to drive.
              </p>

              <div className="text-center my-8">
                <p className="text-xl font-bold">
                  We Rebels are NOT here to play small.
                </p>
                <p className="text-lg mt-4">
                  We are here to live fully, loudly, and with the kind of sparkle that makes people stop and say, "I want whatever she's got."
                </p>
              </div>

              <div className="bg-coral/10 border-l-4 border-coral p-6 my-8">
                <h3 className="font-bold text-lg mb-4">Call to Action:</h3>
                <p className="mb-4">
                  Is there a limiting belief that haunts you? Let it go. Write it down. Tear it up. Better yet burn it. Then take one rebellious action that proves it wrong.
                </p>
                <p className="font-semibold">
                  Need a cheerleader? I am here for you.
                </p>
              </div>

              <ConnectCTA />

              <div className="text-center mt-8">
                <p className="text-lg italic">
                  Sparkle on,<br />
                  Suz
                </p>
              </div>
            </div>
          </article>

          <div className="mt-12 text-center">
            <button 
              onClick={() => window.history.back()}
              className="bg-teal text-white px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors"
            >
              ← Back to Blog
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (postId === 'set-record-straight-wfpb') {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-teal hover:text-teal-dark mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <article className="prose prose-lg max-w-none">
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span>8/4/2025</span>
                <span>•</span>
                <span>Blog 9</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
              <h1 className="text-4xl font-bold mb-6">It's Time to Set the Record Straight Regarding a Whole Food Plant Based Lifestyle</h1>
            </div>

            <div className="space-y-6">
              <p>
                Let's be honest. When you mention to other humans that you are eating mostly plants, the reactions range from curious to downright skeptical. The first question is usually about where do you get your protein? Followed by, isn't it expensive? Followed by the statement, Sounds like a lot of work.
              </p>

              <p>
                I know you have been wondering the same. These are my most asked questions. These myths have been around longer than tofu has been on supermarket shelves. Here's the truth. A whole Food Plant Based (WFPB) lifestyle is not extreme, it is evidence-based, empowering, simple, delicious, life changing, health changing, weight changing and doable at any age.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Let's Clear the Air.</h2>

              <div className="bg-teal/10 p-6 rounded-lg my-8">
                <h3 className="font-bold text-lg mb-4">Where do you get your protein?</h3>
                <p className="mb-4">
                  <strong>Duh, Simple answer:</strong> the same place the animal you just ate got their protein. <strong>PLANTS!</strong> Plants have plenty of protein. Here's a short list in no special order:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                  <span>• peanut butter</span>
                  <span>• soy milk</span>
                  <span>• oat milk</span>
                  <span>• lentils</span>
                  <span>• beans</span>
                  <span>• tofu</span>
                  <span>• edamame</span>
                  <span>• quinoa</span>
                  <span>• oats</span>
                  <span>• green peas</span>
                  <span>• split peas</span>
                  <span>• potatoes</span>
                  <span>• kale</span>
                  <span>• spinach</span>
                  <span>• broccoli</span>
                </div>
                <p className="mt-4 italic">
                  Most Americans actually consume too much protein (A Future Blog).<br />
                  Checkout, <a href="https://nutritionfacts.org/protein" className="text-teal hover:underline">NutritionFacts.org/protein</a>
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg my-8">
                <h3 className="font-bold text-lg mb-4">It's Too Expensive.</h3>
                <p className="mb-4">Not if you do not want it to be. Just like anything else you have choices.</p>
                <p>
                  <strong>Beans, rice, potatoes, oats, frozen veggies and in season produce</strong> are some of the cheapest and most nutritious foods on the planet. Whole Foods for the win!
                </p>
              </div>

              <div className="bg-teal/10 p-6 rounded-lg my-8">
                <h3 className="font-bold text-lg mb-4">It takes too much time to prepare.</h3>
                <p className="mb-4">Again just like with the Standard American Diet (SAD) you have choices. If you are making an Instagram worthy Buddha bowl or Chef Aj's deelish Chocolate Mint Torte, maybe. (<a href="https://chefaj.com" className="text-teal hover:underline">chefaj.com</a>)</p>
                <p className="mb-4">
                  WFPB can be as fast as an unglamorous but nutritious Buddha bowl, as fast as a bowl of chili, or a roasted sweet potato on a bed of greens smothered with your choice of an assortment of veggies topped with a great balsamic or salsa.
                </p>
                <p>
                  <strong>Frozen veggies equal time saving brilliance.</strong> I am having a love affair with organic frozen kale and wild blueberries. Simple as simple is and quicker and healthier than take out. Replace the word EAT with Nourish, for the win.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg my-8">
                <h3 className="font-bold text-lg mb-4">It is ONLY for Young People.</h3>
                <p>
                  Actually the older we get, the more our bodies benefit from nutrient rich, anti-inflammatory foods. Aches, energy dips, blood pressure spikes? <strong>Plants for the win.</strong>
                </p>
              </div>

              <div className="bg-teal/10 p-6 rounded-lg my-8">
                <h3 className="font-bold text-lg mb-4">I Will Feel Deprived.</h3>
                <p className="mb-4">
                  Deprived of what, heartburn? Joint pain? Meds? Autoimmune Disease? Heart Disease?
                </p>
                <p>
                  The truth is, many people discover more flavor, satisfaction, and joy in their meals when they go plant based. Your gut microbiome celebrates, your taste buds evolve, your energy returns, your weight stabilizes, your blood flows and your confidence blooms. <strong>Aging with grace and greens for the win.</strong>
                </p>
              </div>

              <p className="text-lg">
                You have nothing to lose and so much to gain. You do not have to know everything to get started. You just have to be open. The WFPB lifestyle is not about perfection it is about progress and possibilities. And trust me, your body will thank you.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
                <p className="text-lg italic font-medium">
                  From Dr. T. Colin Campbell: "A good diet is THE most powerful weapon against disease and sickness."
                </p>
              </div>

              <p className="text-lg font-semibold">
                Rebel on, eat well, and remember, you've got this.
              </p>

              <div className="bg-gray-100 p-6 rounded-lg my-8">
                <h3 className="font-bold text-lg mb-4">Check out the following documentaries:</h3>
                <ul className="space-y-2">
                  <li>• Forks Over Knives</li>
                  <li>• Game Changers</li>
                  <li>• What the Health</li>
                  <li>• Plant Pure Nation</li>
                  <li>• Fat, Sick and Nearly Dead</li>
                  <li>• You Are What You Eat: A Twin Experiment</li>
                </ul>
              </div>
            </div>
          </article>

          <div className="mt-12 text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-teal hover:text-teal-dark">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (postId === 'what-is-behind-limiting-beliefs') {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-teal hover:text-teal-dark mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="text-center mb-8">
            <div className="text-teal mb-2">8/7/2025 • Blog #11 • 7 min read</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              What is Behind Limiting Beliefs?
            </h1>
          </div>

          <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-8 text-teal font-medium">
              The voices that taunt us, saying things like you are too old, or you are not enough, or you'll fail, or they are going to laugh at you, are not a mystical curse.
            </p>

            <p className="mb-6 text-lg">
              Here is the science behind it:
            </p>

            <div className="bg-teal/10 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">The Brain's Built-in Alarm System</h2>
              <p className="mb-4">
                We evolved to survive, not to shine. Your brain's primary job is to detect threats, like embarrassment, failure, or rejection. So when you think about doing something bold or unfamiliar (like starting a YouTube channel at 83) your brain may shout out, "hold on, stay safe." This is just your amygdala doing its job. Helpful? Typically not.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-teal mt-4">
                <p className="text-sm italic">
                  (Your amygdala is a small part of your brain, but it has a big job. It is a major processing center for emotions. It also links your emotions to many other brain abilities. It is a part of the larger network called the limbic system. These are parts of your brain that detect danger. They also play a role in behavior, emotional control and learning. <em>Clevelandclinic.org</em>.)
                </p>
              </div>
            </div>

            <div className="bg-coral/10 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">The Inner Critic is a Learned Voice</h2>
              <p className="mb-4">
                Most of those critical thoughts are formed in childhood and reinforced over time. Psychologists call this internalized messaging—ideas you absorbed from your parents, teachers, peers, media and society. Messages like: don't draw attention to yourself, act your age, you are not the creative one. These become part of your subconscious belief system, repeated so often they feel like truth. But they are not true or even close. They are simply just well-worn mental grooves.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-coral mt-4">
                <p className="text-sm italic">
                  Your subconscious belief systems are deeply ingrained, often unexamined, and can significantly influence thoughts, behaviors, and even physical health. These beliefs, formed in early childhood and beyond, operate largely outside of conscious awareness and can drive actions, shape interpretations of experiences and create self-limiting patterns. Understanding and potentially modifying these beliefs can be a key component of personal growth and positive change. <em>psychologytoday.com</em>, see article, "Are Negative Core Beliefs Wrecking Your Life".
                </p>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Default Mode Network (DMN)</h2>
              <p className="mb-4">
                This is the brain network that lights up when you are not focused on a task. Like when you are daydreaming, remembering, or self-reflecting. It is also where self-critical chatter can thrive. When the DMN is overactive, it can fuel anxious or negative inner dialogue.
              </p>
              <p>
                Good news? Practices like mindfulness, journaling, and cognitive reframing help quiet this network and strengthen more empowering thoughts.
              </p>
            </div>

            <div className="bg-gray-800 text-white p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">Bottom Line:</h2>
              <p className="text-lg">
                Those taunting voices in your head are a mix of subconscious programming, outdated survival wiring, and cultural conditioning. <strong>THEY ARE NOT YOU.</strong> You are the observer, the awareness, the Rebel who gets to decide which thoughts are welcome and <strong>WHICH NEED TO PACK THEIR BAGS AND MOVE ON.</strong>
              </p>
            </div>

            <ConnectCTA />

            <p className="text-center text-lg font-medium text-teal mb-8">
              Sparkle on,<br />
              Suz
            </p>
          </article>

          <div className="mt-12 text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-teal hover:text-teal-dark">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (postId === 'less-salt-more-sparkle') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-background/80 py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-card rounded-2xl shadow-xl border border-border/50 overflow-hidden">
            <div className="p-8 lg:p-12">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-sm text-muted-foreground mb-6">
                  <span>Blog #19</span>
                  <span>•</span>
                  <span>9/2/2025</span>
                  <span>•</span>
                  <span>12 min read</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-light mb-6 text-foreground leading-tight">
                  Less Salt, More Sparkle
                </h1>
              </div>

              {/* Opening Section */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Let's be honest: salt has been riding high on its reputation as the magic dust that makes food taste better. 
                  It's in shakers on your table, sprinkled across Instagram food shots, and dressed up as "Himalayan pink" 
                  or "sea harvested artisan crystals." Very fancy marketing, but let's cut through the hype, <strong>Salt is Salt</strong>. 
                  If you crave vitality, not sluggishness, it is time to ask the tough question, what's all that sprinkling doing to your sparkle?
                </p>
              </div>

              {/* Guidelines Section */}
              <div className="bg-blue-50/50 dark:bg-blue-950/20 rounded-xl p-6 mb-8 border border-blue-200/50 dark:border-blue-800/30">
                <h3 className="text-xl font-semibold mb-4 text-foreground">How Much is Enough?</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-blue-600 dark:text-blue-400 min-w-[60px]">WHO:</span>
                    <span className="text-muted-foreground">&lt;2,000 mg sodium/day</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-blue-600 dark:text-blue-400 min-w-[60px]">AHA:</span>
                    <span className="text-muted-foreground">Best under 1500 mg/day, max 2,300 mg/day</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-blue-600 dark:text-blue-400 min-w-[60px]">WFPB:</span>
                    <span className="text-muted-foreground">Skip the shaker, plants will provide all you need.</span>
                  </div>
                </div>
                <p className="text-sm italic text-muted-foreground mt-4">
                  The less you shake on, the brighter your health shines.
                </p>
              </div>

              {/* Health Impact Section */}
              <div className="bg-red-50/50 dark:bg-red-950/20 rounded-xl p-6 mb-8 border border-red-200/50 dark:border-red-800/30">
                <h3 className="text-xl font-semibold mb-4 text-foreground">What Too Much Salt Does</h3>
                <p className="text-muted-foreground mb-4">
                  Too much sodium does more than make you thirsty, it raises blood pressure, strains your kidneys, 
                  dulls your taste buds, and contributes to stomach cancer risk. Over salting quietly steals your healthspan.
                </p>
              </div>

              {/* Benefits Section */}
              <div className="bg-green-50/50 dark:bg-green-950/20 rounded-xl p-6 mb-8 border border-green-200/50 dark:border-green-800/30">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Cut Back (Eliminate Added Salt) and:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Protect your heart and arteries</li>
                  <li>Give your kidneys a break</li>
                  <li>Retrain your taste buds to savor natural flavors</li>
                  <li>Kick bloating to the curb</li>
                  <li>Add vibrant years to your health span</li>
                </ul>
              </div>

              {/* Salt Types Reality Check */}
              <div className="prose prose-lg max-w-none mb-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Salt Types Reality Check</h3>
                <p className="text-muted-foreground">
                  So let's talk about salt types. Ya know, pink salt, sea salt, Kosher salt, etc. Don't be fooled 
                  (for the most part) by marketing sparkle. <strong>Salt is Salt</strong>.
                </p>
              </div>

              {/* Flavor Alternatives */}
              <div className="bg-purple-50/50 dark:bg-purple-950/20 rounded-xl p-6 mb-8 border border-purple-200/50 dark:border-purple-800/30">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Flavor Does Not Need a Shaker</h3>
                <p className="text-muted-foreground mb-4">Use your imagination. Try:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Garlic, onion, ginger, chili flakes</li>
                    <li>Fresh herbs like basil, cilantro, and mint</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Citrus and vinegars for brightness</li>
                    <li>Nutritional yeast for a savory kick</li>
                  </ul>
                </div>
              </div>

              {/* Potassium Substitute Warning */}
              <div className="bg-amber-50/50 dark:bg-amber-950/20 rounded-xl p-6 mb-8 border border-amber-200/50 dark:border-amber-800/30">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Important Note</h3>
                <p className="text-muted-foreground">
                  <strong>NOTE:</strong> Potassium based salt substitutes exist, but they are not for everyone. 
                  (Please check with your doctor before going down this path especially if you have kidney issues or take certain meds).
                </p>
              </div>

              {/* Natural Sodium Sources */}
              <div className="prose prose-lg max-w-none mb-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Can You Get Too Little Salt?</h3>
                <p className="text-muted-foreground mb-4">
                  It's rare. Unless you are an extreme athlete sweating buckets, or under medical restriction, 
                  your daily plant based meals cover your sodium needs naturally. True deficiency is uncommon.
                </p>
                
                <h4 className="text-lg font-semibold mb-3 text-foreground">Vegetables That Cover Your Sodium Needs</h4>
                <p className="text-sm text-muted-foreground mb-3">From The National Library of Medicine:</p>
                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Celery, chard, olives, beets, seaweed, peas, dry roasted nuts, chick peas, bran, sweet corn, 
                    artichoke, broccoli, radish, sweet potato, kale, brussels sprouts…, I think you get the idea. 
                    Just eat a variety.
                  </p>
                </div>
              </div>

              {/* External Resource */}
              <div className="bg-card border border-border rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Learn More</h3>
                <a 
                  href="https://nutritionfacts.org/salt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors underline"
                >
                  nutritionfacts.org/salt
                </a>
              </div>

              {/* Philosophy Highlight */}
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
                  <blockquote className="text-xl lg:text-2xl font-light text-foreground leading-relaxed">
                    "Less Salt, More Sparkle" is not just a slogan, it is a lifestyle. 
                    <br />
                    <span className="text-primary font-medium">Flavor with plants not crystals.</span>
                  </blockquote>
                </div>
              </div>

              {/* Signature Closing */}
              <div className="bg-muted/50 rounded-xl p-6 text-center">
                <p className="text-lg text-muted-foreground italic">
                  With love, laughter and leafy greens,
                  <br />
                  <span className="font-semibold text-foreground">Suz</span>
                </p>
              </div>

              {/* Back to Blog Link */}
              <div className="mt-12 text-center">
                <Link 
                  to="/blog" 
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (postId === 'wearing-who-you-are-style-rebellion') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-background/80 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-teal hover:text-teal-dark mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <article className="prose prose-lg max-w-none">
            <div className="text-sm text-muted-foreground mb-6">
              <span className="bg-teal/10 text-teal px-2 py-1 rounded-full text-xs font-medium">
                Blog #12
              </span>
            </div>
            
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-teal to-teal-dark bg-clip-text text-transparent">
              Wearing Who You Are, A Style Rebellion
            </h1>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Let's be honest. When it comes to aging and fashion, society tends to hand us a beige cardigan and a pair of sensible shoes and whispers, "Please, just fade away". Gracefully, of course.
              </p>
              
              <p className="text-lg leading-relaxed font-medium">
                Well thanks, but no thank you.
              </p>
              
              <p className="text-lg leading-relaxed">
                Here at Rebellious Aging, we don't tone it down. <strong className="text-teal">WE TURN IT UP.</strong>
              </p>
              
              <div className="bg-teal/5 border-l-4 border-teal p-6 my-8">
                <p className="text-lg leading-relaxed mb-4">
                  Style isn't about following the rules. It is about expression, freedom, and yes, fun. It's about waking up looking in the mirror and saying, "That's ME, and I like/love what I see."
                </p>
                
                <p className="text-lg leading-relaxed">
                  Style isn't just surface stuff, it's a mirror into your inner world. The colors you wear, the shapes you choose, the accessories you throw on, the attitude you exude, well, they all tell a story. And you, dear Rebel are the author.
                </p>
              </div>
              
              <p className="text-lg leading-relaxed">
                This is your creation, your calling card, it does not have to make sense to anyone else. It just has to make you feel authentic, proud, and alive.
              </p>
              
              <h2 className="text-2xl font-bold text-teal mt-8 mb-4">What Rebellious Style is NOT</h2>
              
              <div className="bg-rose-50 border border-rose-200 p-6 rounded-lg">
                <ul className="space-y-3 text-lg">
                  <li>• Rebellious style is not about trends. (Unless you love them).</li>
                  <li>• It is definitely not about making you look younger. (You have earned your years, wear them with pride and the sassy unapologetic Rebel you are becoming).</li>
                  <li>• It is not about dressing age-appropriately (whatever that means).</li>
                </ul>
              </div>
              
              <h2 className="text-2xl font-bold text-teal mt-8 mb-4">What Rebellious Style IS</h2>
              
              <div className="bg-teal/10 border border-teal/20 p-6 rounded-lg">
                <p className="text-lg leading-relaxed mb-4">
                  But it is the following for sure:
                </p>
                <ul className="space-y-3 text-lg">
                  <li>• Feeling confident in your own skin</li>
                  <li>• Dressing to match your mood</li>
                  <li>• Giving yourself permission to try stuff, to play, to show up at breakfast wearing bright red lipstick</li>
                  <li>• Be authentic, be gorgeous, be unapologetic, be <strong className="text-teal">BOLD</strong></li>
                </ul>
              </div>
              
              <div className="bg-amber-50 border-2 border-amber-200 p-6 rounded-lg text-center my-8">
                <p className="text-xl font-bold text-amber-800">
                  Reminder! "Don't Let The Old Lady In."
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-teal/10 to-teal/5 border border-teal/20 p-8 rounded-lg my-8">
                <h3 className="text-xl font-bold text-teal mb-4">Your Style Challenge</h3>
                <p className="text-lg leading-relaxed mb-4">
                  OK, so, let's start here. What is one item in your closet that feels most like you at the moment? Pull it out, dust it off, try it on. Wear it this week.
                </p>
                <p className="text-lg leading-relaxed font-medium text-teal">
                  Bonus points if it makes you smile when you catch your reflection.
                </p>
              </div>
              
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Coming Up in Style</h3>
                <p className="text-lg leading-relaxed mb-4">
                  So if you are ready to rethink your "style story", you are in the right place. We will be talking:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-lg">
                  <li>• Closet clean outs</li>
                  <li>• Joyful dressing</li>
                  <li>• Thrifting</li>
                  <li>• Upstyling</li>
                  <li>• Bold accessories</li>
                  <li>• Fab colors</li>
                  <li className="col-span-2">• Slaying those old rules that say you have to disappear as you age</li>
                </ul>
              </div>
              
              <div className="text-center py-8">
                <p className="text-xl font-bold text-teal mb-2">
                  Let's Dazzle Together.
                </p>
                <ConnectCTA />

                <p className="text-lg italic">
                  Sparkle on,<br />
                  Suz
                </p>
              </div>
            </div>
          </article>
          
          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-teal hover:text-teal-dark">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (postId === 'the-new-classic-timeless-style') {
    return (
      <main className="min-h-screen bg-gradient-to-br from-teal-50 to-coral-50 py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-8 transition-colors"
          >
            ← Back to Blog
          </Link>
          
          <article className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span>8/9/2025</span>
              <span>•</span>
              <span>Blog 14</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-8 leading-tight">
              The New Classic, Timeless Style with a Rebellious Twist
            </h1>
            
            <div className="prose prose-lg max-w-none text-charcoal leading-relaxed">
              <p className="text-xl text-muted-foreground mb-8">
                Fashion legends like Coco Chanel, Christian Dior, and Yves Saint Laurent gave the world timeless rules for elegance. As rebels we just give these rules a wink and twist them into something uniquely ours. We have lived long enough to know that style is more than clothes. Style is about attitude, confidence, and a refusal to fade quietly into the background.
              </p>
              
              <p className="mb-8">
                So let's stroll down the runway of fashion wisdom from a few of the greats. And let's add our own rebellious twist.
              </p>

              <h2 className="text-2xl font-bold text-teal-600 mt-12 mb-6">Coco Chanel: Timeless Rebellion</h2>
              
              <p className="mb-6">
                I love Coco Chanel's life story. So interesting. She believed in timelessness. Ya know the kind of style that feels right no matter the decade. So keep those timeless pieces if you have them or grab them second hand if you are lucky. But do not let them get dusty. That classic black Chanel jacket? Pair it with ripped jeans and leopard print sneakers. Chanel and pearls…..yummy. Layer those pearls with chunky chains. Remember style does not mean predictable. Shop vintage. So good.
              </p>

              <div className="bg-teal-50 p-6 rounded-lg my-8">
                <h3 className="text-lg font-semibold text-teal-700 mb-4">Sassy Quotes from Coco:</h3>
                <blockquote className="space-y-3 text-teal-800">
                  <p>"A girl should be two things: classy and fabulous."</p>
                  <p>"Fashion changes, but style endures."</p>
                  <p>"Dress shabbily and they remember the dress, dress impeccably and they remember the woman."</p>
                  <p>"In order to be irreplaceable one must always be different."</p>
                  <p>"The most courageous act is still to think of yourself."</p>
                </blockquote>
              </div>

              <p className="mb-8">
                Coco's influence extended to accessories. She was a pioneer in mixing high and low, introducing the once radical idea of incorporating costume jewelry into her collections. Embodying her belief that "A woman should mix fake and real. The point of jewelry is not to make a woman look rich but to adorn her; not the same thing." Chanel blended faux pearls and stones with natural elements, redefining the perception of luxury. <em>(InStyle)</em>
              </p>

              <h2 className="text-2xl font-bold text-coral-600 mt-12 mb-6">Christian Dior: Beauty Through Joy</h2>
              
              <p className="mb-6">
                Dior knew beauty was not about perfection. It was about joy. His distinct style is characterized by romanticism, sophistication, and attention to detail. He is well known for ultra feminine and highly sculpted clothing. This style dominated fashion in the decade following the second world war.
              </p>

              <div className="bg-coral-50 p-6 rounded-lg my-8">
                <blockquote className="text-coral-800 space-y-3">
                  <p>"Happiness is the secret to all beauty; there is no beauty that is attractive without happiness."</p>
                  <p>"Do not buy much but make sure what you buy is good."</p>
                </blockquote>
              </div>

              <p className="mb-8">
                So my dear Rebel, wear what makes you feel happy <em>today</em>, not what you are used to wearing. If it sparks joy, it belongs on your body, not in a storage bin. Just Do It! Bring the special occasion pieces into everyday life. How about silk to the farmer's market, velvet to coffee with friends.
              </p>

              <h2 className="text-2xl font-bold text-purple-600 mt-12 mb-6">Yves Saint Laurent: Revolutionary Style</h2>
              
              <p className="mb-6">
                Yves Saint Laurent was renowned for revolutionizing women's fashion. He pushed boundaries by introducing groundbreaking designs like the smoking tuxedo, transparent blouses, switching gender roles and launching ready to wear fashion.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg my-8">
                <blockquote className="text-purple-800 space-y-3">
                  <p>"Fashion fades, style is eternal"</p>
                  <p>"Trends come and go, we are not here to chase every trend."</p>
                </blockquote>
              </div>

              <p className="mb-8">
                So my dear Rebel, pick the trends you adore and ignore the rest. Style is about curating, not conforming.
              </p>

              <h2 className="text-2xl font-bold text-charcoal mt-12 mb-6">Your Rebellious Style Guide</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-teal-600 mb-2">Mix eras fearlessly</h3>
                  <p>Your favorite vintage blazer with modern sneakers or a Dior dress with a denim jacket.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-teal-600 mb-2">Own your signature</h3>
                  <p>A trademark accessory, a favorite vintage necklace, stylish headband, gorgeous multicolor wrap, favorite scent, attention grabbing earrings, daring and colorful silky top, or your go to jacket that says, "YOU".</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-teal-600 mb-2">Play with proportion</h3>
                  <p>Try oversized with fitted, flowing structures.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-teal-600 mb-2">Play with designs</h3>
                  <p>Plaids with polka dots, bright colored animal prints and fabulous vintage bags.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-teal-600 mb-2">Tell texture stories</h3>
                  <p>Velvet with denim, silk with leather, linen with chunky knits.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-coral-50 p-8 rounded-lg my-12">
                <h3 className="text-xl font-bold text-charcoal mb-4">Above all, make JOY your dress code</h3>
                <p className="mb-4">If it makes you happy it belongs in your rotation.</p>
                <p className="mb-4">Turn 'special occasion' into 'right now'. Wear silk. Rock the sequins. Strut the velvet.</p>
                <p className="font-semibold">In the end style is not about following fashion. It is about owning your story. Curate your closet like you curate your life. Do it with confidence, joy, and a whole lot of rebellion. Show the world your unapologetic self.</p>
              </div>

              <ConnectCTA />

              <div className="text-center mt-12">
                <p className="text-lg italic text-teal-600">Sparkle on,</p>
                <p className="text-xl font-semibold text-charcoal">Suz</p>
              </div>
            </div>
          </article>
          
          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-teal hover:text-teal-dark">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (postId === 'bold-sassy-truth-wfpb') {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-block mb-8">
            <Button variant="outline" className="text-teal hover:text-teal-dark border-teal hover:border-teal-dark">
              ← Back to Blog
            </Button>
          </Link>
          
          <article className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span>8/9/2025</span>
                <span>•</span>
                <span>Blog 13</span>
                <span>•</span>
                <span>10 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                The Bold, Sassy Truth About a Whole Food Plant Based Lifestyle
              </h1>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Who says aging gracefully has to be slow and quiet? Not me. I believe in aging rebelliously. 
                With a plate full of vibrant colors, flavors, and life giving nutrients. A WFPB lifestyle 
                isn't just about "rabbit food." Instead it is a delicious rebellion against disease, fatigue, 
                and mediocrity. And guess what? Science is on our side. Let's take a look at what the research 
                says about eating plants and living brilliantly.
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Reduced Risk of Chronic Disease</h2>
                  <p className="text-gray-700 leading-relaxed">
                    A whole Food Plant Based diet has shown to halt and even reverse coronary artery disease, 
                    (Esselstyn), lower cancer risk (Campbell's China Study) and improve blood sugar control 
                    in type 2 diabetes (Greger).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Improved Digestive Health</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Fiber rich plant foods nourish a healthy gut microbiome, improve digestion, and may 
                    reduce colorectal cancer risk. (Bulsiewicz).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Lower Blood Pressure and Cholesterol</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Plant diets reduce LDL cholesterol and blood pressure without medication side effects.
                    (Esselstyn, Greger).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Weight Management and Metabolic Health</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Low calorie density makes it easier to maintain a healthy weight while eating satisfying 
                    portions and not counting calories. (Campbell, Greger).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Anti-Inflammatory Effects</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Antioxidants</strong> (substances that can help protect your cells from damage 
                    caused by unstable molecules called free radicals. Free radicals are by-products of normal 
                    cell processes and can contribute to various diseases) and <strong>phytonutrients</strong> 
                    (naturally occurring compounds found in plants that offer various health benefits) in plants 
                    reduce chronic inflammation linked to arthritis, heart disease, and cognitive decline 
                    (Greger, Bulsiewicz).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Healthspan and Quality of Life</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Plant predominant diets are associated with longer lifespan and lower rates of disability 
                    (Campbell, Greger).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Improved Energy and Recovery</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Better blood flow, oxygen delivery, and reduced oxidative stress, boost stamina and recovery 
                    (Esselstyn, Greger).
                  </p>
                </section>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-teal/10 to-coral/10 rounded-xl border border-teal/20">
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  So here's the truth. You can tiptoe through the years, or you can charge in, fork first, 
                  and claim the health, energy and sparkle you deserve. A WFPB lifestyle isn't just about 
                  adding years to your life. It is about adding life to your years. The research is clear, 
                  plants are delicious, and over the top healthy and the only thing missing is your decision 
                  to take the risk and dive in. So go ahead, and plate up some plants.
                </p>
                
                <ConnectCTA />

                <p className="text-gray-800 font-medium mb-2">Sparkle on,</p>
                <p className="text-gray-800 font-bold">Suz</p>
                
                <p className="text-sm text-gray-600 mt-4 italic">
                  Full bibliography available upon request.
                </p>
              </div>
            </div>
          </article>

          <Link to="/blog" className="inline-block mt-8">
            <Button variant="outline" className="text-teal hover:text-teal-dark border-teal hover:border-teal-dark">
              ← Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  
  // Handle the blueberries and wrinkles blog post (Blog 5)
  if (postId === 'blueberries-and-wrinkles') {
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
              <div className="text-sm text-gray-500 mb-4">
                <span>Blog 5</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Blueberries and Wrinkles, The Day I Knew I was Old
              </h1>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                There was no grand epiphany. No milestone birthday. Just a bowl of wild blueberries.
              </p>
              
              <p className="mb-6">
                I eat at least two cups of these lovelies everyday. I love them, possibly I am addicted. I crave them. I believe they are a part of the reason I have more energy in my 80's than I did in my 40's. They were my anti-aging secret weapon….or so I thought.
              </p>

              <p className="mb-6">
                Then one day, recently, actually, I left the house without checking the mirror. I was feeling pretty good. Possibly even fabulous. And then someone said, "You have something blue around your mouth."
              </p>

              <p className="mb-6">
                Oh boy, it was not "just around". It was in my mouth lines. Nestled neatly in the deep, confident grooves life has etched around my lips. The wild blueberry juice had settled there like a bold little truth. (I have been eating wild blueberries daily for over 6 years and I had never noticed such a thing happening).
              </p>

              <div className="bg-coral-50 p-6 rounded-lg border-l-4 border-coral-400 mb-8">
                <p className="text-coral-800 font-medium text-lg">
                  And just like that, I knew clearly. I had crossed over. I was officially in the category of "OLD".
                </p>
              </div>

              <p className="mb-6">
                That was the moment my rebellion revved up and here we are.
              </p>

              <p className="mb-6">
                I am not rebelling against age itself, but against what the world thinks age should look like, unhealthy, quiet, dismissed, invisible, diminished. For sure not this Rebel.
              </p>

              <p className="mb-6">
                I wiped the blue stains from my wrinkles, threw on some lip gloss and continued with wild determination to build my movement with a more serious intention. One that says you can be 83, radiant, healthy, vibrant, wrinkled, bold and blooming, sometimes with blueberry juice as proof.
              </p>

              <div className="bg-teal-50 p-8 rounded-lg border-l-4 border-teal-400 text-center">
                <p className="text-teal-800 font-medium text-lg mb-4">
                  So now? I eat my blueberries with pride. I check the mirror, sure. But I never hide.
                </p>
                <p className="text-teal-800 font-bold text-xl">
                  Because these lines? They have earned the right to sparkle. And this Rebel? She is just getting started.
                </p>
              </div>
            </div>
          </article>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-teal hover:text-teal-dark">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Handle WFPB Lifestyle Book Recommendations (Blog 15)
  if (postId === 'wfpb-lifestyle-book-recommendations') {
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
              <div className="text-sm text-gray-500 mb-4">
                <span>Blog 15</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                WFPB Lifestyle Book Recommendations
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                A comprehensive collection of essential books from leading plant-based nutrition experts and doctors to guide your whole food plant-based journey.
              </p>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <div className="space-y-8">
                
                {/* Introduction */}
                <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
                  <p className="text-teal-800 font-medium text-lg mb-3">
                    Ready to dive deeper into the science and wisdom behind plant-based living?
                  </p>
                  <p className="text-teal-700">
                    These books from renowned doctors and researchers will transform your understanding of nutrition, health, and the power of plants. Each recommendation comes from leaders who have dedicated their lives to advancing plant-based science and helping people thrive.
                  </p>
                </div>

                {/* Dr. T. Colin Campbell */}
                <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-400">
                  <h3 className="font-bold text-emerald-800 mb-4 text-xl">Dr. T. Colin Campbell</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <h4 className="font-semibold text-emerald-700 mb-2">The China Study</h4>
                      <p className="text-emerald-600 text-sm mb-2">The landmark study that changed everything we thought we knew about nutrition.</p>
                      <a href="https://www.amazon.com/China-Study-Comprehensive-Nutrition-Implications/dp/1932100660" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="text-emerald-600 hover:text-emerald-800 underline">
                        View on Amazon →
                      </a>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <h4 className="font-semibold text-emerald-700 mb-2">Whole</h4>
                      <p className="text-emerald-600 text-sm mb-2">Rethinking the science of nutrition and the power of whole foods.</p>
                      <a href="https://www.amazon.com/Whole-Rethinking-Nutrition-Colin-Campbell/dp/1939529840" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="text-emerald-600 hover:text-emerald-800 underline">
                        View on Amazon →
                      </a>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <h4 className="font-semibold text-emerald-700 mb-2">The Future of Nutrition</h4>
                      <p className="text-emerald-600 text-sm mb-2">An intimate look at the science of nutrition from the world's leading expert.</p>
                      <a href="https://www.amazon.com/Future-Nutrition-Colin-Campbell/dp/1939529972" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="text-emerald-600 hover:text-emerald-800 underline">
                        View on Amazon →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Dr. Caldwell Esselstyn */}
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <h3 className="font-bold text-blue-800 mb-4 text-xl">Dr. Caldwell Esselstyn</h3>
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <h4 className="font-semibold text-blue-700 mb-2">Prevent and Reverse Heart Disease</h4>
                    <p className="text-blue-600 text-sm mb-2">Groundbreaking research showing how to prevent and reverse America's #1 killer.</p>
                    <a href="https://drcaldwellesselstyn.org" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="text-blue-600 hover:text-blue-800 underline">
                      Visit drcaldwellesselstyn.org → All books available here
                    </a>
                  </div>
                </div>

                {/* Dr. Michael Greger */}
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                  <h3 className="font-bold text-red-800 mb-4 text-xl">Dr. Michael Greger</h3>
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <h4 className="font-semibold text-red-700 mb-2">How Not to Die</h4>
                    <p className="text-red-600 text-sm mb-2">Discover the foods scientifically proven to prevent and reverse disease.</p>
                    <a href="https://nutritionfacts.org" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="text-red-600 hover:text-red-800 underline">
                      Visit Nutritionfacts.org → All books available here
                    </a>
                  </div>
                </div>

                {/* Dr. Neal Barnard */}
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                  <h3 className="font-bold text-purple-800 mb-4 text-xl">Dr. Neal Barnard (Physicians Committee For Responsible Medicine)</h3>
                  <div className="space-y-3">
                    <p className="text-purple-700 font-medium mb-3">
                      <a href="https://pcrm.org" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="text-purple-600 hover:text-purple-800 underline">
                        Visit pcrm.org → All books available here
                      </a>
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded-md shadow-sm">
                        <h4 className="font-semibold text-purple-700 text-sm">Dr. Neal Barnard's Program for Reversing Diabetes</h4>
                      </div>
                      <div className="bg-white p-3 rounded-md shadow-sm">
                        <h4 className="font-semibold text-purple-700 text-sm">Foods That Cause You to Lose Weight: The Negative Calorie Effect</h4>
                      </div>
                      <div className="bg-white p-3 rounded-md shadow-sm">
                        <h4 className="font-semibold text-purple-700 text-sm">Reversing Diabetes: The Scientifically Proven System</h4>
                      </div>
                      <div className="bg-white p-3 rounded-md shadow-sm">
                        <h4 className="font-semibold text-purple-700 text-sm">Foods That Fight Pain</h4>
                      </div>
                      <div className="bg-white p-3 rounded-md shadow-sm">
                        <h4 className="font-semibold text-purple-700 text-sm">The Vegan Starter Kit</h4>
                      </div>
                      <div className="bg-white p-3 rounded-md shadow-sm">
                        <h4 className="font-semibold text-purple-700 text-sm">The Cheese Trap</h4>
                      </div>
                      <div className="bg-white p-3 rounded-md shadow-sm">
                        <h4 className="font-semibold text-purple-700 text-sm">Breaking The Food Seduction</h4>
                      </div>
                      <div className="bg-white p-3 rounded-md shadow-sm">
                        <h4 className="font-semibold text-purple-700 text-sm">Your Body in Balance</h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dr. Will Bulsiewicz */}
                <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                  <h3 className="font-bold text-amber-800 mb-4 text-xl">Dr. Will Bulsiewicz</h3>
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <h4 className="font-semibold text-amber-700 mb-2">Fiber Fueled</h4>
                    <p className="text-amber-600 text-sm mb-2">The Plant Based Gut Health Program for Losing Weight, Restoring Your Health, and Optimizing Your Microbiome</p>
                    <a href="https://theguthealthmd.org" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="text-amber-600 hover:text-amber-800 underline">
                      Visit theguthealthmd.org →
                    </a>
                  </div>
                </div>

                {/* Diabetes Experts */}
                <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-400">
                  <h3 className="font-bold text-cyan-800 mb-4 text-xl">Diabetes and Autoimmune Experts</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <h4 className="font-semibold text-cyan-700 mb-2">Goodbye Autoimmune Disease, Goodbye Lupus</h4>
                      <p className="text-cyan-600 text-sm">By Dr. Cyrus Khambatta, PhD, and Roby Barbaro, MPH</p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <h4 className="font-semibold text-cyan-700 mb-2">Mastering Diabetes</h4>
                      <p className="text-cyan-600 text-sm">The Revolutionary Method to Reverse Insulin Resistance Permanently</p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm">
                      <h4 className="font-semibold text-cyan-700 mb-2">The Alzheimer's Solution</h4>
                      <p className="text-cyan-600 text-sm mb-2">A 100% Effective Program to Prevent and Reverse Alzheimer's Disease</p>
                      <p className="text-cyan-600 text-sm mb-2">By Dean Sherzai, M.D. and Ayesha Sherzai, M.D.</p>
                      <a href="https://thebraindocs.com" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="text-cyan-600 hover:text-cyan-800 underline">
                        Visit thebraindocs.com →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Dr. Brooke Goldner */}
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                  <h3 className="font-bold text-orange-800 mb-4 text-xl">Dr. Brooke Goldner, M.D.</h3>
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <h4 className="font-semibold text-orange-700 mb-2">GOODBYE LUPUS</h4>
                    <p className="text-orange-600 text-sm mb-2">How a Medical Doctor Healed Herself Naturally With Supermarket Foods</p>
                    <p className="text-orange-600 text-sm mb-2">A physician's personal journey and proven protocol for reversing autoimmune disease through nutrition</p>
                    <a href="https://goodbyelupus.com" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="text-orange-600 hover:text-orange-800 underline">
                      Visit goodbyelupus.com →
                    </a>
                  </div>
                </div>

                {/* Chef AJ */}
                <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-400">
                  <h3 className="font-bold text-rose-800 mb-4 text-xl">Chef AJ</h3>
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <h4 className="font-semibold text-rose-700 mb-2">The Secrets to Ultimate Weight Loss</h4>
                    <a href="https://chefaj.com" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="text-rose-600 hover:text-rose-800 underline">
                      Visit chefaj.com →
                    </a>
                  </div>
                </div>

                {/* Rachael Brown */}
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                  <h3 className="font-bold text-green-800 mb-4 text-xl">Rachael Brown</h3>
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <h4 className="font-semibold text-green-700 mb-2">For Forks Sake</h4>
                    <p className="text-green-600 text-sm mb-2">A Quick Guide to Healing Yourself and The Planet Through A Plant Based Diet</p>
                    <a href="https://www.amazon.com/Forks-Sake-Healing-Yourself-Plant-Based/dp/B0B8G2G8FW" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="text-green-600 hover:text-green-800 underline">
                      View on Amazon →
                    </a>
                  </div>
                </div>

              </div>

              <ConnectCTA />

              {/* Conclusion */}
              <div className="bg-gray-50 p-8 rounded-lg mt-12 text-center">
                <p className="text-lg font-medium text-teal-600 mb-4">
                  Your journey to optimal health through plant-based nutrition starts with knowledge.
                </p>
                <p className="text-lg font-medium text-coral mb-4">
                  These books are your roadmap to understanding the science, the why, and the how behind thriving on plants.
                </p>
                <p className="text-lg font-medium text-green-600">
                  Pick one that speaks to you and start reading today. Your future self will thank you.
                </p>
              </div>
            </div>
          </article>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-teal hover:text-teal-dark">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Handle the boundaries blog post (Blog 16)
  if (postId === 'boundaries-love-language') {
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
              <div className="text-sm text-gray-500 mb-4">
                <span>8/29/2025</span>
              </div>
              <div className="text-sm text-gray-500 mb-4">
                <span>Blog 16</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Are Boundaries a Love Language of Sorts?
              </h1>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl text-coral font-medium mb-6">
                The Summer of 2025 has been one long crash course in awkward situations. Some mine, some borrowed from others, but all pointing to one glaring truth, I <strong>NEED BOUNDARIES</strong>. 
              </p>
              
              <p className="mb-6">Watching people I care about struggle to set them, and knowing my own anxiety as I tried and sometimes succeeded but more often than not I failed miserably, showed me just how messy and necessary this work really is. Then on my morning walk today, a thought hit me, what if boundaries are actually a love language? Rather than walls to shut people out, but bridges to keep love, respect and sanity flowing.</p>
              
              <p className="mb-6">So let's back up for a moment and ask, what exactly are boundaries and why do we need them?</p>

              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400 mb-8">
                <p className="text-teal-800 font-medium mb-4">
                  Boundaries are the invisible lines that define where you end and the world begins. They are your "Velvet Rope", an invitation-only entrance into your emotional, mental, and physical space. They are not about pushing people out, they are about keeping you standing tall.
                </p>
              </div>

              <p className="mb-6">I have decided that boundaries are necessary, I am sure you agree. But, darn, they are trouble to set up and implement.. Without boundaries, life becomes a free for all, and guess who gets the short end of the stick? <strong>YOU. ME.</strong></p>

              <p className="mb-6">Boundaries are not ageist or elitist. Nope they are for every human who wants peace, dignity and joy. If someone tells you that they do not need boundaries, well, chances are they are benefitting from you not having any.</p>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Here are some reasons why you should "bother" setting boundaries:</h3>
              <ul className="space-y-2 mb-8">
                <li>• They honor your time and energy.</li>
                <li>• They prevent burnout and resentment.</li>
                <li>• They teach others how you want to be treated.</li>
              </ul>

              <p className="mb-6">I think many avoid creating boundaries out of fear. Yes, fear of conflict, fear of being selfish, fear of not being liked. In the end boundaries don't make you less lovable. They make you more authentic.</p>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400 mb-8">
                <p className="text-amber-800 font-medium">
                  Boundaries actually sparkle. They clearly say, "I value me." People know where they stand. You have more energy and less drama.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <p className="text-blue-800 mb-3">
                  I think Brené Brown (<a href="https://brenebrown.com/about/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://brenebrown.com/about/</a>) says it well:
                </p>
                <blockquote className="text-blue-800 italic font-medium">
                  "Boundaries are a prerequisite for compassion and empathy. We can't connect, unless we are clear about where we end and they begin."
                </blockquote>
              </div>

              <p className="mb-6">I think setting boundaries is difficult especially for those of us who have been conditioned to say yes. There can be, will be, often is, pushback. Not everyone will "clap" over your new rules. Oh boy, and then there is the, "be nice voice in your head", that one, for sure, will not quiet easily.</p>

              <div className="bg-coral-50 p-6 rounded-lg border-l-4 border-coral-400 mb-8">
                <p className="text-coral-800 font-bold text-lg">
                  But here is the Rebel twist, the discomfort of setting boundaries is nothing compared to the misery of living without them. (Read that one again).
                </p>
              </div>

              <p className="mb-6">I have learned so much from the following three amazing teachers.</p>

              <div className="bg-teal-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-teal-800 mb-3 text-lg">Mel Robbins</h4>
                <p className="text-teal-700 mb-3">
                  <a href="https://www.melrobbins.com" className="text-teal-600 underline" target="_blank" rel="noopener noreferrer">https://www.melrobbins.com</a>
                </p>
                <p className="text-teal-800 mb-3">
                  Mel's viral, "LET THEM THEORY" IS the ultimate boundary hack. Someone flakes? Let them. Someone gossips? Let them. It is not your job to control other people. It is your job to control your response.
                </p>
                <p className="text-teal-800 font-medium">
                  This is so cool, so when you pair "Let Them" with "Let Me" as in, let me decide who I want to be and what I will accept. Now the magic, the boundaries shift from scary to empowering.
                </p>
              </div>

              <div className="bg-coral-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-coral-800 mb-3 text-lg">Brené Brown</h4>
                <p className="text-coral-700 mb-3">
                  <a href="https://brenebrown.com" className="text-coral-600 underline" target="_blank" rel="noopener noreferrer">brenebrown.com</a>
                </p>
                <p className="text-coral-800 font-medium">
                  People with strong boundaries do not apologize for protecting their peace, resting, or saying "no" when they mean it.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-blue-800 mb-3 text-lg">Jay Shetty</h4>
                <p className="text-blue-700 mb-3">
                  <a href="https://jayshetty.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">jayshetty.com</a>
                </p>
                <p className="text-blue-800 mb-3">
                  Jay preaches that boundaries are not selfish, rather they are love in action. He and his wife have a firm rule, no work talk at dinner. Sacred time, sacred energy. Boundaries keep love alive because they build respect.
                </p>
                <p className="text-blue-800 font-medium">
                  Jay says you are NOT responsible for carrying other people's feelings on your back.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">So what do you think? Are Boundaries a Love Language of Sorts?</h3>
              
              <p className="mb-6">We usually think of love languages as sweet gestures, words of affirmation, acts of service, gifts, touch or quality time. Here is the rebel truth, boundaries are a love language too.</p>

              <div className="bg-rose-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-rose-800 mb-3">A love language to yourself</h4>
                <p className="text-rose-700">A radical act of self respect.</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-purple-800 mb-3">To others</h4>
                <p className="text-purple-700">Boundaries teach people how to treat you, they remove the guesswork.</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-green-800 mb-3">In relationships</h4>
                <p className="text-green-700">They are love in action, protecting intimacy and sacred time.</p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-indigo-800 mb-3">Across generations</h4>
                <p className="text-indigo-700">Boundaries don't just protect your energy, they deepen your capacity to love. Yes they say that you can love fiercely without disappearing into someone else's needs.</p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400 mb-8">
                <p className="text-teal-800 font-bold text-lg">
                  Rebels know every strong "no" is actually a braver, louder, "yes" to the relationships that matter most.
                </p>
              </div>

              <p className="mb-6">So here's the deal, Rebels. Boundaries are not about pushing people away. They are about keeping yourself intact. They are the difference between living drained and living daringly.</p>

              <p className="mb-6">The beauty of aging rebelliously is that we finally get to drop the guilt, ditch the "good girl" script, and stand tall in our own space. Every "no" you speak is actually a louder "yes" to your health, joy and peace.</p>

              <p className="mb-8">So go ahead and draw the line, shut the door, or leave it wide open when it feels right. Boundaries are not barriers. They are the sparkle lines that make your life shine brighter.</p>

              <ConnectCTA />

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <p className="text-xl font-bold text-coral mb-4">
                  Sparkle on my dear Rebels.
                </p>
              </div>
            </div>
          </article>

          {/* Navigation */}
          <div className="mt-12 text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-teal hover:text-teal-dark">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Handle the ditch sweet stuff blog post (Blog 17)
  if (postId === 'eat-the-olive-not-the-oil') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Blog 18
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Eat the Olive, Not the Oil
              </h1>
              <p className="text-gray-600 text-lg">September 2, 2025</p>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Oil has a shiny reputation. Olive oil, avocado oil, coconut oil, you have seen them all and others marketed as "healthy fats". The truth is oil is oil. Ok some oils might be worse than others but <strong>NO Oil is healthy</strong>.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                At its core, oil is pure fat. EVERY oil, (olive, canola, coconut, avocado, etc.) packs a whopping <strong>4,000 calories per pound</strong>. Compare that to veggies at 100 calories per pound, or fruits at 300 calories per pound), and you can see how quickly oil can add excess calories without filling you up. Oh and it is not just the calories. Oil is a processed food stripped of fiber, protein and most nutrients. When olives, corn, coconuts, or seeds are pressed into oil, almost everything that made them nourishing is removed. What's left? Empty calories with a halo of marketing.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8">
                <p className="text-amber-800 font-medium text-lg">
                  <strong>Interesting fact:</strong> It takes approximately 18-20 olives to produce one tablespoon of olive oil.
                </p>
              </div>

              <div className="bg-teal-50 p-8 rounded-lg my-8">
                <h3 className="text-2xl font-bold text-teal-900 mb-6 text-center">Rebel Cheat Sheet: Calories per Pound</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between items-center py-2 border-b border-teal-200">
                    <span className="font-medium text-teal-800">Vegetables</span>
                    <span className="text-teal-700">100 calories per pound</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-teal-200">
                    <span className="font-medium text-teal-800">Fruits</span>
                    <span className="text-teal-700">300 calories per pound</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-teal-200">
                    <span className="font-medium text-teal-800">Beans/Legumes</span>
                    <span className="text-teal-700">500-600 calories per pound</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-teal-200">
                    <span className="font-medium text-teal-800">Whole Grains</span>
                    <span className="text-teal-700">500-600 calories per pound</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-teal-200">
                    <span className="font-medium text-teal-800">Nuts/Seeds</span>
                    <span className="text-teal-700">2,500-3,000 calories per pound</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-red-200 bg-red-50 px-4 rounded">
                    <span className="font-bold text-red-800">Oil</span>
                    <span className="font-bold text-red-700">4,000 calories per pound</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Eat the olive, not the oil.</strong> The olive gives you fiber, vitamins, minerals and antioxidants. The oil gives you, OIL. The same goes for corn(corn oil vs. whole corn), coconuts (coconut oil vs. coconut meat), or sunflower seeds (sunflower oil vs. seeds). I think you are getting the message. When you choose the whole food you're getting the full package of nutrition that nature intended.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Even the much praised olive oil is NOT a whole food. It is calorie dense and nutrient poor compared to eating actual olives. For anyone dealing with cholesterol or heart disease, even small amounts of oil can be harmful.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                The better option? Enjoy healthy sources of whole fats, avocados, seeds, and nuts. If you are watching cholesterol, keep those in check also. For omega 3s, the best WFPB choice is ground flaxseed sprinkled on your meal.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Expert Resources:</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://nutritionfacts.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium underline">
                      Dr Greger: nutritionfacts.org
                    </a>
                  </li>
                  <li>
                    <span className="text-blue-800 font-medium">Dr Esselstyn: No Oil -- Not Even Olive Oil! - Caldwell Esselstyn MD</span>
                  </li>
                  <li>
                    <span className="text-blue-800 font-medium">Dr Neal Barnard: New Concerns About Olive Oil | Dr. Neal Barnard | The Exam Room Podcast</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">So what about cooking? Without oil, of course.</h3>

              <div className="bg-green-50 p-6 rounded-lg my-8">
                <h4 className="text-xl font-bold text-green-900 mb-4">Cooking without oil, Rebel style:</h4>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Saute with broth, wine or water.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Roast veggies on parchment paper or silicone baking mats.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Make creamy dressings from blended cashews, or pureed beans.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Use nut butters or avocados for richness in sauces.</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Rebellious Aging isn't about trendy "superfoods." It is about choosing whole foods that nourish, energize, and keep us sparkling strong. Oil does NOT make the cut because it is calorie dense, nutrient poor and <em>not</em> a whole food.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                So next time you're tempted by that shiny bottle, remember: <strong>Eat the Olive, not the Oil.</strong> Your body (and your sparkle) will thank you.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 my-8">
                <p className="text-purple-800 font-medium text-lg italic">
                  Replace the word "EAT" with the word "Nourish" and see how your perspective changes.
                </p>
              </div>

              <ConnectCTA />

              <div className="bg-gray-100 p-6 rounded-lg mt-12 text-center">
                <p className="text-gray-700 italic">
                  With love, laughter and leafy greens,<br />
                  <span className="font-semibold">Suz</span>
                </p>
              </div>
            </article>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={() => window.history.back()}
                className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2 transition-colors"
              >
                ← Back to Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (postId === 'ditch-the-sweet-stuff') {
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
              <div className="text-sm text-gray-500 mb-4">
                <span>Blog 17</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Ditch the Sweet Stuff
              </h1>
              <div className="text-sm text-gray-500">
                September 1, 2025 • 10 min read
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <div className="space-y-8">
                <p className="text-lg">
                  Let's be honest, sugar is seductive. There is no upside to sugar.
                </p>

                <p>
                  It sneaks into your morning coffee, whispers from your cookie jar, and struts through the grocery store in shiny packaging. Sugar, as sweet and coy, and powerful as it is, is an anti-nutrient. Yup, you heard that right. It has been known to inhibit the absorption of other nutrients. Do not fall into the trap of falling for sugar's buddies, either. You know who I mean, high fructose corn syrup, palm sugar, brown sugar, to name a few and of course there are the chemical sweeteners aspartame, saccharin, sucrose, the list is long. Here's the rebellious truth, sugar is not your friend.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">Why Ditch It? (You already know, but here is a refresher.)</h2>

                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-700">
                    Sugar gives you a quick high, then dumps you in a crash. Overtime, that ride leaves you drained, cranky, and constantly reaching for the next fix.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                  <p className="text-orange-700">
                    Excess sugar stokes the flames of inflammation in your body, fueling everything from joint pain to accelerated aging.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-yellow-700">
                    Sugar hides under dozens of names. Learning to spot it on labels is one of the most rebellious things you can do for your health.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                  <p className="text-purple-700">
                    Too much sugar clouds your memory, fuels cravings, and disrupts sleep. Rebels need clarity, confidence and sparkle, not fog.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <p className="text-blue-700 mb-4">
                    Click here to learn about sugar from Dr. Greger:
                  </p>
                  <a 
                    href="https://nutritionfacts.org/topics/sugar/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium underline"
                  >
                    NutritionFacts.org - Sugar Topics
                  </a>
                </div>

                <p>
                  Breaking up with sugar does not mean never enjoying sweetness again. It means choosing whole, plant based foods that fuel your body instead of draining it. Do not underestimate the ability of fresh fruit to satisfy your craving. Dates and date paste will sweeten up baked goods. Check out the offerings from the Date Lady.
                </p>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                  <p className="text-green-700 mb-4">
                    For natural sweetening alternatives, visit:
                  </p>
                  <a 
                    href="https://ilovedatelady.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-800 font-medium underline"
                  >
                    I Love Date Lady
                  </a>
                </div>

                <p>
                  Rebellious Aging isn't about deprivation. It is about freedom. Freedom from cravings, mood swings, and health risks that sugar drags along with it. By saying No to Sugar, you are saying yes to energy, clarity, and confidence at every age.
                </p>

                <p className="font-medium">
                  Here's to Rebels who sparkle without the sugar rush.
                </p>

                {/* Signature */}
                <div className="bg-gray-100 p-6 rounded-lg mt-12">
                  <p className="text-gray-700 font-medium">
                    With love, laughter and leafy greens.
                  </p>
                  <p className="text-gray-700 font-bold mt-2">
                    Suz
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  if (postId === 'critical-thinking-secret-weapon-rebellious-aging') {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog">
            <Button className="bg-teal hover:bg-teal-dark text-white mb-8">
              ← Back to Blog
            </Button>
          </Link>
          
          <article className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="text-sm text-gray-500 mb-2">Blog #20 • September 2, 2025 • 10 min read</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Critical Thinking: Your Secret Weapon for Rebellious Aging</h1>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <div className="bg-teal-50 border-l-4 border-teal p-6 rounded-r-lg">
                <p className="text-lg text-gray-800">
                  Critical Thinking is the rebel's power move. It is the ability to pause, question, and separate truth from noise. So instead of blindly accepting what you are told, ask: What's the evidence? Who benefits if I believe this? That is where the freedom and sparkle live.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <blockquote className="text-lg font-medium text-gray-800 mb-2">
                    "Your brain is wired to protect you, not propel you."
                  </blockquote>
                  <cite className="text-sm text-gray-600">— Mel Robbins</cite>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <blockquote className="text-lg font-medium text-gray-800 mb-2">
                    "Curiosity is a superpower."
                  </blockquote>
                  <cite className="text-sm text-gray-600">— Brené Brown</cite>
                </div>
              </div>

              <div className="text-center bg-yellow-50 p-6 rounded-lg">
                <p className="text-lg text-gray-800">
                  Together, they remind us that curiosity and courage are the engines of sharp thinking and vibrant living.
                </p>
                <p className="text-xl font-semibold text-teal mt-4">
                  This is all so empowering to me. How about you?
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How Critical Thinking Fuels My Pillars</h2>
                
                <div className="space-y-8">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">Healthspan</h3>
                    <p className="text-gray-800 mb-4">
                      Don't fall for every shiny health fad. Critical thinking leads you back to what is proven. In my case embracing a WFPB lifestyle, daily movement and sustainable choices. (Again let me add here that I am sharing what works for me, maybe it will work for you. I am not here to arm wrestle you to believe what I believe, I am here to share my story and plant a seed.) The rest is up to you. No judgement here at all.
                    </p>
                    <div className="bg-green-100 p-4 rounded-md">
                      <p className="font-semibold text-green-800">YOU DO YOU!</p>
                      <p className="text-green-700 text-sm mt-2">
                        Do your own research, figure it out, do not follow blindly. I am sharing great resources to help you find YOUR own way. Oh, and always be ready for adjustments and change. Science is a moving, runaway train, never to be stopped. Stay alert.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Confidence</h3>
                    <p className="text-gray-800 mb-4">
                      Critical thinking is the filter between society's noise and your own truth. That voice whispering, "You're too old." Is it true, or is it cultural conditioning? By questioning limiting beliefs you reclaim your voice and your confidence.
                    </p>
                    <p className="text-gray-800 mb-4">
                      Mel Robbins teaches that courage grows through action, but critical thinking tells you what actions matter most. Confidence grows when you can say: "I have examined the options, and I chose what is right for me."
                    </p>
                    <div className="bg-blue-100 p-4 rounded-md">
                      <p className="font-semibold text-blue-800">
                        Please use critical thinking to cut through limiting beliefs and RECLAIM SELF-TRUST.
                      </p>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h3 className="text-xl font-semibold text-purple-800 mb-4">Unapologetic Style</h3>
                    <p className="text-gray-800 mb-4">
                      Fashion rules say, dress your age. Rebels say, dress your JOY. Critical thinking gives you the freedom to decide what feels authentic and fabulous. At the least, remember to look your very best every day.
                    </p>
                    <div className="bg-purple-100 p-4 rounded-md text-center">
                      <p className="font-semibold text-purple-800">
                        "Look your best. Feel your best. Be unstoppable. Because showing up beautifully for yourself is the ultimate act of grace."
                      </p>
                      <p className="text-purple-700 text-sm mt-2">
                        Even if it is just you and the dog.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <p className="text-lg text-gray-800">
                  Know that critical thinking does not make you cynical. It makes you curious. Big difference. And Curiosity keeps you vibrant, alive, and rebelliously radiant.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Want to dig deeper?</h3>
                <div className="space-y-3">
                  <div>
                    <a 
                      href="https://melrobbins.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-teal hover:text-teal-dark font-medium underline"
                    >
                      The Five Second Rule, Mel Robbins, melrobbins.com
                    </a>
                  </div>
                  <div>
                    <a 
                      href="https://brenebrown.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-teal hover:text-teal-dark font-medium underline"
                    >
                      Dare to Lead, Brené Brown, brenebrown.com
                    </a>
                  </div>
                </div>
              </div>

              <ConnectCTA />

              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <p className="text-lg font-medium text-gray-700">
                  Age Boldly, Live Loudly,<br />
                  Suz
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  // Blog 21: Ultra-Processed Trap
  if (postId === 'ultra-processed-trap-eat-whole-live-whole') {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-teal hover:text-teal-dark mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-teal to-teal-dark text-white p-8">
              <div className="flex items-center mb-4">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Blog 21
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">The Ultra-Processed Trap: Eat Whole, Live Whole</h1>
              <p className="text-xl opacity-90">
                Discover why choosing whole foods over factory formulations is your path to vibrant health
              </p>
            </div>
            
            <div className="p-8 space-y-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-800 mb-2">Shocking Statistics</h3>
                <p className="text-red-700">
                  Did you know that more than HALF of the average American diet comes from ultra-processed food (UPF)? 
                  <strong> 70-73% of the U.S. food supply is classified as ultra-processed.</strong>
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">What Are Ultra-Processed Foods?</h2>
                <p className="text-gray-600 mb-4">
                  Here is a solid, evidence-based definition of Ultra-Processed Food from NOVA, a food classification system often used in nutrition. Ultra-processed foods (UPFs) are industrial formulations made mostly or entirely from substances extracted from foods (oils, fats, sugar, starch proteins) or derived from food constituents (hydrogenated fats, modified starch) or synthesized in laboratories (flavor enhancers, colorings, emulsifiers, preservatives).
                </p>
                <p className="text-gray-600 mb-4">
                  They contain little or NO intact whole food and are designed to be convenient, hyperpalatable (addictive) and profitable. As you can see, UPFs are not really food—they are chemical formulas created in factories, stuffed with additives, engineered for shelf life and "bliss point" flavor.
                </p>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-orange-800 mb-2">Examples of Ultra-Processed Foods:</h4>
                  <p className="text-orange-700">
                    Packaged snacks, sodas, instant noodles, frozen dinners, candy bars, flavored yogurts, processed meats, coffee creamers, alcohol mixers, and many ice cream treats.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">The Numbers Don't Lie</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-teal text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">•</span>
                    UPFs make up nearly half of all grocery food purchases and over ⅓ of beverage purchases
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">•</span>
                    Around 58% of staples in U.S. leading supermarkets are ultra-processed
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">•</span>
                    Ultra-processed foods equal 55% of U.S. diets. For kids? 62%
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">•</span>
                    UPFs now make up 54% of calories consumed at home
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Why Processed Foods Pack on the Pounds</h2>
                <p className="text-gray-600 mb-4">
                  You've heard it before: "Calories are calories." Except they're not. A groundbreaking NIH trial (2019) gave participants diets matched for calories, sugar, fat, and fiber. When eating ultra-processed foods, participants ate 500 more calories per day and gained weight. On unprocessed diets, they lost weight without even trying.
                </p>
                <p className="text-gray-600 mb-4">
                  Because processed foods are engineered to be hyper-palatable and easy to overeat, they bypass satiety signals, leaving you hungry for more. Whole foods, due to fiber content, take longer to chew, digest more slowly, and leave you satisfied.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">What Your Body Actually Craves</h2>
                <p className="text-gray-600 mb-4">
                  Your body is NOT craving additives or flavor enhancers. It's asking for:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Plant Proteins</h4>
                    <p className="text-green-700">Beans, lentils, and soy for muscle building and repair</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Omega-3 Fatty Acids</h4>
                    <p className="text-blue-700">Flax, chia, and walnuts to quiet inflammation</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">Antioxidants</h4>
                    <p className="text-purple-700">Colorful fruits and veggies to fight oxidative stress</p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">Fiber</h4>
                    <p className="text-yellow-700">Essential for gut health and microbiome balance</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Reclaiming Energy and Healthspan</h2>
                <p className="text-gray-600 mb-4">
                  Ultra-processed foods often come fortified, but that's like "taping the roof back on after a storm." Whole foods provide the full package your body needs, wants, recognizes, and knows how to use.
                </p>
                <p className="text-gray-600">
                  When you choose plants over processed, you're not just avoiding harm—you're actively choosing vitality, energy, and long-term health. Your body will thank you with clearer thinking, better sleep, and the kind of energy that makes you feel truly alive.
                </p>
              </section>

              <ConnectCTA />

              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <p className="text-lg font-medium text-gray-700">
                  Eat Whole, Live Whole,<br />
                  Suz
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  // Blog 22: If Not Now, When?
  if (postId === 'if-not-now-when-new-beginnings') {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-teal hover:text-teal-dark mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-teal to-teal-dark text-white p-8">
              <div className="flex items-center mb-4">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Blog 22
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">If Not Now, When? New Beginnings are up to YOU</h1>
              <p className="text-xl opacity-90">
                Rebellious Aging is about refusing to settle for bland and daring to choose NOW
              </p>
            </div>
            
            <div className="p-8 space-y-8">
              <section>
                <p className="text-lg text-gray-600 mb-6 italic">
                  "Have you ever scrolled through your feed, half distracted, when a phrase suddenly leaps out and grabs you by the collar? That's what happened to me the other day with these four words: 'If not now, when?'"
                </p>
                <p className="text-gray-600 mb-4">
                  It stopped me cold.
                </p>
                <p className="text-gray-600 mb-4">
                  And then I wondered, how many women are quietly living on autopilot? Autopilot looks safe. Basically you stick with the same foods, the same routines, the same "it is what it is" attitude. You don't rock the boat, you choose not to ruffle the feathers. You accept aches, sluggish mornings, creeping doubts, and an uninspired wardrobe as the way things are.
                </p>
              </section>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-800 mb-2">The Hard Truth</h3>
                <p className="text-red-700">
                  Autopilot might keep you coasting, comfortable, and even safe, BUT it also keeps you stuck.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">What is Rebellious Aging?</h2>
                <p className="text-gray-600 mb-4">
                  In my mind, Rebellious Aging is about refusing to settle for bland, or the "too late for me" story. It's about daring to choose NOW, ME, and an exciting future. (Remember, refuse to let the old lady in).
                </p>
                <p className="text-gray-600 mb-4">
                  Every plant-powered meal is a choice for vibrancy tomorrow. Setting boundaries and speaking up builds the muscle of self-belief, and choosing color, sparkle and play in how you present yourself shifts your energy and how people see you.
                </p>
                <p className="text-gray-600 mb-4">
                  This is not about chasing youth. It's about claiming the fullness of life that is still in front of you today.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Breaking the "Too Late" Lie</h2>
                <p className="text-gray-600 mb-4">
                  One of the greatest lies we tell ourselves is "it's too late." You know, too late to change our health, too late to reinvent our style, too late to say NO or YES. But here's the TRUTH: You only ever have one moment to work with. And that moment is NOW.
                </p>
                <p className="text-gray-600 mb-4">
                  I challenge you to seize this moment, with eyes wide open and begin to make your dreams a reality. One small change at a time.
                </p>
              </section>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-teal-800 mb-4">What Would Shift If You Stopped Waiting?</h3>
                <p className="text-teal-700 mb-3">
                  What's one thing you've been putting off because you think it's too late? What tiny step can you take today to improve your health, confidence, style, or any dream you're dreaming?
                </p>
                <p className="text-teal-700 text-sm">
                  (Please email me and let's discuss the possibilities: suz@rebelwithsuz.com)
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Motivation Through the Rebellious Aging Lens</h2>
                <p className="text-gray-600 mb-4">
                  Motivation is not waiting for the perfect moment—it's created in the moment. By choosing a "spark" today, you create more fuel for tomorrow.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Intrinsic Motivation</h4>
                    <p className="text-blue-700">
                      Doing something because it feels good, meaningful, or aligns with who you are. For example, choosing plants because they give you energy to sparkle.
                    </p>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">Extrinsic Motivation</h4>
                    <p className="text-orange-700">
                      Doing something for an outside reward or to avoid pain. For example, eating well because your doctor said you should.
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  Rebellious Aging leans into intrinsic motivation. Finding joy, self-expression, and personal rebellion in health, confidence, and style. This is what lasts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Resources to Help You Begin</h2>
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">BJ Fogg's Behavior Model (Stanford)</h4>
                    <p className="text-green-700 mb-2">Motivation + ability + a trigger = action</p>
                    <p className="text-green-600 text-sm">behaviormodel.org</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">James Clear, Atomic Habits</h4>
                    <p className="text-purple-700 mb-2">Motivation follows action. Even tiny rebellious steps.</p>
                    <p className="text-purple-600 text-sm">jamesclear.com</p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">Self-Determination Theory</h4>
                    <p className="text-yellow-700 mb-2">True motivation flourishes when we feel autonomy (choice), competence (capability), and connection (community)</p>
                    <p className="text-yellow-600 text-sm">selfdeterminationtheory.org</p>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-r from-teal to-teal-dark text-white p-6 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">NOW IS YOUR MOMENT</h3>
                <p className="text-lg mb-2">
                  Rebels don't wait for the perfect moment—they create it.
                </p>
                <p className="text-lg">
                  They choose plants over autopilot, boldness over complacency, sparkle over safe.
                </p>
              </div>

              <ConnectCTA />

              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <p className="text-lg font-medium text-gray-700">
                  With Love, Laughter and Leafy Greens,<br />
                  Suz
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  // Blog 23: Optimal Aging
  if (postId === 'optimal-aging-colleen-murphy') {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-teal hover:text-teal-dark mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-teal to-teal-dark text-white p-8">
              <div className="flex items-center mb-4">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Blog 23
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">Optimal Aging: As Seen Through the Lens of Princeton Professor Colleen Murphy</h1>
              <p className="text-xl opacity-90">
                A conversation that distilled the science of aging into practical, myth-busting tips
              </p>
            </div>
            
            <div className="p-8 space-y-8">
              <section>
                <p className="text-gray-600 mb-4">
                  If you've been following me for a while you know I refuse to age quietly. For me aging is intentional, aging is active, and if you let it, downright sparkly. Recently I stumbled on a conversation between journalist Paul Von Zielbauer and Colleen Murphy, author of "How We Age." Their exchange distilled the science of aging into practical, surprising and sometimes myth-busting tips.
                </p>
                <p className="text-gray-600 mb-4">
                  To me it felt like a roadmap for rebels who refuse to coast into their later years on autopilot.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Exercise is NOT Optional</h2>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
                  <p className="text-red-700 font-semibold">
                    It's the #1 longevity tool we have.
                  </p>
                </div>
                <p className="text-gray-600 mb-4">
                  Colleen Murphy emphasizes strength training. You know, push, pull, squat, lift. Muscles don't just move us, they release chemicals that fuel brain health, support mitochondria, and help us stay sharp.
                </p>
                <p className="text-gray-600 mb-4">
                  Think of every lunge and curl as a deposit in your future vitality bank.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Sleep: Your Overnight Cleaning Crew</h2>
                <p className="text-gray-600 mb-4">
                  Sleep deprivation doesn't just make us cranky—it DAMAGES THE BRAIN. During deep sleep, your brain literally takes out the trash, flushing toxins that build up during the day.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-800 mb-2">Sleep Requirements</h4>
                  <p className="text-blue-700">
                    Most of us need 7-8 hours of sleep (sorry, four-hour sleepers, you're rare unicorns). Think of sleep as your overnight spa treatment for both body and brain.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Food Myths Debunked</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">Caloric Restriction (CR)</h4>
                    <p className="text-yellow-700">
                      In lab animals, eating less extends lifespan. But in humans? Murphy calls it "a terrible way to live."
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">Intermittent Fasting (IF)</h4>
                    <p className="text-orange-700">
                      Trendy, yes. Effective? The jury is out. While some see benefits, others risk muscle loss. Monitoring what you eat, choosing whole, fiber-rich foods, may work just as well without side effects.
                    </p>
                  </div>
                </div>

                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-4">
                  <p className="text-teal-700 font-medium">
                    How about this: Replace the word "Eat" with the word "NOURISH" and see how your perspective changes.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Brain Health Reality Check</h2>
                <p className="text-gray-600 mb-4">
                  We all want to stay sharp, but Murphy points out that brain games often only make you better at brain games. Doing crosswords helps with crosswords, not necessarily memory.
                </p>
                <p className="text-gray-600 mb-4">
                  Instead, movement, quality sleep, and social connection are more powerful protectors against cognitive decline. So don't just exercise your brain—it's much better to exercise your whole body.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">What's on the Horizon</h2>
                <p className="text-gray-600 mb-4">
                  The science of aging is buzzing with potential new tools:
                </p>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="bg-teal text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">•</span>
                    GLP-1 drugs, like Ozempic, used for diabetes and weight loss, may carry aging benefits also
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">•</span>
                    Metformin—the TAME trial is studying this common diabetes drug for its anti-aging potential
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">•</span>
                    Rapamycin may mimic the effects of caloric restriction without the misery
                  </li>
                </ul>
                
                <p className="text-gray-600">
                  Instead of chasing pills and potions, we can lean on what Dr. Esselstyn calls the body's "remarkable healing capacity" when fueled by plants. Dr. T. Colin Campbell's research confirms it: whole, plant-based foods are our foundation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Rebel's Guide to Starting Today</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">1. Add Movement</h4>
                    <p className="text-green-700">Add one strength workout per week</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">2. Protect Sleep</h4>
                    <p className="text-blue-700">Treat it like a non-negotiable meeting</p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">3. Choose Whole Foods</h4>
                    <p className="text-purple-700">Eat foods that come from nature, not a factory</p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">4. Stay Connected</h4>
                    <p className="text-yellow-700">Stay curious, social, grateful, and joyful</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Resources</h2>
                <div className="space-y-2 text-gray-600">
                  <p>• Full article: agingwithstrength@substack.com</p>
                  <p>• Dr. Esselstyn: dresselstyn.com</p>
                  <p>• T. Colin Campbell: nutritionstudies.org</p>
                  <p>• PCRM: pcrm.org</p>
                </div>
              </section>

              <div className="bg-gradient-to-r from-teal to-teal-dark text-white p-6 rounded-lg text-center">
                <p className="text-lg mb-4">
                  Colleen Murphy's research confirms what many of us rebels already sense: aging well is not about magic pills or endless deprivation. It's about AWARENESS, INTENTIONAL daily choices, movement, rest, nourishment, joy and gratefulness.
                </p>
                <p className="text-xl font-bold">
                  So let's not just age in place. Let's Rebel, Reign and Sparkle.
                </p>
              </div>

              <ConnectCTA />

              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <p className="text-lg font-medium text-gray-700">
                  Age Boldly, Live Loudly,<br />
                  Suz
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  // Blog 24: Calorie Density
  if (postId === 'calorie-density-secret-seals-deal') {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-teal hover:text-teal-dark mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-teal to-teal-dark text-white p-8">
              <div className="flex items-center mb-4">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Blog 24
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">Calorie Density: The Secret That Seals the Deal</h1>
              <p className="text-xl opacity-90">
                When you choose the right foods, your body naturally regulates weight without the struggle
              </p>
            </div>
            
            <div className="p-8 space-y-8">
              <section>
                <p className="text-gray-600 mb-4">
                  Have you ever felt like managing your weight is a constant uphill climb? Counting calories, measuring portions, avoiding carbs, dodging fats, eliminating sugar. It can be exhausting.
                </p>
                <p className="text-gray-600 mb-4">
                  The truth is, when you choose the right foods, your body naturally regulates your weight. Good news, right? No more obsessing. No more deprivation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">What is Calorie Density?</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                  <p className="text-blue-700 font-semibold">
                    Calorie density is simply the number of calories in a given weight of food, usually measured per pound.
                  </p>
                </div>
                <p className="text-gray-600 mb-4">
                  Foods with a lower calorie density provide fewer calories for the same volume. This means you can eat until you're satisfied without overeating. Here lies the beauty of eating plants.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Calorie Density by Food Category</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Vegetables</h4>
                    <p className="text-green-700 text-2xl font-bold">~100 calories/lb</p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">Fruits</h4>
                    <p className="text-yellow-700 text-2xl font-bold">~300 calories/lb</p>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">Whole Grains & Legumes</h4>
                    <p className="text-orange-700 text-2xl font-bold">400-600 calories/lb</p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">Animal Products & Processed Foods</h4>
                    <p className="text-red-700 text-2xl font-bold">1,200-4,000 calories/lb</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700 font-medium">
                    The higher the calorie density, the easier it is to take in excess calories long before your body signals fullness.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">The Plant Advantage</h2>
                <p className="text-gray-600 mb-4">
                  Whole, plant-based foods are naturally low in calorie density. Fill your plate with vegetables and fruits, whole grains, beans, nuts and seeds, and you'll feel full before you can overeat.
                </p>
                
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-4">
                  <h4 className="font-semibold text-teal-800 mb-2">Dr. Caldwell Esselstyn's Wisdom</h4>
                  <p className="text-teal-700">
                    "You can eat all the vegetables, legumes, whole grains and fruits you want until you are comfortably full. There is no calorie counting, no portion control, no hunger."
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h4 className="font-semibold text-purple-800 mb-2">Dr. T. Colin Campbell's Research</h4>
                  <p className="text-purple-700">
                    Author of "The China Study" showed through decades of research that populations eating mostly plants had lower rates of obesity and chronic disease. Why? Because their food patterns were low in calorie density and high in nutrition.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Plants' Secret Weapons</h2>
                <p className="text-gray-600 mb-4">
                  Plants include 2 secret weapons missing from meat and processed foods: fiber and water.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Fiber</h4>
                    <p className="text-green-700">
                      Slows digestion, stabilizes blood sugar, and sends you the "I am full" signal
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Water</h4>
                    <p className="text-blue-700">
                      Adds bulk without calories, which also aids in digestion
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 mt-4">
                  Together, water and fiber act like nature's built-in portion control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Freedom, Not Restriction</h2>
                <p className="text-gray-600 mb-4">
                  The power of calorie density is definitely not about restriction—it's about freedom. Imagine enjoying big, colorful plates of food, feeling full, and watching your weight settle naturally. That's the JOY of a WFPB lifestyle.
                </p>
                <p className="text-gray-600 mb-4">
                  You don't have to eat less. You just have to eat differently. PLANTS FOR THE WIN.
                </p>
                <p className="text-gray-600">
                  Your body will thank you for making the switch, with energy, vitality, and balance that fad diets could never deliver or sustain. Your body finds balance, and you get to enjoy food with freedom.
                </p>
              </section>

              <ConnectCTA />

              <div className="bg-gray-100 p-6 rounded-lg text-center">
                <p className="text-lg font-medium text-gray-700">
                  With Love, Laughter and Leafy Greens,<br />
                  Suz
                </p>
              </div>
            </div>
          </article>
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

