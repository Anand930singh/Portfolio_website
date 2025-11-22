import React, { useState } from 'react';
import LandingPage from "./pages/LandingPage";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import "./App.css"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <LandingPage />
    </>
  );
}

export default App;
