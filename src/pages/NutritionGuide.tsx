import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '@/components/seo/Seo';
import { Button } from '@/components/ui/button';
import { getSeoRouteByPath } from '@/data/seoRoutes';

const HERO_DESCRIPTION =
  'What you put on your plate can change how you feel in your body, how clearly you think, and how boldly you live in every decade. A whole-food, plant-based lifestyle isn’t about punishment or perfection. It’s about giving your future self a fighting chance — with real food, from real plants, that loves you back.';

const ABUNDANCE_LIST = [
  {
    title: '🌾 Whole & Ancient Grains',
    body:
      'Brown rice, oats, quinoa, millet, barley, farro, wheat berries, wild rice, and more. They deliver fiber, steady energy, and minerals for bowls, soups, salads, and breakfasts.',
  },
  {
    title: '🫘 Beans, Peas & Lentils',
    body:
      'Black beans, chickpeas, pinto beans, lentils, split peas, and edamame are protein + fiber powerhouses. They keep blood sugar balanced and guts happy.',
  },
  {
    title: '🥬 Greens & Other Vegetables',
    body:
      'Kale, collards, spinach, lettuces, broccoli, carrots, onions, squash, mushrooms, peppers—fresh or frozen. Think of them as your living multivitamin.',
  },
  {
    title: '🍓 Fruit (Fresh or Frozen)',
    body:
      'Berries, apples, oranges, melons, grapes, mango—sweetness with fiber, vitamins, and antioxidants, without the rollercoaster of juice or soda.',
  },
  {
    title: '🌰 Omega-3 Seeds',
    body: 'Chia and ground flaxseed love your brain and heart. Sprinkle them on oats, smoothies, salads, or soups.',
  },
  {
    title: '💧 Water & Spices',
    body: 'Filtered water keeps everything humming while herbs/spices (garlic, turmeric, ginger, cinnamon) add flavor and extra benefits.',
  },
];

const SPARKLE_EXTRAS = [
  '✨ Nuts & nut butters',
  '✨ Seeds beyond chia/flax (sunflower, pumpkin, sesame)',
  '✨ Avocado and coconut',
  '✨ Dried fruit (especially sweetened)',
  '✨ Added sweeteners like maple or date syrup',
  '✨ Caffeinated beverages (keep them simple)',
];

const CROWD_OUT = [
  '🚫 Meat, poultry, fish, seafood, and eggs',
  '🚫 Dairy (milk, cheese, butter, cream, yogurt)',
  '🚫 Oils and added fats—even “fancy” olive or coconut',
  '🚫 Refined sugars and grains (white sugar, white flour, white rice)',
  '🚫 Protein isolates & ultra-processed “health” foods',
  '🚫 Sugary drinks and juices',
];

const LABEL_TIPS = [
  '✅ Short ingredient list (shorter is usually better).',
  '✅ Ingredients you recognize as food—oats, almonds, dates.',
  '✅ Higher fiber, lower sodium, lower added sugar.',
  '⚠️ If it looks like it came from a plant, great. If it looks like it came from a factory, pause.',
];

const FIRST_STEPS = [
  {
    title: '1️⃣ Upgrade your breakfast',
    body: 'Swap sugary cereal or pastries for oatmeal with fruit and ground flax, or a veggie-loaded tofu scramble.',
  },
  {
    title: '2️⃣ Make one plant-strong meal a day',
    body: 'Think bean chili, lentil soup, Buddha bowl, or a giant salad with grains and legumes.',
  },
  {
    title: '3️⃣ Choose one “No” food to crowd out',
    body: 'Maybe soda, processed meat, or nightly ice cream. Replace it with a WFPB option you enjoy.',
  },
];

const CTA_LINKS = [
  { href: 'https://rebelwithsuz.com/welcome-letter', label: '💌 Read the Welcome Letter' },
  { href: 'https://www.facebook.com/groups/1497629461551095/', label: '👭 Join the Rebellious Aging Facebook Group' },
  { href: 'https://rebelwithsuz.com/contact', label: '📞 Reach out to Suz' },
];

