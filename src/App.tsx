
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Movement from "./pages/Movement";
import PillarPage from "./pages/PillarPage";
import Nutrition from "./pages/Nutrition";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PasswordProtection from "./components/PasswordProtection";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already entered the correct password
    const hasAccess = localStorage.getItem('site-access') === 'granted';
    setIsAuthenticated(hasAccess);
    setIsLoading(false);
  }, []);

  const handlePasswordCorrect = () => {
    setIsAuthenticated(true);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-teal-50 to-coral-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <PasswordProtection onPasswordCorrect={handlePasswordCorrect} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/our-story" element={<Movement />} />
              <Route path="/pillars/:pillarId" element={<PillarPage />} />
              {/* Legacy route redirect */}
              <Route path="/pillars/longevity" element={<Navigate to="/pillars/health" replace />} />
              <Route path="/nutrition" element={<Nutrition />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
