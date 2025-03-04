import { useNavigate } from "react-router-dom";
import {
  Home,
  Users,
  Code,
  ServerCog,
  BookOpen,
  Github,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Team } from "@/types/interfaces";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  setSelectedTeamProjects: React.Dispatch<React.SetStateAction<Team | null>>;
  onClose: () => void;
}

export const Sidebar = ({
  activeSection,
  setActiveSection,
  setSelectedTeamProjects,
  onClose,
}: SidebarProps) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string, section: string) => {
    navigate(path);
    setActiveSection(section);
    setSelectedTeamProjects(null);
    onClose();
  };

  const handleGithubClick = () => {
    window.open("https://github.com/42srr", "_blank");
  };

  const handleContactClick = () => {
    // 연락 모달 또는 페이지로 이동
  };

  return (
    <Card className="h-screen w-64 rounded-none border-r">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-primary text-center">
          42GGS
        </CardTitle>
        <p className="text-muted-foreground text-sm text-center">개발 동아리</p>
      </CardHeader>
      <CardContent className="flex flex-col h-[calc(100%-5rem)] p-4">
        <nav className="space-y-2">
          <Button
            variant={activeSection === "home" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => handleNavigation("/", "home")}
          >
            <Home className="mr-2 h-4 w-4" />홈
          </Button>
          <Button
            variant={activeSection === "members" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => handleNavigation("/members", "members")}
          >
            <Users className="mr-2 h-4 w-4" />
            조직도
          </Button>
          <Button
            variant={activeSection === "projects" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => handleNavigation("/projects", "projects")}
          >
            <Code className="mr-2 h-4 w-4" />
            프로젝트
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => window.open("https://blog.42srr.com", "_blank")}
          >
            <ServerCog className="mr-2 h-4 w-4" />
            기술 블로그
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <BookOpen className="mr-2 h-4 w-4" />
            학습 리소스
          </Button>
        </nav>

        <div className="mt-auto space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={handleGithubClick}
          >
            <Github className="mr-2 h-4 w-4" />
            깃허브
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={handleContactClick}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            연락하기
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
