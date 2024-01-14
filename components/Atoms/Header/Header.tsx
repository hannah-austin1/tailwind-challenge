"use client";
import { useCode } from "@/components/providers";

const Header = (props: any) => {
  const { level } = useCode();
  return (
    <div className="flex flex-col justify-center items-center h-48 w-full bg-slate-400 text-white p-3">
      <h1 className="text-7xl">{`Level ${level.level}`}</h1>
      <p>{level.description}</p>
    </div>
  );
};

export default Header;
