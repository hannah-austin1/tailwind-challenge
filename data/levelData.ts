export const levelData: Array<ILevel> = [
  {
    level: 1,
    title: "Get Colouring",
    description: "Add a colour to the wings and body to make your own bee",
    code: `// Note Tailwind uses tree-shaking so dynamic styles is not fully possible
// Try the following colours:
// fill-white fill-green-300 fill-red-300 fill-yellow-300 fill-purple-300
//Add body colour here
className="fill-white"
// Add wing colour here
className="fill-white"
  `,
  },
  {
    level: 2,
    title: "Move the bee",
    description: "Change the height of the bee so it fits in the hive",
    code: `// Note Tailwind uses tree-shaking so dynamic styles is not fully possible
// Try the following colours:
// fill-white fill-green-300 fill-red-300 fill-yellow-300 fill-purple-300
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
