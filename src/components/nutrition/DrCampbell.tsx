
import React from 'react';

const DrCampbell = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Dr. T. Colin Campbell, PhD</h2>
      
      <div className="prose max-w-none space-y-6">
        <p className="text-lg leading-relaxed">
          Dr. T. Colin Campbell, PhD, Cornell University, Professor Emeritus of Nutritional Biochemistry and co-author of The China Study. He is a biochemist who specializes in the effect of nutrition on long-term health. He is well known for The China Study, the largest study of diet and health ever conducted. In his work he reveals the power of a WFPB diet to prevent and even reverse chronic disease. A truth that inspires my own journey and fuels my passion for sharing this lifestyle.
        </p>
        
        <div className="bg-teal/10 p-6 rounded-lg border-l-4 border-teal">
          <blockquote className="text-lg italic leading-relaxed">
            "The human body is a highly intelligent force of Nature. It will take care of itself if you provide the necessary resources and tend to its external environment."
          </blockquote>
          <cite className="block text-right mt-4 font-medium">— T. Colin Campbell, PhD, The Future of Nutrition</cite>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-4">The 8 Principles of Dr. Campbell's Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal">
              <p className="text-gray-700">
                <strong>1.</strong> Nutrition represents the combined activities of countless food substances, not individual nutrients.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal">
              <p className="text-gray-700">
                <strong>2.</strong> Nutrients work together. The whole is greater than the sum of its parts.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal">
              <p className="text-gray-700">
                <strong>3.</strong> Good nutrition creates health in all areas of our existence.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal">
              <p className="text-gray-700">
                <strong>4.</strong> A WFPB diet can prevent and even reverse chronic disease.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal">
              <p className="text-gray-700">
                <strong>5.</strong> Genes do not determine disease on their own. Nutrition plays a critical role in whether genes are expressed.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal">
              <p className="text-gray-700">
                <strong>6.</strong> Nutrition can control the negative effects of harmful chemicals.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal">
              <p className="text-gray-700">
                <strong>7.</strong> The same diet that prevents disease in its early stages can also halt or reverse it in later stages.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-teal">
              <p className="text-gray-700">
                <strong>8.</strong> Good nutrition supports overall health and well-being, not just disease prevention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrCampbell;
