import React, { useEffect, useState } from 'react';
import {
  HashRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import { LoadingPage } from './pages/LoadingPage/LoadingPage';
import { Home } from './pages/Home/Home';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2500);
  }, [])

  return (
    <div className="App">
      {isLoading 
      ? <LoadingPage /> 
      : (
        <>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
