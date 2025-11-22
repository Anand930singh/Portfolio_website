import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

function LoadingScreen({ onLoadingComplete }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Complete loading after animation
    const timer = setTimeout(() => {
      setLoading(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  if (!loading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loader">
          <div className="loader-ring"></div>
          <div className="loader-ring"></div>
          <div className="loader-ring"></div>
        </div>
        <div className="loading-text">
          <h2>Anand Kumar Singh</h2>
          <p>Loading Portfolio...</p>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="progress-text">{progress}%</div>
      </div>
    </div>
  );
}

export default LoadingScreen;

