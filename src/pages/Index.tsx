import React from 'react';
import TweetAnalysis from '../components/TweetAnalysis';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

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
  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    duration: 50,
    dragFree: true
  }, [
    Autoplay({ 
      delay: 5000,
      stopOnInteraction: false,
      playOnInit: true
    })
  ]);

  return (
    <div className="min-h-screen bg-dark text-white relative">
      <a 
        href="https://x.com/SignalAI_" 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
      >
        <img 
          src="https://i.imgur.com/WtoVcGU.png" 
          alt="X (Twitter)" 
          className="w-12 h-12"
        />
      </a>
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <div className="flex flex-col items-center gap-6">
            <img 
              src="https://i.imgur.com/ASm6S3t.png" 
              alt="Signal Logo" 
              className="w-20 h-20"
            />
            <div className="space-y-6">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent inline-block leading-relaxed">
                SignalAI
              </h1>
              <p className="text-xl text-white/70">
                AI-Powered Crypto Intelligence of Key Opinion Leaders
              </p>
            </div>
          </div>
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
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90">
                Create Custom Signal Agent
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Coming Soon!</AlertDialogTitle>
                <AlertDialogDescription>
                  Custom Signal Agents are currently in development. Stay tuned for updates!
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default Index;