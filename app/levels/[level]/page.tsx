import { Header } from "@/components/Atoms";
import { EditorForm, Level } from "@/components/Organisms";
import { levelData } from "@/data/levelData";

interface ILevel {
  level: number;
}
interface IParams {
  params: ILevel;
}
const LevelPage = ({ params: { level: levelNumber } }: IParams) => {
  const actualLevel = levelNumber - 1;
  const { level, title, description, code } = levelData[actualLevel];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header level={level} title={title} description={description} />
      <div className="flex h-screen w-full">
        <div className="w-1/2 h-full flex items-center justify-center bg-gray-200 p-3">
          <Level level={level} />
        </div>
        <div className="w-1/2 h-full flex items-center justify-center bg-gray-300 p-3">
          <EditorForm level={level} initialCode={code} />
        </div>
      </div>
    </main>
  );
};

export default LevelPage;
