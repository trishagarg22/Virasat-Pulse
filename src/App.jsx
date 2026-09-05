import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExploreTrails from './pages/ExploreTrails';
import StoriesPage from './pages/StoriesPage';
import QuizPage from './pages/QuizPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#14100E] text-[#F7F3E9] selection:bg-[#C85A32] selection:text-white font-sans antialiased">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trails" element={<ExploreTrails />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
