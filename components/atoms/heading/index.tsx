import { inter } from "@/app/fonts";
import { FC } from "react";

interface Props {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

const Heading: FC<Props> = ({ children, level }) => {
  const Element = `h${level}` as const;

  return <Element className={inter.className}>{children}</Element>;
};

export default Heading;
