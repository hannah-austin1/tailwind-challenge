import { Header } from "@/components/Atoms";
import { LevelLayout } from "@/components/Organisms";
import { levelData } from "@/app/data/levelData";
import { promises as fs } from "fs";
import { ClassKeys, IPageParams, IStyles, classKeys } from "@/common/types";
import { cookies } from "next/headers";

const LevelPage = async ({ params: { level: levelString } }: IPageParams) => {
  const level = parseInt(levelString);
  const { title, description, initialClasses } = levelData[level - 1];
  const initialCodeString = await fs.readFile(
    process.cwd() + `/app/data/levels/level${levelString}.js`,
    "utf8"
  );
  const cookieStore = cookies();
  const stylesCookies = cookieStore
    .getAll()
    .filter((cookie) => classKeys.includes(cookie.name as ClassKeys))
    .reduce((acc: IStyles, cookie) => {
      acc[cookie.name as ClassKeys] = cookie.value;
      return acc;
    }, {} as IStyles);
  console.log("cookies", stylesCookies);

  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <Header level={level} title={title} description={description} />
      <LevelLayout
        level={level}
        editorCode={initialCodeString}
        initialClasses={{ ...stylesCookies, ...initialClasses }}
      />
    </main>
  );
};

export default LevelPage;
