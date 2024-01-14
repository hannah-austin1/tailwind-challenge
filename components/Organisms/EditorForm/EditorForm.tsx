"use client";
import { Editor } from "@/components/Molecules";
import { useCode } from "@/components/providers";
import { isLevelComplete } from "@/utils/isLevelComplete";
import { parseCode } from "@/utils/parseCode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IEditorProps {
  level: number;
  initialCode: string;
}

const EditorForm = ({ level, initialCode }: IEditorProps) => {
  let colours =
    "fill-white fill-green-300 fill-red-300 fill-yellow-300 fill-purple-300";
  const { code, setCode } = useCode();
  const router = useRouter();
  const [editorCode, setEditorCode] = useState(initialCode);
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!isLevelComplete) {
      console.log("level not complete");
    } else router.push(`/levels/${level + 1}`);
    console.log("Submitted code:", code);
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
