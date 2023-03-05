import { inter } from "@/app/fonts";
import clsx from "clsx";
import { FC } from "react";
import styles from "./styles.module.css";

interface Props {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

const Heading: FC<Props> = ({ children, level }) => {
  const Element = `h${level}` as const;

  return (
    <Element className={clsx(inter.className, styles.heading)}>
      {children}
    </Element>
  );
};

export default Heading;
