import { ILevel } from "@/common/types";

export const levelData: Array<ILevel> = [
  {
    title: "Get Colouring",
    description: "Add a colour to the wings and body to make your own bee",
    initialClasses: {
      bodyStyles: "fill-white",
      wingStyles: "fill-white",
    },
  },
  {
    title: "Move the bee",
    description:
      "Change the height and width of the bee so it fits in the hive",
    initialClasses: {
      height: "h-10",
      width: "w-10",
    },
  },
];
