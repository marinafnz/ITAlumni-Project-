# ITAlumni

Web platform designed to connect and empower the global community of IT Academy alumni. The project faithfully translates the design system created in Figma into a functional, intuitive, and accessible web interface.

## How to Run the Project 

1. **Download or clone this repository:**
   ```bash
   git clone [https://github.com/marinafnz/ITAlumni-Project-.git](https://github.com/marinafnz/ITAlumni-Project-.git)

2. **Install dependencies**

    Run in your terminal: npm install

**GitHub Pages Demo:** (https://marinafnz.github.io/ITAlumni/)

---

## Key Features and Views

- **Welcome & Authentication (`index.html`, `login.html`):** Welcome screen introducing the platform along with a login and registration flow for users and guests.
- **Home (`home.html`):** Main dashboard with quick access to key community sections and an integrated search bar.
- **Network (`xarxa.html`):** Dedicated space for networking and connecting with industry professionals.
- **Job Portal (`job.html`):** Filterable job listings tailored to the technical profiles of students and alumni.

---

## Technologies & Applied Architecture

- **HTML5:** Clean document structuring using semantic tags to improve accessibility and DOM maintainability.
- **CSS3 (Mobile-First Methodology):**
  - Layout built according to Figma design specifications.
  - Use of Flexbox and Grid for spatial distribution and component flow control.
  - Implementation of Media Queries (`@media`) and width limit controls (`min-width`) to ensure visual stability on desktop resolutions.
- **JavaScript / TypeScript :** Interactive logic focused on dynamic content filtering.
- **Version Control & Deployment:** Code management with Git (feature branch workflow) and continuous deployment on GitHub Pages.

---

## Project File Structure

```text
├── Src/
│   ├── CSS/
│   │   └── index.css       # Main stylesheet (Mobile-First and Desktop)
│   ├── IMG/                # Graphic assets, icons, and images
│   ├── filter.ts           # Filtering logic in TypeScript
│   ├── filter.js           # Compiled JavaScript code
│   ├── index.html          # Welcome page
│   ├── login.html          # Login and registration
│   ├── home.html           # Main view (mobile)
│   ├── xarxa.html          # Networking section
│   └── job.html            # Job portal
├── package.json            # Project dependencies configuration
└── README.md               # Project documentation
```