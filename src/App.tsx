
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Movement from "./pages/Movement";
import PillarPage from "./pages/PillarPage";
import Nutrition from "./pages/Nutrition";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import WelcomeLetter from "./pages/WelcomeLetter";
import VideoSeries from "./pages/VideoSeries";
import Team from "./pages/Team";
import FacebookGroup from "./pages/FacebookGroup";
import NutritionGuide from "./pages/NutritionGuide";
import WfpbResourceGuide from "./pages/WfpbResourceGuide";
import Search from "./pages/Search";
import StarterKit from "./pages/StarterKit";

const defaultQueryClient = new QueryClient();

interface AppProvidersProps {
  children: React.ReactNode;
  queryClient?: QueryClient;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children, queryClient }) => (
  <QueryClientProvider client={queryClient ?? defaultQueryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {children}
    </TooltipProvider>
  </QueryClientProvider>
);

export const AppRoutes = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-story" element={<Movement />} />
      <Route path="/welcome-letter" element={<WelcomeLetter />} />
      <Route path="/starter-kit" element={<StarterKit />} />
      <Route path="/pillars/:pillarId" element={<PillarPage />} />
      {/* Legacy route redirect */}
      <Route path="/pillars/longevity" element={<Navigate to="/pillars/health" replace />} />
      <Route path="/nutrition" element={<Nutrition />} />
      <Route path="/video-series" element={<VideoSeries />} />
      <Route path="/pillars/health/nutrition-guide" element={<NutritionGuide />} />
      <Route path="/pillars/health/resource-guide" element={<WfpbResourceGuide />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:postId" element={<BlogPost />} />
      <Route path="/search" element={<Search />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/facebook-group" element={<FacebookGroup />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  </Layout>
);

const App = () => (
  <AppProviders>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AppProviders>
);

export default App;
