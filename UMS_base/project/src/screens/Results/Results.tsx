import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

interface Course {
  name: string;
  credits: string;
}

interface TeachingUnit {
  code: string;
  name: string;
  courses: Course[];
}

interface Semester {
  name: string;
  displayName: string;
  program: string;
  teachingUnits: TeachingUnit[];
  totalCredits: number;
}

const mockData: Semester[] = [
  {
    name: "semestre-1",
    displayName: "Semestre 1",
    program: "Année 1 – Licence Informatique",
    teachingUnits: [
      {
        code: "UE1",
        name: "Mathématiques Fondamentales I",
        courses: [
          { name: "Analyse Mathématique 1", credits: "3/4" },
          { name: "Algèbre Linéaire", credits: "3/4" }
        ]
      },
      {
        code: "UE2",
        name: "Programmation & Algorithmique I",
        courses: [
          { name: "Introduction à la Programmation (Python ou C)", credits: "3/5" },
          { name: "Algorithmique et Structures de Données 1", credits: "3/4" }
        ]
      },
      {
        code: "UE3",
        name: "Informatique Générale",
        courses: [
          { name: "Architecture des Ordinateurs", credits: "3/3" },
          { name: "Introduction aux Systèmes d'Exploitation", credits: "3/3" }
        ]
      },
      {
        code: "UE4",
        name: "Outils et Communication I",
        courses: [
          { name: "Bureautique et Outils Collaboratifs", credits: "1/2" },
          { name: "Anglais Scientifique 1", credits: "2/2" }
        ]
      },
      {
        code: "UE5",
        name: "Projet et Culture Informatique",
        courses: [
          { name: "Culture Numérique", credits: "1/1" },
          { name: "Mini Projet Encadré 1", credits: "2/2" },
          { name: "Méthodologie de Travail", credits: "1/1" }
        ]
      }
    ],
    totalCredits: 31
  },
  {
    name: "semestre-2",
    displayName: "Semestre 2",
    program: "Année 1 – Licence Informatique",
    teachingUnits: [
      {
        code: "UE1",
        name: "Mathématiques Fondamentales II",
        courses: [
          { name: "Analyse Mathématique 2", credits: "3/4" },
          { name: "Probabilités et Statistiques", credits: "3/3" }
        ]
      },
      {
        code: "UE2",
        name: "Programmation & Algorithmique II",
        courses: [
          { name: "Programmation Orientée Objet", credits: "4/5" },
          { name: "Algorithmique et Structures de Données 2", credits: "3/4" }
        ]
      },
      {
        code: "UE3",
        name: "Systèmes et Réseaux",
        courses: [
          { name: "Systèmes d'Exploitation", credits: "3/4" },
          { name: "Introduction aux Réseaux", credits: "2/3" }
        ]
      },
      {
        code: "UE4",
        name: "Outils et Communication II",
        courses: [
          { name: "Base de Données", credits: "3/3" },
          { name: "Anglais Scientifique 2", credits: "2/2" }
        ]
      },
      {
        code: "UE5",
        name: "Projet et Stage",
        courses: [
          { name: "Projet de Développement", credits: "3/3" },
          { name: "Stage d'Observation", credits: "1/1" }
        ]
      }
    ],
    totalCredits: 30
  }
];

