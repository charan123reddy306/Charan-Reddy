/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Club, ResourceItem, QuizQuestion, MapLocation, SurvivalTip } from "../types";

export const ACADEMIC_BRANCHES = [
  {
    name: "CSE (Computer Science & Engineering)",
    description: "The flagship branch focusing on algorithms, systems, software engineering, and core computing principles.",
    focusArea: "Software Dev, Data Structures, System Design"
  },
  {
    name: "CSE (Artificial Intelligence)",
    description: "Specialized curriculum introducing machine learning, neural networks, neural architectures, and data engineering from year one.",
    focusArea: "AI/ML Model Training, Deep Learning, Python Ecosystem"
  },
  {
    name: "CSE (Cyber Security)",
    description: "Focuses on cryptography, network defense, penetration testing, systems auditing, and digital forensics.",
    focusArea: "Ethical Hacking, Threat Analysis, Secure Protocols"
  },
  {
    name: "ECE (Electronics & Communication)",
    description: "Deals with VLSI designing, signal processing, embedded systems, IoT, and communications networks.",
    focusArea: "Hardware-Software Interface, Microcontrollers, Signal Theory"
  }
];

export const ATTENDANCE_RULES_INFO = {
  mandatoryPercentage: 75,
  criticalPercentage: 70,
  faRule: "If attendance drops below 75% in a course, you receive an 'FA' (Shortage of Attendance) grade. It is an automatic fail. You cannot sit for the End-Semester Examination (ESE) for that course and must register for it again in Summer School (which costs extra and delays your credits) or as a re-register course next year.",
  medicalLeaveTip: "Medical certificates only offer relief down to 70% attendance and must be submitted to your Class Advisor within 3 working days of returning, signed by a registered practitioner. If you drop below 70%, even medical leave cannot save you from an FA grade!",
  proTip: "Build an attendance buffer in the first 4 weeks! Do not skip classes early in the semester. A single seasonal flu can wipe out your margin. Keep your buffer for times when you need to prepare for hackathons or periodicals."
};

export const EXAM_PATTERN_INFO = {
  cieWeight: 50, // 50% internal
  eseWeight: 50, // 50% end sem
  breakdown: [
    { name: "Periodical 1", weight: "15%", duration: "1.5 Hours", focus: "First 3 units. Written exam on physical papers. Very high scoring if prepared." },
    { name: "Periodical 2", weight: "15%", duration: "1.5 Hours", focus: "Units 4 & 5. Slightly harder than Periodical 1. Done in the middle of the semester." },
    { name: "Continuous Assessment", weight: "20%", duration: "Ongoing", focus: "Surprise quizzes, lab evaluations, project submissions, and class participation. Keep your faculty happy!" },
    { name: "End-Semester Exam", weight: "50%", duration: "3 Hours", focus: "Comprehensive exam covering all 5 units. Minimum 40% score required in ESE to pass the course!" }
  ],
  cgpaTips: [
    { title: "Ace Periodical 1", text: "Periodical 1 is the easiest exam of the semester and covers basic concepts. Scoring 27+/30 here sets an excellent mental foundation and takes massive pressure off your end-sem." },
    { title: "Never Skip Lab Observation Submission", text: "Labs have dual-evaluation: Observations (during the lab session) and Records (before the next lab). If you make delays, you lose continuous assessment (CA) marks. Lab marks are an easy booster!" },
    { title: "Connect via Class Advisors", text: "In Amrita, every class of 60 students has a Class Advisor (faculty). If you face any issues (academic, hostel, or health), they are your first point of contact. Keeping them aligned is crucial!" },
    { title: "Aim for 8.5+ CGPA Room", text: "In CSE recruitments, premium tech companies (CTC > 12 LPA) filter students strictly with an 8.0 or 8.5 CGPA cut-off. Maintain an 8.5+ in the first year because syllabus loads escalate rapidly in later semesters." }
  ]
};

