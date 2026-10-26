# Anusha Benny — Software Tester / QA Engineer Portfolio

A modern, high-performance, responsive portfolio website tailored specifically for an entry-level **Software Tester / QA Engineer (Fresher)** position.

Built with **React**, **Vite**, a custom **CSS Design System**, and **Lucide Icons**.

---

## 🎯 Profile Summary

- **Name:** Anusha Benny
- **Target Position:** Software Tester / QA Engineer (Fresher)
- **Education:** B.Tech in Computer Science and Engineering (KTU) — **8.34 CGPA**
- **College:** Vidya Academy of Science and Technology, Thrissur, Kerala
- **Location:** Thrissur, Kerala, India (Open to On-site, Hybrid & Remote QA opportunities)
- **Email:** [anushabenny800@gmail.com](mailto:anushabenny800@gmail.com)
- **GitHub:** [https://github.com/AnushaBenny-projects](https://github.com/AnushaBenny-projects)
- **LinkedIn:** [https://www.linkedin.com/in/anusha-benny-a0a876268/](https://www.linkedin.com/in/anusha-benny-a0a876268/)

---

## 🚀 Key Features of this Portfolio

1. **Recruiter-Focused QA Aesthetic:**
   - Dark navy / charcoal background (`#080C15`) with vibrant mint & teal accents (`#14B8A6`, `#2DD4BF`).
   - Clean, modern typography using Google Fonts (Manrope & JetBrains Mono).
   - Initials-based avatar with QA verification shield.
   - Fully responsive on desktop, tablet, and mobile devices.

2. **Dedicated Testing Methodology Section:**
   - 5-step STLC workflow: Requirement Analysis ➔ Test Planning ➔ Test Execution ➔ Defect Reporting ➔ Retesting & Regression.
   - **Sample QA Defect Report Card** (`BUG-FRAN-024`) with Preconditions, Steps to Reproduce, Severity/Priority, and Expected vs. Actual outcomes.
   - **Interactive Test Case Explorer Tabs** demonstrating Functional, Boundary Value Analysis (BVA), Equivalence Partitioning (ECP), and API validation cases.

3. **Curated QA & Development Projects:**
   - **Franciscan Website — Manual Testing (Primary QA Project):** UI navigation, form validations, positive/negative scenarios, and defect tracking with GitLab.
   - **Authentic Eye — AI-Generated Image Detection:** FastAPI backend with ConvNeXt-Tiny CNN PyTorch model; includes QA analysis on file MIME boundaries, API error handling, and response confidence validation.
   - **Autonomous Cognitive Engine:** Stateful AI agent architecture leveraging LangGraph, LangChain, and LangSmith evaluation tracing.
   - **CareerCatalyst:** AI campus placement platform with Node.js, Express, MongoDB, and REST APIs.

4. **Skill Transparency:**
   - Clear distinction between **Proficient / Practical** skills (Manual Testing, STLC, Postman, SQL, Git) and **Currently Learning / Fundamentals** (Selenium WebDriver, Java locators).

5. **Direct Resume Integration:**
   - Working resume download buttons linked to verified `Anusha_Resume.pdf`.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** React 19 + Vite 8
- **Styling:** Custom Vanilla CSS Design System with CSS Custom Properties and dark theme glassmorphism
- **Icons:** Lucide Icons + custom SVG brand icons
- **Build Output:** Static bundle in `./dist` configured with relative base (`./`) for seamless GitHub Pages subpath hosting

---

## 💻 Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🌐 Deploying to GitHub Pages

### Method 1: Automatic GitHub Actions (Recommended)
This repository includes a ready-to-run GitHub Actions workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "Build modern Software Tester portfolio"
   git push origin main
   ```
2. In your GitHub repository, go to **Settings ➔ Pages**.
3. Under **Build and deployment ➔ Source**, select **GitHub Actions**.
4. GitHub Actions will automatically run the build and publish the website to:
   `https://anushabenny-projects.github.io/portflio/`

### Method 2: Deploying `dist` via gh-pages
If you prefer deploying a dedicated branch:
```bash
npm run build
npx gh-pages -d dist
```

---

## 📄 Updating Your Resume PDF

To update the downloadable resume:
1. Replace `public/Anusha_Resume.pdf` with your updated resume file (keep the exact file name `Anusha_Resume.pdf`).
2. Run `npm run build` and push the changes.

---

## 📁 Project File Structure

```
portflio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── Anusha_Resume.pdf       # Verified Resume PDF
│   ├── Anusha_CV.pdf           # Backup CV PDF
│   ├── franciscan_qa.jpg       # Franciscan QA Dashboard Showcase
│   ├── autentic.png            # Authentic Eye Project Visual
│   ├── carrer.png              # Career Catalyst Project Visual
│   ├── cognitive.png           # Autonomous Cognitive Engine Project Visual
│   └── favicon.svg             # QA Shield Favicon
├── src/
│   ├── components/
│   │   ├── About.jsx           # Background, STLC, CS Education Narrative
│   │   ├── Contact.jsx         # Contact CTA, Direct Email & Copy Toast
│   │   ├── Education.jsx       # Academic Timeline & Verified Certifications
│   │   ├── Footer.jsx          # Dynamic Copyright & Social Links
│   │   ├── Hero.jsx            # Headline, Subheading, Status Pill & Stats
│   │   ├── Icons.jsx           # Centralized Lucide & Brand Icon Mapping
│   │   ├── Navbar.jsx          # Sticky Header, Active Scrollspy & Mobile Drawer
│   │   ├── Projects.jsx        # Project Cards with Filter & GitHub Links
│   │   ├── ResumeSection.jsx   # Prominent Resume Download Card
│   │   ├── TestCaseModal.jsx   # Modal for Inspecting Detailed Test Cases
│   │   ├── TestingWorkflow.jsx # 5-Step QA Lifecycle & Sample Defect Card
│   │   └── Toast.jsx           # Copy-to-Clipboard Floating Notification
│   ├── data/
│   │   └── portfolioData.js    # Verified Portfolio Information & Test Artifacts
│   ├── App.jsx                 # Root Component with Scrollspy & State
│   ├── index.css               # Core Design System, Variables & Utilities
│   └── main.jsx                # React Entry Point
├── index.html                  # SEO Meta Tags, Open Graph & Fonts Preconnect
├── package.json                # Project Dependencies & Scripts
├── vite.config.js              # Vite Configuration with Relative Base Path
└── README.md                   # Documentation & Setup Guide
```
