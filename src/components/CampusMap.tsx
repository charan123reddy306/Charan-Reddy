/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { MAP_LOCATIONS } from "../data/campusData";
import { MapLocation } from "../types";
import { Compass, BookOpen, Coffee, Home, Dumbbell, Star, Eye } from "lucide-react";

export default function CampusMap() {
  const [selectedLoc, setSelectedLoc] = useState<MapLocation>(MAP_LOCATIONS[0]);
  const [filterType, setFilterType] = useState<"all" | "academic" | "hostel" | "food" | "recreation">("all");

  const filteredLocations = filterType === "all"
    ? MAP_LOCATIONS
    : MAP_LOCATIONS.filter(l => l.type === filterType);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "academic":
        return <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case "food":
        return <Coffee className="w-4 h-4 text-orange-600 dark:text-orange-400" />;
      case "hostel":
        return <Home className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case "recreation":
        return <Dumbbell className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      default:
        return <Compass className="w-4 h-4 text-zinc-500" />;
    }
  };

  return (
    <div id="interactive-map-section" className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400">
            <Compass className="w-5 h-5 animate-spin-slow" />
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">Amaravati Interactive Campus Blueprint</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Insiders blueprint & landmark directory</p>
          </div>
        </div>

        {/* Category Toggles */}
        <div className="flex flex-wrap gap-1.5 bg-zinc-50 dark:bg-zinc-950/40 p-1 rounded-lg border border-zinc-100 dark:border-zinc-800">
          {(["all", "academic", "hostel", "food", "recreation"] as const).map(type => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                filterType === type
                  ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
              }`}
              id={`btn-map-filter-${type}`}
            >
              <span className="capitalize">{type}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Vector Simulated Canvas */}
        <div className="lg:col-span-7 bg-zinc-950 dark:bg-black rounded-xl p-4 border border-zinc-900 overflow-hidden relative min-h-[300px] flex items-center justify-center">
          {/* Blueprint background grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#09090b_1px,transparent_1px),linear-gradient(to_bottom,#09090b_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20"></div>
          <div className="absolute inset-0 bg-radial-gradient from-zinc-900/30 via-transparent to-transparent pointer-events-none"></div>

          {/* Connective Paths representation inside SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none select-none opacity-40">
            {/* Draw pathways between nodes */}
            <line x1="20%" y1="70%" x2="50%" y2="35%" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="75%" y1="70%" x2="50%" y2="35%" stroke="#e11d48" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="45%" y1="80%" x2="50%" y2="35%" stroke="#f97316" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="30%" y1="50%" x2="50%" y2="35%" stroke="#a855f7" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="45%" y1="80%" x2="20%" y2="70%" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="45%" y1="80%" x2="75%" y2="70%" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" />
          </svg>

          {/* Pathways Labels */}
          <div className="absolute top-[52%] left-[30%] -translate-x-1/2 -translate-y-1/2 text-[9px] font-mono font-bold text-zinc-650 tracking-wider uppercase pointer-events-none select-none">
            Main Pathway
          </div>
          <div className="absolute top-[40%] right-[22%] translate-x-1/2 translate-y-1/2 text-[9px] font-mono font-bold text-zinc-650 tracking-wider uppercase pointer-events-none select-none">
            Girls Walkway
          </div>

          {/* Interactive Plot Nodes */}
          {MAP_LOCATIONS.map((loc) => {
            const isSelected = selectedLoc.id === loc.id;
            const isVisible = filterType === "all" || loc.type === filterType;

            return (
              <button
                key={loc.id}
                onClick={() => setSelectedLoc(loc)}
                style={{ left: `${loc.coords.x}%`, top: `${loc.coords.y}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-xl transition-all duration-300 z-10 flex items-center gap-1.5 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-20 scale-90 pointer-events-none"
                } ${
                  isSelected
                    ? "bg-teal-500 text-black shadow-[0_0_15px_rgba(20,184,166,0.6)] font-bold scale-110"
                    : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
                title={loc.name}
                id={`node-${loc.id}`}
              >
                {getTypeIcon(loc.type)}
                <span className="text-[10px] hidden sm:inline whitespace-nowrap font-semibold">
                  {loc.name.split(" ")[0]}
                </span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping shrink-0" />
                )}
              </button>
            );
          })}

          <div className="absolute bottom-3 left-3 bg-zinc-900/80 backdrop-blur-sm border border-zinc-855 rounded-lg px-2.5 py-1 text-[9px] font-mono text-zinc-400">
            💡 Tap dots to preview landmark details and tips
          </div>
        </div>

        {/* Selected Location Card */}
        <div className="lg:col-span-5 flex flex-col justify-between border border-zinc-150 dark:border-zinc-800 rounded-xl p-5 bg-zinc-50 dark:bg-zinc-950/20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className={`p-1.5 rounded-lg shrink-0 ${
                selectedLoc.type === "academic" ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-400" :
                selectedLoc.type === "food" ? "bg-orange-100 text-orange-850 dark:bg-orange-950/50 dark:text-orange-450" :
                selectedLoc.type === "hostel" ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-400" :
                "bg-purple-100 text-purple-800 dark:bg-purple-950/50 dark:text-purple-400"
              }`}>
                {getTypeIcon(selectedLoc.type)}
              </span>
              <span className="text-xxs uppercase tracking-wider font-bold font-mono text-zinc-500">
                {selectedLoc.type} landmark
              </span>
            </div>

            <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2" id="val-map-loc-name">
              {selectedLoc.name}
            </h4>

            <p className="text-xs text-zinc-600 dark:text-zinc-355 leading-relaxed mb-4">
              {selectedLoc.description}
            </p>
          </div>

          <div className="border-t border-zinc-200 dark:border-zinc-800/80 pt-4">
            <div className="flex items-start gap-2.5 bg-yellow-50/50 dark:bg-amber-950/10 p-3 rounded-xl border border-yellow-100/30 dark:border-amber-900/20">
              <Star className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <span className="text-xs font-bold text-amber-800 dark:text-amber-400 block mb-1">
                  Senior's Survival Pro-Tip:
                </span>
                <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {selectedLoc.survivalTip}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
