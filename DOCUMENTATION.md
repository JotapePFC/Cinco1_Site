# Cinco1 – Skate Magazine

## Overview
Cinco1 is a responsive web project for a skateboarding magazine focused on the local scene of Porto Alegre, Brazil, and beyond. It features a modern, premium aesthetic, leveraging Tailwind CSS for styling and custom Vanilla JavaScript for dynamics.

## Technology Stack
- **HTML5:** Semantic structure for optimal accessibility and SEO.
- **CSS Framework:** Tailwind CSS (via CDN) with extended custom configuration for theme colors, dark mode support (`class` strategy), and font settings.
- **Typography:** Google Fonts (Montserrat for headings/logos; Sans-serif system fonts for body text).
- **JavaScript:** Vanilla JS handling UI interactions, theme toggling, scroll animations, mocked authentication, image gallery logic, and checkout flows.
- **Assets/Icons:** SVG strings for icons and placeholder images from Picsum Photos.

## Features & Implementation

### 1. Theme Management (Dark/Light Mode)
- Managed via a `ThemeManager` class in `index.html`.
- Uses `localStorage` to persist the user's preference and respects `(prefers-color-scheme: dark)` as a fallback.
- Instantly updates CSS variables and Tailwind classes (`.dark`) upon context switch.

### 2. Interaction & Animations
- **Fade-in / Scroll Animations:** Utilizes the `IntersectionObserver` API to detect when elements enter the viewport, triggering smooth fade-in and slide-up animations (`fade-in-up`).
- **Smooth Navigation:** Smooth scrolling implemented natively for internal anchor links (`html { scroll-behavior: smooth; }`).
- **Dynamic Header:** Header background changes from transparent to a frosted glass effect (`backdrop-blur`) upon scrolling past a 24px threshold.

### 3. State Management & Navigation
- **Mock Login System (`login.html` & `interviews.html`):** Uses `localStorage.setItem('cinco1_logged_in', 'true')` to mock an authenticated state. Exclusive content pages automatically redirect unauthorized visitors back to the login page via inline JavaScript.
- **Mobile Menu:** Functional off-canvas side menu with smooth CSS translate transitions.

### 4. Components & Pages
- **Index (`index.html`):** Landing page with a full-screen hero section, dynamic load-more article grid, and footer.
- **Exposure (`exposure.html`):** Features upcoming issues with a custom-built, fully responsive modal image gallery. The gallery integrates keyboard navigation (Escape, Arrow Keys) and dynamic image loading based on seed data.
- **Interviews (`interviews.html`):** Protected route displaying exclusive editorial content.
- **Plans (`plans.html`):** Subscription page with Monthly and Annual options. Includes a mocked asynchronous flow attempting to hit an endpoint (`/api/checkout/mercadopago`) to initiate a payment preference utilizing Mercado Pago.

## Project Structure
```text
/
├── index.html        # Main landing page
├── login.html        # Authentication page
├── exposure.html     # Gallery and upcoming issues
├── interviews.html   # Exclusive content (protected route)
├── plans.html        # Subscription and checkout processing
├── README.txt        # Legacy structure definition from "Big Picture" template
├── DOCUMENTATION.md  # This documentation file
├── assets/           # Legacy project assets (fonts, images, scripts)
├── css/              # Legacy CSS stylesheets 
├── js/               # Legacy Javascript files
├── sass/             # SASS structural stylesheets
└── webfonts/         # Application fonts
```

## How to Run Locally
Since the project relies mostly on static files with CDN dependencies (Tailwind), it doesn't require a complex build process. 
1. Run a local web server in the root directory. You can use tools like:
   - VS Code Live Server extension
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve`
2. Open your browser and navigate to the local server URL (e.g., `http://localhost:8000`).
