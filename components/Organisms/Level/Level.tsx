"use client";
import { Bee } from "@/components/Atoms";
import { Card } from "@/components/Molecules";
import { useCode } from "@/components/providers";
import { parseCode } from "@/utils/parseCode";
import { ReactElement, useEffect } from "react";

interface ICardProps {
  children?: ReactElement;
}
const Level = ({ children }: ICardProps) => {
  const { code } = useCode();
  return (
    <Card>
      <Bee bodyStyles={code.bodyStyles} wingStyles={code.wingStyles} />
    </Card>
  );
};

export default Level;
