import clsx from "clsx";
import { FC } from "react";
import styles from "./styles.module.css";

interface Props {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  color?: "white" | "grey";
  children: React.ReactNode;
}

const Paragraph: FC<Props> = ({ size = "md", color = "white", children }) => {
  return (
    <p className={clsx(styles.p, styles[size], styles[color])}>{children}</p>
  );
};

export default Paragraph;
