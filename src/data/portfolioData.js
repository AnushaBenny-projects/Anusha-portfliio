export const personalInfo = {
  name: "Anusha Benny",
  targetRole: "Software Tester / QA Engineer (Fresher)",
  headline: "Hi, I'm Anusha Benny. I test for quality.",
  subheading: "Software Tester | QA Engineer Fresher",
  tagline:
    "Computer Science graduate with a foundation in manual testing, test case design, defect reporting, and API testing. Passionate about identifying issues, improving software quality, and delivering reliable user experiences.",
  email: "anushabenny800@gmail.com",
  phone: "+91 8075369448",
  location: "Thrissur, Kerala, India",
  status: "Open to Entry-Level QA Opportunities",
  github: "https://github.com/AnushaBenny-projects",
  linkedin: "https://www.linkedin.com/in/anusha-benny-a0a876268/",
  resumePdf: "./Anusha_Resume.pdf",
  cvPdf: "./Anusha_CV.pdf",
};

export const stats = [
  { label: "Degree & CGPA", value: "B.Tech CSE (8.34)" },
  { label: "Core Testing Focus", value: "Manual & API QA" },
  { label: "Test Cases Authored", value: "100+ Test Scenarios" },
  { label: "Defect Tracking", value: "GitLab & Structured Reports" },
];

export const skillCategories = [
  {
    category: "Software Testing (Manual QA)",
    badge: "Core Foundation",
    description: "Systematic test analysis, test design, and execution across web applications.",
    skills: [
      { name: "Manual Testing", level: "Proficient" },
      { name: "Functional Testing", level: "Proficient" },
      { name: "UI & UX Testing", level: "Proficient" },
      { name: "Positive & Negative Testing", level: "Proficient" },
      { name: "Test Scenario Design", level: "Proficient" },
      { name: "Test Case Creation & Execution", level: "Proficient" },
      { name: "Boundary Value Analysis (BVA)", level: "Proficient" },
      { name: "Equivalence Partitioning (ECP)", level: "Proficient" },
      { name: "Regression Testing", level: "Practical" },
      { name: "Smoke Testing", level: "Practical" },
      { name: "Bug Life Cycle & Defect Reporting", level: "Proficient" },
      { name: "SDLC & STLC Methodologies", level: "Proficient" },
    ],
  },
  {
    category: "API Testing",
    badge: "Practical Skills",
    description: "Endpoint validation, payload verification, and status code verification using Postman.",
    skills: [
      { name: "Postman Fundamentals", level: "Practical" },
      { name: "REST API Concepts & Endpoints", level: "Proficient" },
      { name: "HTTP Methods (GET, POST, PUT, DELETE)", level: "Proficient" },
      { name: "Status Codes (2xx, 4xx, 5xx)", level: "Proficient" },
      { name: "Request & Response Validation", level: "Practical" },
      { name: "JSON Payload & Headers Basics", level: "Proficient" },
    ],
  },
  {
    category: "Automation Testing",
    badge: "Currently Learning / Fundamentals",
    description: "Building foundational competencies in test scripting and browser automation.",
    skills: [
      { name: "Selenium WebDriver Fundamentals", level: "Currently Learning" },
      { name: "Java Fundamentals for Automation", level: "Fundamentals" },
      { name: "Locators (ID, XPath, CSS Selector)", level: "Currently Learning" },
      { name: "Web Element Interactions", level: "Currently Learning" },
      { name: "Basic Test Script Structure", level: "Currently Learning" },
    ],
  },
  {
    category: "Tools & Technical Foundation",
    badge: "Technical Background",
    description: "CS degree background enabling deep comprehension of web architecture and databases.",
    skills: [
      { name: "GitLab (Issue & Bug Tracking)", level: "Practical" },
      { name: "Git & GitHub", level: "Proficient" },
      { name: "SQL (Queries & Data Validation)", level: "Proficient" },
      { name: "Java & Python", level: "Academic & Projects" },
      { name: "HTML5, CSS3 & JavaScript", level: "Proficient" },
      { name: "Browser DevTools & DOM Inspection", level: "Proficient" },
    ],
  },
];

