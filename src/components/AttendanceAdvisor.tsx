/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ATTENDANCE_RULES_INFO } from "../data/campusData";
import { ShieldCheck, AlertTriangle, HelpCircle, RefreshCw, Sparkles } from "lucide-react";

export default function AttendanceAdvisor() {
  const [totalClasses, setTotalClasses] = useState<number>(24);
  const [attendedClasses, setAttendedClasses] = useState<number>(20);
  const [forecastFuture, setForecastFuture] = useState<number>(10);

  const calculateStatus = () => {
    if (totalClasses <= 0) return null;
    const currentPercent = (attendedClasses / totalClasses) * 100;
    const roundedPercent = parseFloat(currentPercent.toFixed(1));

    let status: "Excellent" | "Safe" | "On Edge" | "Danger Zone" = "Safe";
    let message = "";
    let colorClass = "";
    let detailsLabel = "";

    if (currentPercent >= 90) {
      status = "Excellent";
      message = "Brilliant! You have a massive attendance vault. Faculty will adore your sincerity.";
      colorClass = "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900";
    } else if (currentPercent >= 75) {
      status = "Safe";
      message = "You are above the 75% threshold! Keep attending to maintain this comfortable buffer.";
      colorClass = "bg-sky-50 text-sky-800 border-sky-200 dark:bg-sky-950/30 dark:text-sky-400 dark:border-sky-900";
    } else if (currentPercent >= 70) {
      status = "On Edge";
      message = "Warning! Attendance has dipped below 75%. You need a medical certificate to avoid FA, provided you don't drop under 70%!";
      colorClass = "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900";
    } else {
      status = "Danger Zone";
      message = "CRITICAL SHORTAGE! You are below 70%! No medical certificate can rescue you now. You are heading for an FA grade unless you recover immediately.";
      colorClass = "bg-red-50 text-red-800 border-red-200 dark:bg-red-950/30 dark:text-red-400 dark:border-red-900";
    }

    // How many classes can be skipped
    let skipCount = 0;
    let tempAttended = attendedClasses;
    let tempTotal = totalClasses;
    while ((tempAttended / (tempTotal + 1)) * 100 >= 75) {
      skipCount++;
      tempTotal++;
    }

    // How many classes must be attended in a row to reach 75%
    let attendInARow = 0;
    if (currentPercent < 75) {
      tempAttended = attendedClasses;
      tempTotal = totalClasses;
      while ((tempAttended / tempTotal) * 100 < 75) {
        attendInARow++;
        tempAttended++;
        tempTotal++;
      }
    }

    // Future forecast simulation
    const finalTotalForecast = totalClasses + forecastFuture;
    const maxFutureAttended = attendedClasses + forecastFuture;
    const maxFuturePercent = parseFloat(((maxFutureAttended / finalTotalForecast) * 100).toFixed(1));
    const minFuturePercent = parseFloat(((attendedClasses / finalTotalForecast) * 100).toFixed(1));

    return {
      percent: roundedPercent,
      status,
      message,
      colorClass,
      skipCount,
      attendInARow,
      maxFuturePercent,
      minFuturePercent,
    };
  };

  const statusData = calculateStatus();

  return (
    <div id="attendance-advisor" className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/50 flex items-center justify-center text-orange-600 dark:text-orange-400">
            <ShieldCheck className="w-5 h-5" id="icon-shield-check" />
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">75% Attendance Advisor</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Amrita's number-one survival calculator</p>
          </div>
        </div>
        <button
          onClick={() => {
            setTotalClasses(24);
            setAttendedClasses(20);
            setForecastFuture(10);
          }}
          className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
          title="Reset values"
          id="btn-reset-attendance"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Total Classes Conducted So Far: <span className="font-semibold text-orange-600" id="lbl-total-classes">{totalClasses}</span>
            </label>
            <input
              type="range"
              min="1"
              max="100"
              value={totalClasses}
              onChange={(e) => {
                const val = parseInt(e.target.value) || 1;
                setTotalClasses(val);
                if (attendedClasses > val) setAttendedClasses(val);
              }}
              className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-600"
              id="rng-total-classes"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Classes You Actually Attended: <span className="font-semibold text-emerald-600" id="lbl-attended-classes">{attendedClasses}</span>
            </label>
            <input
              type="range"
              min="0"
              max={totalClasses}
              value={attendedClasses}
              onChange={(e) => setAttendedClasses(Math.min(parseInt(e.target.value) || 0, totalClasses))}
              className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              id="rng-attended-classes"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Forecast classes in next 2 weeks: <span className="font-semibold text-sky-600" id="lbl-forecast-classes">{forecastFuture}</span>
            </label>
            <input
              type="range"
              min="1"
              max="30"
              value={forecastFuture}
              onChange={(e) => setForecastFuture(parseInt(e.target.value) || 1)}
              className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
              id="rng-forecast-classes"
            />
          </div>
        </div>

        {/* Results Panel */}
        {statusData && (
          <div className="flex flex-col justify-between border border-zinc-100 dark:border-zinc-800 rounded-xl p-5 bg-zinc-50 dark:bg-zinc-950/20">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Current Rating</span>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium border ${statusData.colorClass}`}>
                  {statusData.status}
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight" id="lbl-attendance-percentage">
                  {statusData.percent}%
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  ({attendedClasses} / {totalClasses} classes)
                </span>
              </div>

              <p className="text-xs text-zinc-600 dark:text-zinc-300 mb-4 bg-zinc-100 dark:bg-zinc-900/50 p-2.5 rounded-lg border border-zinc-100 dark:border-zinc-800/50">
                {statusData.message}
              </p>
            </div>

            <div className="border-t border-zinc-200/60 dark:border-zinc-800/60 pt-4 space-y-3">
              {statusData.percent >= 75 ? (
                <div className="flex items-start gap-2 text-emerald-700 dark:text-emerald-400">
                  <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="text-xs font-semibold">
                    You can safely skip at most <span className="font-mono text-sm underline">{statusData.skipCount}</span> classes. Your attendance remains at or above 75%.
                  </span>
                </div>
              ) : (
                <div className="flex items-start gap-2 text-red-600 dark:text-red-400">
                  <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0 animate-bounce" />
                  <span className="text-xs font-semibold">
                    CRITICAL! You must attend the next <span className="font-mono text-sm underline">{statusData.attendInARow}</span> classes consecutively to pull back above 75%. No skipping!
                  </span>
                </div>
              )}

              <div className="bg-sky-50/50 dark:bg-sky-950/10 p-2.5 rounded-lg text-xs leading-relaxed text-zinc-700 dark:text-zinc-300 border border-sky-100/30 dark:border-sky-900/20">
                <div className="flex items-center gap-1.5 font-medium text-sky-800 dark:text-sky-400 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>2-Week Forecast Predictor:</span>
                </div>
                If you attend <strong className="text-emerald-600">all {forecastFuture} future classes</strong>, your score becomes <strong className="font-mono">{statusData.maxFuturePercent}%</strong>. If you skip <strong className="text-red-500">all {forecastFuture} classes</strong>, it collapses to <strong className="font-mono">{statusData.minFuturePercent}%</strong>.
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 bg-zinc-50 dark:bg-zinc-900/50 p-3.5 rounded-xl border border-zinc-100 dark:border-zinc-800/60 text-xs text-zinc-600 dark:text-zinc-400">
        <h4 className="font-semibold text-zinc-800 dark:text-zinc-300 flex items-center gap-1.5 mb-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-zinc-500" />
          What is the official FA (Shortage) rule?
        </h4>
        <p className="leading-relaxed">
          {ATTENDANCE_RULES_INFO.faRule} {ATTENDANCE_RULES_INFO.medicalLeaveTip}
        </p>
      </div>
    </div>
  );
}
