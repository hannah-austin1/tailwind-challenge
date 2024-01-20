import { Header } from "@/components/Atoms";
import { LevelLayout } from "@/components/Organisms";
import { levelData } from "@/data/levelData";

interface ILevel {
  level: number;
}
interface IParams {
  params: ILevel;
}
const LevelPage = ({ params: { level: levelNumber } }: IParams) => {
  const levelParams = levelData[levelNumber - 1];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header
        level={levelParams.level}
        title={levelParams.title}
        description={levelParams.description}
      />
      <LevelLayout levelData={levelParams} />
    </main>
  );
};

export default LevelPage;
