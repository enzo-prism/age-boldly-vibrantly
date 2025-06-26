
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
            <h2 className="text-2xl font-bold text-teal-600 mb-4">Welcome, My Dear Rebel</h2>
            
            <p>I'm so glad you're here.</p>
            
            <p>I created this space not just to share what I've learned over the years, but to open a door—so we can walk through this chapter together. I want to hear your stories. I want to offer support, inspiration, laughter, and the occasional nudge (or hug) when needed. We are better together, and as ladies of a certain age, we're marching side-by-side—pushing back on outdated ideas of what aging should look like.</p>
            
            <p>This space? It's where sass and serious meet for a cup of tea (or a green smoothie).</p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The sass gives us permission to play, to break the rules, to sparkle without apology.</li>
              <li>The serious offers comfort, truth, wisdom, and support for real-life challenges.</li>
            </ul>
            
            <p>And when they come together, they create the magical balance that defines Rebellious Aging.</p>
            
            <p>So… I'll go first.</p>
            
            <p>I've just closed the 83rd chapter of my life and have begun writing my 84th. Here's what I know for sure, and what I am passionate about sharing with you:</p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The incredible power of plants to nourish your body and bring vibrant health.</li>
              <li>The importance of igniting your confidence and courage, because you are meant to shine.</li>
              <li>The joy and magic of creating your personal style, your way of saying to the world, "This is me."</li>
              <li>The adventure of aging with class and sass, because this ride should be anything but boring.</li>
              <li>And most of all, the quiet superpower of gratitude—which brightens every day, no matter what.</li>
            </ul>
            
            <p>This isn't a place for judgment. It's a place for wisdom, curiosity, learning, and a merry old time as we gently (or not so gently) smash society's tired image of "old age" to pieces.</p>
            
            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
              <h3 className="font-semibold text-teal-800 mb-2">A Note from My Heart</h3>
              <p className="text-teal-700">I know that not everyone is blessed with perfect health, resources, or support as they age. Every one of us carries a different story, a different challenge. But I believe—deeply—that it is never too late to start making choices that nourish your body, lift your spirit, and bring you joy.</p>
              <p className="text-teal-700 mt-4">Wherever you are right now, you are welcome here.</p>
            </div>
            
            <p>And whenever you're ready to take a next step, share a dream, or simply sit with someone who understands—you've got me.</p>
            
            <p>So let's keep rebelling.</p>
            <p>Keep shining.</p>
            <p>And keep dazzling the world.</p>
            
            <p className="text-xl font-medium text-teal-600 italic">With love, laughter, and leafy greens,<br />Suz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeLetter;
