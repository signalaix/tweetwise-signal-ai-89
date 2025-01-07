import React, { useEffect, useState } from 'react';
import { Tweet } from 'react-tweet';

interface TweetAnalysisProps {
  tweetUrl: string;
  analysis: string;
}

const TweetAnalysis = ({ tweetUrl, analysis }: TweetAnalysisProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentText = '';
    const textArray = analysis.split('');
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < textArray.length) {
        currentText += textArray[currentIndex];
        setDisplayedText(currentText);
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 25); // Reduced from 50ms to 25ms for faster typing

    return () => clearInterval(typingInterval);
  }, [analysis]);

  const tweetId = tweetUrl.split('/').pop();

  return (
    <div className="mb-12 p-6 rounded-lg bg-opacity-10 bg-white backdrop-blur-md border border-neon-purple/20 hover:border-neon-purple/40 transition-all duration-300">
      <div className="mb-6">
        <Tweet id={tweetId || ''} />
      </div>
      <div className="relative">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 rounded-full bg-neon-purple mr-2 animate-pulse"></div>
          <span className="text-neon-purple font-semibold">SignalAI Analysis</span>
        </div>
        <div className="text-white/90 font-mono relative">
          {displayedText}
          {isTyping && (
            <span className="inline-block w-2 h-4 ml-1 bg-neon-blue animate-cursor-blink"></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TweetAnalysis;