"use client";
import { ClassKeys, ILevel, IStyles, classKeys } from "@/common/types";
import { EditorForm, Level } from "@/components/Molecules";
import { useEffect, useState } from "react";
import { getCookies } from "@/app/actions";

interface ILevelLayoutProps {
  levelData: ILevel;
}

const getExistingClasses = async () => {
  const cookies = await getCookies();
  console.log("cookies", cookies);
  return cookies
    .filter((cookie) => classKeys.includes(cookie.name as ClassKeys))
    .reduce((acc: IStyles, cookie) => {
      acc[cookie.name as ClassKeys] = cookie.value;
      return acc;
    }, {} as IStyles);
};

const LevelLayout = ({ levelData }: ILevelLayoutProps) => {
  const { level, editorCode, initialClasses } = levelData;
  const [code, setCode] = useState(initialClasses);
  const [loading, setLoading] = useState(false);

  // Get the cookies that contain previous levels
  useEffect(() => {
    setLoading(true);
    getExistingClasses().then((classes) =>
      //prevents reset if user goes back to L1
      level === 1
        ? setCode(classes)
        : setCode({ ...classes, ...initialClasses })
    );
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  console.log("code", code);

  return (
    <div className="flex h-screen w-full">
      <div className="w-1/2 h-full flex items-center justify-center bg-gray-200 p-3">
        <Level level={level} code={code} />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center bg-gray-300 p-3">
        <EditorForm
          level={level}
          initialCode={editorCode}
          code={code}
          setCode={setCode}
        />
      </div>
    </div>
  );
};

export default LevelLayout;