export const CLUBS_DATA: Club[] = [
  {
    id: "chakravyuha",
    name: "Chakravyuha Technical Club",
    description: "The apex student-led technical and coding club of Amrita Amaravati. Hosts regular programming bootcamps, hands-on web development workshops, hackathons, and organizes the epic Build with AI Challenge! A vibrant ecosystem for junior and senior builders.",
    category: "Technical",
    whyItMatters: "This is where the actual builders gather to learn programming, collab on web apps, and build systems. Outstanding networking opportunities with seniors, peer-to-peer coding sessions, and real development support for your startup or side project ideas.",
    howToJoin: "Recruitment drives happen twice a year—specifically in August for freshers. There's a 3-stage process containing a generic resume filter, a mini-coding/design hackathon task, and a friendly peer interview.",
    highlightIcon: "Cpu"
  },
  {
    id: "relu",
    name: "ReLU Club (AI & Machine Learning)",
    description: "The premier student AI chapter of the campus. Named after the Rectified Linear Unit activation function, ReLU teaches computer vision, natural language processing, deep learning architectures, and Python data science coding from the ground up.",
    category: "Technical",
    whyItMatters: "Essential for freshers diving into CSE (Artificial Intelligence) or CSE (Cyber Security) who want to learn how to write PyTorch/TensorFlow code, handle datasets, and build custom generative models.",
    howToJoin: "Join their introductory workshops in Sep-Oct. Freshers who complete their starter assignments on GitHub are directly recruited into specialized AI study circles.",
    highlightIcon: "Brain"
  },
  {
    id: "prachurya",
    name: "Prachurya Coding & Development Club",
    description: "The dedicated peer-to-peer programming academy at Amrita. From introductory C programming syntax to data structures and algorithms, Prachurya focuses entirely on teaching core coding principles and mentoring freshers to build software.",
    category: "Technical",
    whyItMatters: "If you feel completely overwhelmed by engineering classes or programming labs, Prachurya's hands-on friendly sessions bridge the gap via one-on-one coding assistance and beginner coding bootcamps.",
    howToJoin: "Open enrollment sessions with regular weekly coding challenges. Attend their weekend labs or volunteer in coding instruction drives to get official club badges.",
    highlightIcon: "Terminal"
  },
  {
    id: "code-amrita",
    name: "Code@Amrita",
    description: "The competitive programming hub focusing on algorithmic preparation, weekly contests, and prepping for ICPC, Codeforces, and LeetCode tracks.",
    category: "Technical",
    whyItMatters: "Cracking high-paying product placements requires solid DSA. Code@Amrita keeps you on your toes through consistent coding habits and algorithmic thinking.",
    howToJoin: "Open enrollment sessions with regular weekly contests. Complete their weekly milestone sheets to get invited into specialized mentor groups.",
    highlightIcon: "Code"
  },
  {
    id: "sangeeth",
    name: "Sangeeth Club",
    description: "The cultural muscle for musicians, vocalists, and instrumentalists. From classical Carnatic melodies to hard rock bands, they perform at all major campus celebrations and annual fests.",
    category: "Cultural",
    whyItMatters: "The perfect creative retreat from coding. Perform on a highly energetic stage, jamming with diverse talents, and access the music instruments in the jam room.",
    howToJoin: "Auditions are conducted in early September. Prepare a 2-minute vocal or instrumental piece. All genres (Western, Classical, Fusion) are welcome!",
    highlightIcon: "Music"
  },
  {
    id: "nartana",
    name: "Nartana Dance Club",
    description: "Brings energy and grace to Amrita Amaravati. Specializes in diverse styles from classical Bharatanatyam to heavy hip-hop, contemporary, and cinematic street styles.",
    category: "Cultural",
    whyItMatters: "Build core fitness, unleash performance creativity, and win inter-college trophies for the university dance crews.",
    howToJoin: "Auditions based on basic rhythm, physical expression, and a small choreography walkthrough.",
    highlightIcon: "Heart"
  },
  {
    id: "prakriti",
    name: "Prakriti Eco Club",
    description: "Works on campus sustainability projects, cleanliness drives, plant-potting, tree plantations, and green energy awareness around Amaravati village zones.",
    category: "Social",
    whyItMatters: "Direct environmental impact and community social credits. Connects you with rural outreach programs which are highly valued in higher education profiles.",
    howToJoin: "Walk-in registration. Participate in any upcoming campus green drive to confirm your membership.",
    highlightIcon: "Leaf"
  },
  {
    id: "sports-cell",
    name: "Amrita Sports Council",
    description: "Oversees basketball, cricket, indoor table tennis, badminton sessions, and plans tournaments within hostels and the annual Inter-Campus Spardha.",
    category: "Sports",
    whyItMatters: "Stay physically active! Modern synthetic courts, quality sports gears, and inter-university representation opportunities.",
    howToJoin: "Direct selections in the college team tryouts or active participation during the first semester sports league.",
    highlightIcon: "Trophy"
  },
  {
    id: "avisuta",
    name: "Avisuta Sports Club",
    description: "The core, high-intensity student sports community at Amrita Amaravati. They conduct hyper-competitive inter-hostel leagues, cricket tournaments, volleyball face-offs, basketball shootouts, and indoor athletics.",
    category: "Sports",
    whyItMatters: "The perfect club to build leadership, physical fitness, sportsmanship, and raw energy. They represent Amrita at various national-level inter-university sports meets.",
    howToJoin: "Wander over to courts during selective trial days in late August or show stellar sports traits in the freshman tournament.",
    highlightIcon: "Activity"
  },
  {
    id: "drsya",
    name: "Drsya Film & Media Club",
    description: "The creative storytelling, film-making, cinematography, and digital art powerhouse of the campus. Drsya teaches eager students camera handling, script writing, video editing tools, photography, and short film production.",
    category: "Cultural",
    whyItMatters: "Crucial for tech students looking to master content creation, UI/UX aesthetics, visual design, and cinematic storytelling. It gives you raw hands-on media skills and handles the coverage of major college fests and hackathons.",
    howToJoin: "Submit a 1-minute creative video clip or a photography portfolio during the recruitment week in September, followed by a friendly chat with senior directors.",
    highlightIcon: "Camera"
  }
];

