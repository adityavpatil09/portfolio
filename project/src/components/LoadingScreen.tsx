import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');
  const [progress, setProgress] = useState(0);
  
  const greetings = [
    { text: "Welcome", language: "English" },
    { text: "Bienvenue", language: "French" },
    { text: "Willkommen", language: "German" },
    { text: "Bienvenido", language: "Spanish" },
    { text: "ようこそ", language: "Japanese" },
    { text: "欢迎", language: "Chinese" },
    { text: "Benvenuto", language: "Italian" },
    { text: "Bem-vindo", language: "Portuguese" },
    { text: "Добро пожаловать", language: "Russian" },
    { text: "स्वागत हे", language: "Hindi" }
  ];

  useEffect(() => {
    // Handle greeting transitions
    const greetingInterval = setInterval(() => {
      setFadeState('out');
      
      setTimeout(() => {
        setCurrentGreetingIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= greetings.length) {
            clearInterval(greetingInterval);
            // Complete loading after the last greeting
            setTimeout(() => {
              onLoadingComplete();
            }, 500);
            return prevIndex;
          }
          return nextIndex;
        });
        setFadeState('in');
      }, 250); // Wait for fade out before changing text
      
    }, 1000 / greetings.length); // Show each greeting for 1 second / number of greetings
    
    // Handle progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (greetings.length * 2));
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return newProgress;
      });
    }, 50);
    
    return () => {
      clearInterval(greetingInterval);
      clearInterval(progressInterval);
    };
  }, [greetings.length, onLoadingComplete]);
  
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-blue-800 to-custom-darker-orange flex flex-col items-center justify-center z-50">
      <div className={`transition-opacity duration-250 ease-in-out text-center ${fadeState === 'in' ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
          {greetings[currentGreetingIndex].text}
        </h1>
        <p className="text-blue-200 text-lg md:text-xl">
          {greetings[currentGreetingIndex].language}
        </p>
      </div>
      
      <div className="absolute bottom-20 w-64 md:w-80 bg-blue-900/30 rounded-full h-2 mt-12">
        <div 
          className="bg-white h-full rounded-full transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="absolute bottom-10 text-blue-200">
        <p>Smart Construction Innovator</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
