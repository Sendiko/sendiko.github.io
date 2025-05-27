// components/ProjectCard.tsx
import React from "react";
import Image from "next/image"; // Using next/image for optimization
import Link from "next/link";

interface ProjectCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  techStack: string;
  projectLink: string;
  linkText?: string;
  kmpVisionNote?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
  techStack,
  projectLink,
  linkText = "View Details",
  kmpVisionNote,
}) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg flex flex-col">
      <div className="relative w-full h-[200px] bg-gray-200">
        <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h4 className="text-xl font-semibold text-blue-800 mb-2">{title}</h4>
        <p className="text-gray-700 text-[0.95em] mb-3">{description}</p>
        <p className="text-xs text-gray-600 italic mb-3">
          <strong>Tech:</strong> {techStack}
        </p>
        {kmpVisionNote && (
          <p className="text-xs text-gray-500 my-2 border-l-[3px] border-indigo-500 pl-2.5">
            <em>{kmpVisionNote}</em>
          </p>
        )}
        <div className="mt-auto">
          <Link
            href={projectLink}
            className="inline-block py-2 px-4 bg-indigo-500 text-white no-underline rounded text-sm hover:bg-indigo-700 transition-colors duration-300 ease-in-out"
          >
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
