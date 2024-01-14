type LevelFunction = (code: string | undefined) => any; // Replace 'any' with the appropriate return type

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
      }
    }

    if (classNames.length !== 2) {
      return {
        bodyStyles: "fill-white",
        wingStyles: "fill-white",
      };
    }

    return {
      bodyStyles: classNames[0],
      wingStyles: classNames[1],
    };
  }
};

const levelFunctions: Record<number, LevelFunction> = {
  1: (code: string | undefined) => level1(code),
  // Add more functions for other levels if needed
};

export const parseCode = (level: number, code: string) => {
  const levelFunction = levelFunctions[level];

  if (levelFunction) {
    return levelFunction(code);
  } else {
    throw new Error(`Invalid level: ${level}`);
  }
};
