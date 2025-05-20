import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PricingPage from "./pages/PricingPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import ArticlesPage from "./pages/ArticlesPage";
import ProductPage from "./pages/ProductPage";
import AgentRegistry from "./components/AgentRegistry";
import AuthCallback from "./pages/AuthCallback";
import { AuthProvider } from "./lib/auth-context";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import NetworkPage from "./pages/NetworkPage";
import PebblingProtocolPage from "./pages/PebblingProtocolPage";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/hibiscus" element={
              <ProtectedRoute>
                <AgentRegistry />
              </ProtectedRoute>
            } />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/network" element={<NetworkPage />} />
            <Route path="/pebbling" element={<PebblingProtocolPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
