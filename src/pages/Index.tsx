import React, { useState } from 'react';
import TweetAnalysis from '../components/TweetAnalysis';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const tweetData = [
  {
    url: "https://x.com/RyanWatkins_/status/1876479076627849615",
    analysis: "Jensen Huang emphasizes AI agents as a multi-trillion dollar market, driven by advancements in agentic and physical AI. Focus on projects leading in robotics, customer service, and related AI infrastructure."
  },
  {
    url: "https://x.com/mrpunkdoteth/status/1876495944877019537",
    analysis: "#BEINGAI appears to be a strong play in the AI agent meta, focusing on productivity tools powered by LLMs like Olama. Its specialized agents (e.g., Data Analyst Pro, Code Assistant) position it as a versatile platform with real-world utility. Consider investing early if the project shows traction and adoption potential."
  }
];

const Index = () => {
  const [isTyping, setIsTyping] = useState(true);

  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    duration: 50,
    dragFree: true
  }, [
    Autoplay({ 
      delay: isTyping ? 10000 : 1500, // Wait longer while typing, then 1.5s after completion
      stopOnInteraction: false,
      playOnInit: true,
      rootNode: (emblaRoot) => emblaRoot.parentElement,
    })
  ]);

  return (
    <div className="min-h-screen bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent mb-4">
            SignalAI
          </h1>
          <p className="text-xl text-white/70">
            AI-Powered Crypto Intelligence from Key Opinion Leaders
          </p>
        </header>

        <div className="max-w-3xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {tweetData.map((tweet, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0"
                >
                  <TweetAnalysis
                    tweetUrl={tweet.url}
                    analysis={tweet.analysis}
                    onTypingComplete={() => setIsTyping(false)}
                    onTypingStart={() => setIsTyping(true)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;