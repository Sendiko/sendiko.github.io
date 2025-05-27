// components/HeroSection.tsx
import React from "react";

interface HeroSectionProps {
  title: string;
  subtitlePrefix: string;
  name: string;
  subtitleSuffix: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitlePrefix,
  name,
  subtitleSuffix,
}) => {
  return (
    <section id="hero" className="bg-indigo-50 text-center py-20">
      <div className="w-11/12 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-800 leading-tight mb-4">
          {title}
        </h2>
        <p className="text-xl text-gray-600">
          {subtitlePrefix}
          {name}
          {subtitleSuffix}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
