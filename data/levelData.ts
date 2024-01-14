export const levelData: Array<ILevel> = [
  {
    level: 1,
    title: "Get Colouring",
    description: "Add a colour to the wings and body to make your own bee",
    code: `
    //Add body colour here
    className="fill-white"
    // Add wing colour here
    className="fill-white"
  `,
  },
];

export interface ILevel {
  level: number;
  title: string;
  description: string;
  code: string;
}