export const Results: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState<string>("semestre-1");

  const currentSemester = mockData.find(semester => 
    semester.name === selectedSemester
  ) || mockData[0];

  return (
    <>
      <img
        className="w-full h-[3px] object-cover"
        alt="Line"
        src="/line-1.svg"
      />

      {/* Page title */}
      <section className="text-center px-4 sm:px-6 md:px-8 pt-8 sm:pt-10 md:pt-12 lg:pt-[50px] pb-6 sm:pb-8 md:pb-10 lg:pb-[30px] bg-[#eceef0]">
        <h1 className="font-['Inter',Helvetica] font-bold text-[#323954] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] leading-tight px-2">
          Résultats | {currentSemester.program}
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

      {/* Results content */}
      <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-[108px] py-6 sm:py-8 md:py-10 lg:py-[40px]">
        {/* Semester title */}
        <h2 className="font-['Inter',Helvetica] font-bold text-[#323954] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] mb-4 sm:mb-6 lg:mb-[30px]">
          {currentSemester.displayName}
        </h2>

        {/* Academic table */}
        <div className="bg-white overflow-x-auto">
          {/* Table header - Hidden on mobile, shown as cards instead */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-8 pb-4 border-b-2 border-[#323954] mb-6">
            <div className="font-['Inter',Helvetica] font-bold text-[#1b2f76] text-base lg:text-xl">
              Unité d'Enseignement (UE)
            </div>
            <div className="font-['Inter',Helvetica] font-bold text-[#1b2f76] text-base lg:text-xl">
              Cours (ECU)
            </div>
            <div className="font-['Inter',Helvetica] font-bold text-[#1b2f76] text-base lg:text-xl text-right">
              Crédits ECTS
            </div>
          </div>

          {/* Teaching units */}
          {currentSemester.teachingUnits.map((unit, unitIndex) => (
            <div key={unitIndex} className="mb-6 sm:mb-8">
              {/* Mobile: Unit header */}
              <div className="md:hidden mb-4 p-4 bg-[#1b2f76] text-white rounded-lg">
                <h3 className="font-['Inter',Helvetica] font-bold text-base sm:text-lg">
                  {unit.code} : {unit.name}
                </h3>
              </div>

              {unit.courses.map((course, courseIndex) => (
                <div key={courseIndex} className="mb-4 md:mb-0">
                  {/* Mobile: Card layout */}
                  <div className="md:hidden bg-gray-50 p-4 rounded-lg border-l-4 border-[#1b2f76]">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 pr-4">
                        <p className="font-['Inter',Helvetica] text-[#323954] text-sm sm:text-base font-medium">
                          {course.name}
                        </p>
                      </div>
                      <div className="font-['Inter',Helvetica] font-bold text-[#323954] text-sm sm:text-base">
                        {course.credits}
                      </div>
                    </div>
                  </div>

                  {/* Desktop: Grid layout */}
                  <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-8 py-3 border-b border-gray-200">
                    <div className="font-['Inter',Helvetica] text-[#323954] text-sm lg:text-lg">
                      {courseIndex === 0 && (
                        <div className="font-bold text-[#1b2f76]">
                          {unit.code} : {unit.name}
                        </div>
                      )}
                    </div>
                    <div className="font-['Inter',Helvetica] text-[#323954] text-sm lg:text-lg">
                      {course.name}
                    </div>
                    <div className="font-['Inter',Helvetica] font-bold text-[#323954] text-sm lg:text-lg text-right">
                      {course.credits}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Total */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-2 border-[#323954]">
            {/* Mobile: Card layout */}
            <div className="md:hidden bg-[#1b2f76] text-white p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-['Inter',Helvetica] font-bold text-base sm:text-lg">
                  Total {currentSemester.displayName}
                </span>
                <span className="font-['Inter',Helvetica] font-bold text-base sm:text-lg">
                  ECTS {currentSemester.totalCredits}
                </span>
              </div>
            </div>

            {/* Desktop: Grid layout */}
            <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-8">
              <div className="font-['Inter',Helvetica] font-bold text-[#1b2f76] text-lg lg:text-2xl">
                Total {currentSemester.displayName}
              </div>
              <div></div>
              <div className="font-['Inter',Helvetica] font-bold text-[#1b2f76] text-lg lg:text-2xl text-right">
                ECTS {currentSemester.totalCredits}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#eceef0] text-center py-6 sm:py-8 lg:py-[30px] px-4">
        <p className="font-['Inter',Helvetica] font-bold italic text-[#1b2f76] text-sm sm:text-base lg:text-lg">
          2025 © Powered by Aumsoft
        </p>
      </footer>
    </>
  );
};