export const HOSTE_LIFE_DATA = {
  dailySchedule: [
    { time: "07:30 AM - 08:30 AM", activity: "Hot Breakfast served at the dining mess. Fill up, because the walk to academic block is standard walking exercise." },
    { time: "08:40 AM - 12:30 PM", activity: "Morning Theory lectures and labs. Attendance is taken within the first 5 minutes of every period!" },
    { time: "12:30 PM - 01:30 PM", activity: "Lunch Break. Mess serves rice, sambar, seasonal vegetables, curd, and papad. Academic canteen serves quick bites if mess line is long." },
    { time: "01:30 PM - 04:30 PM", activity: "Afternoon Classes or practical labs. Time to debug your compilers or test micro-controllers." },
    { time: "04:30 PM - 06:15 PM", activity: "Recreation time! Play on the synthetic basketball courts, hit the indoor gymnasium, or catch up in the library." },
    { time: "06:30 PM", activity: "Curfew & Gate Closure! Biometric/Hostel card scanning is mandatory at the hostel reception door. Do not be late—late entries trigger automated SMS notifications to parents!" },
    { time: "07:30 PM - 08:45 PM", activity: "Dinner in the hosteler mess. High attendance during chapati days." },
    { time: "10:30 PM", activity: "Lights Out/Study Hours. Maintain quiet in the corridors for peaceful sleeping/late-night programming." }
  ],
  foodRules: {
    title: "The Strict Vegetarian Mandate",
    text: "Amrita is a completely vegetarian and green campus. No non-vegetarian foodstuffs, including eggs, are served in the mess or available in the campus canteen. Note: Bringing or ordering non-vegetarian food or eggs into the hosteler premises is strictly forbidden and can attract hefty fines from warden checks. Relish the delicious south Indian idli, dosa, lemon rice, and local andhra cuisine!",
    proTip: "Thursday special dinner usually features Paneer Butter Masala, Gobi Manchurian, or Special Biryani. Plan accordingly to arrive early to beat the hostel queue!"
  },
  amenities: [
    { name: "High-Speed Wi-Fi", details: "Amrita-Wifi covers the hostel rooms. Check your AUMS credentials to activate your individual MAC IP access." },
    { name: "Washing Machines", details: "Washing zones exist on the ground floor. Token system exists for automated cycles, or students can opt for seasonal laundry subscription." },
    { name: "Sports Arena", details: "Access to Table-Tennis, carrom boards, chess tables in the common lobby area. Synthetic courts outside for evening matches." },
    { name: "Power Backup", details: "The entire hostel block has full generator systems, ensuring your study flow is never disrupted during Amaravati monsoons." }
  ],
  settlingTips: [
    { title: "Bring an Extension Board", text: "Hostel rooms have designated plug sockets. To charge your laptop, smartphone, tablet, and table lamp in parallel, a solid surge-protected multi-plug is an absolute necessity!" },
    { title: "Mosquito Shield Needed", text: "Amaravati area can get heavy mosquito counts in monsoons. Pack a good liquid vaporizer (AllOut/GoodKnight) and a personal mosquito net if you prefer window breeze." },
    { title: "Get a Durable Umbrella", text: "Amaravati rains can be sudden and heavy. The open pathway between the Hostels and Main Academic Block offers delicious winds but zero rain-shelters. Always keep an umbrella in your backpack." },
    { title: "Lock Your Drawers", text: "Your room cabinets have keyholes. Purchase a reliable Godrej padlock on day-one for your wardrobe to safeguard your laptop and important paper transcripts." }
  ]
};

