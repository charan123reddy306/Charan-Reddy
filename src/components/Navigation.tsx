/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Compass, Menu, X, Sun, Moon } from "lucide-react";

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  activeSection: string;
}

export default function Navigation({ darkMode, setDarkMode, activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "academics", label: "Academics" },
    { id: "clubs", label: "Clubs & Extracurriculars" },
    { id: "hostel", label: "Campus & Hostel Life" },
    { id: "survival", label: "Survival Kit" },
    { id: "resources", label: "Must-Have Tools" }
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md shadow-sm border-b border-zinc-100 dark:border-zinc-900 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo & Branding */}
          <button
            onClick={() => handleScrollTo("home")}
            className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 hover:opacity-90 transition-opacity text-left bg-transparent border-0 cursor-pointer"
            id="nav-logo-button"
          >
            <Compass className="w-6 h-6 text-orange-650 dark:text-orange-450 animate-pulse" />
            <div>
              <span className="font-extrabold text-base tracking-tight block text-zinc-900 dark:text-zinc-50">Campus Compass</span>
              <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block -mt-1 font-medium font-mono">Amrita Amaravati July '26</span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1.5 bg-zinc-100/50 dark:bg-zinc-900/40 p-1 rounded-xl border border-zinc-200/20 dark:border-zinc-800/20">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    isActive
                      ? "bg-white dark:bg-zinc-800 text-orange-650 dark:text-orange-400 shadow-sm"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Dark Mode switcher */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-zinc-550 dark:text-zinc-350 hover:bg-zinc-100 dark:hover:bg-zinc-850/65 rounded-xl transition-all border border-zinc-200/10"
              title={darkMode ? "Switch to light theme" : "Switch to dark theme"}
              id="theme-switcher-btn"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
            </button>

            {/* CTA Join Hackathon */}
            <button
              onClick={() => handleScrollTo("academic-advisors")}
              className="px-3.5 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold shadow-sm hover:shadow-orange-700/20 shadow-orange-600/10 transition-all"
              id="nav-quick-calc-btn"
            >
              Attendance Advisor
            </button>
          </div>

          {/* Mobile elements */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Dark Mode switcher on mobile */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1 px-2.5 text-zinc-550 dark:text-zinc-350 hover:bg-zinc-100 dark:hover:bg-zinc-850/65 rounded-lg transition-all"
              id="theme-switcher-mobile"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-xl"
              aria-label="Toggle Menu"
              id="mobile-nav-toggle"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-lg border-b border-zinc-150 dark:border-zinc-850 py-4 px-4 space-y-2 z-40 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`w-full text-left p-3 text-xs font-bold rounded-xl transition-all block ${
                activeSection === item.id
                  ? "bg-zinc-100 dark:bg-zinc-800 text-orange-600 dark:text-orange-450"
                  : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900"
              }`}
              id={`nav-link-mobile-${item.id}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleScrollTo("academic-advisors")}
            className="w-full text-center p-3 text-xs font-bold rounded-xl bg-orange-650 text-white block"
            id="mobile-nav-calc"
          >
            Attendance Advisor Calculator
          </button>
        </div>
      )}
    </nav>
  );
}
