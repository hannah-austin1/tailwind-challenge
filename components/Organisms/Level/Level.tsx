"use client";
import { Bee, Hexagon } from "@/components/Atoms/Icons";
import { Card } from "@/components/Molecules";
import { useCode } from "@/components/providers";

interface ICardProps {
  level?: number;
}
const Level = ({ level }: ICardProps) => {
  const { code } = useCode();
  return (
    <>
      <Card>
        <div className="grid">
          {level === 2 && (
            <div className="col-start-1 row-start-1">
              <Hexagon />
            </div>
          )}
          <div className="col-start-1 row-start-1">
            <Bee bodyStyles={code.bodyStyles} wingStyles={code.wingStyles} />
          </div>
        </div>
      </Card>
    </>
  );
};

export default Level;
