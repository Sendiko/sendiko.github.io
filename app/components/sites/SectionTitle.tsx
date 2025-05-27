// components/SectionTitle.tsx
import React from "react";

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  className = "",
}) => {
  return (
    <h3
      className={`text-3xl font-semibold text-blue-800 text-center mb-10 ${className}`}
    >
      {title}
    </h3>
  );
};

export default SectionTitle;
