import React from 'react';
import { useParams, Link } from 'react-router-dom';

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
        
        <h1 className="text-4xl font-bold mb-8">The Rebellious Guide (What is on Your Plate)</h1>
        
        <div className="space-y-4 mb-16">
          <p>What's on your plate is more than just food—it's a declaration of how you choose to live.</p>
          <p>Every meal is an opportunity to rebel against autopilot living and choose vibrant health.</p>
          <p>This guide will help you understand the power of plant-based nutrition and how it fuels a rebellious, thriving life.</p>
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
        
        <h1 className="text-4xl font-bold mb-8">A Quick Introduction and Guide to a Whole-Food Plant-Based (WFPB) Lifestyle</h1>
        
        <div className="space-y-4 mb-16">
          <p>Ready to transform your health? A whole-food plant-based lifestyle isn't a diet—it's a way of living that prioritizes nutrient-dense, unprocessed plant foods.</p>
          <p>This guide will walk you through the basics of WFPB eating and how to get started on your journey to vibrant health.</p>
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
        
        <h1 className="text-4xl font-bold mb-8">A Love Letter to My Closet</h1>
        
        <div className="space-y-4 mb-16">
          <p>Dear Closet,</p>
          <p>You've been my silent witness through seasons of change, holding more than just clothes—you hold stories, transformations, and the courage to show up as myself.</p>
          <p>You've taught me that what we wear isn't superficial—it's how we honor ourselves, express our truth, and step into each day with intention.</p>
          <p>Thank you for reminding me that style is rebellion, self-expression is power, and authenticity never goes out of fashion.</p>
          <p>With love and sparkle,<br />Suz</p>
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
        
        <h1 className="text-4xl font-bold mb-8">Gratitude and the Rebellious Soul</h1>
        
        <div className="space-y-4 mb-16">
          <p>Gratitude isn't passive—it's a rebellious act in a world that profits from dissatisfaction.</p>
          <p>When you choose to be grateful for your body, your health, your journey, you refuse to buy into the narrative that you're not enough.</p>
          <p>Rebels know that gratitude and ambition can coexist. You can love where you are and still reach for more.</p>
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
        
        <h1 className="text-4xl font-bold mb-8">The Art of Thriving: What an Aging Expert Wants You to Know</h1>
        
        <div className="space-y-4 mb-16">
          <p>Aging isn't something that happens to you—it's something you actively participate in.</p>
          <p>The experts agree: what you eat, how you move, and how you think about yourself determines whether you age or thrive.</p>
          <p>The rebellious choice? Thrive. Always thrive.</p>
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
        
        <h1 className="text-4xl font-bold mb-8">What a Shop Window Taught Me About Aging Gracefully</h1>
        
        <div className="space-y-4 mb-16">
          <p>I caught my reflection in a shop window the other day and almost didn't recognize myself.</p>
          <p>Not because I looked older—but because I looked more alive than I had in years.</p>
          <p>That's what happens when you stop fighting aging and start celebrating it. You become radiant.</p>
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
        
        <h1 className="text-4xl font-bold mb-8">It's Time to Set the Record Straight Regarding a Whole Food Plant Based Lifestyle</h1>
        
        <div className="space-y-4 mb-16">
          <p>Let's clear up the myths: A whole-food plant-based lifestyle isn't restrictive, boring, or extreme.</p>
          <p>It's abundant, delicious, and backed by science.</p>
          <p>It's time to stop listening to the noise and start trusting the evidence—and your body.</p>
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
        
        <h1 className="text-4xl font-bold mb-8">Shhh…That Voice in Your Head is Not the Boss of You</h1>
        
        <div className="space-y-4 mb-16">
          <p>That voice that says "I'm too old," "It's too late," "I can't"? It's lying.</p>
          <p>Limiting beliefs are just stories you've repeated so many times you started believing them.</p>
          <p>Time to rewrite the script. You're not too anything—you're exactly ready.</p>
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
        
        <h1 className="text-4xl font-bold mb-8">What is Behind Limiting Beliefs?</h1>
        
        <div className="space-y-4 mb-16">
          <p>Behind every limiting belief is fear—fear of failure, judgment, or the unknown.</p>
          <p>But behind that fear? A rebel waiting to break free.</p>
          <p>Understanding where your beliefs come from is the first step to dismantling them.</p>
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
        
        <h1 className="text-4xl font-bold mb-8">Wearing Who You Are: A Style Rebellion</h1>
        
        <div className="space-y-4 mb-16">
          <p>Your style is your statement. It's how you show up in the world before you say a word.</p>
          <p>Wearing who you are—unapologetically—is an act of rebellion against conformity and invisibility.</p>
          <p>Dress for yourself. Dress for joy. Dress to sparkle.</p>
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
        
        <h1 className="text-4xl font-bold mb-8">The Bold, Sassy Truth About a Whole Food Plant Based Lifestyle</h1>
        
        <div className="space-y-4 mb-16">
          <p>Here's the truth nobody wants to say out loud: what you eat matters more than almost anything else.</p>
          <p>A whole-food plant-based lifestyle isn't trendy—it's transformative.</p>
          <p>And if you're ready to feel bold, sassy, and unstoppable? Plants are your power source.</p>
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
        
        <h1 className="text-4xl font-bold mb-8">The New Classic: Timeless Style with a Rebellious Twist</h1>
        
        <div className="space-y-4 mb-16">
          <p>Classic doesn't have to mean boring. Timeless doesn't mean invisible.</p>
          <p>The new classic is about combining elegance with edge, tradition with a twist.</p>
          <p>It's wearing what makes you feel like yourself—confidently, unapologetically, and with a little sparkle.</p>
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
        
        <h1 className="text-4xl font-bold mb-8">WFPB Lifestyle Book Recommendations</h1>
        
        <div className="space-y-4 mb-16">
          <p>Knowledge is power, and these books are your roadmap to a thriving plant-based life.</p>
          <p>From the science behind nutrition to practical meal planning, these reads will inspire and equip you for the journey ahead.</p>
          <p>Ready to dive in? Your next favorite book is waiting.</p>
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
        
        <h1 className="text-4xl font-bold mb-8">Are Boundaries a Love Language of Sorts?</h1>
        
        <div className="space-y-4 mb-16">
          <p>Setting boundaries isn't selfish—it's self-respect.</p>
          <p>When you protect your time, energy, and values, you're saying "I matter" loud and clear.</p>
          <p>Boundaries are how you love yourself well. And that, rebels, is the ultimate act of care.</p>
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
        
        <h1 className="text-4xl font-bold mb-8">Ditch the Sweet Stuff</h1>
        
        <div className="space-y-4 mb-16">
          <p>Sugar is everywhere—and it's sabotaging your health, energy, and longevity.</p>
          <p>Ditching refined sugar isn't about deprivation. It's about reclaiming your vitality.</p>
          <p>Your body—and your future self—will thank you.</p>
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
        
        <h1 className="text-4xl font-bold mb-8">Eat the Olive, Not the Oil</h1>
        
        <div className="space-y-4 mb-16">
          <p>Olive oil might be trendy, but olives themselves are where the magic is.</p>
          <p>Whole foods deliver fiber, nutrients, and satisfaction that oils simply can't match.</p>
          <p>Skip the bottle. Grab the whole food. Your body knows the difference.</p>
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
        
        <h1 className="text-4xl font-bold mb-8">Less Salt, More Sparkle</h1>
        
        <div className="space-y-4 mb-16">
          <p>Too much salt dulls your taste buds—and your health.</p>
          <p>But cutting back doesn't mean bland food. It means discovering the natural flavors you've been missing.</p>
          <p>Less salt, more life. More sparkle.</p>
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
        
        <h1 className="text-4xl font-bold mb-8">Critical Thinking: Your Secret Weapon for Rebellious Aging</h1>
        
        <div className="space-y-4 mb-16">
          <p>The wellness industry is full of noise, trends, and questionable advice.</p>
          <p>Your secret weapon? Critical thinking.</p>
          <p>Question everything. Demand evidence. Trust science. That's how rebels stay sharp.</p>
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
        
        <h1 className="text-4xl font-bold mb-8">The Ultra-Processed Trap: Eat Whole, Live Whole</h1>
        
        <div className="space-y-4 mb-16">
          <p>Ultra-processed foods are designed to be addictive—and they're stealing your health.</p>
          <p>The antidote? Whole foods. Real ingredients. Meals that nourish, not just fill.</p>
          <p>Eat whole. Live whole. Thrive.</p>
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

          <p>Check out these resources to help you begin your new adventure.<br />
          BJ Fogg's, Behavior Model (Stanford) behaviormodel.org Motivation + ability + a trigger =action.</p>

          <p>James Clear, Atomic Habits, jamesclear.com  Motivation follows action. Even tiny rebellious steps.</p>

          <p>Deci & Ryan 1985-present. True motivation flourishes when we feel autonomy (choice), competence (capability), and connection (community) selfdeterminationtheory.org.</p>

          <p>Motivation through the Rebellious Aging Lens.<br />
          Intrinsic motion is doing something because it feels good, meaningful or aligns with who you are. For example choosing plants because they give you energy to sparkle.</p>

          <p>Extrinsic motion is doing something for an outside reward or to avoid pain. For example eating well because your doctor said you should.</p>

          <p>Rebellious Aging leans into intrinsic motivation. You know what I mean, right? Finding joy, self expression, and personal rebellion in health, confidence and style. This is what lasts.</p>

          <p>Motivation is the bridge between thinking about change and actually living it. The autopilot way of life feels safe because it requires no motivation but also delivers no sparkle.</p>

          <p>So therefore: # Motivation = The Spark Behind Action.</p>

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
        
        <h1 className="text-4xl font-bold mb-8">Optimal Aging: As Seen Through the Lens of Princeton Professor Colleen Murphy</h1>
        
        <div className="space-y-4 mb-16">
          <p>What does it mean to age optimally? According to leading researchers like Princeton's Dr. Colleen Murphy, it's about cellular health, lifestyle choices, and longevity strategies.</p>
          <p>Science is clear: how you age is largely within your control.</p>
          <p>Optimal aging isn't luck—it's intentional living.</p>
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
