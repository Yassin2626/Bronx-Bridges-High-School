import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Accessibility from "./pages/Accessibility";
import NotFound from "./pages/NotFound";
import WhoWeAre from "./pages/WhoWeAre";
import Partners from "./pages/Partners";
import PhotoAlbum from "./pages/PhotoAlbum";
import AcademicOfferings from "./pages/AcademicOfferings";
import NewsAnnouncements from "./pages/NewsAnnouncements";
import GraduationRequirements from "./pages/GraduationRequirements";
import ExtracurricularActivities from "./pages/ExtracurricularActivities";
import ProceduresProtocols from "./pages/ProceduresProtocols";
import BellSchedule from "./pages/BellSchedule";
import CollegeCareerPreparation from "./pages/CollegeCareerPreparation";
import StudentEmail from "./pages/StudentEmail";
import StaffDirectory from "./pages/StaffDirectory";
import StaffLinks from "./pages/StaffLinks";
import Login from "./pages/Login";
import SchoolCalendar from "./pages/SchoolCalendar";
import StudentRulesExpectations from "./pages/StudentRulesExpectations";
import CollegeReadiness from "./pages/CollegeReadiness";
import PTAResources from "./pages/PTAResources";
import Programs from "./pages/Programs";
import ParentCoordinator from "./pages/ParentCoordinator";
import RemoteLearning from "./pages/RemoteLearning";
import Opportunities from "./pages/Opportunities";
import ProspectiveStaff from "./pages/ProspectiveStaff";
import ProspectiveStudents from "./pages/ProspectiveStudents";
import Contact from "./pages/Contact";
import CampusMap from "./pages/CampusMap";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/who-are-we" element={<WhoWeAre />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/photo-album" element={<PhotoAlbum />} />
          <Route path="/academic-offerings" element={<AcademicOfferings />} />
          <Route path="/news" element={<NewsAnnouncements />} />
          <Route path="/graduation-requirements" element={<GraduationRequirements />} />
          <Route path="/extracurricular-activities" element={<ExtracurricularActivities />} />
          <Route path="/procedures-protocols" element={<ProceduresProtocols />} />
          <Route path="/bell-schedule" element={<BellSchedule />} />
          <Route path="/college-career-preparation" element={<CollegeCareerPreparation />} />
          <Route path="/student-email" element={<StudentEmail />} />
          <Route path="/staff-directory" element={<StaffDirectory />} />
          <Route path="/staff-links" element={<StaffLinks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/school-calendar" element={<SchoolCalendar />} />
          <Route path="/student-rules-expectations" element={<StudentRulesExpectations />} />
          <Route path="/college-readiness" element={<CollegeReadiness />} />
          <Route path="/pta-resources" element={<PTAResources />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/parent-coordinator" element={<ParentCoordinator />} />
          <Route path="/remote-learning" element={<RemoteLearning />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/prospective-staff" element={<ProspectiveStaff />} />
          <Route path="/prospective-students" element={<ProspectiveStudents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/campus-map" element={<CampusMap />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfUse />} />
          <Route path="/accessibility" element={<Accessibility />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
