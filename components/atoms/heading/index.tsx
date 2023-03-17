import { inter } from "@/app/fonts";
import clsx from "clsx";
import { FC } from "react";
import styles from "./styles.module.css";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

const Heading: FC<Props> = ({ children, level, className, ...props }) => {
  const Element = `h${level}` as const;

  return (
    <Element
      className={clsx(inter.className, styles.heading, className)}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Heading;
