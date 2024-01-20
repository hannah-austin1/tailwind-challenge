"use client";
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
      height="100%"
      theme="vs-dark"
      defaultLanguage="javascript"
      defaultValue={code}
      onChange={handleEditorChange}
      options={{
        automaticLayout: true,
        autoIndent: "full",
        scrollBeyondLastColumn: 1,
        scrollBeyondLastLine: false,
        wordWrap: "on",
        minimap: {
          enabled: false,
        },
      }}
    />
  );
};

export default Editor;
