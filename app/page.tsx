// pages/index.tsx (or app/page.tsx)

import React from "react";
import Head from "next/head"; // For setting the page title and meta tags

// Import your components
import SiteHeader from "./components/sites/SiteHeader"; // Adjust path if needed
import HeroSection from "./components/hero/HeroSection";
import ExpertiseSection from "./components/expertise/ExpertiseSection";
import KmpJourneySection from "./components/sites/KmpJourneySection";
import ProjectsSection from "./components/project/ProjectSection";
import ContactSection from "./components/contact/ContactSection";
import SiteFooter from "./components/sites/SiteFooter";

// Define the data for your components
const siteConfig = {
  name: "[Your Name]", // Replace with your name
  email: "your.email@example.com", // Replace with your email
  linkedinUrl: "https://linkedin.com/in/yourprofile", // Replace
  githubUrl: "https://github.com/yourusername", // Replace
};

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#expertise", label: "Expertise" },
  { href: "#kmp-journey", label: "KMP Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const expertiseData = [
  {
    id: "android-dev",
    title: "Native Android Development (Kotlin)",
    description:
      "Building intuitive, high-performance Android applications with Kotlin, Jetpack Compose, and modern Android development practices.",
  },
  {
    id: "backend-dev",
    title: "Robust Backend APIs (Express.js)",
    description:
      "Designing and developing scalable RESTful APIs with Node.js and Express.js to power mobile and web applications.",
  },
];

const projectData = [
  {
    id: "proj1",
    imgSrc: "/placeholder-study-app.png", // Make sure this image is in /public
    imgAlt: "Study Group App Mockup",
    title: "Study Group Communication App",
    description:
      "An Android app facilitating centered communication for a study group program. Built with Kotlin and [mention other key tech, e.g., Firebase].", // Replace [mention other key tech]
    techStack: "Kotlin, Android SDK, Express.js (for API)",
    projectLink: "#", // Replace with actual link or path e.g., "/projects/study-app"
    kmpVisionNote:
      "Future Vision: Exploring KMP to share core logic for potential iOS/Web versions.",
  },
  {
    id: "proj2",
    imgSrc: "/placeholder-practicum-app.png", // Make sure this image is in /public
    imgAlt: "Practicum Assistant App Mockup",
    title: "Practicum Assistant Administration App",
    description:
      "An Android application for managing practicum assistant administration tasks. Developed using Kotlin and [mention other key tech, e.g., Room DB].", // Replace [mention other key tech]
    techStack: "Kotlin, Android SDK, Express.js (for API)",
    projectLink: "#", // Replace with actual link or path
    kmpVisionNote:
      "This app's modular design is a good candidate for KMP exploration.",
  },
];

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>{siteConfig.name} - Multiplatform Visionary</title>
        <meta
          name="description"
          content="Portfolio of [Your Name], focusing on Android, Backend, and Kotlin Multiplatform development."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Add other meta tags like favicons here */}
      </Head>

      <SiteHeader logoText={siteConfig.name} navItems={navItems} />

      <main>
        <HeroSection
          title="Crafting Native Android Excellence, Engineering Robust APIs, and Pioneering Multiplatform Solutions."
          subtitlePrefix="Hi, I'm "
          name={siteConfig.name}
          subtitleSuffix=", a mobile developer passionate about building efficient solutions for today and embracing the multiplatform future with Kotlin."
        />

        {/* Assuming body/layout bg is light gray (e.g., bg-gray-50) */}
        {/* ExpertiseSection will use default padding and inherit this light gray background */}
        <ExpertiseSection
          title="Core Expertise"
          expertises={expertiseData}
          // className="py-16" (default in component)
        />

        {/* KmpJourneySection explicitly set to bg-white for alternating effect */}
        <KmpJourneySection
          title="My Kotlin Multiplatform Journey"
          description="Actively expanding my expertise into Kotlin Multiplatform, leveraging my strong Kotlin foundation to build for a wider range of devices. Exploring shared business logic, native UI integration, and the future of cross-platform development."
          className="py-16 bg-white" // Overrides default if any, ensures white background
        />

        {/* ProjectsSection will use default padding and inherit body's light gray background */}
        <ProjectsSection
          title="Featured Projects"
          projects={projectData}
          // className="py-16" (default in component)
        />

        {/* ContactSection explicitly set to bg-white for alternating effect */}
        <ContactSection
          title="Get In Touch"
          introText="Interested in collaborating or want to learn more about my work? Let's connect!"
          email={siteConfig.email}
          linkedinUrl={siteConfig.linkedinUrl}
          githubUrl={siteConfig.githubUrl}
          className="py-16 bg-white" // Overrides default if any, ensures white background
        />
      </main>

      <SiteFooter name={siteConfig.name} />
    </>
  );
};

export default HomePage;