export const SURVIVAL_TIPS: SurvivalTip[] = [
  {
    id: "tip-id",
    type: "do",
    title: "Always Wear Your ID Card",
    description: "The security team at the entrance gates and inside the academic corridors is extremely strict. Forgetting your physical card means no entry, or constant stops by security patrols.",
    impact: "High — Mandatory from day 1 for campus entry, canteen billing, and class attendance."
  },
  {
    id: "tip-dress",
    type: "do",
    title: "Respect the Academic Dress Code",
    description: "Amrita maintains a tidy dress code. On weekdays, boys must wear formal/semi-formal collared shirts/polo t-shirts tucked in (or styled well) with full trousers. No round-neck t-shirts, ripped jeans, or shorts. Girls must wear conventional salwars, kurtis, or formal shirts. This is strictly checked at the Academic Block lobby.",
    impact: "Medium — Guards or class advisors can send you back to hostels to change, causing you to lose valuable attendance."
  },
  {
    id: "tip-internal",
    type: "do",
    title: "Maximize Internal Marks (CIE)",
    description: "Continuous Internal Evaluation (Periodicals, Quizzes, Assignments) consists of 50 marks. Scoring a solid 45/50 in internals takes massive pressure off the end-semester written exams, where a 40/100 (which accounts for 40% of ESE) is mandatory to pass.",
    impact: "Critical — The secret recipe of academic gold winners at Amrita is high internals!"
  },
  {
    id: "tip-dsa",
    type: "do",
    title: "Start Coding from First Semester",
    description: "Don't compile your first C-program only during the second year. Set up a Github Student Developer Pack, vscode compiler, and solve 1 basic problem daily on LeetCode/Hackerrank from your first week. It helps you get recruited in top tech tracks by the third year.",
    impact: "High — Crucial for CSE students to stay ahead of placements."
  },
  {
    id: "dont-torrent",
    type: "dont",
    title: "Never Attempt Torrenting on Campus WiFi",
    description: "Amrita's IT Network Security uses automated firewalls (Sophos/Fortinet). Any active torrent downloads or access to sketchy sites trigger an automatic MAC-IP ban, blacklisting your student credentials. You'll have to submit official written apologies to the IT lead to restore Wi-Fi.",
    impact: "High — Loss of internet and paperwork embarrassment."
  },
  {
    id: "dont-curfew",
    type: "dont",
    title: "Do Not Late-Scan Hostels",
    description: "Gate closes strictly at 6:30 PM. Even a 6:31 PM card scan triggers an automated SMS notification directly to your parents' registered mobile phones. 3 continuous late entries can lead to hostel suspension or warden hearings.",
    impact: "Critical — Curfew discipline is taken extremely seriously.",
  },
  {
    id: "dont-lab",
    type: "dont",
    title: "Don't Copy Lab Records / Observations",
    description: "Teachers run plagiarism/similarity checks. Copying a buddy's code or record diagrams will earn you a straight '0' in that sub-evaluation. Write observations in your own words, and always mention your unique roll numbers in the code comment headers.",
    impact: "Medium — Direct continuous assessment hit.",
  },
  {
    id: "dont-proxy",
    type: "dont",
    title: "Never Sign / Scan Proxy Attendance",
    description: "If you sign for a friend or scan their ID during biometric checks, and a class roll-call or warden check happens, both students face immediate reference to the Student Disciplinary Committee (DISCO) and immediate 'FA' tags across the course.",
    impact: "Critical — Heavy risk of suspension and academic black marks."
  }
];

