import { useNavigate } from "react-router-dom";
import { Team } from "../types/interfaces";
import TeamOrganizationChart from "../components/TeamOrganizationChart";

interface MembersProps {
  selectedTeamProjects: Team | null;
  setSelectedTeamProjects: React.Dispatch<React.SetStateAction<Team | null>>;
  setActiveSection: (section: string) => void;
}

const Members = ({
  setSelectedTeamProjects,
  setActiveSection,
}: MembersProps) => {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-50 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-indigo-800">조직도</h2>
      <TeamOrganizationChart
        onTeamClick={(team: Team) => {
          setSelectedTeamProjects(team);
          setActiveSection("projects");
          navigate("/projects");
        }}
      />
    </section>
  );
};

export default Members;
