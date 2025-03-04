import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Laptop, Trophy, Users, ServerCog } from "lucide-react";

const Home = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div>
            <CardTitle className="text-2xl lg:text-3xl text-center lg:text-left">
              42 경산의 혁신적인 개발 동아리
            </CardTitle>
            <p className="text-muted-foreground mt-4 text-center lg:text-left">
              코딩의 열정, 협업의 즐거움, 그리고 끊임없는 성장을 추구합니다.
            </p>
          </div>
          <Laptop className="h-20 w-20 lg:h-24 lg:w-24 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="bg-indigo-50 p-6 rounded-lg">
          <Trophy className="w-10 h-10 text-indigo-600 mb-4" />
          <h3 className="font-bold mb-2 text-indigo-700">프로젝트 기반 학습</h3>
          <p className="text-sm text-gray-600">
            실제 프로젝트를 통해 실무 역량을 키웁니다.
          </p>
        </div>
        <div className="bg-emerald-50 p-6 rounded-lg">
          <Users className="w-10 h-10 text-emerald-600 mb-4" />
          <h3 className="font-bold mb-2 text-emerald-700">협업 문화</h3>
          <p className="text-sm text-gray-600">
            서로 배우고 성장하는 협력적인 환경을 만듭니다.
          </p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <ServerCog className="w-10 h-10 text-purple-600 mb-4" />
          <h3 className="font-bold mb-2 text-purple-700">다양한 기술 탐구</h3>
          <p className="text-sm text-gray-600">
            최신 기술과 트렌드를 함께 학습합니다.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Home;
