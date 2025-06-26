
import React from 'react';

const Foods = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Foods to Eat & Avoid</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-teal mb-4">Foods to Embrace</h3>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-teal mr-2">✓</span>
                <div>
                  <strong>Vegetables:</strong> All varieties, especially leafy greens (kale, spinach, collards), cruciferous vegetables (broccoli, cauliflower), root vegetables (carrots, beets, sweet potatoes)
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">✓</span>
                <div>
                  <strong>Fruits:</strong> All varieties, particularly berries, apples, oranges, pears, and other high-fiber fruits
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">✓</span>
                <div>
                  <strong>Whole Grains:</strong> Brown rice, quinoa, oats, barley, whole grain pasta, whole grain bread (without added oils)
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">✓</span>
                <div>
                  <strong>Legumes:</strong> All beans, lentils, peas, and bean-based products (tofu, tempeh, without added oils)
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">✓</span>
                <div>
                  <strong>Mushrooms:</strong> All varieties, excellent meat substitute and immune boosters
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">✓</span>
                <div>
                  <strong>Herbs & Spices:</strong> All varieties, use liberally for flavor
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">✓</span>
                <div>
                  <strong>Seeds (in moderation):</strong> Flax, chia, hemp (particularly for those without heart disease)
                </div>
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-bold text-teal mb-3">Dr. Esselstyn's "Greens Jingle"</h4>
              <p className="text-gray-700 mb-3">
                Dr. Esselstyn is well known for his "Greens Jingle" that he uses to emphasize the importance of incorporating a variety of leafy greens into one's diet. In the jingle he mentions bok choy, collard greens, mustard greens, turnip greens, napa cabbage, Brussels sprouts, broccoli, cauliflower, cilantro, parsley, and asparagus.
              </p>
              <p className="text-gray-700">
                These 11 vegetables are rich in nitrates which the body converts into nitric oxide—a compound that helps dilate blood vessels to keep things moving and improve cardiovascular health.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-coral mb-4">Foods to Avoid</h3>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-coral mr-2">✗</span>
                <div>
                  <strong>All Animal Products:</strong> Meat, poultry, fish, dairy (milk, cheese, yogurt, butter), eggs
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-coral mr-2">✗</span>
                <div>
                  <strong>Oils:</strong> All extracted oils, including olive, coconut, canola, and other vegetable oils
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-coral mr-2">✗</span>
                <div>
                  <strong>Processed Foods:</strong> Packaged snacks, cookies, crackers, chips, most bread products
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-coral mr-2">✗</span>
                <div>
                  <strong>Refined Grains:</strong> White flour products, white rice, refined pasta
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-coral mr-2">✗</span>
                <div>
                  <strong>Added Sugars:</strong> Table sugar, high-fructose corn syrup, and products containing them
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-coral mr-2">✗</span>
                <div>
                  <strong>Nuts (for those with heart disease):</strong> All nuts, including walnuts, almonds, cashews
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-coral mr-2">✗</span>
                <div>
                  <strong>Avocados (for those with heart disease):</strong> Due to high fat content
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foods;
