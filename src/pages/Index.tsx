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
  },
  {
    url: "https://x.com/The__Solstice/status/1876479485987651749",
    analysis: "Agent $S leverages its unique position as the dominant AI coin on SUI, combining a compelling narrative with a focus on blockchain security and decentralization. Its utility-driven roadmap and alignment with the growing SUI ecosystem make it an intriguing speculative investment. Ideal for those seeking early exposure to niche blockchain AI projects."
  },
  {
    url: "https://x.com/blocknewsdotcom/status/1876433263293792688",
    analysis: "$MLG leverages nostalgic gaming culture and meme appeal, aligning with the humor-driven Solana memecoin trend. Its fun branding and accessible buying process could attract retail traders, but its long-term success depends on maintaining community engagement and hype. Consider it a high-risk, short-term play."
  },
  {
    url: "https://x.com/moneymancalls/status/1876503573128696063",
    analysis: "$PERCY has strong hype potential tied to Elon's gaming character and past influence with $KEKIUS. If Elon changes his profile picture to Percy, it could trigger a significant price spike. High-risk, speculative play—enter early but be prepared for volatility."
  },
  {
    url: "https://x.com/eveecooks/status/1876368509426397448",
    analysis: "$MAX is gaining momentum as a utility token tied to Distilled AI's personalized and privacy-focused agents. With its prototype agent displaying a bold, relatable personality, it has strong appeal in both the AI and crypto communities. Consider $MAX as a mid-risk investment, riding the AI agent trend and its current hype wave."
  },
  {
    url: "https://x.com/BTCTN/status/1876530200550535382",
    analysis: "MiniPerplx ($MPLX) is an example of false partnership claims fueling hype, leading to a pump-and-dump scenario. This highlights the need to verify claims before investing. Avoid projects with questionable transparency, especially in the hot AI narrative space."
  },
  {
    url: "https://x.com/AJ__912/status/1876541329682976840",
    analysis: "$STREAM leans heavily on an abstract, poetic narrative driven by AI creativity, appealing to a niche audience captivated by experimental storytelling and self-referential themes. Its potential 20x return is speculative and reliant on narrative momentum rather than clear utility. Consider this a high-risk play for those drawn to lore-driven memecoins."
  },
  {
    url: "https://x.com/SmokezXBT/status/1877047554786898071",
    analysis: "$LLM capitalized on the humor of its \"large language model\" theme and defied FUD about bundled wallets to hit a $100M market cap. Memecoins thrive on narrative and hype, so focus on community strength and momentum for short-term gains. High risk, but momentum could continue if the meme sticks."
  },
  {
    url: "https://x.com/rasmr_eth/status/1877098132346941861",
    analysis: "Hive AI is positioning itself as a leader in merging AI with DeFi through a modular network of agents, supported by a proven founder and strategic partnerships. Its focus on on-chain interoperability makes it a strong player in the AI infrastructure narrative. Mid- to high-risk, but worth watching for adoption in the growing DeFi-AI space."
  },
  {
    url: "https://x.com/Poe_Ether/status/1877112931168526659",
    analysis: "With $POPPY following a similar baby hippo narrative, and Moo Deng's success at $400M market cap last year, there's clear precedent for strong upside potential. If $POPPY maintains its momentum and attracts similar community hype, it could replicate or exceed Moo Deng's performance. High-risk, but a proven narrative."
  },
  {
    url: "https://x.com/TheSolaAI/status/1877068598356631815",
    analysis: "$SOLA combines the AI assistant meta with the Solana ecosystem, offering real utility through voice-command blockchain interactions. The rapid rise to $15M market cap signals strong initial interest, but long-term success hinges on adoption by Solana users. Promising, but high-risk due to early-stage volatility."
  },
  {
    url: "https://x.com/cryptolyxe/status/1877063222039134249",
    analysis: "$DAIGE cleverly combines the AI and meme coin narratives, playing on Doge's success with a futuristic twist. At $30M market cap, it has room to grow if the community builds momentum toward the $100M target. High-risk, speculative play reliant on narrative and engagement."
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

  const shuffledTweets = React.useMemo(() => {
    return [...tweetData].sort(() => Math.random() - 0.5);
  }, []);

  console.log('Tweets shuffled, new order:', shuffledTweets.map(tweet => tweet.url));

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
              <p className="text-xl text-white/70 mb-8">
                AI-Powered Crypto Intelligence of Key Opinion Leaders
              </p>
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
        </header>

        <div className="max-w-3xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {shuffledTweets.map((tweet, index) => (
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
      </div>
    </div>
  );
};

export default Index;