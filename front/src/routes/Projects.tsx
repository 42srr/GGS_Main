import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Team } from "@/types/interfaces";

interface ProjectsProps {
  selectedTeamProjects: Team | null;
  setSelectedTeamProjects: React.Dispatch<React.SetStateAction<Team | null>>;
}

const Projects = ({ selectedTeamProjects }: ProjectsProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <CardTitle className="text-xl lg:text-2xl text-center lg:text-left">
            {selectedTeamProjects
              ? `${selectedTeamProjects.name} 프로젝트`
              : "프로젝트 포트폴리오"}
          </CardTitle>
          {selectedTeamProjects && (
            <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
              <span>서버: {selectedTeamProjects.server}</span>
              <span className="hidden sm:block">•</span>
              <span>프론트: {selectedTeamProjects.frontend}</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        {selectedTeamProjects?.projects?.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <p className="text-muted-foreground text-sm">
                {project.description}
              </p>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <Badge key={i} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default Projects;
