"use client"; 

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

// --- TypeScript Interfaces ---
// Defining types for our data structures enhances code quality and maintainability.

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  tasks: string[];
}

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface PortfolioData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  about: string;
  profilePictureUrl: string;
  experiences: ExperienceItem[];
  skills: string[];
  education: EducationItem[];
}

// --- Data ---
// The portfolio data is now strongly typed with our PortfolioData interface.
const portfolioData: PortfolioData = {
  name: "Muhammad Rizky Sendiko",
  title: "Student at Telkom University, Bandung",
  email: "rizkysendiko7@gmail.com",
  phone: "+6282241626760",
  location: "Bojongsoang, Bandung, Indonesia",
  about: "A dedicated Android Developer with a strong understanding of Kotlin and an interest to learn about Compose Multiplatform. Looking forward to contributing to more innovative Mobile Development.",
  profilePictureUrl: "https://placehold.co/150x150/E0E7FF/4F46E5?text=MRS",
  experiences: [
    {
      role: "Mentor Android Developer",
      company: "Chevalier Laboratory, Bandung",
      period: "Maret 2024 - Now",
      tasks: [
        "Mentoring students at University about Android Development, from basics to expert level, using Kotlin and implementing best practices.",
        "MyCheva, app for Chevalier Laboratory SAS, a platform for study group members to interact with Mentors, and centered communication."
      ]
    },
    {
      role: "Android Developer",
      company: "Freelance, Bandung",
      period: "Juli 2023 - Now",
      tasks: [
        "Sistem Hasil Karya, an application for contractor companies that makes it easier to track materials, as well as refueling.",
        "OCR Text Recognition research for Transtrack."
      ]
    },
    {
      role: "Kotlin Mentor",
      company: "Dilesin Academy, Bandung",
      period: "Oktober 2024 - November 2024",
      tasks: [
        "Mentoring students in Online Private Class about Kotlin and Android Development with Kotlin and Jetpack Compose."
      ]
    },
    {
      role: "Android Developer",
      company: "PT PuskoMedia Indonesia Kreatif, Purwokerto",
      period: "April 2022 - September 2022",
      tasks: [
        "Dadidu Android, an application that makes it easy for tourist location managers to print their tourist tickets.",
        "Eternak Android, an application to help farmers in managing their livestock, especially in avoiding inbreeding, and tracking livestock medical records."
      ]
    }
  ],
  skills: [
    "Kotlin", "Android", "Jetpack Compose", "Compose Multiplatform", 
    "MVI Architecture", "Clean Architecture", "Dagger Hilt", "Koin"
  ],
  education: [
    {
      degree: "Diploma of Software Engineering Application",
      institution: "Telkom University",
      period: "2023 - 2026",
      description: "Taking a D3 major in Application Software Engineering with the aim of deepening knowledge about Mobile Development, participating in Study Groups, and also participating in competitions."
    },
    {
      degree: "Software Engineering",
      institution: "SMK Telkom Purwokerto",
      period: "2020 - 2023",
      description: "Learned the basic concepts of programming, HTML, CSS, JS, Kotlin, Object Oriented Programming, Basic Android, and Flutter."
    }
  ]
};

// --- Component Prop Types ---
interface HeaderProps {
  data: Pick<PortfolioData, 'name' | 'title' | 'email' | 'phone' | 'location' | 'profilePictureUrl'>;
}

interface AboutProps {
  content: string;
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

interface SkillsProps {
  skills: string[];
}

interface EducationProps {
  education: EducationItem[];
}


// --- Components (TSX) ---

const Header: React.FC<HeaderProps> = ({ data }) => (
  <header className="flex flex-col sm:flex-row items-center text-center sm:text-left mb-12">
    <img 
      src={data.profilePictureUrl}
      alt={`${data.name} Profile Picture`}
      className="w-32 h-32 sm:w-36 sm:h-36 rounded-full shadow-lg mb-6 sm:mb-0 sm:mr-8 border-4 border-white"
      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.src = 'https://placehold.co/150x150/E0E7FF/4F46E5?text=MRS'; }}
    />
    <div>
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">{data.name}</h1>
      <p className="text-xl sm:text-2xl text-blue-600 mt-2">{data.title}</p>
      <div className="mt-6 flex justify-center sm:justify-start items-center flex-wrap gap-4 text-gray-600">
        <a href={`mailto:${data.email}`} className="flex items-center hover:text-blue-600 transition-colors">
          <Mail className="h-5 w-5 mr-2" />
          {data.email}
        </a>
        <span className="hidden sm:inline">|</span>
        <a href={`tel:${data.phone}`} className="flex items-center hover:text-blue-600 transition-colors">
          <Phone className="h-5 w-5 mr-2" />
          {data.phone}
        </a>
        <span className="hidden sm:inline">|</span>
        <div className="flex items-center">
          <MapPin className="h-5 w-5 mr-2" />
          {data.location}
        </div>
      </div>
    </div>
  </header>
);

const About: React.FC<AboutProps> = ({ content }) => (
  <section id="about" className="mb-12 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4">About Me</h2>
    <p className="text-lg text-gray-700">{content}</p>
  </section>
);

const Experience: React.FC<ExperienceProps> = ({ experiences }) => (
  <section id="experience" className="mb-12">
    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2 mb-6">Experience</h2>
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div className="flex justify-between items-start flex-wrap">
            <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
            <p className="text-md text-gray-500">{exp.period}</p>
          </div>
          <p className="text-lg text-blue-600">{exp.company}</p>
          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
            {exp.tasks.map((task, i) => <li key={i}>{task}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

const Skills: React.FC<SkillsProps> = ({ skills }) => (
  <section id="skills" className="mb-12">
    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2 mb-6">Skills</h2>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span key={index} className="bg-blue-100 text-blue-800 text-md font-medium px-4 py-2 rounded-full">
          {skill}
        </span>
      ))}
    </div>
  </section>
);

const Education: React.FC<EducationProps> = ({ education }) => (
  <section id="education">
    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2 mb-6">Education</h2>
    <div className="space-y-8">
      {education.map((edu, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <div className="flex justify-between items-start flex-wrap">
            <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
            <p className="text-md text-gray-500">{edu.period}</p>
          </div>
          <p className="text-lg text-blue-600">{edu.institution}</p>
          <p className="mt-2 text-gray-700">{edu.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const Footer: React.FC = () => (
    <footer className="text-center mt-12 py-4 text-gray-500">
        <p>Powered by CakeResume | Webpage created by Gemini</p>
    </footer>
);


// --- Main App Component ---
// This would typically be in your `pages/index.tsx` in a Next.js app.
const App: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
        <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
            <Header data={portfolioData} />
            <main>
                <About content={portfolioData.about} />
                <Experience experiences={portfolioData.experiences} />
                <Skills skills={portfolioData.skills} />
                <Education education={portfolioData.education} />
            </main>
            <Footer />
        </div>
    </div>
  );
}

export default App;
