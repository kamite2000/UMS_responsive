import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { DashbordStudent } from "./screens/DashbordStudent";
import { Results } from "./screens/Results";
import { Courses } from "./screens/Courses";
import { Documents } from "./screens/Documents";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DashbordStudent />} />
          <Route path="/results" element={<Results />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/schedule" element={<div className="p-8 text-center"><h1 className="text-4xl font-bold text-[#323954]">Page Horaire - En développement</h1></div>} />
          <Route path="/finance" element={<div className="p-8 text-center"><h1 className="text-4xl font-bold text-[#323954]">Page Finance - En développement</h1></div>} />
          <Route path="/upload" element={<div className="p-8 text-center"><h1 className="text-4xl font-bold text-[#323954]">Page Upload - En développement</h1></div>} />
          <Route path="/appeals" element={<div className="p-8 text-center"><h1 className="text-4xl font-bold text-[#323954]">Page Recours - En développement</h1></div>} />
          <Route path="/student-card" element={<div className="p-8 text-center"><h1 className="text-4xl font-bold text-[#323954]">Page Carte Étudiant - En développement</h1></div>} />
          <Route path="/chat" element={<div className="p-8 text-center"><h1 className="text-4xl font-bold text-[#323954]">Page Chat - En développement</h1></div>} />
          <Route path="/announcements" element={<div className="p-8 text-center"><h1 className="text-4xl font-bold text-[#323954]">Page Annonces - En développement</h1></div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
);