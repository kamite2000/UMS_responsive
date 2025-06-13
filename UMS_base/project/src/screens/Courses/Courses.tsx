import React, { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

interface Course {
  name: string;
  status: "available" | "loading";
}

interface Semester {
  name: string;
  displayName: string;
  courses: Course[];
}

const mockData: Semester[] = [
  {
    name: "semestre-1",
    displayName: "Semestre 1",
    courses: [
      { name: "Algorithmique & Structures de données 1", status: "available" },
      { name: "Programmation 1 (langage C / Python / Java)", status: "available" },
      { name: "Architecture des ordinateurs", status: "available" },
      { name: "Mathématiques discrètes", status: "available" },
      { name: "Systèmes d'exploitation 1", status: "available" },
      { name: "Logique mathématique", status: "loading" },
      { name: "Anglais scientifique / technique", status: "loading" },
      { name: "Analyse mathématique 1", status: "loading" },
      { name: "Algèbre linéaire", status: "loading" },
      { name: "Probabilités et statistiques", status: "loading" },
      { name: "Bureautique et outils collaboratifs", status: "loading" },
      { name: "Initiation aux bases de données", status: "loading" },
      { name: "Introduction aux réseaux informatiques", status: "loading" },
      { name: "Méthodologie de projet", status: "loading" },
      { name: "Projet tutoré / mini-projet", status: "loading" },
      { name: "Culture numérique", status: "loading" }
    ]
  },
  {
    name: "semestre-2",
    displayName: "Semestre 2",
    courses: [
      { name: "Algorithmique & Structures de données 2", status: "available" },
      { name: "Programmation 2 (Orientée Objet)", status: "available" },
      { name: "Bases de données avancées", status: "available" },
      { name: "Analyse mathématique 2", status: "loading" },
      { name: "Systèmes d'exploitation 2", status: "loading" },
      { name: "Réseaux informatiques", status: "loading" },
      { name: "Interface Homme-Machine", status: "loading" },
      { name: "Génie logiciel", status: "loading" },
      { name: "Projet de développement", status: "loading" },
      { name: "Stage d'observation", status: "loading" }
    ]
  }
];

export const Courses: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState<string>("semestre-1");

  const currentSemester = mockData.find(semester => 
    semester.name === selectedSemester
  ) || mockData[0];

  const handleDownload = (courseName: string) => {
    // Simulate download action
    console.log(`Téléchargement du cours: ${courseName}`);
  };

  return (
    <>
      <img
        className="w-full h-[3px] object-cover"
        alt="Line"
        src="/line-1.svg"
      />

      {/* Page title */}
      <section className="text-center px-4 sm:px-6 md:px-8 pt-8 sm:pt-10 md:pt-12 lg:pt-[50px] pb-6 sm:pb-8 md:pb-10 lg:pb-[30px] bg-[#eceef0]">
        <h1 className="font-['Inter',Helvetica] font-bold text-[#323954] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] leading-tight">
          Vos cours sont là!
        </h1>

        {/* Semester selector */}
        <div className="mt-6 sm:mt-8 lg:mt-[30px] flex justify-center px-4">
          <Select value={selectedSemester} onValueChange={setSelectedSemester}>
            <SelectTrigger className="w-full max-w-xs sm:w-[280px] md:w-[316px] h-12 sm:h-14 md:h-16 bg-[#1b2f76] text-white rounded-xl border-none text-sm sm:text-base">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {mockData.map((semester) => (
                <SelectItem key={semester.name} value={semester.name}>
                  {semester.displayName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Courses list */}
      <section className="bg-white px-0 py-0">
        <div className="max-w-full">
          {currentSemester.courses.map((course, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-[60px] py-4 sm:py-5 lg:py-[20px] border-b border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <span className="font-['Inter',Helvetica] font-medium text-[#323954] text-sm sm:text-base md:text-lg lg:text-xl flex-1 pr-4 leading-relaxed">
                {course.name}
              </span>
              
              <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-[40px] lg:h-[40px] flex-shrink-0">
                {course.status === "available" ? (
                  <button
                    onClick={() => handleDownload(course.name)}
                    className="p-1 sm:p-2 hover:bg-gray-200 rounded-full transition-colors"
                    title="Télécharger le cours"
                  >
                    <Download 
                      size={20} 
                      className="sm:w-6 sm:h-6 text-[#323954] hover:text-[#1b2f76]" 
                    />
                  </button>
                ) : (
                  <div className="p-1 sm:p-2" title="Cours en préparation">
                    <Loader2 
                      size={20} 
                      className="sm:w-6 sm:h-6 text-gray-400 animate-spin" 
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-8 sm:py-10 lg:py-[50px] mt-8 sm:mt-10 lg:mt-[50px] px-4">
        <p className="font-['Inter',Helvetica] font-bold italic text-[#1b2f76] text-sm sm:text-base lg:text-lg">
          2025 © Powered by Aumsoft
        </p>
      </footer>
    </>
  );
};