export const RESOURCE_LINKS: ResourceItem[] = [
  {
    id: "res-aums",
    name: "AUMS Portal",
    description: "Amrita University Management System. This is your academic engine. Use it daily to view official attendance tracks, internal exam scores, register for semesters, verify CGPA transcripts, and pay fee structures.",
    url: "https://aums.amaravati.amrita.edu",
    category: "Campus Life",
    importance: "Mandatory",
    iconName: "Database"
  },
  {
    id: "res-canvas",
    name: "Amrita LMS / Canvas",
    description: "Learning Management System. All academic courses are assigned here. Professors upload digital lecture slides, assignments, surprise quiz links, and final grading guidelines on this panel.",
    url: "https://lms.amaravati.amrita.edu",
    category: "Academics",
    importance: "Mandatory",
    iconName: "BookOpen"
  },
  {
    id: "res-github",
    name: "GitHub Student Developer Pack",
    description: "Offers free premium developer toolings, cloud credits (AWS/Azure/DigitalOcean), Canva Pro, free domain registrations, premium copilot tools, and learning materials strictly using student academic mail ids (e.g., am.en.u4cse26xxx@am.students.amrita.edu).",
    url: "https://education.github.com/pack",
    category: "Coding",
    importance: "Highly Useful",
    iconName: "Github"
  },
  {
    id: "res-coder",
    name: "Codeforces & LeetCode",
    description: "The double-engine of problem-solving. Practice core arrays, strings, dynamic program algorithms, and take part in Codeforces div-3 contests. Essential pipeline for securing high tech placements.",
    url: "https://leetcode.com",
    category: "Coding",
    importance: "Highly Useful",
    iconName: "Terminal"
  },
  {
    id: "res-vscode",
    name: "VS Code with C/C++ Extensions",
    description: "The industry default light-weight IDE. Install the gcc/g++ compilers (MSYS2 for Windows, Clang for macOS) alongside the extension runner for comfortable first-semester programming in introductory C.",
    url: "https://code.visualstudio.com",
    category: "Coding",
    importance: "Highly Useful",
    iconName: "Cpu"
  },
  {
    id: "res-coursera",
    name: "Coursera Amrita Program Portal",
    description: "Amrita provides a free enterprise-tier Coursera license for every student! You can access premium university certified courses from Google, IBM, DeepLearning.AI, Stanford, etc., and get official credits if completed during summer semesters.",
    url: "https://www.coursera.org",
    category: "Academics",
    importance: "Highly Useful",
    iconName: "GraduationCap"
  },
  {
    id: "res-chakravyuha-git",
    name: "Chakravyuha GitHub Resources",
    description: "Maintained by the technical club (chakravyuha), full of previous year periodical question banks, lab experiments tutorials, and cheat sheets specifically aligned with Amrita Amaravati CSE curriculum.",
    url: "https://github.com/chakravyuha-technical-club-amrita",
    category: "Utilities",
    importance: "Nice to Have",
    iconName: "Compass"
  }
];

export const SURVIVAL_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the absolute minimum attendance percentage required in order to be allowed to sit for the End-Semester Examination (and avoid a devastating 'FA' grade)?",
    options: ["60%", "70%", "75%", "85%"],
    correctAnswerIndex: 2,
    explanation: "Amrita has an unyielding 75% attendance criteria. Dropping to 74.9% without official sick leave certified directly by the physical doctor is an automatic 'FA' grade (repeat the entire course!)."
  },
  {
    id: 2,
    question: "You want to order some late-night hot Andhra Chilli Paneer from Zomato. What is the strict curfew gate-time by which you must collect your order inside the hostel gates?",
    options: ["8:30 PM", "9:00 PM", "6:30 PM", "10:00 PM"],
    correctAnswerIndex: 2,
    explanation: "Hostel curfew timing is strictly 6:30 PM. Security blocks out gate entry and scans biometric cards. Late entries immediately trigger automated alert SMS notifications to your parent's phone!"
  },
  {
    id: 3,
    question: "Which of these is the official student portal used to check your daily attendance, continuous internal assessment grades, and final exam grades?",
    options: ["Amrita Canvas", "AUMS Portal", "Amrita Mailer", "Chakravyuha Hub"],
    correctAnswerIndex: 1,
    explanation: "AUMS (Amrita University Management System) handles official attendance databases, academic transcripts, fees tracking, and grade sheets."
  },
  {
    id: 4,
    question: "What is the strict dress-code rule code for college days inside the Academic Block?",
    options: [
      "No specific rules, dress casually!",
      "Round-neck t-shirts and cargo shorts are permitted",
      "Collared shirts or polo t-shirts tucked in (boys), and elegant Salwars/Kurtis (girls). No round-necks or shorts.",
      "Strict uniforms (school-style blazer) provided on all 6 days"
    ],
    correctAnswerIndex: 2,
    explanation: "Amrita strictly prohibits shorts, round-neck t-shirts, sleeveless garments, and ripped jeans in academic hours. Dress smart in clean polo shirts with full pants or stylish kurtis to avoid being sent back!"
  },
  {
    id: 5,
    question: "Which technical club hosts high-caliber competitive coding battles, key generative AI workshops, and organized this Build with AI challenge at Amrita Amaravati?",
    options: ["Chakravyuha Technical Club", "ReLU AI Deep Learning Club", "Prachurya Coding Club", "Sangeeth Arts Council"],
    correctAnswerIndex: 0,
    explanation: "Chakravyuha Technical Club is the apex builder organization of Amrita Amaravati, powering coding bootcamps, developer workshops, and organizing this very 'Build with AI' Hackathon!"
  }
];

