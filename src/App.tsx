/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import AttendanceAdvisor from "./components/AttendanceAdvisor";
import CgpaPlanner from "./components/CgpaPlanner";
import CampusMap from "./components/CampusMap";
import SurvivalQuiz from "./components/SurvivalQuiz";

import {
  ACADEMIC_BRANCHES,
  EXAM_PATTERN_INFO,
  CLUBS_DATA,
  HOSTE_LIFE_DATA,
  SURVIVAL_TIPS,
  RESOURCE_LINKS,
  ATTENDANCE_RULES_INFO
} from "./data/campusData";

import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Compass,
  Cpu,
  CornerDownRight,
  ExternalLink,
  Flame,
  Github,
  HelpCircle,
  MapPin,
  ShieldAlert,
  Terminal,
  Trophy,
  Users,
  Utensils,
  XCircle,
  Sparkles,
  Search,
  BookMarked
} from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Filter state for clubs
  const [clubCategory, setClubCategory] = useState<"all" | "Technical" | "Cultural" | "Social" | "Sports">("all");
  // Search filter for resources
  const [resourceSearch, setResourceSearch] = useState<string>("");
  const [resourceCategory, setResourceCategory] = useState<string>("all");

  // Track scroll positions to update active section in header navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "academics", "clubs", "hostel", "survival", "resources"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredClubs = clubCategory === "all"
    ? CLUBS_DATA
    : CLUBS_DATA.filter(c => c.category === clubCategory);

  const filteredResources = RESOURCE_LINKS.filter(res => {
    const matchesSearch = res.name.toLowerCase().includes(resourceSearch.toLowerCase()) ||
                          res.description.toLowerCase().includes(resourceSearch.toLowerCase());
    const matchesCategory = resourceCategory === "all" || res.category === resourceCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 min-h-screen font-sans transition-colors duration-300">
        
        {/* Navigation Bar */}
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} activeSection={activeSection} />

        {/* 1. HERO / HOME SECTION */}
        <header
          id="home"
          className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden border-b border-zinc-100 dark:border-zinc-900"
        >
          {/* Subtle colored accent shapes */}
          <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Hackathon banner badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400 text-xs font-bold font-mono mb-6 border border-orange-200/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chakravyuha Club - Build With AI Challenge 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white max-w-4xl mx-auto leading-tight">
              Your Essential Guide to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-indigo-500">Amrita Amaravati</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-650 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Welcome freshers of the **July 2026 Batch**! Excited but have no clue where to go, what to wear, and how to stay above the dreaded 75% attendance line? Your seniors have built this interactive manual to help you thrive from day one.
            </p>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
              <div className="bg-white dark:bg-zinc-900/55 p-3.5 rounded-2xl border border-zinc-150 dark:border-zinc-850 text-center shadow-sm">
                <span className="text-xs uppercase font-bold text-zinc-455 tracking-wider block mb-1">Attendance Limit</span>
                <span className="text-lg font-black font-mono text-orange-650 dark:text-orange-450">75% Strict</span>
              </div>
              <div className="bg-white dark:bg-zinc-900/55 p-3.5 rounded-2xl border border-zinc-150 dark:border-zinc-850 text-center shadow-sm">
                <span className="text-xs uppercase font-bold text-zinc-455 tracking-wider block mb-1">Hostel Curfew</span>
                <span className="text-lg font-black font-mono text-indigo-650 dark:text-indigo-400">6:30 PM Gate</span>
              </div>
              <div className="bg-white dark:bg-zinc-900/55 p-3.5 rounded-2xl border border-zinc-150 dark:border-zinc-850 text-center shadow-sm">
                <span className="text-xs uppercase font-bold text-zinc-455 tracking-wider block mb-1">Food Guidelines</span>
                <span className="text-lg font-black font-mono text-emerald-650 dark:text-emerald-400">Pure Veg Only</span>
              </div>
              <div className="bg-white dark:bg-zinc-900/55 p-3.5 rounded-2xl border border-zinc-150 dark:border-zinc-850 text-center shadow-sm">
                <span className="text-xs uppercase font-bold text-zinc-455 tracking-wider block mb-1">Target CGPA</span>
                <span className="text-lg font-black font-mono text-amber-500">8.5+ Preferred</span>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a
                href="#academics"
                className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-black font-bold text-sm shadow-sm transition-all"
              >
                Explore Academic Tips
              </a>
              <a
                href="#survival"
                className="px-6 py-3 rounded-xl bg-white hover:bg-zinc-50 text-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-850 dark:text-zinc-150 font-bold text-sm shadow-sm border border-zinc-200 dark:border-zinc-800 transition-all"
              >
                Take Survival Quiz
              </a>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-28">

          {/* 2. ACADEMIC LIFE SECTION */}
          <section id="academics" className="scroll-mt-24 space-y-12">
            <div className="border-l-4 border-orange-600 pl-4">
              <span className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest block mb-1">Section 01</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">Academic Performance & Regulations</h2>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">Navigate branches, lab patterns, continuous evaluations, and plan your target SGPA index.</p>
            </div>

            {/* Branches list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {ACADEMIC_BRANCHES.map((branch, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-850 p-5 hover:border-orange-500/30 transition-all shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center font-bold text-xs mb-4 font-mono">
                      0{index + 1}
                    </div>
                    <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{branch.name}</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                      {branch.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                    <span className="text-[10px] font-mono font-bold uppercase text-zinc-400 block">Focus Core Tracks:</span>
                    <span className="text-xs text-orange-600 dark:text-orange-400 font-semibold">{branch.focusArea}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* GPA target simulator and Attendance Margin advisor widgets */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="academic-advisors">
              <AttendanceAdvisor />
              <CgpaPlanner />
            </div>

            {/* Exam Pattern & breakdown table */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-105 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <BookMarked className="w-5 h-5 text-indigo-500" />
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-base">Amrita Examination & Evaluation Blueprint (50-50 Rule)</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {EXAM_PATTERN_INFO.breakdown.map((exam, idx) => (
                  <div key={idx} className="bg-zinc-50 dark:bg-zinc-950/30 rounded-xl p-4 border border-zinc-100 dark:border-zinc-850">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">{exam.name}</span>
                      <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/55 text-indigo-600 dark:text-indigo-400">
                        {exam.weight}
                      </span>
                    </div>
                    <div className="text-[10px] text-zinc-400 mb-2 font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3" /> duration: {exam.duration}
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-450 leading-relaxed">
                      {exam.focus}
                    </p>
                  </div>
                ))}
              </div>

              {/* CGPA Booster Tips */}
              <div className="mt-8 border-t border-zinc-150 dark:border-zinc-800/80 pt-6">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-200 mb-4 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
                  Grade-Booster Tips from Rank 1 Seniors
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {EXAM_PATTERN_INFO.cgpaTips.map((tip, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start">
                      <CornerDownRight className="w-4 h-4 text-orange-600 mt-0.5 shrink-0" />
                      <div>
                        <strong className="text-xs font-bold text-zinc-800 dark:text-zinc-200 block mb-0.5">
                          {tip.title}
                        </strong>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                          {tip.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 3. CLUBS & EXTRA-CURRICULARS SECTION */}
          <section id="clubs" className="scroll-mt-24 space-y-8">
            <div className="border-l-4 border-indigo-600 pl-4">
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest block mb-1">Section 02</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">Active Student Clubs & Societies</h2>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">Join technical chapters to accelerate your career or release your stress performing on fests.</p>
            </div>

            {/* Club Categories Filter Buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              {([
                { id: "all", label: "All Clubs" },
                { id: "Technical", label: "Technical Core" },
                { id: "Cultural", label: "Creative & Arts" },
                { id: "Social", label: "Social Outreach" },
                { id: "Sports", label: "Sports Council" }
              ] as const).map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setClubCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all ${
                    clubCategory === cat.id
                      ? "bg-indigo-600 border-indigo-600 text-white shadow-sm shadow-indigo-600/10"
                      : "bg-white hover:bg-zinc-50 border-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800/60 dark:border-zinc-800 text-zinc-650 dark:text-zinc-350"
                  }`}
                  id={`btn-club-filter-category-${cat.id}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Club Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClubs.map((club) => (
                <div
                  key={club.id}
                  className={`bg-white dark:bg-zinc-900 rounded-2xl border p-5 shadow-sm hover:translate-y-[-2px] transition-all duration-350 flex flex-col justify-between ${
                    club.id === "chakravyuha"
                      ? "border-orange-500/40 shadow-md ring-1 ring-orange-500/10"
                      : "border-zinc-120 dark:border-zinc-850"
                  }`}
                >
                  <div>
                    {/* Club header */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className={`text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full border-0 uppercase ${
                        club.category === "Technical" ? "bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-400" :
                        club.category === "Cultural" ? "bg-purple-50 text-purple-750 dark:bg-purple-950/40 dark:text-purple-400" :
                        club.category === "Sports" ? "bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-400" :
                        "bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-400"
                      }`}>
                        {club.category}
                      </span>
                      {club.id === "chakravyuha" && (
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-gradient-to-r from-orange-600 to-amber-500 text-white animate-pulse">
                          Challenge Host
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm flex items-center gap-1.5">
                      {club.name}
                    </h3>

                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2.5">
                      {club.description}
                    </p>

                    <div className="mt-4 space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                      <div>
                        <strong className="text-[10px] font-mono font-extrabold uppercase text-indigo-650 dark:text-indigo-400 block mb-1">
                          ✨ Why It Matters:
                        </strong>
                        <p className="text-xs text-zinc-650 dark:text-zinc-350 leading-relaxed">
                          {club.whyItMatters}
                        </p>
                      </div>

                      <div>
                        <strong className="text-[10px] font-mono font-extrabold uppercase text-zinc-400 block mb-1">
                          🛠️ Recruitment Blueprint:
                        </strong>
                        <p className="text-xs text-zinc-550 dark:text-zinc-400 leading-relaxed">
                          {club.howToJoin}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-805">
                    {club.id === "chakravyuha" ? (
                      <div className="bg-orange-50/50 dark:bg-orange-950/10 p-2.5 rounded-lg border border-orange-100/30 text-[11px] font-semibold text-center text-orange-850 dark:text-orange-400">
                        🔥 August recruitment cycle is waiting. Keep GitHub accounts ready!
                      </div>
                    ) : (
                      <span className="text-[10px] text-zinc-400 font-medium">Check notifications boards during mid-August fests!</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. CAMPUS & HOSTEL LIFE SECTION */}
          <section id="hostel" className="scroll-mt-24 space-y-12">
            <div className="border-l-4 border-teal-600 pl-4">
              <span className="text-xs font-mono font-bold text-teal-600 uppercase tracking-widest block mb-1">Section 03</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">Campus & Hostel Routine</h2>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">Get custom mapping directions, preview daily hostel schedules, and scan strict dining rules.</p>
            </div>

            {/* Simulated interactive map location indicator widget */}
            <CampusMap />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Daily Schedule Timeline */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-5 h-5 text-indigo-500" />
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Hosteler Daily Time Schedule</h3>
                </div>
                <div className="relative border-l border-zinc-200 dark:border-zinc-800 pl-4 space-y-6">
                  {HOSTE_LIFE_DATA.dailySchedule.map((sched, idx) => (
                    <div key={idx} className="relative">
                      {/* Timeline dot */}
                      <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-neutral-100 dark:ring-neutral-900" />
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold font-mono text-indigo-600 dark:text-indigo-400">{sched.time}</span>
                      </div>
                      <p className="text-xs text-zinc-600 dark:text-zinc-350 leading-relaxed">
                        {sched.activity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vegetarian Mandate rules & Settle-In Packing tips */}
              <div className="space-y-6">
                {/* Veg Mandate */}
                <div className="bg-white dark:bg-zinc-900 border border-emerald-500/20 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row gap-5 items-start">
                  <div className="p-3 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 rounded-2xl shrink-0">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-zinc-900 dark:text-emerald-400 uppercase tracking-wider mb-2">
                      {HOSTE_LIFE_DATA.foodRules.title}
                    </h3>
                    <p className="text-xs text-zinc-650 dark:text-zinc-300 leading-relaxed">
                      {HOSTE_LIFE_DATA.foodRules.text}
                    </p>
                    <div className="mt-3 bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100/30 p-2.5 rounded-lg text-xxs font-mono text-emerald-805 dark:text-emerald-400">
                      💡 Pro Senior Tip: {HOSTE_LIFE_DATA.foodRules.proTip}
                    </div>
                  </div>
                </div>

                {/* Settle-In tips */}
                <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm mb-4">Settle-In Packing Essentials (Strictly Bring These!)</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {HOSTE_LIFE_DATA.settlingTips.map((tip, idx) => (
                      <div key={idx} className="bg-zinc-50 dark:bg-zinc-950/20 p-3.5 rounded-xl border border-zinc-100 dark:border-zinc-850">
                        <strong className="text-xs font-bold text-zinc-800 dark:text-zinc-200 block mb-1">
                          🎒 {tip.title}
                        </strong>
                        <p className="text-xxs leading-relaxed text-zinc-500 dark:text-zinc-400">
                          {tip.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. SURVIVAL KIT SECTION (DO'S & DON'TS) */}
          <section id="survival" className="scroll-mt-24 space-y-12">
            <div className="border-l-4 border-rose-600 pl-4">
              <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-widest block mb-1">Section 04</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">Senior's Survival Kit & Quiz</h2>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">Acclimate to strict campus policies, bypass disciplinary commit sanctions, and test your readiness.</p>
            </div>

            {/* Dos and Donts Grid list */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Do's section */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6 text-emerald-650 dark:text-emerald-450 border-b border-zinc-50 dark:border-zinc-800 pb-3">
                  <CheckCircle className="w-5 h-5" />
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Essential Campus DO's</h3>
                </div>
                <div className="space-y-4">
                  {SURVIVAL_TIPS.filter(t => t.type === "do").map((tip) => (
                    <div key={tip.id} className="relative pl-6">
                      <span className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <h4 className="text-xs font-bold text-zinc-850 dark:text-zinc-150 mb-1">{tip.title}</h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-405 leading-relaxed mb-1.5">
                        {tip.description}
                      </p>
                      <span className="inline-block text-[10px] font-mono uppercase font-bold text-zinc-400">
                        Impact: <span className="text-emerald-600 font-semibold">{tip.impact}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dont's section */}
              <div className="bg-white dark:bg-zinc-900 border border-zinc-150/40 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6 text-rose-650 dark:text-rose-450 border-b border-zinc-50 dark:border-zinc-800 pb-3">
                  <XCircle className="w-5 h-5" />
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">Devastating Campus DONT's (Avoid DISCO warnings!)</h3>
                </div>
                <div className="space-y-4">
                  {SURVIVAL_TIPS.filter(t => t.type === "dont").map((tip) => (
                    <div key={tip.id} className="relative pl-6">
                      <span className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <h4 className="text-xs font-bold text-zinc-850 dark:text-zinc-150 mb-1">{tip.title}</h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-405 leading-relaxed mb-1.5">
                        {tip.description}
                      </p>
                      <span className="inline-block text-[10px] font-mono uppercase font-bold text-zinc-400">
                        Risk Rank: <span className="text-rose-600 font-semibold">{tip.impact}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fun Survival quiz widget */}
            <SurvivalQuiz />
          </section>

          {/* 6. MUST-HAVE TOOLS & RESOURCES */}
          <section id="resources" className="scroll-mt-24 space-y-8">
            <div className="border-l-4 border-blue-600 pl-4">
              <span className="text-xs font-mono font-bold text-blue-600 tracking-widest uppercase block mb-1">Section 05</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">Required Tools & Tech Resources</h2>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">Official digital links, online portals, student code benefits, and software compilers for CSE candidates.</p>
            </div>

            {/* Filters and search block */}
            <div className="flex flex-col md:flex-row items-center gap-4 bg-white dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800 p-4 rounded-2xl">
              <div className="w-full md:w-72 relative">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={resourceSearch}
                  onChange={(e) => setResourceSearch(e.target.value)}
                  className="w-full bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-xs focus:ring-1 focus:ring-indigo-500 focus:outline-none focus:border-indigo-500 text-zinc-800 dark:text-zinc-250"
                  id="inp-search-resource"
                />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {(["all", "Academics", "Coding", "Campus Life", "Utilities"] as const).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setResourceCategory(cat)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold border transition-colors ${
                      resourceCategory === cat
                        ? "bg-zinc-900 border-zinc-900 text-white dark:bg-zinc-100 dark:border-zinc-100 dark:text-black"
                        : "bg-transparent hover:bg-zinc-50 border-zinc-200 dark:hover:bg-zinc-800/50 dark:border-zinc-800 text-zinc-500"
                    }`}
                    id={`btn-res-cat-${cat}`}
                  >
                    {cat === "all" ? "All categories" : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Resource Bento Grid list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((res) => (
                <div
                  key={res.id}
                  className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-850 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Item header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${
                        res.importance === "Mandatory" ? "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-400 dark:border-red-900" :
                        res.importance === "Highly Useful" ? "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-400 dark:border-indigo-900" :
                        "bg-zinc-50 text-zinc-650 border-zinc-200 dark:bg-zinc-950 dark:text-zinc-400"
                      }`}>
                        {res.importance}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-mono font-medium capitalize">{res.category}</span>
                    </div>

                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-150 mb-2">
                      {res.name}
                    </h4>

                    <p className="text-xs text-zinc-500 dark:text-zinc-405 leading-relaxed">
                      {res.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-zinc-100 dark:border-zinc-800/80 flex justify-end">
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-indigo-650 dark:text-indigo-455 font-bold hover:underline"
                      id={`link-ext-resource-${res.id}`}
                    >
                      <span>Visit Platform</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}

              {filteredResources.length === 0 && (
                <div className="col-span-full text-center py-10 bg-zinc-50/50 dark:bg-zinc-950/15 rounded-2xl border border-dashed border-zinc-200">
                  <HelpCircle className="w-8 h-8 text-zinc-300 mx-auto mb-2" />
                  <span className="text-xs text-zinc-450 font-bold">No tech resources match your current filters. Clear searches and retry!</span>
                </div>
              )}
            </div>
          </section>

          {/* Collapsible AI Tool Usage Note as requested by challenge deliverables */}
          <section className="bg-zinc-100/50 dark:bg-zinc-900/30 rounded-2xl border border-zinc-200/20 p-6 max-w-4xl mx-auto my-12 shadow-sm text-xs text-zinc-500">
            <h3 className="font-bold text-zinc-800 dark:text-zinc-200 text-sm mb-3 flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-orange-650 dark:text-orange-450" />
              Build with AI Challenge Deliverable: AI Tooling Usage Statement
            </h3>
            <p className="leading-relaxed">
              This static <strong>Campus Compass handbook</strong> has been developed entirely utilizing modern, free <strong>Generative AI helpers (Gemini models via Google AI Studio)</strong>. The AI assisted with structuring the React architecture, separating the large Andhra Pradesh Amrita Amaravati state profiles into a safe, type-safe data model (<em>campusData.ts</em>), and composing the interactive UI controllers. Specifically, the model expedited styling loops through utility Tailwind configurations and engineered calculation formulas supporting the 75% Attendance Advisor and SGPA targets.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 gap-4 pt-3 border-t border-zinc-200/40">
              <div>
                <strong>💡 Used AI toolings:</strong> Gemini Flash model (Build assistance & code automation).
              </div>
              <div>
                <strong>🚀 Deliverables Checklist:</strong> 6 Mandatory Sections ✔, Static Site ✔, Amrita-Specific Details ✔.
              </div>
            </div>
          </section>

        </main>

        {/* Footer block */}
        <footer className="border-t border-zinc-200/50 dark:border-zinc-900 py-12 text-center text-xs text-zinc-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="flex justify-center items-center gap-2">
              <Compass className="w-4 h-4 text-orange-500" />
              <span className="font-bold font-mono tracking-tight text-zinc-900 dark:text-zinc-400">Campus Compass '26 Handbook</span>
            </div>
            <p className="max-w-md mx-auto leading-relaxed">
              A static freshman guide designed and built single-handedly for the Amrita Vishwa Vidyapeetham, Amaravati Build with AI Hackathon. Inspired by Chakravyuha Seniors.
            </p>
            <p className="text-[10px] font-mono text-zinc-500">
              © June 2026. Strictly client-side execution. All rights reserved.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}
