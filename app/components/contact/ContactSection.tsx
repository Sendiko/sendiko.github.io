// components/ContactSection.tsx
import React from "react";
import SectionTitle from "../sites/SectionTitle";
import ContactLink from "./ContactLink";

interface ContactSectionProps {
  title: string;
  introText: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  introText,
  email,
  linkedinUrl,
  githubUrl,
  className = "py-16 bg-white", // Assuming alternating background
}) => {
  return (
    <section id="contact" className={`text-center ${className}`}>
      <div className="w-11/12 max-w-6xl mx-auto">
        <SectionTitle title={title} />
        <p className="text-gray-700 mb-6">{introText}</p>
        <p>
          <ContactLink href={`mailto:${email}`} label={email} />
          <span className="text-gray-400">|</span>
          <ContactLink href={linkedinUrl} label="LinkedIn" isExternal />
          <span className="text-gray-400">|</span>
          <ContactLink href={githubUrl} label="GitHub" isExternal />
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
