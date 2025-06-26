
import React from 'react';

const WelcomeLetter = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">💚</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Welcome Letter from Suz
            </h1>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl font-medium text-teal-600">Welcome my dear Rebel,</p>
            
            <p>I am so glad that you are here.</p>
            
            <p>I have created this space to not only welcome you into my world but to share with you what I have learned over the years. I look forward to hearing your stories also, and to encourage and inspire you, to offer support and inspiration and motivation, to send warm hugs if needed, and share and exchange knowledge. Together as "ladies of a certain age" we will march alongside each other pushing back the stigmas of traditional aging. I cannot wait to see what y'all will bring to this party. Remember we are better together.</p>
            
            <p>I hope we can balance the serious and the sassy here. Sass and serious absolutely deserve their own private moment, because together they combine that magical balance that defines Rebellious Aging. The sass gives us permission to have fun, break the rules, and embrace our own personal sparkle. The serious offers comfort, wisdom, facts, learning and encouragement for real life challenges. By making space for both, we are honoring the WHOLE PERSON.</p>
            
            <p>Ok, I will go first.</p>
            
            <p>I have just closed the 83 chapter of my life and I am a few paragraphs into trying out the beginning of my 84 chapter.</p>
            
            <p>Here is what I have learned and what I am passionate about sharing with you regarding aging:</p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The incredible power of plants to nourish our bodies and bring us vibrant health.</li>
              <li>The importance of igniting your confidence, and courage, because you are meant to shine bright.</li>
              <li>The fun and magic of developing your personal style, your signature way of saying to the world, "This is me!"</li>
              <li>The adventure of exploring how to grow older with class and sass, because aging should be anything but boring!</li>
              <li>And through it all, the gift of gratitude, which makes every day brighter.</li>
            </ul>
            
            <p>There is no judgement here, just some wisdom, teaching, laughter, and a merry old time as we smash society's tired image of "old age" to pieces.</p>
            
            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
              <p className="font-semibold text-teal-800 mb-2">A Special Note:</p>
              <p className="text-teal-700">I understand that not everyone is blessed with perfect health and wealth as they age, and that each of us faces unique challenges on this journey. I do believe with all my heart that it is never too late to start making choices that nourish your body, lift your spirit, and bring more joy. Wherever you are right now, you are welcome here.</p>
            </div>
            
            <p>Whenever you're ready to take the next step, dream up something new to share, or just need a little boost, I am here for you.</p>
            
            <p>Let's all keep rebelling, keep shining, and keep dazzling the world.</p>
            
            <p className="text-xl font-medium text-teal-600 italic">With love, laughter and leafy greens,<br />Suz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeLetter;
