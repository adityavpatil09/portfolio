import React, { useState, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';

const Civil = React.lazy(() => import('./pages/Civil'));
const Electronics = React.lazy(() => import('./pages/Electronics'));
const About = React.lazy(() => import('./pages/About'));
const Blogs = React.lazy(() => import('./pages/Blogs'));

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <Layout>
      {loading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        <Suspense fallback={<LoadingScreen onLoadingComplete={() => {}} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/civil" element={<Civil />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </Suspense>
    </Layout>
  );
};

export default App;
