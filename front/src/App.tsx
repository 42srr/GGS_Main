import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sidebar } from "./components/Sidebar";
import { Team } from "./types/interfaces";
import { cn } from "@/lib/utils";
import { CardTitle } from "@/components/ui/card";

import Projects from "./routes/Projects";
import Members from "./routes/Members";
import Home from "./routes/Home";

function App() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [selectedTeamProjects, setSelectedTeamProjects] = useState<Team | null>(
    null
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile Menu Button */}
      <div className="flex items-center justify-between w-full fixed top-0 p-4 z-50 bg-background lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        <div className="flex flex-col items-center">
          <CardTitle className="text-2xl font-bold text-primary">
            42GGS
          </CardTitle>
        </div>
        <div className="w-10" /> {/* 좌우 균형을 맞추기 위한 빈 공간 */}
      </div>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 transform lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-40",
          isMobileMenuOpen ? "translate-x-0 pt-16" : "-translate-x-full"
        )}
      >
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          setSelectedTeamProjects={setSelectedTeamProjects}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8 pt-16 lg:pt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects"
            element={
              <Projects
                selectedTeamProjects={selectedTeamProjects}
                setSelectedTeamProjects={setSelectedTeamProjects}
              />
            }
          />
          <Route
            path="/members"
            element={
              <Members
                selectedTeamProjects={selectedTeamProjects}
                setSelectedTeamProjects={setSelectedTeamProjects}
                setActiveSection={setActiveSection}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
