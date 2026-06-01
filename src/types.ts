/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Club {
  id: string;
  name: string;
  description: string;
  category: "Technical" | "Cultural" | "Social" | "Sports";
  whyItMatters: string;
  howToJoin: string;
  highlightIcon: string; // Lucide icon key
}

export interface ResourceItem {
  id: string;
  name: string;
  description: string;
  url: string;
  category: "Academics" | "Coding" | "Campus Life" | "Utilities";
  importance: "Mandatory" | "Highly Useful" | "Nice to Have";
  iconName: string; // Lucide icon key
}

export interface Course {
  id: string;
  code: string;
  name: string;
  credits: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface MapLocation {
  id: string;
  name: string;
  type: "academic" | "hostel" | "recreation" | "food";
  description: string;
  coords: { x: number; y: number }; // Percentage coordinate on custom map
  survivalTip: string;
}

export interface SurvivalTip {
  id: string;
  type: "do" | "dont";
  title: string;
  description: string;
  impact: string; // Why it matters
}
