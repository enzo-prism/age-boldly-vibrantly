import React from 'react';
import { useParams, Link } from 'react-router-dom';
import calorieDensityChart from '@/assets/calorie-density-chart.png';

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  
  // Blog post metadata for navigation
  const blogPostsMetadata = [
    { id: 'rebellious-guide-what-is-on-your-plate', blogNumber: 1, title: 'The Rebellious Guide (What is on Your Plate)' },
    { id: 'the-road-to-success-8-thoughts', blogNumber: 2, title: 'The Road to Success: 8 Thoughts' },
    { id: 'wfpb-lifestyle-guide', blogNumber: 3, title: 'A Quick Introduction and Guide to a Whole-Food Plant-Based (WFPB) Lifestyle' },
    { id: 'a-love-letter-to-my-closet', blogNumber: 4, title: 'A Love Letter to My Closet' },
    { id: 'blueberries-and-wrinkles', blogNumber: 5, title: 'Blueberries and Wrinkles' },
    { id: 'gratitude-rebellious-soul', blogNumber: 6, title: 'Gratitude and the Rebellious Soul' },
    { id: 'art-of-thriving-aging-expert', blogNumber: 7, title: 'The Art of Thriving. What an Ageing Expert Wants You to Know' },
    { id: 'shop-window-aging-gracefully', blogNumber: 8, title: 'What a Shop Window Taught Me About Aging Gracefully' },
    { id: 'set-record-straight-wfpb', blogNumber: 9, title: 'It\'s Time to Set the Record Straight Regarding a Whole Food Plant Based Lifestyle' },
    { id: 'limiting-beliefs-not-boss', blogNumber: 10, title: 'Shhh…That Voice in Your Head is Not the Boss of You' },
    { id: 'what-is-behind-limiting-beliefs', blogNumber: 11, title: 'What is Behind Limiting Beliefs?' },
    { id: 'wearing-who-you-are-style-rebellion', blogNumber: 12, title: 'Wearing Who You Are, A Style Rebellion' },
    { id: 'bold-sassy-truth-wfpb', blogNumber: 13, title: 'The Bold, Sassy Truth About a Whole Food Plant Based Lifestyle' },
    { id: 'the-new-classic-timeless-style', blogNumber: 14, title: 'The New Classic, Timeless Style with a Rebellious Twist' },
    { id: 'wfpb-lifestyle-book-recommendations', blogNumber: 15, title: 'WFPB Lifestyle Book Recommendations' },
    { id: 'boundaries-love-language', blogNumber: 16, title: 'Are Boundaries a Love Language of Sorts?' },
    { id: 'ditch-the-sweet-stuff', blogNumber: 17, title: 'Ditch the Sweet Stuff' },
    { id: 'eat-the-olive-not-the-oil', blogNumber: 18, title: 'Eat the Olive, Not the Oil' },
    { id: 'less-salt-more-sparkle', blogNumber: 19, title: 'Less Salt, More Sparkle' },
    { id: 'critical-thinking-secret-weapon-rebellious-aging', blogNumber: 20, title: 'Critical Thinking: Your Secret Weapon for Rebellious Aging' },
    { id: 'ultra-processed-trap-eat-whole-live-whole', blogNumber: 21, title: 'The Ultra-Processed Trap: Eat Whole, Live Whole' },
    { id: 'if-not-now-when-new-beginnings', blogNumber: 22, title: 'If Not Now, When? New Beginnings are up to YOU' },
    { id: 'optimal-aging-colleen-murphy', blogNumber: 23, title: 'Optimal Aging: As Seen Through the Lens of Princeton Professor Colleen Murphy' },
    { id: 'calorie-density-secret-seals-deal', blogNumber: 24, title: 'Calorie Density: The Secret That Seals the Deal' }
  ];
  
  // Find current post and next post
  const currentPost = blogPostsMetadata.find(post => post.id === postId);
  const nextPost = currentPost 
    ? blogPostsMetadata.find(post => post.blogNumber === currentPost.blogNumber + 1)
    : null;

  // Blog 1: Rebellious Guide
  if (postId === 'rebellious-guide-what-is-on-your-plate') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 1}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">The Rebellious Guide (What is on Your Plate)</h1>
        
        <div className="prose max-w-none space-y-4 mb-16">
          <p>
            Let's set the table for something deliciously different.
          </p>
          
          <p>
            I am excited to talk with you about something that has transformed my life. It is the Whole Food Plant Based (WFPB) lifestyle. Yup, not a diet but a lifestyle, for health and vitality with the added bonus of your body automatically regulating your weight if you follow the science.
          </p>
          
          <p>
            My goal is not to preach or persuade, but to create awareness that this powerful, evidence based way of eating exists. Hey, it might just be the missing piece that you have been looking for.
          </p>
          
          <p>
            No judgement here, just a big open heart and a sincere desire to share what I have learned, offer you clear, accurate information, and point you toward the science so you can explore for yourself. This is your invitation to pull up a chair and dig into the facts, rebelliously, of course.
          </p>
          
          <p>
            So whether you're just nibbling at the idea or ready to dive fork first into this lifestyle, remember, knowledge is power.
          </p>
          
          <p>
            Let's rebel against confusion. Let's begin with a list of definitions before we dig deep, so that we are all on the same page. Clarity is power.
          </p>
          
          <p>
            When you understand what is really on your plate, you can make choices that fuel your vitality, confidence, and health.
          </p>
          
          <p>
            Let's rebel against confusion, reclaim our health, and rediscover joy in eating.
          </p>
          
          <p>
            Sparkle on, Rebels. The revolution is deeeelish.
          </p>
          
          <p className="text-xl font-semibold mt-8">
            The Rebellious Guide to What is on Your Plate.
          </p>
          
          <p>
            <strong>Simple Carbohydrates</strong><br />
            These are fast-burning carbs made of just one or two sugar molecules. They digest quickly, give you a quick spike of energy, and soon after comes the CRASH!<br />
            Think Candy, sodas, pastries, white bread, sugary cereals and much more. They are like fireworks. They are bright and sparkly and exciting. They are over in a flash.
          </p>
          
          <p>
            <strong>Complex Carbohydrates</strong><br />
            These take longer to digest because they're made of longer sugar chains. That means more stable blood sugar, lasting energy and a happier digestive system.<br />
            Think, sweet potatoes, oats, brown rice, lentils, quinoa, veggies beans and much more.<br />
            They are like a slow burning candle, steady, warm, filling and reliable.
          </p>
          
          <p>
            <strong>Vegetarian</strong><br />
            No meat, poultry or fish. You can include eggs, dairy, cheese and processed foods.<br />
            Think, cheese pizza, veggie lasagna, yogurt parfaits.
          </p>
          
          <p>
            <strong>Vegan</strong><br />
            No animal products at all. No meat, no dairy, no eggs, no honey.
          </p>
          
          <p>
            <strong>Whole Food Plant Based (WFPB)</strong><br />
            Focuses on whole, minimally processed plant foods. Fruits, veggies, grains, beans, legumes, nuts, seeds. No meat, dairy, eggs, oils, sugar or heavily processed products.<br />
            Think of nourishing your body for health, vitality and sparkle.
          </p>
          
          <p>
            <strong>Quick Recap</strong><br />
            Vegetarian=no meat<br />
            Vegan= no meat, no animal products<br />
            WFPB=Plants
          </p>
          
          <p>
            <strong>Macronutrients</strong><br />
            The big three your body needs in large amounts<br />
            Carbohydrates, Proteins, Fats<br />
            Think, the main event on your plate.
          </p>
          
          <p>
            <strong>Micronutrients</strong><br />
            Vitamins and minerals your body needs in tiny amounts to function well.<br />
            Think of the behind the scenes crew making the show run smoothly.
          </p>
          
          <p>
            You need both to sparkle inside and out!
          </p>
          
          <p className="text-lg font-semibold mt-6">
            Different Types of Fasting
          </p>
          
          <p>
            <strong>Intermittent Fasting (IF)</strong><br />
            Eat during a set window (e.g., 16:8, 14:10, 12:12).
          </p>
          
          <p>
            <strong>5:2 Fasting.</strong> Eat normally for 5 days, restrict calories for two non consecutive days.
          </p>
          
          <p>
            <strong>Time Restricted Eating</strong><br />
            Eat in the daylight. Early dinner, no late snacks.
          </p>
          
          <p>
            <strong>Prolonged Fasting</strong><br />
            Fast 24 hours or longer. Only under medical guidance.
          </p>
          
          <p>
            <strong>Modified Fasts</strong><br />
            Eat very small amounts to mimic fasting benefits ( usually Therapeutic).
          </p>
          
          <p>
            NOTE: Fasting is not about punishment. It is about pause and purpose.
          </p>
          
          <p className="text-lg font-semibold mt-6">
            WFPB vs Top Diet Trends
          </p>
          
          <p>
            <strong>Keto:</strong> High fat, low carb, heavy on meat and oils. Quick weight loss results, but lacks fiber and long term benefits.
          </p>
          
          <p>
            <strong>Paleo:</strong> Whole foods, but excludes legumes and grains. Leans on animal products.
          </p>
          
          <p>
            <strong>Mediterranean:</strong> Balanced, plant leaning, includes fish and oils.
          </p>
          
          <p>
            <strong>WFPB:</strong> All plants, no oil, no sugar, no salt, no processed foods. Based on science built for longevity and healing.
          </p>
          
          <p>
            Note: Fad diets chase results. WFPB builds a healthy, confident life.
          </p>
          
          <p>
            <strong>Gut Health: Your Secret Garden</strong><br />
            Support it with fiber, fermented foods ,and plant variety. Avoid processed foods, sugars, oils and animal fats. Think of your gut like a garden, nurture it with whole plants.
          </p>
          
          <p>
            <strong>Label Reading for Rebels</strong><br />
            Watch for added sugars, oils, sodium, artificial ingredients. Choose short clean ingredient lists you recognize
          </p>
          
          <p>
            Note: If it reads like a science project, maybe it belongs in the lab, not your kitchen.
          </p>
          
          <p>
            I hope this helps to clarify misconceptions.
          </p>
          
          <p>
            Let's rebel against confusion, reclaim our health, and rediscover joy in eating one bite at a time.
          </p>
          
          <p>
            Sparkle on Rebels. The Revolution is delicious.
          </p>
          
          <p>
            With Love, Laughter and Leafy Greens,<br />
            Suz
          </p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 2: The Road to Success
  if (postId === 'the-road-to-success-8-thoughts') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 2}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">The Road to Success: 8 Thoughts</h1>
        
        <div className="space-y-6 mb-16">
          <div>
            <h3 className="font-semibold text-lg mb-2">Hard Work</h3>
            <p>Forget about luck, it is hard work.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Patience</h3>
            <p>If you lose patience you lose the battle.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Sacrifice</h3>
            <p>If you do not sacrifice for what you want, what you want becomes the sacrifice.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Consistency</h3>
            <p>Transforms average to extraordinary.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Discipline</h3>
            <p>Motivation gets you going but discipline keeps you going.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Self Confidence</h3>
            <p>It is not about whether others like you, it is that you know you will be fine if they do not like you.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Positive Attitude</h3>
            <p>You will not solve every problem, but you will irritate the naysayers.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Focus</h3>
            <p>Keep your eyes on your goals not on your obstacles.</p>
          </div>

          <p className="mt-8">Success isn't just about reaching the destination—it's about who you become on the journey.</p>
          <p>Sparkle on, Rebels. Your success story is waiting to be written.</p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 3: WFPB Lifestyle Guide
  if (postId === 'wfpb-lifestyle-guide') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 3}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">A Quick Introduction and Guide to a Whole-Food Plant-Based (WFPB) Lifestyle</h1>
        
        <div className="prose max-w-none space-y-4 mb-16">
          <p>
            The WFPB lifestyle is NOT a diet. It is a lifestyle which promotes better health, greater energy, and a deeper connection with the way humans chose to nourish themselves. It has been proven to be better for humans, the animals and the planet.
          </p>

          <p>
            Studies show that a WFPB diet can help prevent or manage or reverse chronic conditions like heart disease, type 2 diabetes, hypertension, autoimmune diseases, obesity, adult on-set diabetes, certain types of cancer, dementia and a host of other ailments linked to diet including impotence.
          </p>

          <p>
            <strong>Side Benefit:</strong> "If adopted and fully and completely adhered to you will never again have to count calories or worry about your weight". Dr Esselstyn
          </p>

          <p>
            <strong>Whole Food Plant Based Defined:</strong><br />
            Think from the garden not the farm or factory.
          </p>

          <p>
            No animals (nothing with a momma), including sea animals.<br />
            No animal by products<br />
            No processed foods<br />
            Limit sugar, oil and salt
          </p>

          <p>
            WFPB focuses on optimal health and whole nutrient dense foods. It emphasizes eating minimally processed, whole plant foods such as fruits and vegetables, whole grains, nuts and seeds.
          </p>

          <p>
            Embrace the delight of all fruits and veggies, grains, nuts and seeds in as close to their original state as possible. <strong>Note:</strong> Calorie Density is important to consider if weight is an issue. Think nuts and avocados vs kale and lettuce.
          </p>

          <p>
            <strong>A few quick comments from professionals who have influenced me along the way.</strong>
          </p>

          <p>
            <strong>Dr. Caldwell Esselstyn,</strong> a surgeon, clinician and researcher at the Cleveland Clinic. " My message is clear and absolute: coronary artery disease does not have to exist, and if it does. it need not progress". "Prevent and Reverse Heart Disease"<br />
            Listen to a presentation by Dr. Esselstyn here:<br />
            <a 
              href="https://www.google.com/search?q=dr+esselstyn+youtube&oq=DR+Esselstyn+YouTube&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyCAgBEAAYFhgeMg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-coral hover:text-coral-dark underline"
            >
              https://www.google.com/search?q=dr+esselstyn+youtube
            </a>
          </p>

          <p>
            <strong>Dr T Colin Campbell,</strong> is a biochemist and a pioneering nutrition scientist and professor emeritus at Cornell University. Recently retired and founder of the global community, T Colin Campbell Center for Nutrition Studies. His groundbreaking work advocating for a WFPB lifestyle as a means to prevent and even reverse chronic diseases has inspired millions to rethink their relationship with food and embrace the power of plants for optimal health.
          </p>

          <p>
            <strong>Dr Campbell:</strong> "I propose to do nothing less than redefine what we think of as good nutrition. The provocative results of my four decades of experimental research, including the findings from a 27 year laboratory program, prove that eating right can save your life". "The China Study"
          </p>

          <p>
            These two gents are now 90+. They and their families have chosen to follow their research for 40+ years. Their personal results are astounding and the good news, achievable. They are my inspiration.
          </p>

          <p>
            <strong>Here are some select tools, guides and resources which have definitely influenced my journey toward being WFPB.</strong>
          </p>

          <p>
            <strong>Books that dive deeper!</strong>
          </p>

          <p>
            Prevent And Reverse Heart Disease: The Revolutionary, Scientifically Proven, Nutrition-Based Cure
          </p>

          <p>
            AMERICAN WEST BOOKS The China Study Revised Expanded Edition, 1 EA
          </p>

          <p>
            How Not to Die: Discover the Foods Scientifically Proven to Prevent and Reverse Disease
          </p>

          <p>
            For Fork's Sake: A Quick Guide to Healing Yourself and the Planet Through a Plant-Based Diet
          </p>

          <p>
            <strong>NOTE:</strong> There are many books regarding nutrition. The above have motivated me in my journey. I am happy to refer others. The book "For Forks Sake" is a wonderful, user-friendly, practical step by step guide to embracing the WFPB lifestyle.
          </p>

          <p>
            <strong>Documentaries to inspire your journey (WATCH THESE)</strong><br />
            Forks over Knives<br />
            The Game Changers<br />
            What the Health<br />
            You are What You Eat: A Twin Experiment (Stanford University)
          </p>

          <p>
            <strong>Where do you get your protein?</strong> The same place many animals do including but not limited to cows, chickens and pigs. These animals consume plants and synthesize the amino acids from the proteins in those plants. When humans eat meat, they are indirectly consuming the protein that originally came from the plants that the animals ate. So by eating plant foods directly one can "cut out the middleman" and still meet protein requirements efficiently. There are 40 + animals that go directly to the source, elephants, gorillas, hippos, etc..
          </p>

          <p>
            <strong>NOTE:</strong> All plants contain protein, in varying amounts. Legumes, soy, whole grains, nuts and seeds are rich sources, while even vegetables provide some. Here is a short list , spinach, broccoli, kale, brussel sprouts, asparagus, artichokes, mushrooms, collard greens, mustard greens, watercress.
          </p>

          <p>
            Eating a variety of plant foods ensures all essential amino acids, making plant-based diets fully capable of meeting protein needs.
          </p>

          <p>
            More about protein by Dr. Chris Gardener. Stanford. Watch on YouTube.
          </p>

          <p>
            There is so much to unpack regarding WFPB eating. I will offer this red flag, <strong>BEWARE OF PROCESSED FOODS</strong> and products labeled VEGAN. Best to stick to foods without labels.
          </p>

          <p>
            <strong>Closing from Dr Dean Ornish, M.D.</strong><br />
            President and Director<br />
            Preventive Medicine Research Institute<br />
            University of California<br />
            San Francisco, California
          </p>

          <p>
            "One of the surprising findings in our study is that, for many people, it is easier to make BIG changes in diet and lifestyle than to make only moderate ones. Although this goes against conventional wisdom, we found it to be true. When people make only moderate changes in diet and life-style, they have the worst of both worlds. They have the sense of deprivation because they are not able to eat and do everything they want, but they are not making changes big enough to make them feel much better or to have much effect on their weight, their cholesterol, or their health. On the other hand, when people make comprehensive changes in their diet and lifestyle, they begin to feel so much better, so quickly that the choices become clear, and for many people, worth making". Dean Ornish
          </p>

          <p>
            However: If all you can do today is take one step, then take one step. The biggest wins are made up of the smallest steps.
          </p>

          <p>
            <strong>THE KEY IS CONSISTENCY AND PERSEVERANCE.</strong>
          </p>

          <p>
            <strong>Let's Continue the Conversation at Your Convenience.</strong>
          </p>

          <p>
            Suzanne Meinhardt<br />
            beachmom@gmail.com<br />
            408-406-8322 TEXT ONLY
          </p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 4: A Love Letter to My Closet
  if (postId === 'a-love-letter-to-my-closet') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 4}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">A Love Letter to My Closet</h1>
        
        <div className="prose max-w-none space-y-4 mb-16">
          <p>There was a time I dressed to impress. Now? I dress to express.</p>

          <p>My closet is no longer a holding pen for solid black. (A guy I worked for once told me, if you want to be taken seriously in this biz, wear black, to say that had an impression on me is an understatement). But truth be known I expect black is the "little black power move of the color world". I drank the Kool Aid and for many years wore black, ONLY. My philosophy has always included, "if a little is good, a lot is better."</p>

          <p>My closet is no longer a holding pen for black. It is my personal gallery of courage, mood and sometimes sequins. You will spot bright scarves, leopard and zebra prints, bright pink heels, my favorite red party skirt, shirts of many colors, some of which sparkle bright. A shelf of colorful hats, crazy socks, bright purses and chunky colorful jewelry. I am working toward breaking up with black, one step at a time. However, it is a slow agonizing break up because black has so much to give: check this out, after much pondering and thoughtfulness and questioning friends, I came up with a Pro Black List.</p>

          <p>
            <strong>I am in charge.</strong><br />
            <strong>I've got mystery - and I am keeping some for myself</strong><br />
            <strong>I am deliberate</strong><br />
            <strong>I am here to focus</strong><br />
            <strong>I know my power and I do not need to shout.</strong><br />
            Hmmmmmmmm?
          </p>

          <p>This post is a letter to that space, a different time, the jackets that carry memories, the scarves that still smell faintly of old adventures, the shoes that remind me who I was (and still am, just a newer version). It's about the joy of reaching for a piece that makes me feel like me, and the quiet confidence that comes from showing up in something that whispers, "I've still got it but in a sassy classy way."</p>

          <p>I have lived long enough to know the fashion rules, and to BREAK them all. White after Labor Day, of course. Florals and stripes, so good. Red lipstick, a favorite silk blouse with jeans, sneakers and a baseball cap, classy redefined. Why not? Rebels radiate.</p>

          <p>At 83, I no longer wonder, "Can I pull this off?" Instead I wonder? "Do I feel like myself in this and especially spectacular"? If the answer is yes, on, it goes.</p>

          <p>But here's the thing, I didn't just stumble into enjoying fashion. I have been intrigued since I was a little girl. There is a difference, you already know this, between FASHION and STYLE. I think unknowingly I chased the latter.</p>

          <p>I recall being in 7th grade. I only had a few clothing items. I loved creating new outfits from what I had. I enjoyed reinventing what hung in my closet. I would find ways to tweak, change, and reinvent each piece to feel new. The day I used my dad's bright red plaid robe belt and proudly tied it around my waist to change the look of the "same old" was a day I will always remember. The compliments flew and I became unstoppable. It wasn't about labels or trends, it was about attitude, imagination and sass.</p>

          <p>A few months ago, someone dear to me said, in conversation, "Well, you have your own unique style, it's easy for you." I was shocked. At 83, it had never dawned on me that what I'd been doing all of these years, tweaking, layering, adding robe belts like runway sashes, was style. It was not about effortlessness. It was about love.</p>

          <p>So here's my rebellious whisper to you. Don't fade. Don't apologize. Don't tuck yourself into black. Wear the thing you always wanted to wear, the way you want to wear it. The vintage purple hat, the red lipstick, the statement jacket you thought might be "too much". This is your time to SPARKLE, and to radiate unapologetic style.</p>

          <p>Refuse to become invisible. Your closet is a mirror. Let it reflect your energy, your evolution, your essence. Try something unexpected. Let your closet be the playground it was always meant to be.</p>

          <p>What's hanging in your closet that is begging to dance again?</p>

          <p><strong>With Love, Laughter and Leafy Greens,<br />Suz</strong></p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 5: Blueberries and Wrinkles
  if (postId === 'blueberries-and-wrinkles') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 5}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">Blueberries and Wrinkles</h1>
        
        <div className="space-y-4 mb-16">
          <p>Wrinkles tell stories. Blueberries write new chapters.</p>
          <p>Every antioxidant-rich berry you eat is a small act of rebellion against the aging myths that tell us we're supposed to fade quietly into the background.</p>
          <p>Your skin, your health, your vitality—they're all reflections of the choices you make daily. Choose plants. Choose sparkle. Choose you.</p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 6: Gratitude and the Rebellious Soul
  if (postId === 'gratitude-rebellious-soul') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 6}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">Gratitude and the Rebellious Soul (The Quiet Superpower)</h1>
        
        <div className="prose max-w-none space-y-4 mb-16">
          <p>Yesterday when Enzo and I were recording a video about the three pillars of Rebellious Aging, I blurted out, I must include a fourth pillar, gratitude. Enzo agreed and so of course a blog about gratitude must follow my outburst.</p>

          <p>Gratitude is a powerful tool, not just for joy, but for health, confidence, and longevity. It's not just about saying thank you. It is about the way we see the world, and the way we show up in it.</p>

          <p>Gratitude is not passive. It is not just being polite or listing what you are thankful for at Thanksgiving dinner (although that does matter). It is more of a mindset, a way of paying attention to what is good and worthy, even in the midst of chaos, change, or aging knees that creak a little louder each year.</p>

          <p>Real gratitude acknowledges life as it is, while also celebrating what's still possible. It turns "why me?" into "what now?" and "I used to" into "I get to."</p>

          <p><strong>Here is where the sparkle meets the science: practicing gratitude actually rewires your brain.</strong><br />
          Neuroscientists have found that regularly reflecting on what you are grateful for boosts levels of dopamine and serotonin, the brain's "feel good" chemicals. It even strengthens neural pathways associated with emotional regulation and empathy. In other words: the more you practice gratitude, the more natural it becomes to feel joy and connection and peace.</p>

          <p>A fascinating study from UC Davis found that people who kept a gratitude journal for just ten weeks reported feeling more optimistic, exercising more, and visiting doctors less than those who focused on daily hassles. Yup, that is right, thankfulness might actually be better than a pharmaceutical supplement.</p>

          <p><strong>Gratitude matters, especially as we age.</strong> When we are younger, gratitude often feels like a luxury or is ignored completely. As we age? It becomes a necessity.</p>

          <p>Gratitude anchors us. It softens the sting of loss and aging. It brings perspective to change. It helps us remember we are still here, still learning, still capable, still able to make an impact. Gratitude is an act of rebellion in a world that tells us aging is declining. No way, we are rising with great health, confidence, grace, style and gumption.</p>

          <p><strong>Here are a few ways to infuse more gratitude into your life.<br />
          (Without Making It a Chore)</strong></p>

          <p><strong>*Before your feet hit the floor, name one thing you are grateful for.</strong> A soft pillow counts. So does waking up.</p>

          <p><strong>*Take a 10 minute stroll and silently thank your body, the trees, the sky or whatever catches your eye.</strong></p>

          <p><strong>* Keep a small notebook by your bed and jot down three things each night that made your day better.</strong></p>

          <p><strong>* Call or text someone and tell them exactly what you appreciate about them.</strong> Don't wait.</p>

          <p><strong>*Annoyed that your joints ache after gardening?</strong> Flip it to "I am grateful, I am strong enough to dig in the dirt and grow beautiful things."</p>

          <p>I think you get the point, right?</p>

          <p>Gratitude is not a trend. It's a transformation. For the rebellious ager, it is one of the most powerful tools in your kit. Not because it is easy, but because it is real. Gratitude grounds you, heals you, and helps you rise.</p>

          <p>So go ahead and make gratitude your daily rebellion. Not just because it is good for your brain (which it is), but because it reminds you how rich your life truly is.</p>

          <p><strong>Sparkle on,<br />
          Suz</strong></p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 7: The Art of Thriving
  if (postId === 'art-of-thriving-aging-expert') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 7}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">The Art of Thriving. What an Ageing Expert Wants You to Know</h1>
        
        <div className="prose max-w-none space-y-4 mb-16">
          <p>I came across an article in the Guardian this morning and I thought it was worthy of a share. It was written by Dr. Kerry Burnight. I am inspired by Dr. Kerry's wisdom as I feel it aligns with my message here at Rebellious Aging.</p>

          <p>Here is my Blog on her article.</p>

          <p>What if ageing wasn't something to fear, fight, or fix. Rather something to expand into with joy, purpose, and rebellious spark? Dr. Kerry is one of America's leading gerontologists and believes exactly that and as a Rebel I could not agree more.</p>

          <p>In the article, titled "I'm an Expert on Aging. Here is What I Know about Thriving in Later Life," Dr Burnight shares the kind of wisdom that deserves a drumroll, and maybe a dance break.</p>

          <p>Here is what she says we need to do to truly thrive.</p>

          <p><strong>Forget about just adding years to your life (lifespan) or even adding life to your years (healthspan).</strong> Dr. Kerry introduces the reader to a richer, deeper concept. Joyspan. Which is living with connection, purpose, and the kind of soul deep contentment that makes aging feel like a privilege, not a penalty.</p>

          <p>Now that is rebellious.</p>

          <p><strong>Here are her essentials, they are not optional.</strong></p>

          <p><strong>Keep learning.</strong> Stay curious. Try new things. Yes, even if it scares you a little, or a lot.. That is the point. A curious mind keeps us alive, engaged, and fabulously unpredictable.</p>

          <p><strong>Relationships are the elixir.</strong> Whether it's rekindling old friendships, hugging tighter, or even starting new connections online, being seen and known matters.</p>

          <p><strong>Change is a constant companion in later life.</strong> The key? Flexibility. Grace. Maybe even a sense of humor, when gravity starts getting sassy.</p>

          <p><strong>Your life experience has value.</strong> Share it. Mentor, support, volunteer, or simply smile at someone who looks lost. Giving adds meaning and texture to our days.</p>

          <p>Dr. Burnright paints a vivid contrast between two women. One is resigned to decline, the other is lit up with curiosity and confidence. The difference was not luck or money. It was Mindset.</p>

          <p>Reading this article reminded me that the work we are doing here, embracing radiant health, confidence and unapologetic style, is not superficial. It's survival. It's joy. It's rebellion.</p>

          <p>To grow, connect, adapt, and give, that 's what we Rebels do best.</p>

          <p>Not sure where to begin? Start with one tiny act of rebellion. Try something new. If you need a little nudge, I've got your back. Reach out and join our community.</p>

          <p><strong>Feeling inspired?</strong> For the next seven days, choose one small action to grow, connect, adapt or give. Keep a note, share your favorite moment. Let joy surprise you.</p>

          <p><a href="https://www.theguardian.com/commentisfree/ng-interactive/2025/jul/18/best-ageing-advice-expert-tips#:~:text=Thriving%20doesn't%20mean%20being,the%20quality%20of%20their%20lives." target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Read the full Guardian article here</a></p>

          <p><strong>Sparkle on, Rebels</strong></p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 8: Shop Window
  if (postId === 'shop-window-aging-gracefully') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 8}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">What a Shop Window Taught Me About Aging Gracefully</h1>
        
        <div className="prose max-w-none space-y-4 mb-16">
          <p>Who knew a shop window could deliver a life lesson? One early morning, glance, stopped me in my tracks and got me thinking about posture, presence, and how we carry ourselves through the years. A gentle nudge for all of us Rebels.</p>

          <p>It started as just another peaceful morning walk with my pup, Gabe.</p>

          <p>We took a different route today. One that wound us through the quiet charm of downtown. As the sun peeked over the buildings and Gabe sniffed his way through the sidewalk stories of the day, I caught a glimpse of myself in a shop window.</p>

          <p>I stopped, stunned. Shoulders slumped. Back rounded. My body was speaking, not in the way I wanted it to.</p>

          <p>I instantly thought of my mom. She had a thing about porture as I was growing up. "Stand tall", she'd say, tapping gently on my shoulders. "Good posture shows self respect."</p>

          <p>She was right.</p>

          <p>Posture is not just about looking elegant, it is about aging with confidence, strength, and even safety. It affects balance, energy, mood, digestion, and how the world sees us. And more importantly, how we see ourselves.</p>

          <p>As we age, our bodies naturally change. Poor posture can speed up the process and steal joy from everyday moments.</p>

          <p><strong>Examples:</strong></p>
          <p>Rounded shoulders can tighten the chest and restrict breathing.<br/>
          Slouching weakens core and back muscles.<br/>
          Poor alignment increases fall risk and spinal compression.<br/>
          It can even lower confidence and mood because body language is a language.</p>

          <p>Here is the good news, it is never too late to straighten up.</p>

          <p><strong>Gentle Ways to Stand Tall</strong></p>

          <p>Here are a few simple things I am doing now (and you can too!)<br/>
          Sticky Note Reminders<br/>
          I include the following in my morning stretch and workout routine.</p>

          <p className="ml-8"><strong>A. The Wall Test</strong><br/>
          Stand with your back against a wall. Heels, tailbone, shoulders, and the back of your head touching the wall. Hold for 30 seconds. Repeat several times.</p>

          <p className="ml-8"><strong>B. Daily Posture Reset Stretch</strong><br/>
          Try this quick sequence.<br/>
          Roll shoulders up, back and down<br/>
          Tuck chin gently to lengthen the neck<br/>
          Lift your chest slightly and breathe deeply<br/>
          Engage your core like you are zipping up a snug coat.<br/>
          Hold for 10 seconds. Repeat often.</p>

          <p>So the shop window moment could have spiraled into self criticism. Instead, it became a nudge, a reminder that Rebellious Aging is not about perfection. It is about paying attention, making tweaks, and moving forward with self love and attention.</p>

          <p>We deserve to take up space.<br/>
          To walk with pride.<br/>
          To show the world we are not invisible but still rising.</p>

          <p><strong>CTA: Rebel homework.</strong> Stand before a mirror or a shop window, and do your own posture check and correct.</p>

          <p>Leave a comment and let's straighten up together.</p>

          <p><strong>Sparkle on,<br/>
          Suz</strong></p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 9: Set Record Straight
  if (postId === 'set-record-straight-wfpb') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 9}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">It's Time to Set the Record Straight Regarding a Whole Food Plant Based Lifestyle</h1>
        
        <div className="prose max-w-none space-y-4 mb-16">
          <p>Let's be honest. When you mention to other humans that you are eating mostly plants, the reactions range from curious to downright skeptical. The first question is usually about where do you get your protein? Followed by, isn't it expensive? Followed by the statement, Sounds like a lot of work.</p>

          <p>I know you have been wondering the same. These are my most asked questions. These myths have been around longer than tofu has been on supermarket shelves. Here's the truth. A whole Food Plant Based (WFPB) lifestyle is not extreme, it is evidence-based, empowering, simple, delicious, life changing, health changing, weight changing and doable at any age.</p>

          <p><strong>Let's Clear the Air.</strong></p>

          <p><strong>Where do you get your protein?</strong> Duh, Simple answer: the same place the animal you just ate got their protein. PLANTS! Plants have plenty of protein. Here's a short list in no special order: peanut butter, soy milk, oat milk, lentils, beans, tofu, edamame, quinoa, oats, green peas, split peas, potatoes, kale, spinach and broccoli are all solid sources. Most Americans actually consume too much protein (A Future Blog). Checkout, NutritionFacts.org/protein</p>

          <p><strong>It's Too Expensive.</strong> Not if you do not want it to be. Just like anything else you have choices. Beans, rice, potatoes, oats, frozen veggies and in season produce are some of the cheapest and most nutritious foods on the planet. Whole Foods for the win!</p>

          <p><strong>It takes too much time to prepare.</strong> Again just like with the Standard American Diet (SAD) you have choices. If you are making an Instagram worthy Buddha bowl or Chef Aj's deelish Chocolate Mint Torte, maybe. (chefaj.com) WFPB can be as fast as an unglamorous but nutritious Buddha bowl, as fast as a bowl of chili, or a roasted sweet potato on a bed of greens smothered with your choice of an assortment of veggies topped with a great balsamic or salsa. Frozen veggies equal time saving brilliance. I am having a love affair with organic frozen kale and wild blueberries. Simple as simple is and quicker and healthier than take out. Replace the word EAT with Nourish, for the win.</p>

          <p><strong>It is ONLY for Young People.</strong> Actually the older we get, the more our bodies benefit from nutrient rich, anti-inflammatory foods. Aches, energy dips, blood pressure spikes? Plants for the win.</p>

          <p><strong>I Will Feel Deprived.</strong> Deprived of what, heartburn? Joint pain? Meds? Autoimmune Disease? Heart Disease. The truth is, many people discover more flavor, satisfaction, and joy in their meals when they go plant based. Your gut microbiome celebrates, your taste buds evolve, your energy returns, your weight stabilizes, your blood flows and your confidence blooms. Aging with grace and greens for the win.</p>

          <p>You have nothing to lose and so much to gain. You do not have to know everything to get started. You just have to be open. The WFPB lifestyle is not about perfection it is about progress and possibilities. And trust me, your body will thank you.</p>

          <p><strong>From Dr. T. Colin Campbell,</strong> A good diet is THE most powerful weapon against disease and sickness.</p>

          <p>Rebel on, eat well, and remember, you've got this.</p>

          <p><strong>Check out the following documentaries:</strong><br/>
          Forks Over Knives<br/>
          Game Changers<br/>
          What the Health<br/>
          Plant Pure Nation<br/>
          Fat, Sick and Nearly Dead<br/>
          You Are What You Eat: A Twin Experiment</p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 10: Limiting Beliefs
  if (postId === 'limiting-beliefs-not-boss') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 10}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">Shhh…That Voice in Your Head is Not the Boss of You</h1>
        
        <div className="prose max-w-none space-y-4 mb-16">
          <p>Let's get one thing straight. Those whispers in your head, ya know the ones saying you are too old, too late, not stylish enough, not smart enough, unhealthy, horribly out of shape, not ready, they are NOT the truth. (For those who are interested I will dive deeper into the science of who those sneaky voices belong to.) But for now let's go with this. They are old scripts. They are "hand me down" fears. Quite frankly, they are BORING! It is time to stop letting those outdated voices run the show.</p>

          <p>Limiting beliefs are sneaky. They wear disguises like "being realistic" or "just protecting from disappointment." But what they are really doing is shrinking YOU. They are keeping you from saying yes to that art class, trying a new hairstyle, hitting record on that video idea, or ditching making healthier food choices.</p>

          <p>Here is the TRUTH bomb. You do not have to believe every thought you think. May I suggest you read, "Don't Believe Everything You Think" (Why Your Thinking is the Beginning & End Of Suffering) by Joseph Nguyen.</p>

          <p>That voice in your head? It may sound like you, but it is NOT you. It is a collage of old rules, other people's opinions, and moments when your confidence got a bit bruised. You, my friend, are much better than that.</p>

          <p><strong>3 Simple Ways to Start Busting Through Limiting Beliefs.</strong></p>

          <p><strong>Name it to Tame it.</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When a limiting thought pops up, ya know like "I am too old to<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;begin something new", say it out loud. Hearing it with your<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;real voice often will reveal just how silly or outdated that<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;thought is.</p>

          <p><strong>Ask: Would I say this to a friend?</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If your best friend came to you at 55, 65, or 83 saying, "I want<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to try something new," would you ever say, "Nope, too late".<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Of course not. You must treat yourself with the same<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;compassion.</p>

          <p><strong>Gather Evidence to the Contrary.</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Write down all the times you did try something new and it<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;went superbly. Or at the least, taught you something<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;important.<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You are not starting from scratch. You are starting from<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Experience.</p>

          <p>Here's the thing. Confidence is definitely not about having all of the answers. It is more about trusting yourself enough to take the next step. If your knees are knocking and you are breaking out in a sweat, keep going. The great thing is you can be scared and still be powerful. How about this, "self doubt" can ride along for the journey, but it does not get to drive.</p>

          <p>We Rebels are NOT here to play small.</p>

          <p>We are here to live fully, loudly, and with the kind of sparkle that makes people stop and say, "I want whatever she's got."</p>

          <p><strong>Call to Action:</strong><br/>
          Is there a limiting belief that haunts you? Let it go. Write it down. Tear it up. Better yet burn it. Then take one rebellious action that proves it wrong. Need a cheerleader? I am here for you.</p>

          <p>Sparkle on,<br/>
          Suz</p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 11: What is Behind Limiting Beliefs
  if (postId === 'what-is-behind-limiting-beliefs') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 11}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">What is Behind Limiting Beliefs?</h1>
        
        <div className="prose max-w-none space-y-4 mb-16">
          <p>The voices that taunt us, saying things like you are too old, or you are not enough, or you'll fail, or they are going to laugh at you, are not a mystical curse.</p>

          <p>Here is the science behind it,</p>

          <p><strong>The Brain's Built in Alarm System</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We evolved to survive, not to shine. Your brain's primary job is to detect threats, like embarrassment, failure, or rejection. So when you think about doing something bold or unfamiliar (like starting a YouTube channel at 83) your brain may shout out, hold on, stay safe. This is just your amygdala doing its job. Helpful? Typically not.</p>

          <p>(Your amygdala is a small part of your brain, but it has a big job. It is a major processing center for emotions. It also links your emotions to many other brain abilities. It is a part of the larger network called the limbic system. These are parts of your brain that detect danger. They also play a role in behavior, emotional control and learning. Clevelandclinic.org.)</p>

          <p><strong>The Inner Critic is a Learned Voice</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Most of those critical thoughts are formed in childhood and reinforced over time. Psychologists call this internalized messaging, ideas you absorbed from your parents, teachers, peers, media and society. Messages like, don't draw attention to yourself, act your age, you are not the creative one. These become part of your subconscious belief system, repeated so often they feel like truth. But they are not true or even close. They are simply just well worn-mental grooves.</p>

          <p>Your subconscious belief systems are deeply ingrained, often unexamined, and can significantly influence thoughts, behaviors, and even physical health. These beliefs, formed in early childhood and beyond, operate largely outside of conscious awareness and can drive actions, shape interpretations of experiences and create self limiting patterns. Understanding and potentially modifying these beliefs can be a key component of personal growth and positive change. psychologytoday.com , see article, "Are Negative Core Beliefs Wrecking Your Life".</p>

          <p><strong>Default Mode Network (DMN)</strong><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is the brain network that lights up when you are not focused on a task. Like when you are daydreaming, remembering, or self reflecting. It is also where self critical chatter can thrive. When the DMN is overactive, it can fuel anxious or negative inner dialogue.</p>

          <p>Good news? Practices like mindfulness, journaling, and cognitive reframing help quiet this network and strengthen more empowering thoughts.</p>

          <p><strong>Bottom Line:</strong><br/>
          Those taunting voices in your head are a mix of subconscious programming, outdated survival wiring, and cultural conditioning. THEY ARE NOT YOU. You are the observer, the awareness, the Rebel who gets to decide which thoughts are welcome and WHICH NEED TO PACK THEIR BAGS AND MOVE ON.</p>

          <p>Sparkle on,<br/>
          Suz</p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 12: Wearing Who You Are
  if (postId === 'wearing-who-you-are-style-rebellion') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 12}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">Wearing Who You Are: A Style Rebellion</h1>
        
        <div className="prose max-w-none space-y-4 mb-16">
          <p>Let's be honest. When it comes to aging and fashion, society tends to hand us a beige cardigan and a pair of sensible shoes and whispers, "Please, just fade away". Gracefully, of course.</p>

          <p>Well thanks, but no thank you.</p>

          <p>Here at Rebellious Aging, we don't tone it down. <strong>WE TURN IT up.</strong><br/>
          Style isn't about following the rules. It is about expression, freedom, and yes, fun. It's about waking up looking in the mirror and saying, "That's ME, and I like/love what I see."</p>

          <p>Style isn't just surface stuff, it's a mirror into your inner world. The colors you wear, the shapes you choose, the accessories you throw on, the attitude you exude, well, they all tell a story. And you, dear Rebel are the author.</p>

          <p>This is your creation, your calling card, it does not have to make sense to anyone else. It just has to make you feel authentic, proud, and alive.</p>

          <p>Rebellious style is not about trends. (Unless you love them).<br/>
          It is definitely not about making you look younger. ( You have earned your years, wear them with pride and the sassy unapologetic Rebel you are becoming).</p>

          <p>It is not about dressing age-appropriately (whatever that means).</p>

          <p>But it is the following for sure. Feeling confident in your own skin. Dressing to match your mood. Giving yourself permission to try stuff, to play, to show up at breakfast wearing bright red lipstick. Be authentic, be gorgeous, be unapologetic, be <strong>BOLD</strong>.</p>

          <p><strong>Reminder!</strong> "Don't Let The Old Lady In."</p>

          <p>OK, so, let's start here. What is one item in your closet that feels most like you at the moment?  Pull it out, dust it off, try it on. Wear it this week. Bonus points if it makes you smile when you catch your reflection.</p>

          <p>So if you are ready to rethink your "style story", you are in the right place. We will be talking closet clean outs, joyful dressing, thrifting, upstyling, bold accessories, fab colors and slaying those old rules that say you have to disappear as you age.</p>

          <p>Let's Dazzle Together.</p>

          <p>Sparkle on,<br/>
          Suz</p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 13: Bold Sassy Truth
  if (postId === 'bold-sassy-truth-wfpb') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 13}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">The Bold, Sassy Truth About a Whole Food Plant Based Lifestyle</h1>
        
        <div className="prose max-w-none space-y-4 mb-16">
          <p>Who says aging gracefully has to be slow and quiet? Not me. I believe in aging rebelliously. With a plate full of vibrant colors, flavors, and life giving nutrients. A WFPB lifestyle isn't just about "rabbit food." Instead it is a delicious rebellion against disease, fatigue, and mediocrity. And guess what? Science is on our side. Let's take a look at what the research says about eating plants and living brilliantly.</p>

          <p><strong>Reduced Risk of Chronic Disease</strong><br/>
          A whole Food Plant Based diet has shown to halt and even reverse coronary artery disease, (Esselstyn), lower cancer risk (Campbell's China Study) and improve blood sugar control in type 2 diabetes (Greger).</p>

          <p><strong>Improved Digestive Health</strong><br/>
          Fiber rich plant foods nourish a healthy gut microbiome, improve digestion, and may reduce colorectal cancer risk. (Bulsiewicz).</p>

          <p><strong>Lower Blood Pressure and Cholesterol</strong><br/>
          Plant diets reduce LDL cholesterol and blood pressure without medication side effects.(Esselstyn, Greger).</p>

          <p><strong>Weight Management and Metabolic Health</strong><br/>
          Low calorie density makes it easier to maintain a healthy weight while eating satisfying portions and not counting calories. (Campbell, Greger).</p>

          <p><strong>Anti-Inflammatory Effects</strong><br/>
          Antioxidants (substances that can help protect your cells from damage caused by unstable molecules called free radicals. Free radicals are by-products of normal cell processes and can contribute to various diseases) and phytonutrients (naturally occurring compounds found in plants that offer various health benefits) in plants reduce chronic inflammation linked to arthritis, heart disease, and cognitive decline (Greger, Bulsiewicz).</p>

          <p><strong>Healthspan and Quality of Life.</strong><br/>
          Plant predominant diets are associated with longer lifespan and lower rates of disability (Campbell, Greger).</p>

          <p><strong>Improved Energy and Recovery</strong><br/>
          Better blood flow, oxygen delivery, and reduced oxidative stress, boost stamina and recovery (Esselstyn, Greger).</p>

          <p>So here's the truth. You can tiptoe through the years, or you can charge in, fork first, and claim the health, energy and sparkle you deserve. A WFPB lifestyle isn't just about adding years to your life. It is about adding life to your years. The research is clear, plants are delicious, and over the top healthy  and the only thing missing is your decision to take the risk and dive in. So go ahead, and plate up some plants.</p>

          <p>Sparkle on,<br/>
          Suz</p>

          <p><em>Full bibliography available upon request.</em></p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 14: The New Classic
  if (postId === 'the-new-classic-timeless-style') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 14}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">The New Classic: Timeless Style with a Rebellious Twist</h1>
        
        <div className="prose max-w-none space-y-4 mb-16">
          <p>Fashion legends like Coco Channel, Christian Dior, and Yves St Laurent gave the world timeless rules for elegance. As rebels we just give these rules a wink and twist them into something uniquely ours. We have lived long enough to know that style is more than clothes. Style is about attitude, confidence, and a refusal to fade quietly into the background.</p>

          <p>So let's stroll down the runway of fashion wisdom from a few of the greats. And let's add our own rebellious twist.</p>

          <p>I love Coco Chanel's life story. So interesting. She believed in timelessness. Ya know the kind of style that feels right no matter the decade.<br/>
          So keep those timeless pieces if you have them or grab them second hand if you are lucky. But do not let them get dusty. That classic black Chanel jacket? Pair it with ripped jeans and leopard print sneakers. Chanel and pearls…..yummy. Layer those pearls with chunky chains. Remember style does not mean predictable.<br/>
          Shop vintage. So good.</p>

          <p>These sassy quotes from Coco, are priceless.</p>

          <p>"A girl should be two things:classy and fabulous." <strong>Coco</strong></p>

          <p>"Fashion changes, but style endures." <strong>Coco</strong></p>

          <p>"Dress shabbily and they remember the dress, dress impeccably and they remember the woman." <strong>Coco</strong></p>

          <p>"In order to be irreplaceable one must always be different." <strong>Coco</strong></p>

          <p>"The most courageous act is still to think of yourself." <strong>Coco</strong></p>

          <p>Coco's influence extended to accessories. She was a pioneer in mixing high and low, introducing the once radical idea of incorporating costume jewelry into her collections.<br/>
          Embodying her belief that "That a woman should mix fake and real. The point of jewelry is not to make a woman look rich but to adorn her; not the same thing." Chanel blended faux pearls and stones with natural elements, redefining the perception of luxury. (InStyle)</p>

          <p>Dior knew beauty was not about perfection. It was about joy. His distinct style is characterized by romanticism, sophistication, and attention to detail. He is well known for ultra feminine and highly sculpted clothing. This style dominated fashion in the decade following the second world war.</p>

          <p>"Happiness is the secret to all beauty; there is no beauty that is attractive without happiness." <strong>Dior</strong></p>

          <p>"Do not buy much but make sure what you buy is good." <strong>Dior</strong></p>

          <p>So my dear Rebel, wear what makes you feel happy *today*, not what you are used to wearing. If it sparks joy, it belongs on your body, not in a storage bin. Just Do It! Bring the special occasion pieces into everyday life. How about silk to the farmer's market, velvet to coffee with friends.</p>

          <p>Yves Saint Laurent, was renowned for revolutionizing women's fashion. He pushed boundaries by introducing groundbreaking designs like the smoking tuxedo, transparent blouses, switching gender roles and launching ready to wear fashion.</p>

          <p>"Fashion fades, style is eternal" <strong>YSL</strong></p>

          <p>Trends come and go, we are not here to chase every trend.<strong>YSL</strong></p>

          <p>So my dear Rebel, pick the trends you adore and ignore the rest.</p>

          <p>Style is about curating, not conforming.</p>

          <p>Mix eras fearlessly. Your favorite vintage blazer with modern sneakers or a Dior dress with a denim jacket.</p>

          <p>Own your signature, a trademark accessory, a favorite vintage necklace, stylish headband, gorgeous multicolor wrap, favorite scent, attention grabbing earrings, daring and colorful silky top, or your go to jacket that says, "YOU".</p>

          <p>Play with proportion. Try oversized with fitted, flowing structures.</p>

          <p>Play with designs, plaids with polka dots, bright colored animal prints and fabulous vintage bags.</p>

          <p>Tell texture stories. Velvet with denim, silk with leather, linen with chunky knits.</p>

          <p>Above all, make JOY your dress code. If it makes you happy it belongs in your rotation.</p>

          <p>Turn 'special occasion' into 'right now'. Wear silk. Rock the sequins. Strut the velvet.</p>

          <p>In the end style is not about following fashion. It is about owning your story. Curate your closet like you curate your life. Do it with confidence, joy, and a whole lot of rebellion. Show the world your unapologetic self.</p>

          <p>Sparkle on,<br/>
          Suz</p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 15: Book Recommendations
  if (postId === 'wfpb-lifestyle-book-recommendations') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 15}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">WFPB Lifestyle Book Recommendations</h1>
        
        <div className="prose max-w-none space-y-6 mb-16">
          <div className="space-y-2">
            <p><strong>Dr. T Colin Campbell</strong></p>
            <p>The China Study <a href="https://www.amazon.com/China-Study-Comprehensive-Nutrition-Implications/dp/1932100660" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.amazon.com/China-Study-Comprehensive-Nutrition-Implications/dp/1932100660</a></p>
            <p>Whole <a href="https://www.amazon.com/Whole-Rethinking-Nutrition-Colin-Campbell/dp/1939529840" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.amazon.com/Whole-Rethinking-Nutrition-Colin-Campbell/dp/1939529840</a></p>
            <p>The Future of Nutrition <a href="https://www.amazon.com/Whole-Rethinking-Nutrition-Colin-Campbell/dp/1939529840" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.amazon.com/Whole-Rethinking-Nutrition-Colin-Campbell/dp/1939529840</a></p>
          </div>

          <div className="space-y-2">
            <p><strong>Dr. Caldwell Esselstyn</strong></p>
            <p>Prevent and Reverse Heart Disease</p>
            <p>drcaldwellesselstyn.org  All books are available on this website.</p>
          </div>

          <div className="space-y-2">
            <p><strong>Dr. Michael Greger</strong></p>
            <p>How Not to Die</p>
            <p>Nutritionfacts.org  All books available here.</p>
          </div>

          <div className="space-y-2">
            <p><strong>Dr. Neal Barnard (Physicians Committee For Responsible Medicine)</strong></p>
            <p>pcrm.org All of his books are available on this site.</p>
            <p>Dr. Neal Barnard's Program for Reversing Diabetes</p>
            <p>Foods That Cause You to Lose Weight: The Negative Calorie Effect</p>
            <p>Reversing Diabetes: The Scientifically Proven System for Reversing Diabetes Without Drugs</p>
            <p>Foods That Fight Pain: New Stratagies for Maximum Pain Relief</p>
            <p>The Vegan Starter Kit: Everything You Need to Know About Plant-Based Eating</p>
            <p>The Cheese Trap: How Breaking a Surprising Addiction Will Help You Lose Weight,Gain Energy and Get Healthy</p>
            <p>Breaking The Food Seduction: The Hidden Reasons Behind Food Cravings, and 7 Steps to End Them Naturally</p>
            <p>Your Body in Balance:The New Science of Hormones and Health</p>
          </div>

          <div className="space-y-2">
            <p><strong>Dr. Will Bulsiewicz</strong></p>
            <p>Fiber Fueled, The Plant Based Gut Health Program for Losing Weight, Restoring Your Health, and Optimizing Your Microbiome</p>
            <p>theguthealthmd.org</p>
          </div>

          <div className="space-y-2">
            <p><strong>Goodbye Autoimmune Disease, Goodbye Lupus</strong></p>
            <p>Dr. Cyrus Khambatta, PhD, Roby Barbaro, MPH</p>
            <p>Mastering Diabetes, The Revolutionary Method to Reverse Insulin Resistance Permanently.</p>
          </div>

          <div className="space-y-2">
            <p><strong>Chef AJ</strong></p>
            <p>The Secrets to Ultimate Weight Loss</p>
            <p>chefaj.com</p>
          </div>

          <div className="space-y-2">
            <p><strong>Rachael Brown</strong></p>
            <p>For Forks Sake , A Quick GUIDE TO HEALING YOURSELF AND The Planet Through A Plant Based Diet</p>
            <p><a href="https://www.amazon.com/Forks-Sake-Healing-Yourself-Plant-Based/dp/B0B8G2G8FW" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.amazon.com/Forks-Sake-Healing-Yourself-Plant-Based/dp/B0B8G2G8FW</a></p>
          </div>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 16: Boundaries
  if (postId === 'boundaries-love-language') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 16}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">Are Boundaries a Love Language of Sorts?</h1>
        
        <div className="prose max-w-none space-y-4 mb-16">
          <p>The Summer of 2025 has been one long crash course in awkward situations. Some mine, some borrowed from others, but all pointing to one glaring truth, I NEED BOUNDARIES. Watching people I care about struggle to set them, and knowing my own anxiety as I tried and sometimes succeeded but more often than not I failed miserably, showed me just how messy and necessary this work really is. Then on my morning walk today, a thought hit me, what if boundaries are actually a love language? Rather than walls to shut people out, but bridges to keep love, respect and sanity flowing.</p>
          
          <p>So let's back up for a moment and ask, what exactly are boundaries and why do we need them?</p>
          
          <p>Boundaries are the invisible lines that define where you end and the world begins. They are your "Velvet Rope", an invitation-only entrance into your emotional, mental, and physical space. They are not about pushing people out, they are about keeping you standing tall.</p>
          
          <p>I have decided that boundaries are necessary, I am sure you agree. But, darn, they are trouble to set up and implement.. Without boundaries, life becomes a free for all, and guess who gets the short end of the stick? YOU. ME.</p>
          
          <p>Boundaries are not ageist or elitist. Nope they are for every human who wants peace, dignity and joy. If someone tells you that they do not need boundaries, well, chances are they are benefitting from you not having any.</p>
          
          <p>Here are some reasons why you should "bother" setting boundaries.</p>
          <p>*They honor your time and energy.</p>
          <p>*They prevent burnout and resentment.</p>
          <p>*They teach others how you want to be treated.</p>
          
          <p>I think many avoid creating boundaries out of fear. Yes, fear of conflict, fear of being selfish, fear of not being liked. In the end boundaries don't make you less lovable. They make you more authentic.</p>
          
          <p>Boundaries actually sparkle. They clearly say, "I value me." People know where they stand. You have more energy and less drama. I think Brene' Brown (<a href="https://brenebrown.com/about/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://brenebrown.com/about/</a>) says it well. "Boundaries are a prerequisite for compassion and empathy. We can't connect, unless we are clear about where we end and they begin."</p>
          
          <p>I think setting boundaries is difficult especially for those of us who have been conditioned to say yes. There can be, will be, often is, pushback. Not everyone will "clap" over your new rules. Oh boy, and then there is the, "be nice voice in your head", that one, for sure, will not quiet easily.</p>
          
          <p>But here is the Rebel twist, the discomfort of setting boundaries is nothing compared to the misery of living without them. (Read that one again).</p>
          
          <p>I have learned so much from the following three amazing teachers.</p>
          
          <p><strong>Mel Robbins</strong> (<a href="https://www.melrobbins.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.melrobbins.com</a>), Mel's viral, "LET THEM THEORY" IS the ultimate boundary hack. Someone flakes? Let them.  Someone gossips? Let them. It is not your job to control other people. It is your job to control your response. This is so cool, so when you pair "Let Them" with "Let Me" as in, let me decide who I want to be and what I will accept. Now the magic, the boundaries shift from scary to empowering.</p>
          
          <p><strong>Brene' Brown</strong> (brenebrown.com), People with strong boundaries do not apologize for protecting their peace, resting, or saying "no" when they mean it.</p>
          
          <p><strong>Jay Shetty</strong> (<a href="https://jayshetty.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">jayshetty.com</a>) preaches that boundaries are not selfish, rather they are love in action. He and his wife have a firm rule, no work talk at dinner. Sacred time, sacred energy. Boundaries keep love alive because they build respect. Jay says you are NOT responsible for carrying other people's feelings on your back.</p>
          
          <p>So what do you think? Are Boundaries a Love Language of Sorts? We usually think of love languages as  sweet gestures, words of affirmation,  acts of service, gifts, touch or quality time. Here is the rebel truth, boundaries are a love language too. A love language to yourself, a radical act of self respect. To others, boundaries teach people how to treat you, they remove the guesswork. In relationships they are love in action, protecting intimacy and sacred time. Across generations, boundaries don't just protect your energy, they deepen your capacity to love. Yes they say that you can love fiercely without disappearing into someone else's needs.</p>
          
          <p>Rebels know every strong "no" is actually a braver, louder, "yes" to the relationships that matter most.</p>
          
          <p>So here's the deal, Rebels. Boundaries are not about pushing people away. They are about keeping yourself intact. They are the difference between living drained and living daringly. The beauty of aging rebelliously is that we finally get to drop the guilt, ditch the "good girl" script, and stand tall in our own space. Every "no" you speak is actually a louder "yes" to your health, joy and peace. So go ahead and draw the line, shut the door, or leave it wide open when it feels right. Boundaries are not barriers. They are the sparkle lines that make your life shine brighter.</p>
          
          <p>Sparkle on my dear Rebels.</p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 17: Ditch the Sweet Stuff
  if (postId === 'ditch-the-sweet-stuff') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 17}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">Ditch the Sweet Stuff</h1>
        
        <div className="prose max-w-none space-y-4 mb-16">
          <p>
            Let's be honest, sugar is seductive. There is no upside to sugar.
          </p>
          
          <p>
            It sneaks into your morning coffee, whispers from your cookie jar, and struts through the grocery store in shiny packaging. Sugar, as sweet and coy, and powerful as it is, is an anti-nutrient. Yup, you heard that right. It has been known to inhibit the absorption of other nutrients. Do not fall into the trap of falling for sugar's buddies, either. You know who I mean, high fructose corn syrup, palm sugar, brown sugar, to name a few and of course there are the chemical sweeteners aspartame, saccharin, sucrose, the list is long. Here's the rebellious truth, sugar is not your friend.
          </p>

          <p>
            <strong>Why Ditch It? (You already know, but here is a refresher.)</strong>
          </p>

          <p>
            Sugar gives you a quick high, then dumps you in a crash. Overtime, that ride leaves you drained, cranky, and constantly reaching for the next fix.
          </p>

          <p>
            Excess sugar stokes the flames of inflammation in your body, fueling everything from joint pain to accelerated aging.
          </p>

          <p>
            Sugar hides under dozens of names. Learning to spot it on labels is one of the most rebellious things you can do for your health.
          </p>

          <p>
            Too much sugar clouds your memory, fuels cravings, and disrupts sleep. Rebels need clarity, confidence and sparkle, not fog.
          </p>

          <p>
            Click here to learn about sugar from Dr. Greger. <a href="https://nutritionfacts.org/topics/sugar/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://nutritionfacts.org/topics/sugar/</a>
          </p>

          <p>
            Breaking up with sugar does not mean never enjoying sweetness again. It means choosing whole, plant based foods that fuel your body instead of draining it. Do not underestimate the ability of fresh fruit to satisfy your craving. Dates and date paste will sweeten up baked goods. Check out the offerings from the Date Lady. <a href="https://ilovedatelady.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ilovedatelady.com</a>
          </p>

          <p>
            Rebellious Aging isn't about deprivation. It is about freedom. Freedom from cravings, mood swings, and health risks that sugar drags along with it. By saying No to Sugar, you are saying yes to energy, clarity, and confidence at every age.
          </p>

          <p>
            Here's to Rebels who sparkle without the sugar rush.
          </p>

          <p>
            With love, laughter and leafy greens.
          </p>

          <p>
            Suz
          </p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 18: Eat the Olive
  if (postId === 'eat-the-olive-not-the-oil') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 18}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">Eat the Olive, Not the Oil</h1>
        
        <div className="prose max-w-none space-y-4 mb-16">
          <p>
            Oil has a shiny reputation. Olive oil, avocado oil, coconut oil, you have seen them all and others marketed as "healthy fats". The truth is oil is oil. Ok some oils might be worse than others but NO Oil is healthy.
          </p>
          
          <p>
            At its core, oil is pure fat. EVERY oil, (olive, canola, coconut, avocado, etc.) packs a whopping 4,000 calories per pound. Compare that to veggies at 100 calories per pound, or fruits at 300 calories per pound), and you can see how quickly oil can add excess calories without filling you up. Oh and it is not just the calories. Oil is a processed food stripped of fiber, protein and most nutrients. When olives, corn, coconuts, or seeds are pressed into oil, almost everything that made them nourishing is removed. What's left? Empty calories with a halo of marketing.
          </p>

          <p>
            <strong>Interesting fact:</strong> It takes approximately 18-20 olives to produce one tablespoon of olive oil.
          </p>

          <p>
            <strong>Rebel Cheat Sheet: Calories per Pound</strong><br />
            Vegetables: 100 calories per pound<br />
            Fruits: 300 calories per pound<br />
            Beans/Legumes: 500-600 calories per pound<br />
            Whole Grains: 500-600 calories per pound<br />
            Nuts/seeds: 2,500-3,000 calories per pound<br />
            Oil: 4000 calories per pound
          </p>

          <p>
            Eat the olive, not the oil. The olive gives you fiber, vitamins, minerals and antioxidants. The oil gives you, OIL. The same goes for corn(corn oil vs. whole corn), coconuts (coconut oil vs. coconut meat), or sunflower seeds (sunflower oil vs. seeds). I think you are getting the message. When you choose the whole food you're getting the full package of nutrition that nature intended.
          </p>

          <p>
            Even the much praised olive oil is NOT a whole food. It is calorie dense and nutrient poor compared to eating actual olives. For anyone dealing with cholesterol or heart disease, even small amounts of oil can be harmful.
          </p>

          <p>
            The better option? Enjoy healthy sources of whole fats, avocados, seeds, and nuts. If you are watching cholesterol, keep those in check also. For omega 3s, the best WFPB choice is ground flaxseed sprinkled on your meal.
          </p>

          <p>
            <strong>Dr Greger:</strong> <a href="https://nutritionfacts.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">nutritionfacts.org</a>
          </p>

          <p>
            <strong>Dr Esselstyn:</strong> <a href="https://www.dresselstyn.com/site/no-oil-not-even-olive-oil/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">No Oil -- Not Even Olive Oil! - Caldwell Esselstyn MD</a>
          </p>

          <p>
            <strong>Dr Neal Barnard:</strong> <a href="https://www.youtube.com/watch?v=LbtwwZP4Yfs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">New Concerns About Olive Oil | Dr. Neal Barnard | The Exam Room Podcast</a>
          </p>

          <p>
            <strong>So what about cooking? Without oil, of course.</strong>
          </p>

          <p>
            <strong>Cooking without oil, Rebel style.</strong><br />
            Saute with broth, wine or water.<br />
            Roast veggies on parchment paper or silicone baking mats.<br />
            Make creamy dressings from blended cashews, or pureed beans.<br />
            Use nut butters or avocados for richness in sauces.
          </p>

          <p>
            Rebellious Aging isn't about trendy "superfoods." It is about choosing whole foods that nourish, energize, and keep us sparkling strong. Oil does NOT make the cut because it is calorie dense, nutrient poor and a whole food.
          </p>

          <p>
            So next time you're tempted by that shiny bottle, remember: Eat the Olive, not the Oil. Your body (and your sparkle) will thank you.
          </p>

          <p>
            Replace the word "EAT" with the word "Nourish" and see how your perspective changes.
          </p>

          <p>
            With love, laughter and leafy greens,
          </p>

          <p>
            Suz
          </p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 19: Less Salt
  if (postId === 'less-salt-more-sparkle') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 19}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">Less Salt, More Sparkle</h1>
        
        <div className="prose max-w-none space-y-4 mb-16">
          <p>
            Let's be honest: salt has been riding high on its reputation as the magic dust that makes food taste better. It's in shakers on your table, sprinkled across Instagram food shots, and dressed up as "Himalayan pink" or "sea harvested artisan crystals." Very fancy marketing, but let's cut through the hype, Salt is Salt. If you crave vitality, not sluggishness, it is time to ask the tough question, what's all that sprinkling doing to your sparkle?
          </p>

          <p>
            <strong>How Much is Enough?</strong><br />
            WHO: &lt;2,000 mg sodium/day<br />
            AHA: Best under 1500 mg/day, max 2,300 mg/day<br />
            WFPB: Skip the shaker, plants will provide all you need.<br />
            The less you shake on, the brighter your health shines.
          </p>

          <p>
            Too much sodium does more than make you thirsty, it raises blood pressure, strains your kidneys, dulls your taste buds, and contributes to stomach cancer risk. Over salting quietly steals your healthspan.
          </p>

          <p>
            So cut back (eliminate added salt) and protect your heart and arteries, give your kidneys a break, retrain your taste buds to savor natural flavors, kick bloating to the curb and add vibrant years to your health span.
          </p>

          <p>
            So let's talk about salt types. Ya know, pink salt, sea salt, Kosher salt, etc. Don't be fooled (for the most part) by marketing sparkle. <strong>Salt is Salt.</strong>
          </p>

          <p>
            <strong>Flavor does not need a shaker.</strong> Use your imagination. Try garlic, onion, ginger, chili flakes. Fresh herbs like basil, cilantro, and mint. Use citrus and vinegars for brightness and nutritional yeast for a savory kick.
          </p>

          <p>
            <strong>NOTE:</strong> Potassium based salt substitutes exist, but they are not for everyone. (Please check with your doctor before going down this path especially if you have kidney issues or take certain meds).
          </p>

          <p>
            <strong>Can you get too little salt?</strong> It's rare. Unless you are an extreme athlete sweating buckets, or under medical restriction, your daily plant based meals cover your sodium needs naturally. True deficiency is uncommon.
          </p>

          <p>
            From The National Library of Medicine, the following are some of the vegetables that cover your sodium needs. Celery, chard, olives, beets, seaweed, peas, dry roasted nuts, chick peas, bran, sweet corn, artichoke, broccoli, radish, sweet potato, kale, brussels sprouts…, I think you get the idea. Just eat a variety.
          </p>

          <p>
            <a 
              href="https://nutritionfacts.org/topics/salt/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-coral hover:text-coral-dark underline"
            >
              nutritionfacts.org/salt
            </a>
          </p>

          <p>
            "Less Salt, More Sparkle", is not just a slogan, it is a lifestyle. Flavor with plants not crystals.
          </p>

          <p>
            <strong>With love, laughter and leafy greens,<br />
            Suz</strong>
          </p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 20: Critical Thinking
  if (postId === 'critical-thinking-secret-weapon-rebellious-aging') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 20}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">Critical Thinking: Your Secret Weapon for Rebellious Aging</h1>
        
        <div className="prose max-w-none space-y-4 mb-16">
          <p>
            Critical Thinking is the rebel's power move. It is the ability to pause, question, and separate truth from noise. So instead of blindly accepting what you are told, ask: What's the evidence? Who benefits if I believe this? That is where the freedom and sparkle live.
          </p>
          
          <p>
            Mel Robbins says, "Your brain is wired to protect you, not propel you. Brene' Brown adds,"Curiosity is a superpower." Together, they remind us that curiosity and courage are the engines of sharp thinking and vibrant living.
          </p>
          
          <p>
            This is all so empowering to me. How about you?
          </p>
          
          <p>
            Here is how I feel critical thinking fuels my pillars.
          </p>
          
          <p>
            <strong>Healthspan</strong><br />
            Don't fall for every shiny health fad. Critical thinking leads you back to what is proven. In my case embracing a WFPB lifestyle, daily movement and sustainable choices. (Again let me add here that I am sharing what works for me, maybe it will work for you. I am not here to arm wrestle you to believe what I believe, I am here to share my story and plant a seed.) The rest is up to you. No judgement here at all. YOU DO YOU! Do your own research, figure it out, do not follow blindly. I am sharing great resources to help you find YOUR own way. Oh, and always be ready for adjustments and change. Science is a moving, runaway train, never to be stopped. Stay alert.
          </p>
          
          <p>
            <strong>Confidence</strong><br />
            Critical thinking is the filter between society's noise and your own truth. That voice whispering, "You're too old. Is it true, or is it cultural conditioning? By questioning limiting beliefs you reclaim your voice and your confidence. Mel Robbins teaches that courage grows through action, but critical thinking tells you what actions matter most. Confidence grows when you can say: "I have examined the options, and I chose what is right for me." Please use critical thinking to cut through limiting beliefs and RECLAIM SELF-TRUST.
          </p>
          
          <p>
            <strong>Unapologetic Style</strong><br />
            Fashion rules say, dress your age. Rebels say, dress your JOY. Critical thinking gives you the freedom to decide what feels authentic and fabulous. At the least, remember to look your very best every day. "Look your best. Feel your best. Be unstoppable. Because showing up beautifully for yourself is the ultimate act of grace".) Even if it is just you and the dog. Know that critical thinking does not make you cynical. It makes you curious. Big difference. And Curiosity keeps you vibrant, alive, and rebelliously radiant.
          </p>
          
          <p>
            <strong>Want to dig deeper?</strong><br />
            The Five Second Rule, Mel Robbins, melrobbins.com<br />
            Dare to Lead, Brene' Brown, brenebrown.com
          </p>
          
          <p>
            Age Boldly, Live Loudly,<br />
            Suz
          </p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 21: Ultra-Processed Trap
  if (postId === 'ultra-processed-trap-eat-whole-live-whole') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 21}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">The Ultra-Processed Trap: Eat Whole, Live Whole</h1>
        
        <div className="prose max-w-none space-y-4 mb-16">
          <p>Did you know that more than HALF of the average American diet comes from ultra-processed food(UPF), (junk food?)</p>

          <p>Here is a solid, evidence-based definition of Ultra-Processed Food from (NOVA) a food classification system often used in nutrition. Ultra- processed foods (UPF's) are industrial formulations made mostly or entirely from substances extracted from foods (oils, fats, sugar, starch proteins, or derived from food constituents (hydrogenated fats, modified starch) or synthesized in laboratories (flavor enhancers, colorings, emulsifiers, preservatives). They contain little or NO intact whole food and are designed to be convenient, hyperpalatable (addictive) and you guessed it, PROFITABLE. As you can see UPF's are not really food, they are chemical formulas. They are created in factories, stuffed with additives, engineered for shelf life and "bliss point" flavor. They are more chemistry than nourishment. Examples: packaged snacks, sodas, instant noodles, frozen dinners, candy bars, flavored yogurts, and processed meats, coffee creamers, alcohol mixers, and many ice cream treats to name a few.</p>

          <p>70-73% of the U.S. food supply is classified as ultra-processed. (Northeastern University Network Science Institute and Food Tank using the same data).</p>

          <p>UPF's make up nearly half of all grocery food purchases, and over ⅓ of beverage purchases. (Global Food Research Program).</p>

          <p>Around 58% of staples in U.S. leading supermarkets are ultra processed, which is higher than a comparable measure in Europe.</p>

          <p>Ultra-processed foods equal 55% of U.S. diets. Kids? 62% (CDC). Here is the kicker: processed food plus animal products equal ZERO FIBER. Fiber is only found in plants and it's your guts best friend.</p>

          <p>Even at home, UPF's are on the rise. Now making up 54% of calories of food consumed at home, while minimally processed foods are steadily declining (Johns Hopkins Public Health).</p>

          <p>While not identical, processed foods and many animal products share traits that work against our health.</p>

          <p>They are high in saturated fat.</p>

          <p>Overly processed.</p>

          <p>Loaded with preservatives and salt.</p>

          <p>Diluted nutrient value.</p>

          <p>Fiber Free</p>

          <p>Both animal products and processed foods completely lack fiber. Fiber is only found in plants and it is essential for gut health, satiety, stable blood sugar and lowering cholesterol.</p>

          <p>Your body is NOT CRAVING additives or flavor enhancers. No it is not. It is asking for Protein from beans, lentils and soy. It loves omega-3 fatty acids (flax, chia and walnuts) to quiet inflammation. Antioxidants from colorful fruits and veggies to fight oxidative stress. Fiber is necessary for gut health and microbiome balance. Read Fiber Fueled by Dr Will Bulsiewicz. theplantfedgut.com. In addition your body needs micronutrients like magnesium, zinc, calcium and vitamins that whole foods deliver naturally.</p>

          <p>Ultra-processed foods often come fortified but that is like "taping the roof back on after a storm. Whole foods provide the full  package your body needs, wants and recognizes and knows how to use.</p>

          <p>Why do processed foods pack on the pounds? You have heard it before: "Calories are calories." Except they are not. A groundbreaking NIH trial (2019) gave participants diets matched for calories, sugar, fat, and fiber. When eating ultraprocessed foods, participants ate 500 more calories per day and gained weight. On unprocessed diets, they lost weight without even trying. Because processed foods are engineered to be hyper-palatable, and easy to overeat, they bypass satiety signals, leaving you hungry for more. On the other hand, whole foods due to the fiber content take longer to chew, digest more slowly and leave you satisfied.</p>

          <p>With processed foods your brain connection is hijacked by Flavor Labs. It is not just your waistline, UPF's target your brain's reward system, lighting up dopamine receptors much like addictive substances are known to do.</p>

          <p>Here at Rebellious Aging we do not just want to live longer, we want to SPARKLE LONGER. Escaping the ultra-processed trap is about reclaiming energy, confidence, and healthspan. It is about eating in a way that helps us move, laugh, and thrive into our 70's, 80's and beyond.</p>

          <p>So my dear Rebel, I suggest  you shop the perimeter of the grocery store (fruits, veggies, grains and legumes). Cook at home, even simple meals can outshine packaged ones.</p>

          <p>Swap an apple for a granola bar, hummus instead of ranch dip, oats instead of a sugary cereal.</p>

          <p>Best to eat whole foods, foods with ingredients you recognize, and remember to read labels.</p>

          <p>Ultra-processed foods may be convenient, but they steal from your health. Whole foods on the other hand give back with energy, and resilience.</p>

          <p>Read, "Ultra-Processed People" by Chris Van Tulleken</p>

          <p>So step out of the trap, Eat Whole, Live Whole.</p>

          <p>With love, laughter and leafy greens,<br />
          Suz</p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

// Blog 22: If Not Now, When?
  if (postId === 'if-not-now-when-new-beginnings') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 22}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">If Not Now, When?</h1>
        
        <div className="prose max-w-none space-y-4 mb-16">
          <p>Have you ever scrolled through your feed, half distracted, when a phrase suddenly leaps out and grabs you by the collar? That is what happened to me the other day with these four words, "If not now, when?"</p>

          <p>It stopped me cold.</p>

          <p>And then I wondered, how many women are quietly living on autopilot? Autopilot looks safe. Basically you stick with the same foods, the same routines, the same "it is what it is" attitude. You don't rock the boat, you choose not to ruffle the feathers. You accept aches, sluggish mornings, creeping doubts, and an uninspired wardrobe as the way things are.</p>

          <p>But here's the hard truth, autopilot might keep you coasting, and comfortable, and even safe, BUT, it also keeps you stuck.</p>

          <p>In my mind, Rebellious Aging is about refusing to settle for bland, or the "too late for me" story. It is about daring to choose NOW, ME, and an exciting future. (Remember, refuse to let the old lady in).</p>

          <p>Every plant powered meal is a choice for vibrancy tomorrow. Setting boundaries and speaking up builds the muscle of self belief, and choosing color, sparkle and play in how you present yourself shifts your energy and how people see you. This is not about chasing youth. It is about claiming the fullness of life that is still in front of you today.</p>

          <p>One of the greatest lies we tell ourselves is "it is too late." Ya know, too late to change our health, too late to reinvent our style, too late to say NO or YES. But here's the TRUTH. Y'all only ever have one moment to work with. And that moment is NOW. I challenge you to seize this moment, with eyes wide open and begin to make your dreams a reality. One small change at a time.</p>

          <p>Let's explore some ideas. What is one thing you've been putting off because you think it is too late? What tiny step can you take today to improve your health, confidence or style or any dream you are dreaming. (Please email me and let's discuss the possibilities. suz@rebelwithsuz.com).</p>

          <p>WHAT WOULD SHIFT if you stopped waiting and started choosing?</p>

          <p>Motivation is not waiting for the perfect moment, it is created in the moment. By choosing a "spark" today, you create more fuel for tomorrow.</p>

          <p>Check out these resources to help you begin your new adventure.</p>

          <p>BJ Fogg's, Behavior Model (Stanford) behaviormodel.org Motivation + ability + a trigger =action.</p>

          <p>James Clear, Atomic Habits, jamesclear.com  Motivation follows action. Even tiny rebellious steps.</p>

          <p>Deci & Ryan 1985-present. True motivation flourishes when we feel autonomy (choice), competence (capability), and connection (community) selfdeterminationtheory.org.</p>

          <p>Motivation through the Rebellious Aging Lens.</p>

          <p>Intrinsic motion is doing something because it feels good, meaningful or aligns with who you are. For example choosing plants because they give you energy to sparkle.</p>

          <p>Extrinsic motion is doing something for an outside reward or to avoid pain. For example eating well because your doctor said you should.</p>

          <p>Rebellious Aging leans into intrinsic motivation. You know what I mean, right? Finding joy, self expression, and personal rebellion in health, confidence and style. This is what lasts.</p>

          <p>Motivation is the bridge between thinking about change and actually living it. The autopilot way of life feels safe because it requires no motivation but also delivers no sparkle.</p>

          <p>So therefore: Motivation = The Spark Behind Action.</p>

          <p>So ask yourself, "if not now, when?"</p>

          <p>Rebels do not wait for the perfect moment, they create it. They choose plants over autopilot, boldness over complacency, sparkle over safe.</p>

          <p>So take this as your nudge, your reminder, your invitation. Because rebels do not coast. They choose, they sparkle and they thrive.</p>

          <p><strong>NOW IS YOUR MOMENT.</strong></p>

          <p>With Love Laughter and Leafy Greens,<br />
          Suz</p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 23: Optimal Aging
  if (postId === 'optimal-aging-colleen-murphy') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 23}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">Optimal Aging (As seen through the lens of a conversation between journalist Paul Von Zielbauer and Princeton Professor and author Colleen Murphy)</h1>
        
        <div className="prose max-w-none space-y-4 mb-16">
          <p>If you have been following me for a while you know I refuse to age quietly. For me aging is intentional, aging is active, and if you let 'it', downright sparkly. Recently I stumbled on a conversation between journalist Paul Von Zielbauer and Colleen Murphy, author of How We Age. (How We Age on Amazon | Amazon.com® Official Site) Their exchange distilled the science of aging into practical, surprising and sometimes, myth busting tips. To me it felt like a roadmap for rebels who refuse to coast into their later years on autopilot.</p>
          
          <p>The conversation centers around non-negotiables and debunking food myths and concludes with potential new tools. Like EXERCISE IS NOT OPTIONAL, SLEEP is YOUR OVERNIGHT CLEANING CREW and FOOD FADS, MYTHS and TRUTHS and WHAT'S ON THE HORIZON.</p>
          
          <p><strong>Exercise is NOT optional.</strong> It is the #1 longevity tool we have. Colleen Murphy emphasizes strength training. Ya know, push, pull, squat, lift. Muscles do not just move us, they release chemicals that fuel brain health, support mitochondria, and help us stay sharp. Think of every lunge and curl as a deposit in your future vitality bank.</p>
          
          <p><strong>Sleep deprivation doesn't just make us cranky, it DAMAGES THE BRAIN.</strong> During deep sleep, your brain literally takes out the trash, flushing toxins that build up during the day. Most of us need 7-8 hours of sleep (sorry, four hour sleepers, you are rare unicorns). Think of sleep as your overnight spa treatment for both body and brain.</p>
          
          <p><strong>Caloric Restriction (CR).</strong> In lab animals, eating less extends lifespan. But in humans? Murphy calls it "a terrible way to live".</p>
          
          <p><strong>Intermittent Fasting (IF).</strong> Trendy, yes. Effective? The jury is out. While some see benefits, others risk muscle loss. Monitoring what you eat, choosing whole, fiber rich foods, may work just as well without side effects.</p>
          
          <p>How about this: Replace the word Eat with the word NOURISH and see how your perspective changes.</p>
          
          <p>We all want to stay sharp, but Murphy points out that brain games often only make you better at brain games. Doing crosswords helps with crosswords, not necessarily memory. Instead movement, quality sleep and social connection are more powerful protectors against cognitive decline. So don't just exercise your brain, it's much better to exercise your whole body.</p>
          
          <p><strong>Here are some things you might be interested in as the science of aging is buzzing with potential new tools.</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>GLP-1 drugs, like Ozempic, which are used for diabetes and weight loss, may carry aging benefits also.</li>
            <li>Metformin, the TAME trial is studying the common diabetes drug for its anti aging potential.</li>
            <li>Rapamycin ('Raplogs') may mimic the effects of caloric restriction without the misery.</li>
          </ul>
          
          <p>Instead of chasing pills and potions, we can lean on what Dr. Esselstyn calls the body's "remarkable healing capacity" when fueled by plants. Dr. T. Colin Campbell's research confirms it: whole, plant based foods, regular movement, and restorative sleep do more to protect and energize us than any chemical fix. These simple, powerful and sustainable choices are the real horizon of healthy aging.</p>
          
          <p><strong>Rebel's Guide to Starting Today</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Add one strength workout per week</li>
            <li>Protect your sleep, treat it like a non-negotiable meeting.</li>
            <li>Eat foods that come from nature, not a factory.</li>
            <li>Stay curious, social, grateful, and joyful.</li>
          </ul>
          
          <p>Colleen Murphy's research confirms what many of us rebels already sense: aging well is not about magic pills or endless deprivation. It is more about AWARENESS, INTENTIONAL daily choices, movement, rest, nourishment, joy and gratefulness. Aging is inevitable.</p>
          
          <p><strong>So let's not just age in place. Let's Rebel, Reign and Sparkle.</strong></p>
          
          <p>You can access the full article here: <a href="https://agingwithstrength.substack.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">agingwithstrength@substack.com</a></p>
          
          <p>What is one "healthspan choice" you will commit to this week, more movement, better sleep, or maybe swapping out a processed snack for something whole and nutritious and delicious.</p>
          
          <p><strong>Checkout:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="https://dresselstyn.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">dresselstyn.com</a></li>
            <li><a href="https://nutritionstudies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">nutritionstudies.org</a></li>
            <li><a href="https://pcrm.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">pcrm.org</a></li>
            <li><a href="https://plantstrong.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">plantstrong.com</a></li>
          </ul>
          
          <p><strong>With Love, Laughter, and leafy greens</strong><br />Suz</p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Blog 24: Calorie Density
  if (postId === 'calorie-density-secret-seals-deal') {
    return (
      <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
        
        <div className="mb-4">
          <span className="text-primary font-bold text-lg">Blog #{currentPost?.blogNumber || 25}</span>
        </div>
        <h1 className="text-4xl font-bold mb-8">Calorie Density: The Secret That Seals the Deal</h1>
        
        <div className="space-y-4 mb-16">
          <p>
            Have you ever felt like managing your weight is a constant uphill climb? Counting calories, measuring portions, avoiding carbs, dodging fats, eliminating sugar. It can be exhausting. The truth is, when you choose the right foods, your body naturally regulates your weight. Good news, right? No more obsessing. No more deprivation. The key is something many people have never heard of: calorie density. What is CALORIE DENSITY, you may ask? Calorie density is simply the number of calories in a given weight of food, usually measured per pound.
          </p>
          
          <p>
            Foods with a lower calorie density provide fewer calories for the same volume. This means you can eat until you are satisfied without overeating. (Here lies the beauty of eating plants).
          </p>
          
          <p>
            On average: Vegetables average 100 calories/ lb.<br />
            Fruits average about 300 calories/lb.<br />
            Whole grains & legumes 400-600 calories/lb.<br />
            Animal products and processed 1,200-4,000
          </p>
          
          <div className="my-8 flex justify-center">
            <img 
              src={calorieDensityChart} 
              alt="Calorie density comparison chart showing vegetables at 100 calories per pound, fruits at 300 calories per pound, whole grains at 400-600 calories per pound, and animal products and processed foods at 1,200-4,000 calories per pound"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
          
          <p>
            Therefore, the higher the calorie density, the easier it is to take in excess calories long before your body signals fullness.
          </p>
          
          <p>
            Whole, plant based foods are naturally low in calorie density. Fill your plate with vegetables and fruits, whole grains, beans, nuts and seeds, and you will feel full before you can overeat.
          </p>
          
          <p>
            Dr. Caldwell Esselstyn who pioneered reversing heart disease with a WFPB diet, often reminds us that: "You can eat all the vegetables, legumes, whole grains and fruits you want until you are comfortably full. There is no calorie counting, no portion control, no hunger."
          </p>
          
          <p>
            Dr. T. Colin Campbell, author of the "China Study", showed through decades of research that populations eating mostly plants had lower rates of obesity and chronic disease. Why? Because their food patterns were low in calorie density and high in nutrition.
          </p>
          
          <p>
            Plants include 2 secret weapons missed from meat and processed foods, fiber and water. Fiber slows digestion, stabilizes blood sugar, and sends you the "I am full signal". Water adds bulk without calories, which also aids in digestion. Together water and fiber act like nature's built in portion control.
          </p>
          
          <p>
            The power of calorie control is definitely not about restriction, no, it is about freedom. Imagine enjoying big, colorful plates of food, feeling full, and watching your weight settle naturally. That is the JOY of a WFPB lifestyle. You do not have to eat less. You just have to eat differently, PLANTS FOR THE WIN.
          </p>
          
          <p>
            Your body will thank you for making the switch, with energy, vitality, and balance that fad diets could never deliver or sustain. Your body finds balance, and you get to enjoy food with freedom.
          </p>
          
          <p className="font-semibold">
            With Love Laughter and Leafy Greens,<br />
            Suz
          </p>
        </div>

        {nextPost && (
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground mb-2">Next Article</p>
            <Link to={`/blog/${nextPost.id}`} className="text-xl hover:underline">
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Default/404
  return (
    <div className="min-h-screen bg-background px-4 py-12 max-w-3xl mx-auto">
      <Link to="/blog" className="text-sm hover:underline mb-8 inline-block">← Back to Blog</Link>
      <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
      <p>The blog post you're looking for doesn't exist.</p>
    </div>
  );
};

export default BlogPost;
