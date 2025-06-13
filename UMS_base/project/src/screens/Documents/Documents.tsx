import React from "react";
import { FileText, Award, Activity, ArrowLeftRight, Baby, Mail } from "lucide-react";

interface Document {
  title: string;
  icon: React.ReactNode;
  status: "available" | "pending" | "processing";
}

const documents: Document[] = [
  {
    title: "Diplôme d'Etat",
    icon: <FileText size={32} className="text-white" />,
    status: "available"
  },
  {
    title: "Bulletin 5 & 6 ème année",
    icon: <FileText size={32} className="text-white" />,
    status: "available"
  },
  {
    title: "Aptitude physique",
    icon: <Activity size={32} className="text-white" />,
    status: "processing"
  },
  {
    title: "Equivalence",
    icon: <ArrowLeftRight size={32} className="text-white" />,
    status: "pending"
  },
  {
    title: "Acte de naissance",
    icon: <Baby size={32} className="text-white" />,
    status: "available"
  },
  {
    title: "Lettre de récommendation",
    icon: <Mail size={32} className="text-white" />,
    status: "available"
  }
];

export const Documents: React.FC = () => {
  const handleDocumentClick = (documentTitle: string, status: string) => {
    if (status === "available") {
      console.log(`Téléchargement du document: ${documentTitle}`);
      // Simulate document download
    } else if (status === "processing") {
      console.log(`Document en cours de traitement: ${documentTitle}`);
    } else {
      console.log(`Document en attente: ${documentTitle}`);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-[#1b2f76] hover:bg-[#2a3f8a]";
      case "processing":
        return "bg-[#4a90e2] hover:bg-[#5ba0f2]";
      case "pending":
        return "bg-[#6c757d] hover:bg-[#7c858d]";
      default:
        return "bg-[#1b2f76] hover:bg-[#2a3f8a]";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "available":
        return "Disponible";
      case "processing":
        return "En traitement";
      case "pending":
        return "En attente";
      default:
        return "";
    }
  };

  return (
    <>
      <img
        className="w-full h-[3px] object-cover"
        alt="Line"
        src="/line-1.svg"
      />

      {/* Page title */}
      <section className="text-center px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-20 lg:pt-[80px] pb-8 sm:pb-12 md:pb-16 lg:pb-[60px] bg-[#eceef0]">
        <h1 className="font-['Inter',Helvetica] font-bold text-[#323954] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] leading-tight">
          Vos documents académiques
        </h1>
      </section>

      {/* Documents grid */}
      <section className="bg-[#eceef0] px-4 sm:px-6 md:px-8 lg:px-[108px] py-8 sm:py-12 md:py-16 lg:py-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-[1200px] mx-auto">
          {documents.map((document, index) => (
            <button
              key={index}
              onClick={() => handleDocumentClick(document.title, document.status)}
              className={`${getStatusColor(document.status)} rounded-2xl sm:rounded-3xl lg:rounded-[20px] p-4 sm:p-6 md:p-8 text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-between min-h-[100px] sm:min-h-[120px] group w-full`}
            >
              <div className="flex items-center flex-1">
                <div className="mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-8 lg:h-8 xl:w-10 xl:h-10 flex items-center justify-center">
                    {React.cloneElement(document.icon as React.ReactElement, {
                      size: window.innerWidth >= 1024 ? 32 : window.innerWidth >= 640 ? 28 : 24
                    })}
                  </div>
                </div>
                <div className="text-left flex-1">
                  <h3 className="font-['Inter',Helvetica] font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mb-1 sm:mb-2 leading-tight">
                    {document.title}
                  </h3>
                  <p className="font-['Inter',Helvetica] font-medium text-xs sm:text-sm md:text-base opacity-90">
                    {getStatusText(document.status)}
                  </p>
                </div>
              </div>
              
              <div className="ml-2 sm:ml-4 flex-shrink-0">
                {document.status === "available" ? (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                    <FileText size={window.innerWidth >= 640 ? 24 : 20} className="text-white" />
                  </div>
                ) : document.status === "processing" ? (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full opacity-60"></div>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Information section */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-[60px] bg-white rounded-2xl sm:rounded-3xl lg:rounded-[20px] p-4 sm:p-6 md:p-8 max-w-[1200px] mx-auto shadow-lg">
          <h2 className="font-['Inter',Helvetica] font-bold text-[#323954] text-lg sm:text-xl md:text-2xl lg:text-[28px] mb-4 sm:mb-6">
            Informations importantes
          </h2>
          <div className="space-y-3 sm:space-y-4 text-[#323954]">
            <p className="font-['Inter',Helvetica] text-sm sm:text-base md:text-lg">
              • Les documents marqués comme "Disponible" peuvent être téléchargés immédiatement
            </p>
            <p className="font-['Inter',Helvetica] text-sm sm:text-base md:text-lg">
              • Les documents "En traitement" seront disponibles sous 48-72 heures
            </p>
            <p className="font-['Inter',Helvetica] text-sm sm:text-base md:text-lg">
              • Les documents "En attente" nécessitent une action de votre part ou sont en cours de validation
            </p>
            <p className="font-['Inter',Helvetica] text-sm sm:text-base md:text-lg">
              • Pour toute question, contactez le service académique à l'adresse: documents@university.edu
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#eceef0] text-center py-8 sm:py-10 lg:py-[50px] px-4">
        <p className="font-['Inter',Helvetica] font-bold italic text-[#1b2f76] text-sm sm:text-base lg:text-lg">
          2025 © Powered by Aumsoft
        </p>
      </footer>
    </>
  );
};