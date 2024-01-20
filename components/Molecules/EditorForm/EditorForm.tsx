"use client";
import { setCookies } from "@/app/actions";
import { IClasses } from "@/common/types";
import { Editor } from "@/components/Molecules";
import { isLevelComplete } from "@/utils/isLevelComplete";
import { parseCode } from "@/utils/parseCode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IEditorProps {
  level: number;
  initialCode: string;
  code: IClasses;
  setCode: React.Dispatch<React.SetStateAction<any>>;
}

const EditorForm = ({ level, initialCode, code, setCode }: IEditorProps) => {
  let colours =
    "fill-white fill-green-300 fill-red-300 fill-yellow-300 fill-purple-300";
  const router = useRouter();
  const [editorCode, setEditorCode] = useState(initialCode);
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!isLevelComplete) {
      console.log("level not complete");
    } else {
      await setCookies(code);
      router.push(`/levels/${level + 1}`);
      console.log("Submitted code:", code);
    }
  };
  useEffect(() => {
    const newCode = parseCode(level, editorCode, code);
    setCode(newCode);
  }, [editorCode, setCode]);
  return (
    <form onSubmit={handleSubmit} className="w-full px-6 h-3/6">
      <Editor code={editorCode} setCode={setEditorCode} />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700"
      >
        Next level
      </button>
    </form>
  );
};

export default EditorForm;