export const MAP_LOCATIONS: MapLocation[] = [
  {
    id: "loc-mblock",
    name: "Main Academic Block (B-Block)",
    type: "academic",
    description: "The gigantic central nerve system of the campus. Houses the central AC classrooms, CSE software labs, electrical-VLSI design hubs, director's room, library, and the central administrative offices.",
    coords: { x: 50, y: 35 },
    survivalTip: "The B-Block has central air-conditioning! High-speed Wi-Fi is strongest here. Spend your break-hours studying or coding on the third floor computer labs or the library corridors."
  },
  {
    id: "loc-library",
    name: "Central Library (Academic Block 2nd Floor)",
    type: "academic",
    description: "An extensive collection of electronic journals, classic algorithm books (CLRS), engineering manuals, and space for peaceful self-study.",
    coords: { x: 52, y: 30 },
    survivalTip: "Best space during hectic exam periodicals! It is highly quiet and features reading cubicles with personal charging ports for your developer laptops."
  },
  {
    id: "loc-bhostel",
    name: "Men's Hostels (Vyas & Kapil Blocks)",
    type: "hostel",
    description: "The comfortable living quarters for boys. Equipped with triple/double sharing rooms, bed wardrobes, studying desks, washing machines, and common water purifiers.",
    coords: { x: 20, y: 70 },
    survivalTip: "The 6:30 PM gate lock is biometric! Ensure you scan in time. Make friends with the hostel caretakers early—they'll save you from room lockouts!"
  },
  {
    id: "loc-ghostel",
    name: "Women's Hostel (Gargi & Maitreyi Blocks)",
    type: "hostel",
    description: "Secure, friendly, and spacious hostel blocks for girls. Equipped with indoor carrom lobbies, reading areas, and 24/7 security watch systems.",
    coords: { x: 75, y: 70 },
    survivalTip: "Features a beautiful garden area on the outer pathways. High security guidelines are perfectly active here for a highly comfortable stay."
  },
  {
    id: "loc-mess",
    name: "Central Dining Hall (Mess Block)",
    type: "food",
    description: "The primary pure-vegetarian dining facility. Serves hot meals three times a day along with evening high-tea and crispy snacks.",
    coords: { x: 45, y: 80 },
    survivalTip: "Always reach the mess within the first 15 minutes of breakfast/lunch opening to enjoy the hot, crispy vadas or fresh rotis before crowds pile up!"
  },
  {
    id: "loc-sports",
    name: "Amrita Sports Complex & Playgrounds",
    type: "recreation",
    description: "A wide compound including the synthetic basketball court, volleyball grids, cricket practice pitch nets, and standard running clay track.",
    coords: { x: 30, y: 50 },
    survivalTip: "Synthetics are lit with high-mast spotlights until 8:30 PM. Ideal spot to blow off steam after intense C programming labs."
  },
  {
    id: "loc-canteen",
    name: "Central Canteen & Nescafe Kiosk",
    type: "food",
    description: "Located within the main Academic Block floor. Hot coffee, samosas, high-quality sandwiches, cold mojitos, and andhra meals.",
    coords: { x: 53, y: 40 },
    survivalTip: "Try the Andhra Eggless Double Chocolate Pastry and the Hot Hazelnut Latte. Best space to sit and debate your hackathon ideas with teammates!"
  }
];
