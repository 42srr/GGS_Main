import { LucideIcon } from "lucide-react";

export interface NavItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export interface Team {
  name: string;
  server: string;
  frontend: string;
  description: string;
  projects?: Project[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

export interface TeamOrganizationChartProps {
  onTeamClick: (team: Team) => void;
}
