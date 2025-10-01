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
