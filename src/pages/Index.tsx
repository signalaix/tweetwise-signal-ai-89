import React, { useEffect, useState } from 'react';
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
  const [api] = useEmblaCarousel(
    { 
      loop: true,
      duration: 50,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

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
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            ref={api}
            className="w-full"
          >
            <CarouselContent>
              {tweetData.map((tweet, index) => (
                <CarouselItem key={index}>
                  <TweetAnalysis
                    tweetUrl={tweet.url}
                    analysis={tweet.analysis}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Index;