"use client";
import { parseCode } from "@/utils/parseCode";
import MonacoEditor from "@monaco-editor/react";

interface ScriptEditorProps {
  code: any;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}
const Editor = ({ code, setCode }: ScriptEditorProps) => {
  const handleEditorChange = (value: string | undefined) => {
    value && setCode(value);
  };
  return (
    <MonacoEditor
      height="30vh"
      theme="vs-dark"
      defaultLanguage="javascript"
      defaultValue={code}
      onChange={handleEditorChange}
    />
  );
};

export default Editor;
