import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

// Define option card data for mapping with routes
const optionCards = [
  {
    title: "Consulter vos cours",
    icon: "/course-assign.png",
    alt: "Course assign",
    route: "/courses",
  },
  {
    title: "Resultats des vos travaux",
    icon: "/pass-fail.png",
    alt: "Pass fail",
    route: "/results",
  },
  {
    title: "Vos documents academiques",
    icon: "/documents.png",
    alt: "Documents",
    route: "/documents",
  },
  {
    title: "Horraire des cours",
    icon: "/last-24-hours.png",
    alt: "Last hours",
    route: "/schedule",
  },
  {
    title: "Situation financiere",
    icon: "/finance.png",
    alt: "Finance",
    route: "/finance",
  },
  {
    title: "Deposer vos travaux",
    icon: "/upload.png",
    alt: "Upload",
    route: "/upload",
  },
  {
    title: "Soumettre vos recours",
    icon: "/demand.png",
    alt: "Demand",
    route: "/appeals",
  },
  {
    title: "Votre carte d'etudiant",
    icon: "/student-card.png",
    alt: "Student card",
    route: "/student-card",
  },
  {
    title: "Echanger avec vos professeurs",
    icon: "/chat-message.png",
    alt: "Chat message",
    route: "/chat",
  },
  {
    title: "Annonces officielles",
    icon: "/notification.png",
    alt: "Notification",
    route: "/announcements",
  },
];

// Define statistics data
const statistics = [
  { label: "Total étudiants", value: "2300", percentage: 100 },
  { label: "Totale Filles", value: "56%", percentage: 56 },
  { label: "Total Garcons", value: "44%", percentage: 44 },
];

export const DashbordStudent = (): JSX.Element => {
  return (
    <>
      <img
        className="w-full h-[3px] object-cover"
        alt="Line"
        src="/line-1.svg"
      />

      {/* Portal title and description */}
      <section className="text-center px-4 sm:px-6 md:px-8">
        <h2 className="mt-8 sm:mt-12 md:mt-16 lg:mt-[76px] font-['Inter',Helvetica] font-bold text-[#323954] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight">
          Portail Etudiant.
        </h2>

        <p className="mt-6 sm:mt-8 md:mt-10 lg:mt-[50px] mx-auto max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-[1206px] font-['Inter',Helvetica] font-normal text-[#323954] text-sm sm:text-base md:text-lg lg:text-xl xl:text-[25.5px] leading-relaxed px-4">
          Sur ce platforme vous pourvez consulter vos cours, les resultats
          des vos travaux,
          <br className="hidden sm:block" />
          telecharger vos document academiques, voir votre horraire de
          cours,
          <br className="hidden sm:block" />
          suivre votre situaion financiere, deposer vos travaux, soumettre
          vos recours et reclamations,
          <br className="hidden sm:block" />
          demander votre carte d'etudiant, echanger avec vos professeur et
          recevoir toutes les annonces
          <br className="hidden sm:block" />
          officielles de l'université.
        </p>

        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-[50px] flex justify-center px-4">
          <Select defaultValue="premiere-annee">
            <SelectTrigger className="w-full max-w-xs sm:w-[280px] md:w-[316px] h-12 sm:h-14 md:h-16 bg-[#1b2f76] text-white rounded-xl border-none text-sm sm:text-base">
              <SelectValue placeholder="Première année" />
              <ChevronDownIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-9 md:w-9" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="premiere-annee">Première année</SelectItem>
              <SelectItem value="deuxieme-annee">Deuxième année</SelectItem>
              <SelectItem value="troisieme-annee">
                Troisième année
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      <img
        className="w-full h-[3px] object-cover mt-8 sm:mt-10 md:mt-12 lg:mt-[50px]"
        alt="Line"
        src="/line-1.svg"
      />

      {/* Options table */}
      <section className="mt-6 sm:mt-8 md:mt-10 lg:mt-[42px] text-center px-4 sm:px-6 md:px-8">
        <h2 className="font-['Inter',Helvetica] font-bold text-[#323954] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight">
          Tableau d'options
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10 lg:mt-[50px] max-w-full lg:max-w-[1327px] mx-auto">
          {optionCards.map((option, index) => (
            <Link key={index} to={option.route}>
              <button className="w-full max-w-[280px] sm:max-w-none sm:w-full h-32 sm:h-36 md:h-40 lg:h-[164px] bg-[#1b2f76] rounded-xl border-none text-white hover:bg-[#2a3f8a] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col items-center justify-between p-3 sm:p-4 group mx-auto">
                <img
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[83px] lg:h-[79px] mt-1 sm:mt-2 group-hover:scale-110 transition-transform duration-300 object-contain"
                  alt={option.alt}
                  src={option.icon}
                />
                <p className="font-['Inter',Helvetica] font-medium text-xs sm:text-sm md:text-base lg:text-[20px] text-center leading-tight mb-1 sm:mb-2 group-hover:text-[#49f1fc] transition-colors duration-300 px-1">
                  {option.title}
                </p>
              </button>
            </Link>
          ))}
        </div>
      </section>

      {/* Statistics section */}
      <section className="mt-8 sm:mt-12 md:mt-16 lg:mt-[75px] px-4 sm:px-6 md:px-8 lg:px-[108px] pb-8 sm:pb-10 md:pb-12 lg:pb-[50px]">
        <Card className="bg-white rounded-2xl sm:rounded-3xl lg:rounded-[45px] p-4 sm:p-6 md:p-8 lg:p-12">
          <CardContent className="p-0 flex flex-col lg:flex-row">
            <div className="w-full lg:w-[427px] mb-6 lg:mb-0">
              <h2 className="font-['Inter',Helvetica] font-bold text-[#323954] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] leading-tight">
                Statistics de <br />
                l'université
              </h2>

              <p className="mt-6 sm:mt-8 md:mt-10 lg:mt-[50px] font-['Inter',Helvetica] text-[#323954] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[35px]">
                <span className="font-light">Année academique </span>
                <span className="font-bold">2025</span>
              </p>
            </div>

            <div className="flex-1 lg:ml-[86px]">
              {statistics.map((stat, index) => (
                <div key={index} className="mb-4 sm:mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-center">
                  <span className="w-full sm:w-[115px] font-['Inter',Helvetica] font-light italic text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-[25px] mb-2 sm:mb-0">
                    {stat.label}
                  </span>
                  <div className="flex-1 sm:mx-4">
                    <Progress
                      value={stat.percentage}
                      className="h-8 sm:h-12 md:h-16 lg:h-[69px] bg-[#1b2f76] rounded-lg sm:rounded-xl"
                    />
                  </div>
                  <span className="w-full sm:w-[70px] font-['Inter',Helvetica] font-bold italic text-[#323954] text-sm sm:text-base md:text-lg lg:text-xl xl:text-[25px] mt-2 sm:mt-0 text-right">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-[108px] py-6 sm:py-8 lg:py-[30px] space-y-4 sm:space-y-0">
        <p className="font-['Inter',Helvetica] font-bold italic text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-[25px] text-center sm:text-left">
          Powered by Aumsoft
        </p>

        <p className="font-['Inter',Helvetica] font-bold text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-[25px] text-center sm:text-right">
          Tout droit réserver <span className="italic">©</span> 2025
        </p>
      </footer>
    </>
  );
};