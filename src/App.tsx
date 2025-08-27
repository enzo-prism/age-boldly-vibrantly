
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
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import WelcomeLetter from "./pages/WelcomeLetter";
import VideoSeries from "./pages/VideoSeries";
import Team from "./pages/Team";

const queryClient = new QueryClient();

const App = () => {

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
              <Route path="/welcome-letter" element={<WelcomeLetter />} />
              <Route path="/pillars/:pillarId" element={<PillarPage />} />
              {/* Legacy route redirect */}
              <Route path="/pillars/longevity" element={<Navigate to="/pillars/health" replace />} />
              <Route path="/nutrition" element={<Nutrition />} />
              <Route path="/video-series" element={<VideoSeries />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:postId" element={<BlogPost />} />
              <Route path="/team" element={<Team />} />
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
