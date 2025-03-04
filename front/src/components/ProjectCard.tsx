import { ProjectCardProps } from "../types/interfaces";

export const ProjectCard = ({
  title,
  description,
  technologies,
}: ProjectCardProps) => (
  <div className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
    <h3 className="font-bold text-lg mb-4 text-indigo-700">{title}</h3>
    <p className="text-gray-600 text-sm mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="bg-indigo-50 text-indigo-600 text-xs px-2 py-1 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);
