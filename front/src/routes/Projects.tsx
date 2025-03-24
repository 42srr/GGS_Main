import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types/interfaces";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { teams } from "@/TeamData";

const Projects = () => {
  // 모든 프로젝트를 하나의 배열로 합치기
  const allProjects = teams.flatMap((team) =>
    team.teams.flatMap((subTeam) => subTeam.projects || [])
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <CardTitle className="text-xl lg:text-2xl text-center lg:text-left">
            프로젝트 포트폴리오
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        {allProjects.map((project, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  {project.link && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      방문하기
                    </Button>
                  )}
                </div>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default Projects;