export const projects = [
  {
    id: "franciscan",
    title: "Franciscan Website — Manual Testing",
    category: "Manual QA",
    type: "Primary QA Project",
    image: "./franciscan_qa.jpg",
    summary:
      "Comprehensive end-to-end manual testing of an institutional website, validating core user journeys, navigation structures, and inquiry form submission flows.",
    objective:
      "Ensure web functionality, input boundary integrity, cross-page navigation reliability, and responsive design stability before release.",
    qaActivities: [
      "Analyzed website requirements to formulate detailed test scenarios and test suites.",
      "Designed and executed 60+ positive and negative test cases covering form submissions, button triggers, and broken link checks.",
      "Conducted boundary value analysis on text fields, contact numbers, and email format validators.",
      "Compared expected vs. actual outcomes and logged reproducible defect reports with severity ratings.",
      "Tracked and managed defects using GitLab Issues, retesting resolved items to prevent regression.",
    ],
    techStack: ["Manual Testing", "Test Case Design", "GitLab Issues", "Bug Life Cycle", "Cross-Browser Testing", "HTML/CSS Inspection"],
    hasLiveDemo: false,
    githubUrl: null,
    isPrimary: true,
  },
  {
    id: "authentic-eye",
    title: "Authentic Eye — AI-Generated Image Detection Web Application",
    category: "AI & Full-Stack",
    type: "Web Application & QA Target",
    image: "./autentic.png",
    summary:
      "A web application designed to detect synthetic AI-generated images on social platforms to mitigate digital misinformation, powered by FastAPI and a ConvNeXt-Tiny CNN model.",
    objective:
      "Serve high-accuracy image classification via REST APIs with a responsive user interface for drag-and-drop file upload and confidence score visualization.",
    technicalDetails: [
      "Backend developed using FastAPI (Python) serving a PyTorch ConvNeXt-Tiny binary classifier.",
      "Frontend constructed with responsive HTML, Tailwind CSS, and JavaScript for instant prediction visualization.",
      "RESTful API design with structured JSON responses containing classification labels and confidence percentage.",
    ],
    qaConsiderations: [
      "File input boundary testing: MIME-type spoofing, oversized files (>20MB), zero-byte files, and non-image extensions.",
      "API error handling verification: Validating HTTP 400 Bad Request and 422 Unprocessable Entity on corrupt payloads.",
      "Response validation: Ensuring confidence scores strictly normalize within the 0.0 - 1.0 interval.",
    ],
    techStack: ["Python", "FastAPI", "PyTorch (ConvNeXt-Tiny)", "REST APIs", "JavaScript", "Tailwind CSS"],
    hasLiveDemo: false,
    githubUrl: "https://github.com/AnushaBenny-projects/AUTHENTIC-EYE",
    isPrimary: false,
  },
  {
    id: "autonomous-engine",
    title: "Autonomous Cognitive Engine for Long-Horizon Tasks",
    category: "AI & Full-Stack",
    type: "AI Agent Architecture",
    image: "./cognitive.png",
    summary:
      "Stateful autonomous AI agent engineered using LangGraph to execute complex, multi-step tasks through structured task decomposition, persistent memory, and evaluation.",
    objective:
      "Maintain context across long-horizon planning sequences with virtual file system context management and execution tracing.",
    technicalDetails: [
      "Implemented state graphs, persistent execution memory, and multi-step reasoning using LangGraph and LangChain.",
      "Constructed evaluation and trace tracking workflows using LangSmith to monitor agent performance and accuracy.",
      "Python and Streamlit interface with FastAPI endpoints for interactive task delegation.",
    ],
    qaConsiderations: [
      "State verification testing: Confirming agent state transitions do not cause infinite looping or memory leaks.",
      "Edge-case task execution: Validating failure recovery and fallback strategies when tools return unexpected responses.",
    ],
    techStack: ["Python", "LangGraph", "LangChain", "LangSmith", "Streamlit", "FastAPI"],
    hasLiveDemo: false,
    githubUrl: null,
    isPrimary: false,
  },
  {
    id: "career-catalyst",
    title: "CareerCatalyst — AI-Based Campus Placement Platform",
    category: "AI & Full-Stack",
    type: "Full-Stack Web Platform",
    image: "./carrer.png",
    summary:
      "An AI-powered full-stack platform for campus placement preparation, featuring aptitude practice, coding challenges, resume analysis, and student performance dashboards.",
    objective:
      "Provide an end-to-end career guidance ecosystem with role-based access for students and mentors via scalable REST APIs.",
    technicalDetails: [
      "Full-stack architecture with Node.js, Express, and MongoDB database for user tracking.",
      "Integrated modules for aptitude tests, MCQ assessment algorithms, and personalized recommendations.",
      "Responsive user interface built with HTML, Tailwind CSS, and JavaScript.",
    ],
    qaConsiderations: [
      "Authentication and authorization testing: Role-based dashboard access control.",
      "Database data consistency: Verifying scores and progress metrics accurately update across student sessions.",
    ],
    techStack: ["Node.js", "Express", "MongoDB", "REST APIs", "JavaScript", "Tailwind CSS"],
    hasLiveDemo: false,
    githubUrl: "https://github.com/AnushaBenny-projects/carrer-catalyst",
    isPrimary: false,
  },
];

