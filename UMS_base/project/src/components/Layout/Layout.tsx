import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white w-full max-w-[1512px] relative">
        {/* Header */}
        <header className="flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-[105px] py-4 md:py-[25px]">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                className="w-12 h-10 sm:w-16 sm:h-14 md:w-20 md:h-16 lg:w-[91px] lg:h-[75px] object-cover"
                alt="University logo"
                src="/rectangle-1.png"
              />
              <h1 className="ml-4 sm:ml-8 md:ml-12 lg:ml-[95px] font-['Inria_Serif',Helvetica] font-bold text-[#323954] text-lg sm:text-xl md:text-2xl lg:text-[35px]">
                University
              </h1>
            </Link>
          </div>

          <div className="flex items-center">
            {/* Desktop notifications and profile */}
            <div className="hidden md:flex items-center">
              <div className="relative mr-4 lg:mr-[58px]">
                <div className="w-8 h-8 lg:w-[49px] lg:h-[49px] bg-[url(/notifications.svg)] bg-[100%_100%]">
                  <div className="relative w-3 h-3 lg:w-[15px] lg:h-[15px] top-1 left-5 lg:top-1.5 lg:left-7 bg-[#49f1fc] rounded-full" />
                </div>
              </div>

              <div className="w-12 h-12 lg:w-[75px] lg:h-[75px] bg-[#1b2f76] rounded-full flex items-center justify-center">
                <span className="font-['Inter',Helvetica] font-bold text-white text-lg lg:text-[32px]">
                  DM
                </span>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-[#323954] hover:text-[#1b2f76] transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={toggleMobileMenu}>
            <div className="absolute right-0 top-0 h-full w-64 bg-[#1b2f76] shadow-lg transform transition-transform duration-300">
              <div className="p-4">
                <button
                  onClick={toggleMobileMenu}
                  className="absolute top-4 right-4 text-white hover:text-[#49f1fc]"
                >
                  <X size={24} />
                </button>
                
                {/* Mobile profile section */}
                <div className="flex items-center mb-8 mt-8">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                    <span className="font-['Inter',Helvetica] font-bold text-white text-lg">DM</span>
                  </div>
                  <div className="relative">
                    <div className="w-6 h-6 bg-[url(/notifications.svg)] bg-[100%_100%]">
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#49f1fc] rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Mobile navigation links */}
                <nav className="space-y-4">
                  <Link
                    to="/"
                    onClick={toggleMobileMenu}
                    className="block text-white font-['Inter',Helvetica] font-medium text-lg hover:text-[#49f1fc] transition-colors py-2"
                  >
                    Accueil
                  </Link>
                  <Link
                    to="/results"
                    onClick={toggleMobileMenu}
                    className={`block font-['Inter',Helvetica] font-medium text-lg transition-colors py-2 ${
                      location.pathname === "/results"
                        ? "text-[#49f1fc]"
                        : "text-white hover:text-[#49f1fc]"
                    }`}
                  >
                    Résultats
                  </Link>
                  <Link
                    to="/courses"
                    onClick={toggleMobileMenu}
                    className={`block font-['Inter',Helvetica] font-medium text-lg transition-colors py-2 ${
                      location.pathname === "/courses"
                        ? "text-[#49f1fc]"
                        : "text-white hover:text-[#49f1fc]"
                    }`}
                  >
                    Cours
                  </Link>
                  <Link
                    to="/documents"
                    onClick={toggleMobileMenu}
                    className={`block font-['Inter',Helvetica] font-medium text-lg transition-colors py-2 ${
                      location.pathname === "/documents"
                        ? "text-[#49f1fc]"
                        : "text-white hover:text-[#49f1fc]"
                    }`}
                  >
                    Documents
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        {location.pathname !== "/" && (
          <nav className="hidden md:block bg-[#1b2f76] px-4 sm:px-8 md:px-16 lg:px-[105px] py-4">
            <div className="flex items-center space-x-4 lg:space-x-8 overflow-x-auto">
              <Link
                to="/"
                className="text-white font-['Inter',Helvetica] font-medium text-base lg:text-lg hover:text-[#49f1fc] transition-colors whitespace-nowrap"
              >
                Accueil
              </Link>
              <Link
                to="/results"
                className={`font-['Inter',Helvetica] font-medium text-base lg:text-lg transition-colors whitespace-nowrap ${
                  location.pathname === "/results"
                    ? "text-[#49f1fc]"
                    : "text-white hover:text-[#49f1fc]"
                }`}
              >
                Résultats
              </Link>
              <Link
                to="/courses"
                className={`font-['Inter',Helvetica] font-medium text-base lg:text-lg transition-colors whitespace-nowrap ${
                  location.pathname === "/courses"
                    ? "text-[#49f1fc]"
                    : "text-white hover:text-[#49f1fc]"
                }`}
              >
                Cours
              </Link>
              <Link
                to="/documents"
                className={`font-['Inter',Helvetica] font-medium text-base lg:text-lg transition-colors whitespace-nowrap ${
                  location.pathname === "/documents"
                    ? "text-[#49f1fc]"
                    : "text-white hover:text-[#49f1fc]"
                }`}
              >
                Documents
              </Link>
            </div>
          </nav>
        )}

        {/* Main content */}
        <main className="bg-[#eceef0] min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
};