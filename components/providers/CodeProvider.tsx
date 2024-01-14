"use client";

import { ILevel, levelData } from "@/data/levelData";
import React from "react";

interface styles {
  bodyStyles: string;
  wingStyles: string;
}

interface ICodeContext {
  level: ILevel;
  setLevel: React.Dispatch<React.SetStateAction<ILevel>>;
  code: styles;
  setCode: React.Dispatch<React.SetStateAction<styles>>;
}

const CodeContext = React.createContext<ICodeContext | undefined>(undefined);

export function CodeProvider({ children }: { children: React.ReactNode }) {
  const [level, setLevel] = React.useState(levelData[0]);
  const [code, setCode] = React.useState({
    bodyStyles: "fill-white",
    wingStyles: "fill-white",
  });
  return (
    <CodeContext.Provider value={{ code, setCode, level, setLevel }}>
      {children}
    </CodeContext.Provider>
  );
}

export function useCode() {
  const context = React.useContext(CodeContext);
  if (context === undefined) {
    throw new Error("useCode must be used within a CodeProvider");
  }
  return context;
}