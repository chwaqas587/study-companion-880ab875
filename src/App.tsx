import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import CoursePage from "./pages/CoursePage.tsx";
import CoursesPage from "./pages/CoursesPage.tsx";
import EventsPage from "./pages/EventsPage.tsx";
import EventPage from "./pages/EventPage.tsx";
import BlogsPage from "./pages/BlogsPage.tsx";
import BlogPostPage from "./pages/BlogPostPage.tsx";
import ScholarshipsPage from "./pages/ScholarshipsPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import FaqsPage from "./pages/FaqsPage.tsx";
import CareerPage from "./pages/CareerPage.tsx";
import FacultyPage from "./pages/FacultyPage.tsx";
import BecomeMentorPage from "./pages/BecomeMentorPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:slug" element={<CoursePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/event/:slug" element={<EventPage />} />
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/scholarships" element={<ScholarshipsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/become-mentor" element={<BecomeMentorPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
