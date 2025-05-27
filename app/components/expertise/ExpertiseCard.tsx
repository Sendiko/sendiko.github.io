// components/ExpertiseCard.tsx
import React from "react";

interface ExpertiseCardProps {
  title: string;
  description: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
      <h4 className="text-xl font-semibold text-blue-800 mb-2">{title}</h4>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ExpertiseCard;
