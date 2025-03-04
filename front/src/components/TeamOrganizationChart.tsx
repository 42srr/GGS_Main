import { TeamOrganizationChartProps } from "../types/interfaces";
import { Star, Network } from "lucide-react";
import { teams } from "../TeamData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const TeamOrganizationChart = ({ onTeamClick }: TeamOrganizationChartProps) => {
  return (
    <div className="space-y-4 lg:space-y-6">
      {teams.map((batch, batchIndex) => (
        <Card key={batchIndex}>
          <CardHeader className="bg-secondary/10">
            <CardTitle className="text-lg lg:text-xl">{batch.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{batch.description}</p>
            <div className="flex items-center mt-2">
              <Star className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium">
                동아리장: {batch.leader}
              </span>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4">
            {batch.teams.map((team, teamIndex) => (
              <Card
                key={teamIndex}
                className="cursor-pointer hover:bg-secondary/5"
                onClick={() => onTeamClick(team)}
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <CardTitle className="text-base">{team.name}</CardTitle>
                    <Network className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {team.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">서버:</span>
                      <span className="text-muted-foreground">
                        {team.server}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">프론트:</span>
                      <span className="text-muted-foreground">
                        {team.frontend}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TeamOrganizationChart;
