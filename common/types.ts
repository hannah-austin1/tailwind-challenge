export interface ILevelNumber {
  level: string;
}

export interface IPageParams {
  params: ILevelNumber;
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
  title: string;
  description: string;
  initialClasses: IClasses;
}
