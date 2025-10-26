
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import ConnectCTA from '@/components/common/ConnectCTA';

const WelcomeLetter = () => {
  const [showTypeform, setShowTypeform] = useState(false);
  const typeformRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setShowTypeform(true);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowTypeform(true);
          observer.disconnect();
        }
      });
    }, { rootMargin: '0px 0px 200px 0px' });

    const current = typeformRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

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
            <p>Welcome, you've just stepped into a space that celebrates aging as the boldest adventure yet.</p>

            <p>This space was created for women 55 - 105, who are ready to rewrite their story, by learning more about the power of dining on plants, gaining confidence, embracing their authentic style, sharing experiences and encouraging one another.</p>

            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
              <h2 className="text-xl font-bold text-teal-800 mb-3">Join the Private Facebook Group</h2>
              <p className="text-teal-700">
                I am excited to let you know that we can continue our conversations more robustly, if you will join my private FB GROUP. This will be a safe, inspiring place where we can learn, connect between posts, swap stories, share tips, ask questions and cheer one another on.
              </p>
              <div className="mt-4 flex justify-center">
                <Button
                  asChild
                  className="bg-teal text-white hover:bg-teal-dark"
                >
                  <a
                    href="https://www.facebook.com/groups/1497629461551095/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request to Join on Facebook
                  </a>
                </Button>
              </div>
            </div>

            <p>Hi, I am so happy you are here. I am Suzanne, (Suz). I have created this FB GROUP as a way to create an awareness in women so that they are emboldened to rewrite the story of aging. This is our time to be bold, be authentic, be confident, implement self care, realize our dreams and LIVE LOUD!</p>

            <h2 className="text-2xl font-bold text-teal-600">A Note From my Heart</h2>
            <p>I know that everyone is not blessed with perfect health, extreme confidence and amazing resources, and support as they age. We each carry a different story, different challenges. Regardless, I believe deeply, that it is never too late or too soon to begin making choices that nourish your body, lift your spirit and bring joy. Please know that wherever you are on your aging life path you are welcome here.</p>

            <p>So whenever you are ready to take the next step, share a dream, or simply sit with someone who understands join me at FB Group.</p>

            <p>Remember aging is not about fading, it is about flipping the script, embracing our power, and sparkling brighter than ever.</p>

            <p className="font-semibold text-teal-700">Suz</p>

            <div className="bg-gray-50 border border-teal-200 p-6 rounded-lg">
              <p className="font-semibold text-teal-800">PS. Please share your email here so that you will receive important updates as Rebellious Aging grows. (I will not share your email).</p>
              <div className="mt-4" ref={typeformRef}>
                {showTypeform ? (
                  <iframe
                    src="https://fxuqp40sseh.typeform.com/to/fRGVxj4g"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    allow="camera; microphone; autoplay; encrypted-media;"
                    title="Stay in Touch Typeform"
                    className="rounded-lg"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-4 rounded-lg border border-dashed border-teal-200 bg-white p-6 text-center text-teal-700">
                    <p className="font-medium">
                      Scroll down or tap the button below to load the email sign-up form when you're ready.
                    </p>
                    <Button
                      className="bg-teal text-white hover:bg-teal-dark"
                      onClick={() => setShowTypeform(true)}
                    >
                      Load Sign-up Form Now
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ConnectCTA />
    </div>
  );
};

export default WelcomeLetter;
