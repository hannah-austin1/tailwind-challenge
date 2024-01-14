"use client";
import { Editor } from "@/components/Molecules";
import { useCode } from "@/components/providers";
import { parseCode } from "@/utils/parseCode";
import { useEffect, useState } from "react";

const EditorForm = (props: any) => {
  const { code, setCode } = useCode();
  const [editorCode, setEditorCode] = useState(`
  //Add body colour here
  className="fill-white"
  // Add wing colour here
  className="fill-white"
`);
  //   let colours = "fill-green-300 fill-red-300 fill-yellow-300 fill-purple-300";
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Submitted code:", code);
  };
  useEffect(() => {
    setCode(parseCode(1, editorCode));
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
