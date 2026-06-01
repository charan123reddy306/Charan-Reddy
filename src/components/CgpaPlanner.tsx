/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { GraduationCap, Award, RefreshCw, Calculator } from "lucide-react";

interface SemSubject {
  code: string;
  name: string;
  credits: number;
  expectedGrade: string; // "O" | "A+" | "A" | "B+" | "B" | "C" | "P" | "F"
}

const GRADE_VALUES: Record<string, number> = {
  "O": 10,
  "A+": 9,
  "A": 8,
  "B+": 7,
  "B": 6,
  "C": 5,
  "P": 4,
  "F": 0
};

const INITIAL_SUBJECTS: SemSubject[] = [
  { code: "24MAT101", name: "Calculus & Matrix Algebra", credits: 4, expectedGrade: "A+" },
  { code: "24PHY101", name: "Physics for Computing", credits: 3, expectedGrade: "A" },
  { code: "24PHY181", name: "Physics Computing Lab", credits: 1, expectedGrade: "O" },
  { code: "24CSE101", name: "Computer Programming in C", credits: 4, expectedGrade: "A+" },
  { code: "24CSE181", name: "Programming Practice Lab", credits: 1.5, expectedGrade: "O" },
  { code: "24ENG101", name: "Communicative English", credits: 2, expectedGrade: "B+" },
  { code: "24CUL101", name: "Cultural Education I", credits: 2, expectedGrade: "A" }
];

export default function CgpaPlanner() {
  const [subjects, setSubjects] = useState<SemSubject[]>(INITIAL_SUBJECTS);

  const handleGradeChange = (code: string, newGrade: string) => {
    setSubjects(prev =>
      prev.map(sub => sub.code === code ? { ...sub, expectedGrade: newGrade } : sub)
    );
  };

  const calculateSgpa = () => {
    let totalGradeWeightedPoints = 0;
    let totalCredits = 0;

    subjects.forEach(sub => {
      const gValue = GRADE_VALUES[sub.expectedGrade] ?? 0;
      totalGradeWeightedPoints += gValue * sub.credits;
      totalCredits += sub.credits;
    });

    if (totalCredits <= 0) return 0;
    return parseFloat((totalGradeWeightedPoints / totalCredits).toFixed(2));
  };

  const sgpa = calculateSgpa();

  let adviceMessage = "";
  let adviceColor = "";

  if (sgpa >= 9.0) {
    adviceMessage = "Elite Academic Level! Excellent for high placements, research fellowships, and global studies.";
    adviceColor = "text-emerald-700 dark:text-emerald-400";
  } else if (sgpa >= 8.5) {
    adviceMessage = "Superb! Highly safe zone. Touches almost all elite company cut-offs (CTC > 15 LPA) on campus.";
    adviceColor = "text-indigo-700 dark:text-indigo-400";
  } else if (sgpa >= 8.0) {
    adviceMessage = "Strong Stand! Very solid. Keep it above 8.0 to qualify for major recruitment pools.";
    adviceColor = "text-blue-700 dark:text-blue-400";
  } else if (sgpa >= 7.5) {
    adviceMessage = "Good. However, start focusing deeper on computer programming to lift your score past 8.0 next semester.";
    adviceColor = "text-amber-700 dark:text-amber-400";
  } else {
    adviceMessage = "Academic Alert! Try to target at least 7.5 to avoid filters during pre-placement screenings.";
    adviceColor = "text-red-600 dark:text-red-400";
  }

  return (
    <div id="cgpa-planner" className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">CSE Semester-1 SGPA Planner</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Model Credit weights for Amrita Core Curriculum</p>
          </div>
        </div>
        <button
          onClick={() => setSubjects(INITIAL_SUBJECTS)}
          className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
          title="Reset back to standard grades"
          id="btn-cpga-reset"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Course Grades Table */}
        <div className="lg:col-span-7 space-y-3.5">
          <div className="grid grid-cols-12 text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider pb-1 px-2 border-b border-zinc-100 dark:border-zinc-800">
            <span className="col-span-3">Code</span>
            <span className="col-span-5">Course Title</span>
            <span className="col-span-2 text-center">credits</span>
            <span className="col-span-2 text-right">grade</span>
          </div>

          <div className="space-y-2 max-h-[350px] overflow-y-auto pr-1">
            {subjects.map(sub => (
              <div
                key={sub.code}
                className="grid grid-cols-12 items-center text-sm text-zinc-600 dark:text-zinc-300 bg-zinc-50/50 dark:bg-zinc-950/20 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 p-2.5 rounded-lg border border-zinc-100 dark:border-zinc-850 transition-colors"
              >
                <code className="col-span-3 text-xs font-mono font-semibold text-zinc-500">{sub.code}</code>
                <span className="col-span-5 text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate">{sub.name}</span>
                <span className="col-span-2 text-center font-mono text-xs text-zinc-500">{sub.credits}</span>
                <div className="col-span-2 text-right">
                  <select
                    value={sub.expectedGrade}
                    onChange={(e) => handleGradeChange(sub.code, e.target.value)}
                    className="text-xs bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded p-1 font-bold font-mono text-zinc-800 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    id={`sel-${sub.code}`}
                  >
                    {Object.keys(GRADE_VALUES).map(g => (
                      <option key={g} value={g}>{g} ({GRADE_VALUES[g]} pts)</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Calculator Indicator */}
        <div className="lg:col-span-5 flex flex-col justify-between border border-zinc-100 dark:border-zinc-850 rounded-xl p-5 bg-indigo-50/20 dark:bg-indigo-950/10">
          <div className="text-center pt-2 pb-5">
            <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2 block">
              Anticipated First Semester SGPA
            </span>
            <div className="flex justify-center items-baseline gap-2 mb-2">
              <span className="text-6xl font-black text-indigo-700 dark:text-indigo-400 tracking-tight" id="val-sgpa-value">
                {sgpa}
              </span>
              <span className="text-lg text-zinc-400">/ 10</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900 text-xs font-semibold text-zinc-700 dark:text-zinc-350 shadow-sm border border-indigo-100/30">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>Total Credits: 17.5</span>
            </div>
          </div>

          <div className="border-t border-indigo-100/40 dark:border-indigo-900/40 pt-4 space-y-3">
            <div className="flex items-start gap-2.5">
              <Calculator className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
              <div>
                <p className={`text-xs font-bold ${adviceColor}`}>
                  {adviceMessage}
                </p>
                <p className="text-xxs text-zinc-500 mt-1 leading-relaxed">
                  Tip: AUMS calculates grade points via course credits. Lab marks carry heavy credit multiplier effects relative to exam timings!
                </p>
              </div>
            </div>

            {/* Scale guide */}
            <div className="bg-white/60 dark:bg-zinc-950/40 p-2.5 rounded-lg text-xxs text-zinc-500 dark:text-zinc-400 space-y-1 font-mono">
              <div className="font-semibold text-zinc-700 dark:text-zinc-300 mb-1">Amrita Grade Score Index (10 pt Scale)</div>
              <div className="grid grid-cols-4 gap-1">
                <span>O : 10 (91-100)</span>
                <span>A+: 9 (81-90)</span>
                <span>A : 8 (71-80)</span>
                <span>B+: 7 (61-70)</span>
                <span>B : 6 (51-60)</span>
                <span>C : 5 (41-50)</span>
                <span>P : 4 (35-40)</span>
                <span>F : 0 (&lt;35)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
