interface IHeaderProps {
  level: number;
  title: string;
  description: string;
}

const Header = ({ level, title, description }: IHeaderProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-48 w-full bg-slate-400 text-white p-3">
      <h1 className="text-7xl">{`Level ${level}`}</h1>
      <h2 className="text-3xl">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Header;
