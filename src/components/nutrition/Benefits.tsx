
import React from 'react';

const Benefits = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Benefits of Whole-Food, Plant-Based Nutrition</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-3">Heart Health</h3>
          <p className="text-gray-700">
            Studies show WFPB diets can prevent and even reverse coronary artery disease by reducing cholesterol, blood pressure, and inflammation while improving blood vessel function.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-3">Diabetes Management</h3>
          <p className="text-gray-700">
            A WFPB diet improves insulin sensitivity, lowers blood sugar levels, and can reduce or eliminate the need for diabetes medication in many people with type 2 diabetes.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-3">Weight Management</h3>
          <p className="text-gray-700">
            High in fiber and naturally lower in calories, WFPB eating supports healthy weight loss and maintenance without calorie counting or portion control.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-3">Cancer Prevention</h3>
          <p className="text-gray-700">
            Plant foods are rich in antioxidants and phytonutrients that help protect cells from damage that can lead to cancer, while avoiding processed meats and other animal products linked to increased cancer risk.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-3">Cognitive Function</h3>
          <p className="text-gray-700">
            The antioxidants, healthy fats, and nutrients in plant foods support brain health and may help reduce the risk of cognitive decline and dementia.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-3">Gut Health</h3>
          <p className="text-gray-700">
            High-fiber plant foods promote a healthy microbiome, supporting your immune system, hormone balance, and mental health through the gut-brain connection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
