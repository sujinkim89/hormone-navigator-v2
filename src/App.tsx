import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";
import Index from "./pages/Index";
import InfoPage from "./pages/InfoPage";
import CountdownPage from "./pages/CountdownPage";
import QuizPage from "./pages/QuizPage";
import AnalyzingPage from "./pages/AnalyzingPage";
import ResultPage from "./pages/ResultPage";
import TypesPage from "./pages/TypesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// 페이지 변경 시 GA 페이지뷰 트래킹
const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageViewTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/countdown" element={<CountdownPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/analyzing" element={<AnalyzingPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/types" element={<TypesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
