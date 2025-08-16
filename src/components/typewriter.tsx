"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  highlightWords?: string[];
}

export function Typewriter({ 
  text, 
  delay = 0, 
  speed = 50, 
  className,
  highlightWords = []
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, isStarted]);

  const renderTextWithHighlights = (text: string) => {
    if (highlightWords.length === 0) {
      return text;
    }

    let highlightedText = text;
    highlightWords.forEach((word) => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      highlightedText = highlightedText.replace(
        regex, 
        `<mark class="bg-gradient-to-r from-cyan-200 to-blue-200 dark:from-cyan-800 dark:to-blue-800 px-1 py-0.5 rounded text-foreground font-semibold">${word}</mark>`
      );
    });

    return highlightedText;
  };

  return (
    <div className={cn("relative", className)}>
      <div 
        dangerouslySetInnerHTML={{ 
          __html: renderTextWithHighlights(displayText) + 
            (currentIndex < text.length ? '<span class="animate-pulse">|</span>' : '')
        }}
      />
    </div>
  );
}
