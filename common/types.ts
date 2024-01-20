export interface ILevelProps {
  level: number;
}

export interface IClasses {
  [key: string]: string;
}

export const classKeys = ["bodyStyles", "wingStyles"];

export type ClassKeys = (typeof classKeys)[number];

type KeysAsProperties = {
  [key in ClassKeys]: string;
};

export interface IStyles extends KeysAsProperties {}
export interface ILevel {
  level: number;
  title: string;
  description: string;
  editorCode: string;
  initialClasses: IClasses;
}
