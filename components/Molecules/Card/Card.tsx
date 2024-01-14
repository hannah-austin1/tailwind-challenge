import { ReactElement } from "react";

interface ICardProps {
  children: ReactElement;
}
const Card = ({ children }: ICardProps) => {
  return <div className="aspect-square h-3/6">{children}</div>;
};

export default Card;
