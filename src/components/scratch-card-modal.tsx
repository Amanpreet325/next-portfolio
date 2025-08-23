"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Gift, Star } from 'lucide-react';
import { ScratchToReveal } from '@/components/magicui/scratch-to-reveal';

// Prize configuration
const prizes = [
  { name: "PC Wallpapers 🎨", file: "/files/wallpaper-pc.zip" },
  { name: "Android Wallpapers 📱", file: "/files/gaming-wallpaper.zip" },
  { name: "Bonus Video 🎥", file: "/files/0_Cybercrime_Hacking_1280x720.mp4" },
  { name: "My Resume 📄", file: "/files/resume_portfolio.pdf" }
];

// Star Rating Component
const StarRating = ({ rating, onRatingChange }: { rating: number; onRatingChange: (rating: number) => void }) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onRatingChange(star)}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          className="p-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
        >
          <Star
            className={`w-6 h-6 transition-colors duration-200 ${
              star <= (hoverRating || rating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        </button>
      ))}
      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
        {rating > 0 ? `${rating}/5` : 'Rate your experience'}
      </span>
    </div>
  );
};

interface Prize {
  name: string;
  file: string;
}

interface ScratchCardModalProps {
  showDelay?: number; // Delay in milliseconds before showing modal
  onClose?: () => void;
}

// Confetti component
const Confetti = ({ show }: { show: boolean }) => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    color: string;
    rotation: number;
    velocity: { x: number; y: number };
  }>>([]);

  useEffect(() => {
    if (!show) return;

    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: -10,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      velocity: {
        x: (Math.random() - 0.5) * 4,
        y: Math.random() * 3 + 2
      }
    }));

    setParticles(newParticles);

    const timer = setTimeout(() => setParticles([]), 3000);
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full"
          style={{ backgroundColor: particle.color }}
          initial={{
            x: particle.x,
            y: particle.y,
            rotate: particle.rotation
          }}
          animate={{
            y: window.innerHeight + 100,
            x: particle.x + particle.velocity.x * 100,
            rotate: particle.rotation + 720
          }}
          transition={{
            duration: 3,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

export default function ScratchCardModal({ 
  showDelay = 20000, // default now 20 seconds
  onClose 
}: ScratchCardModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState<'form' | 'scratch' | 'prize'>('form');
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    rating: 0, 
    feedback: '' 
  });
  const [selectedPrize, setSelectedPrize] = useState<Prize | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  // Show modal after user has been viewing the page for `showDelay` ms.
  // Uses the Page Visibility API so the timer pauses when the tab is hidden.
  const visibleTimeRef = useRef(0);
  const lastVisibleAtRef = useRef<number | null>(null);

  useEffect(() => {
    let rafId: number | null = null;

    function tick(now: number) {
      // If page is visible, accumulate visible time
      if (!document.hidden) {
        if (lastVisibleAtRef.current == null) lastVisibleAtRef.current = now;
        const delta = now - (lastVisibleAtRef.current || now);
        visibleTimeRef.current += delta;
        lastVisibleAtRef.current = now;

        if (visibleTimeRef.current >= showDelay) {
          setIsVisible(true);
          return; // stop ticking
        }
      } else {
        // page hidden, suspend timer
        lastVisibleAtRef.current = null;
      }

      rafId = requestAnimationFrame(tick);
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        // stop counting visible time
        lastVisibleAtRef.current = null;
      } else {
        // resume and start RAF loop if not already visible
        if (!isVisible) {
          lastVisibleAtRef.current = performance.now();
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);
    // start RAF
    rafId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [showDelay, isVisible]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      try {
        // Send data to Google Apps Script
        const response = await fetch('https://script.google.com/macros/s/AKfycbzqPO3-n0z3-6AvZqVRxYOC-I7wsFu65yXiUpvDZe61bYhN5wnYycCUgB5SouuLfojN/exec', {
          method: 'POST',
          mode: 'no-cors', // Required for Google Apps Script
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            rating: formData.rating,
            feedback: formData.feedback,
            timestamp: new Date().toISOString()
          })
        });

        // Note: With no-cors mode, we can't read the response
        // But we can assume success if no error is thrown
       
        setStep('scratch');
      } catch (error) {
        console.error('Error sending form data:', error);
        // Still proceed to scratch card even if submission fails
        setStep('scratch');
      }
    }
  };

  const handleScratchComplete = () => {
    const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
    setSelectedPrize(randomPrize);
    setShowConfetti(true);
    
    setTimeout(() => {
      setStep('prize');
    }, 1000);
  };
  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  const handleDownload = () => {
    if (selectedPrize) {
      // Create a download link
      const link = document.createElement('a');
      link.href = selectedPrize.file;
      link.download = selectedPrize.file.split('/').pop() || 'download';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-sm w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Form Step */}
              {step === 'form' && (
                <motion.div
                  initial={{ x: 0 }}
                  exit={{ x: -100, opacity: 0 }}
                  className="p-6"
                >
                  <div className="text-center mb-4">{/* Reduced margin */}
                    <Gift className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      🎉 Surprise Gift!
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Enter your details to unlock your exclusive reward
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-3">{/* Reduced space */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Rate your experience
                      </label>
                      <StarRating
                        rating={formData.rating}
                        onRatingChange={(rating) => setFormData(prev => ({ ...prev, rating }))}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Feedback (Optional)
                      </label>
                      <textarea
                        value={formData.feedback}
                        onChange={(e) => setFormData(prev => ({ ...prev, feedback: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all resize-none"
                        placeholder="Share your thoughts about the portfolio..."
                        rows={3}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                    >
                      Unlock My Gift 🎁
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Scratch Card Step */}
              {step === 'scratch' && (
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  className="p-8"
                >
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Scratch to Reveal Your Prize!
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Use your mouse or finger to scratch the card
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <ScratchToReveal
                      width={400}
                      height={300}
                      minScratchPercentage={50}
                      onComplete={handleScratchComplete}
                      className="rounded-lg overflow-hidden"
                      gradientColors={["#FFD700", "#FF6B6B", "#4ECDC4"]}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-4xl mb-2">🎉</div>
                          <div className="text-xl font-bold">You Won!</div>
                          <div className="text-sm mt-2 opacity-80">
                            Something amazing awaits!
                          </div>
                        </div>
                      </div>
                    </ScratchToReveal>
                  </div>

                  <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
                    Scratch at least 50% to reveal your prize
                  </div>
                </motion.div>
              )}

              {/* Prize Reveal Step */}
              {step === 'prize' && selectedPrize && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="p-8 text-center"
                >
                  <div className="mb-6">
                    <div className="text-6xl mb-4">🎉</div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      Congratulations!
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Hi {formData.name}, you&apos;ve won:
                    </p>
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                      {selectedPrize.name}
                    </div>
                  </div>

                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    <Download className="w-5 h-5" />
                    Download Now
                  </button>

                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    Thank you for visiting my portfolio! 🚀
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Confetti show={showConfetti} />
    </>
  );
}