export const testingWorkflowSteps = [
  {
    step: "01",
    title: "Requirement Analysis",
    subtitle: "Understanding Expected Behavior",
    description:
      "Review software specifications, wireframes, and acceptance criteria. Identify user personas, test objectives, and potential ambiguities early in the development lifecycle.",
    icon: "FileSearch",
  },
  {
    step: "02",
    title: "Test Planning & Design",
    subtitle: "Scenarios, BVA & ECP",
    description:
      "Break down user journeys into high-level scenarios. Apply Boundary Value Analysis and Equivalence Class Partitioning to write clear, measurable positive and negative test cases.",
    icon: "ClipboardCheck",
  },
  {
    step: "03",
    title: "Test Execution",
    subtitle: "Manual & API Validation",
    description:
      "Execute documented test runs methodically across targeted browser environments. Validate UI layouts, input constraints, and REST API response payloads in Postman.",
    icon: "PlayCircle",
  },
  {
    step: "04",
    title: "Defect Reporting",
    subtitle: "Structured Bug Tracking",
    description:
      "Document discovered defects with exact steps to reproduce, clear expected vs. actual outcomes, severity/priority classifications, environment details, and screenshots.",
    icon: "Bug",
  },
  {
    step: "05",
    title: "Retesting & Regression",
    subtitle: "Verifying Fixes & Stability",
    description:
      "Re-execute failed test cases upon developer resolution. Perform focused regression testing on adjacent modules to verify that no unintended side-effects were introduced.",
    icon: "RefreshCw",
  },
];

export const sampleDefectReport = {
  bugId: "BUG-FRAN-024",
  project: "Franciscan Institutional Website",
  title: "Inquiry submission fails silently when phone number includes international prefix '+91'",
  environment: "Chrome 124.0.6367 | Windows 11 Home (64-bit) | Franciscan Staging v2.3",
  severity: "High",
  priority: "High",
  status: "Verified & Resolved",
  module: "Admissions & Contact Form Modal",
  reporter: "Anusha Benny (QA Tester)",
  tool: "GitLab Issues #24",
  preconditions: [
    "User has loaded the Admissions Inquiry page in Chrome browser.",
    "Network connection is active and responsive.",
    "Inquiry modal is open and in clean initial state.",
  ],
  stepsToReproduce: [
    "Navigate to the Admissions page and click 'Submit Inquiry'.",
    "Enter a valid full name: 'Ananya Sharma'.",
    "Enter a valid email address: 'ananya.s@example.com'.",
    "In the Contact Number input field, enter '+91 9876543210' (with leading '+' and country code).",
    "Select any available course program from the dropdown.",
    "Click the 'Submit Application' button.",
  ],
  expectedResult:
    "Form should accept the E.164 phone format (+91...), show a loading spinner, return HTTP 200 OK, and display a green success notification: 'Inquiry received successfully.'",
  actualResult:
    "Submit button disables indefinitely without feedback. No success message appears. Browser console throws: 'Uncaught TypeError: regex.test(...) failed on character +'. Inquiry payload is never dispatched to backend.",
  rootCauseNotes: "Frontend input sanitizer stripped leading '+' character, causing secondary strict regex validation to fail quietly without setting error state.",
};