const NutritionGuide = () => {
  const jumpToPlate = React.useCallback(() => {
    const section = document.getElementById('rebel-plate');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const seoConfig = getSeoRouteByPath('/pillars/health/nutrition-guide');

  return (
    <div className="bg-background">
      {seoConfig && (
        <Seo
          title={seoConfig.title}
          description={seoConfig.description}
          canonicalPath={seoConfig.path}
        />
      )}

      <section className="bg-gradient-to-b from-teal/20 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <p className="text-sm uppercase tracking-[0.2em] text-teal">🌿 Whole-Food, Plant-Based Guide</p>
            <h1 className="text-4xl md:text-5xl font-bold">Fuel for Your Rebellious Aging Journey</h1>
            <p className="text-lg text-gray-700">{HERO_DESCRIPTION}</p>
            <p className="text-sm text-gray-500">
              Prefer the overview? Visit the{' '}
              <Link to="/nutrition" className="text-teal font-semibold hover:underline">
                Nutrition page
              </Link>{' '}
              or head back to the{' '}
              <Link to="/pillars/health" className="text-teal font-semibold hover:underline">
                Health pillar
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <Button className="min-w-[200px]" onClick={jumpToPlate}>
                🍽️ Jump to What to Eat
              </Button>
              <Button asChild variant="secondary" className="min-w-[220px]">
                <a href="https://www.nutritionstudies.org/" target="_blank" rel="noopener noreferrer" className="text-center">
                  🔗 Visit NutritionStudies.org
                </a>
              </Button>
            </div>
            <div className="mt-8 flex justify-center">
              <img
                src="https://cdn.nutritionstudies.org/wp-content/themes/nutritionstudies/public/images/cns-logo@2x.f3f27d.png"
                alt="Center for Nutrition Studies logo"
                className="h-16 w-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-16">
        <section className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">📘 What Is a Whole-Food, Plant-Based Lifestyle?</h2>
          <p className="text-lg text-gray-700">
            When I say whole-food, plant-based (WFPB), I mean mostly foods that look like they came from the earth, not a factory. Think whole and
            ancient grains; vegetables (especially greens); fruits; beans, peas, and lentils; plus nuts and seeds.
          </p>
          <p className="text-lg text-gray-700">
            “Whole-food” means minimally processed—steel-cut oats instead of sugary cereal, black beans instead of mystery meat crumbles, brown rice instead of white.
            “Plant-based” means plants are the star, not a side decoration.
          </p>
          <p className="text-lg text-gray-700">
            This isn’t a 30-day challenge. It’s a lifestyle that quietly supports your Health pillar so you can keep showing up with confidence, style,
            and gratitude for many years to come.
          </p>
        </section>

        <section className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">💪 Why It Matters Even More as We Age</h2>
          <p className="text-lg text-gray-700">
            As we move through our 50s, 60s, 70s, and beyond, the stakes get higher—and the good news is our bodies are still listening. Shifting toward
            WFPB eating can lower risk of chronic disease, support healthier blood pressure and cholesterol, stabilize weight and energy without crash
            diets, nourish brain/gut/immune systems, and improve quality of life—not just length of life.
          </p>
          <p className="text-lg text-gray-700">
            You’re not chasing a number on a scale. You’re building a body that lets you walk, dance, garden, travel, play with grandkids, and say “yes” to what matters.
          </p>
        </section>

        <section id="rebel-plate" className="max-w-4xl mx-auto space-y-6">
          <div>
            <h2 className="text-3xl font-bold">🥗 Your Rebel Plate: What to Pile On (Eat in Abundance)</h2>
            <p className="text-lg text-gray-700">
              Let’s start with the fun part: what you can enjoy freely and generously. Build most meals from these groups:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ABUNDANCE_LIST.map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <p className="text-xl font-semibold mb-2">{item.title}</p>
                <p className="text-gray-700 text-base leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 font-semibold">
            📝 Rebel rule of thumb: if it looks like it grew from the ground and hasn’t been messed with too much, it probably belongs on your plate.
          </p>
          <div className="bg-teal/10 border border-teal/20 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-4">✨ “Yes, But Gently” Foods</h3>
            <p className="text-gray-700 mb-4">
              Nourishing but calorie-dense foods are your sparkle extras—enjoy them mindfully, especially if weight, blood sugar, or heart health are on your radar.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {SPARKLE_EXTRAS.map((sparkle) => (
                <li key={sparkle}>{sparkle}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold">🚫 What to Crowd Out (Avoid as Much as You Can)</h2>
          <p className="text-lg text-gray-700">
            The standard Western diet is loaded with meat, dairy, refined carbs, oils, and ultra-processed foods. Crowd these out so you can have more of what you truly want:
          </p>
          <ul className="space-y-3 text-gray-700 list-disc pl-6">
            {CROWD_OUT.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-lg text-gray-700">
            You don’t have to be perfect. The more you swap these for whole plant foods, the more your body (and future self) will thank you.
          </p>
        </section>

        <section className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">🧬 A Quick Note on Vitamin B12</h2>
          <p className="text-lg text-gray-700">
            Vitamin B12 is made by microbes, not plants. Modern sanitation removes natural sources, so if you are mostly WFPB, chat with your healthcare provider about a B12 supplement
            that fits your needs. It is a simple, inexpensive way to protect nerves, blood, and brain.
          </p>
        </section>

        <section className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">🔍 How to Read Labels Like a Rebel</h2>
          <p className="text-lg text-gray-700">
            Packaged food happens. When it does, flip it over and ask:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {LABEL_TIPS.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>

        <section className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">✨ Three Simple First Steps</h2>
          <p className="text-lg text-gray-700">You do not have to overhaul everything. Start where you are.</p>
          <div className="space-y-4">
            {FIRST_STEPS.map((step) => (
              <div key={step.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <p className="text-xl font-semibold mb-2">{step.title}</p>
                <p className="text-gray-700 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">🌈 Connecting This to Your Rebellious Aging Journey</h2>
          <p className="text-lg text-gray-700">
            Choosing WFPB living honors your Health pillar, builds Confidence in what you can still do, supports your Style (clothes simply feel better on a well-nourished body),
            and deepens Gratitude for a body that keeps showing up. You are not “too late.” You are right on time.
          </p>
          <div className="bg-coral/10 border border-coral/20 rounded-2xl p-6 space-y-3">
            <p className="text-gray-700">If you want support as you experiment:</p>
            <ul className="space-y-2 list-disc pl-6 text-teal font-medium">
              {CTA_LINKS.map((cta) => (
                <li key={cta.href}>
                  <a href={cta.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {cta.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 font-semibold">✨ Sparkle on, Suz</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NutritionGuide;
