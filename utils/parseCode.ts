import { IClasses, IStyles } from "@/common/types";

type LevelFunction = (code: string | undefined) => any;
const level1 = (code: string | undefined) => {
  let colours =
    "fill-white fill-green-300 fill-red-300 fill-yellow-300 fill-purple-300";
  const coloursArray = colours.split(" ");
  const regex = /className=\"([^\"]*)\"/g;
  const classNames: any[] = [];

  if (code) {
    let match;
    while ((match = regex.exec(code)) !== null) {
      if (coloursArray.includes(match[1])) {
        classNames.push(match[1]);
      } else {
        classNames.push("fill-white");
      }
    }
    return {
      bodyStyles: classNames[0],
      wingStyles: classNames[1],
    };
  }
};

const level2 = (code: string | undefined) => {
  let colours =
    "fill-white fill-green-300 fill-red-300 fill-yellow-300 fill-purple-300";
  const coloursArray = colours.split(" ");
  const regex = /className=\"([^\"]*)\"/g;
  const classNames: any[] = [];

  if (code) {
    let match;
    while ((match = regex.exec(code)) !== null) {
      if (coloursArray.includes(match[1])) {
        classNames.push(match[1]);
      } else {
        classNames.push("fill-white");
      }
    }
    return {
      bodyStyles: classNames[0],
      wingStyles: classNames[1],
    };
  }
};

const levelFunctions: Record<number, LevelFunction> = {
  1: (code: string | undefined) => level1(code),
  2: (code: string | undefined) => level2(code),
  // Add more functions for other levels if needed
};

export const parseCode = (
  level: number,
  newCode: string,
  oldCode: IClasses
) => {
  const levelFunction = levelFunctions[level];

  if (levelFunction) {
    return levelFunction(newCode);
  } else {
    throw new Error(`Invalid level: ${level}`);
  }
};