export const sampleTestCases = [
  {
    tcId: "TC-FRAN-001",
    module: "Admissions Form",
    type: "Positive Test",
    technique: "Equivalence Partitioning",
    title: "Verify successful form submission with all valid mandatory fields",
    description: "Ensure that valid inputs across name, email, phone, and program selection result in a successful submission.",
    precondition: "User is on Admissions page with valid network connection.",
    steps: "1. Fill Name with alphabetic characters\n2. Fill Email with standard user@domain.com\n3. Fill 10-digit Phone\n4. Select Program\n5. Click Submit",
    expectedResult: "Form successfully submits; Confirmation modal is rendered with confirmation reference number; HTTP 200 OK.",
    status: "Pass",
  },
  {
    tcId: "TC-FRAN-002",
    module: "Admissions Form",
    type: "Negative Test",
    technique: "Boundary Value Analysis",
    title: "Verify validation error when phone number length is outside 10 digits",
    description: "Check if the system correctly blocks phone inputs with 9 digits (boundary - 1) and 11 digits (boundary + 1).",
    precondition: "Admissions form is open.",
    steps: "1. Enter valid Name and Email\n2. In Phone field, enter 9 digits ('987654321')\n3. Attempt to Submit\n4. Clear and enter 11 digits ('98765432100')\n5. Attempt to Submit",
    expectedResult: "Inline validation error appears: 'Please enter a valid 10-digit mobile number'; Submit button remains disabled.",
    status: "Pass",
  },
  {
    tcId: "TC-FRAN-003",
    module: "Navigation & Links",
    type: "Functional Test",
    technique: "UI Navigation Testing",
    title: "Verify header navigation links smoothly scroll to correct anchor targets",
    description: "Ensure all desktop and mobile navigation items accurately resolve to their corresponding section IDs without breaking layout.",
    precondition: "Homepage is loaded on both desktop (1440px) and mobile (375px) viewports.",
    steps: "1. Click each navigation link in sequence (About, Academics, Admissions, Contact)\n2. Observe URL hash and viewport scroll offset",
    expectedResult: "Target section appears at top of viewport; active navigation tab highlights correctly; no horizontal scrollbar occurs.",
    status: "Pass",
  },
  {
    tcId: "TC-EYE-004",
    module: "Authentic Eye API",
    type: "Negative API Test",
    technique: "Equivalence Partitioning",
    title: "Verify API response when uploading an unsupported file type (.txt / .exe)",
    description: "Ensure the FastAPI backend rejects invalid MIME types and returns appropriate client error status.",
    precondition: "FastAPI server running and /api/detect-image endpoint reachable in Postman.",
    steps: "1. Send POST request to /api/detect-image\n2. Attach 'sample.txt' in multipart/form-data\n3. Inspect response status code and JSON body",
    expectedResult: "HTTP 400 Bad Request or 422 Unprocessable Entity with error detail: 'Unsupported file format. Only JPEG, PNG, and WebP are permitted.'",
    status: "Pass",
  },
];

export const educationHistory = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Vidya Academy of Science and Technology, Thrissur",
    affiliation: "APJ Abdul Kalam Technological University (KTU)",
    period: "2022 – 2026",
    score: "CGPA: 8.34",
    highlights: [
      "Core foundation in Software Engineering principles, STLC, SDLC, Data Structures, DBMS, and Object-Oriented Programming.",
      "Practical project development and testing using Python, Java, SQL, and Web Technologies.",
      "Active participant in technical workshops and hands-on laboratory software validation.",
    ],
  },
  {
    degree: "Class XII — Higher Secondary (Computer Science)",
    institution: "Little Flower CGHSS, Guruvayoor, Thrissur",
    affiliation: "Kerala State Board of Higher Secondary Examination",
    period: "2020 – 2022",
    score: "Percentage: 95.9%",
    highlights: [
      "Specialized in Computer Science, Mathematics, Physics, and Chemistry.",
      "Developed foundational programming skills in C++ and basic algorithm construction.",
    ],
  },
  {
    degree: "Class X — Secondary School Leaving Certificate (SSLC)",
    institution: "L I G H S, Choondal, Thrissur",
    affiliation: "Kerala State Board",
    period: "2019 – 2020",
    score: "Percentage: 97%",
    highlights: ["Consistently top academic performer with strong logical and analytical reasoning."],
  },
];

export const certifications = [
  {
    title: "Google Cybersecurity Certificate",
    issuer: "Google / Coursera",
    focus: "Network security, system vulnerabilities, threat identification, and defensive security fundamentals.",
  },
  {
    title: "Artificial Intelligence Primer Certification",
    issuer: "Infosys Springboard",
    focus: "AI/ML fundamentals, neural network concepts, algorithms, and practical application integration.",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    focus: "Data interpretation, systematic investigation, business analytics, and structured reporting.",
  },
  {
    title: "AIML Virtual Internship",
    issuer: "Infosys Springboard",
    focus: "Autonomous AI agent architecture using LangGraph, task planning, and execution evaluation using LangSmith.",
    certificateUrl: "https://drive.google.com/file/d/1NKTPVpKibDGJM7UKkgypTk7oXUuuWrT/view",
  },
];
