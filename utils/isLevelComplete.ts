import { IStyles } from "@/common/interfaces";

type CompletedCode = (code: IStyles) => any;
const level1 = (code: IStyles) => {
  if (!code.bodyStyles || !code.wingStyles) {
    return false;
  }
  return true;
};

const levelFunctions: Record<number, CompletedCode> = {
  1: (code: IStyles) => level1(code),
};

export const isLevelComplete = (level: number, code: IStyles) => {
  const levelFunction = levelFunctions[level];

  if (levelFunction) {
    return levelFunction(code);
  } else {
    throw new Error(`Invalid level: ${level}`);
  }
};
