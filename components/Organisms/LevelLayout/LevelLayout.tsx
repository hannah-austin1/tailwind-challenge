"use client";
import { ClassKeys, IStyles, classKeys } from "@/common/types";
import { EditorForm, Level } from "@/components/Molecules";
import { useEffect, useState } from "react";
import { getCookies } from "@/app/actions";

interface ILevelLayoutProps {
  level: number;
  editorCode: string;
  initialClasses: IStyles;
}

const LevelLayout = ({
  level,
  editorCode,
  initialClasses,
}: ILevelLayoutProps) => {
  const [code, setCode] = useState(initialClasses);
  const [loading, setLoading] = useState(false);

  console.log("in", initialClasses);

  return (
    <div className="flex h-screen w-full">
      <div className="w-1/2 h-full flex items-center justify-center bg-gray-200 p-3">
        <Level level={level} code={code} />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center bg-gray-300 p-5">
        <EditorForm
          level={level}
          initialCode={editorCode}
          code={code}
          initialClasses={initialClasses}
          setCode={setCode}
        />
      </div>
    </div>
  );
};

export default LevelLayout;
