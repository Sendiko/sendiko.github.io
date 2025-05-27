// components/KmpJourneySection.tsx
import React from "react";
import SectionTitle from "./SectionTitle";

interface KmpJourneySectionProps {
  title: string;
  description: string;
  className?: string;
}

const KmpJourneySection: React.FC<KmpJourneySectionProps> = ({
  title,
  description,
  className = "py-16 bg-white",
}) => {
  return (
    <section id="kmp-journey" className={`text-center ${className}`}>
      <div className="w-11/12 max-w-6xl mx-auto">
        <SectionTitle title={title} />
        <p className="text-gray-700 max-w-3xl mx-auto">{description}</p>
        {/* If a link is needed as per the CSS for .link-kmp:
        <a
          href="#your-kmp-link" // Replace with actual link
          className="inline-block mt-6 py-2.5 px-5 bg-blue-800 text-white no-underline rounded-md transition-colors duration-300 ease-in-out hover:bg-blue-700"
        >
          Learn More About KMP
        </a>
        */}
      </div>
    </section>
  );
};

export default KmpJourneySection;
