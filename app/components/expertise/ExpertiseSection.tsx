// components/ExpertiseSection.tsx
import React from "react";
import SectionTitle from "../sites/SectionTitle";
import ExpertiseCard from "./ExpertiseCard";

interface Expertise {
  id: string;
  title: string;
  description: string;
}

interface ExpertiseSectionProps {
  title: string;
  expertises: Expertise[];
  className?: string;
}

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({
  title,
  expertises,
  className = "py-16",
}) => {
  return (
    <section id="expertise" className={className}>
      <div className="w-11/12 max-w-6xl mx-auto">
        <SectionTitle title={title} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertises.map((expertise) => (
            <ExpertiseCard
              key={expertise.id}
              title={expertise.title}
              description={expertise.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
