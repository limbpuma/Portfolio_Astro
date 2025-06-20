import React, { useState, useEffect } from 'react';

const AITypingEffect = ({ texts, speed = 100, deleteSpeed = 50, pauseDuration = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentCharIndex < currentText.length) {
          setDisplayText(currentText.slice(0, currentCharIndex + 1));
          setCurrentCharIndex(currentCharIndex + 1);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (currentCharIndex > 0) {
          setDisplayText(currentText.slice(0, currentCharIndex - 1));
          setCurrentCharIndex(currentCharIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [currentCharIndex, currentTextIndex, isDeleting, texts, speed, deleteSpeed, pauseDuration]);

  return (
    <span className="text-primary font-bold">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const AIFloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating AI icons */}
      <div className="absolute top-20 left-10 text-primary/20 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
        <i className="fas fa-robot text-2xl"></i>
      </div>
      <div className="absolute top-40 right-20 text-secondary/20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>
        <i className="fas fa-brain text-xl"></i>
      </div>
      <div className="absolute bottom-40 left-20 text-accent/20 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>
        <i className="fas fa-microchip text-lg"></i>
      </div>
      <div className="absolute bottom-20 right-10 text-primary/20 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2.5s'}}>
        <i className="fas fa-network-wired text-xl"></i>
      </div>
      
      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-primary/10 rotate-45 animate-spin" style={{animationDuration: '10s'}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-secondary/10 rounded-full animate-pulse"></div>
      
      {/* Code-like floating text */}
      <div className="absolute top-1/3 right-1/3 text-primary/10 font-mono text-xs animate-pulse">
        {'{ AI: true }'}
      </div>
      <div className="absolute bottom-1/3 left-1/3 text-secondary/10 font-mono text-xs animate-pulse" style={{animationDelay: '1s'}}>
        {'import AI from "future"'}
      </div>
    </div>
  );
};

const AICertificationBadge = ({ isVisible }) => {
  return (
    <div className={`transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-secondary/20 px-4 py-2 rounded-full border border-primary/30 backdrop-blur-sm">
        <span className="text-2xl">🏆</span>
        <div className="text-sm">
          <div className="font-bold text-primary">Microsoft AI-900</div>
          <div className="text-xs text-base-content/70">Certified 2024</div>
        </div>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

const AIEnhancedHero = ({ 
  title, 
  dynamicTexts, 
  description, 
  ctaText, 
  ctaLink,
  showCertification = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* AI floating elements background */}
      <AIFloatingElements />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Certification Badge */}
        {showCertification && (
          <div className="mb-6">
            <AICertificationBadge isVisible={isVisible} />
          </div>
        )}
        
        {/* Main Title */}
        <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {title}
        </h1>
        
        {/* Dynamic Typing Text */}
        <div className={`text-xl md:text-2xl mb-8 h-16 flex items-center justify-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{transitionDelay: '200ms'}}>
          <AITypingEffect 
            texts={dynamicTexts}
            speed={80}
            deleteSpeed={40}
            pauseDuration={2500}
          />
        </div>
        
        {/* Description */}
        <p className={`text-lg text-base-content/80 mb-8 max-w-2xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{transitionDelay: '400ms'}}>
          {description}
        </p>
        
        {/* CTA Button */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{transitionDelay: '600ms'}}>
          <a 
            href={ctaLink}
            className="btn btn-primary btn-lg text-white font-semibold px-8 py-3 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 group"
          >
            <span className="flex items-center gap-2">
              {ctaText}
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
            </span>
          </a>
        </div>
        
        {/* AI Status Indicators */}
        <div className={`mt-12 flex justify-center gap-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{transitionDelay: '800ms'}}>
          <div className="flex items-center gap-2 text-sm text-success">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>AI-Enhanced</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-info">
            <div className="w-2 h-2 bg-info rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <span>Available for Internship</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-warning">
            <div className="w-2 h-2 bg-warning rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <span>Dortmund Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIEnhancedHero;
