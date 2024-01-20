"use client";
import { getCookies } from "@/app/actions";
import { ClassKeys, IClasses, IStyles, classKeys } from "@/common/types";
import { Bee, Hexagon } from "@/components/Atoms/Icons";
import { Card } from "@/components/Molecules";
import { cookies } from "next/headers";
import { useEffect, useState } from "react";

interface ICardProps {
  level?: number;
  code: IClasses;
}
const Level = ({ level, code }: ICardProps) => {
  const [cookies, setCookies] = useState<IStyles>({});
  useEffect(() => {
    const getClasses = async () => {
      const allCookies = await getCookies();
      const matchingCookies = allCookies
        .filter((cookie) => classKeys.includes(cookie.name as ClassKeys))
        .reduce((acc: IStyles, cookie) => {
          acc[cookie.name as ClassKeys] = cookie.value;
          return acc;
        }, {} as IStyles);
      setCookies(matchingCookies);
    };

    getClasses();
  }, []);

  console.log("cc", cookies);

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
            <Bee
              bodyStyles={cookies.bodyStyles || code.bodyStyles}
              wingStyles={cookies.wingStyles || code.wingStyles}
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default Level;
