
import React from 'react';

const Supplements = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Supplements</h2>
      
      <div className="prose max-w-none">
        <p className="mb-6">
          While a whole-food, plant-based diet provides most of the nutrients your body needs, there are a few supplements that may be beneficial, especially as you age. Always consult with a healthcare professional before starting any supplement regimen.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal">
            <h3 className="text-xl font-bold mb-2">Vitamin B12</h3>
            <p className="text-gray-700 mb-3">
              <strong>Recommended for:</strong> All people following a plant-based diet
            </p>
            <p className="text-gray-700">
              B12 is essential for nerve function and DNA synthesis. It's primarily found in animal products, making supplementation necessary for those on a plant-based diet.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-teal">
            <h3 className="text-xl font-bold mb-2">Vitamin D3</h3>
            <p className="text-gray-700 mb-3">
              <strong>Recommended for:</strong> Those with limited sun exposure, older adults, or those with darker skin
            </p>
            <p className="text-gray-700">
              Essential for bone health, immune function, and mood regulation. While your body produces vitamin D from sun exposure, many factors can limit this natural production.
            </p>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-4">Quality Matters</h3>
        <p className="mb-6">
          When choosing supplements, look for:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Third-party testing (USP, NSF, or ConsumerLab verification)</li>
          <li>Clean ingredient lists without unnecessary fillers or additives</li>
          <li>Appropriate dosages based on your age, sex, and health status</li>
          <li>Plant-derived sources when possible</li>
        </ul>
        
        <div className="bg-teal/10 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">Important Note</h3>
          <p className="text-gray-700">
            Supplements should complement, not replace, a whole-food, plant-based diet. Regular blood testing can help identify specific deficiencies that may require targeted supplementation. Always consult with a healthcare provider knowledgeable about plant-based nutrition before starting any supplement regimen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Supplements;
